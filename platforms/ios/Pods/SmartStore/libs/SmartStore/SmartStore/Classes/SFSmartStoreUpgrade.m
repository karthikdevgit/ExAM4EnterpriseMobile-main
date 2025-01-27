/*
 Copyright (c) 2014-present, salesforce.com, inc. All rights reserved.
 
 Redistribution and use of this software in source and binary forms, with or without modification,
 are permitted provided that the following conditions are met:
 * Redistributions of source code must retain the above copyright notice, this list of conditions
 and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of
 conditions and the following disclaimer in the documentation and/or other materials provided
 with the distribution.
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to
 endorse or promote products derived from this software without specific prior written
 permission of salesforce.com, inc.
 
 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY
 WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#import "SFSmartStoreUpgrade+Internal.h"
#import "SFSmartStore+Internal.h"
#import "SFSmartStoreUtils.h"
#import "SFSmartStoreDatabaseManager+Internal.h"
#import <SalesforceSDKCore/SFUserAccountManager.h>
#import <SalesforceSDKCore/UIDevice+SFHardware.h>
#import <SalesforceSDKCore/SFCrypto.h>
#import <SalesforceSDKCore/NSString+SFAdditions.h>
#import <SalesforceSDKCore/NSData+SFAdditions.h>
#import <SalesforceSDKCore/SFPasscodeManager.h>
#import <SalesforceSDKCommon/NSUserDefaults+SFAdditions.h>
#import <SalesforceSDKCommon/SFSDKDataSharinghelper.h>
#import "FMDatabase.h"

static const char *const_key = "H347ergher/32hhj5%hff?Dn@21o";
static NSString * const kLegacyDefaultPasscodeStoresKey = @"com.salesforce.smartstore.defaultPasscodeStores";
static NSString * const kLegacyDefaultEncryptionTypeKey = @"com.salesforce.smartstore.defaultEncryptionType";
static NSString * const kKeyStoreEncryptedStoresKey = @"com.salesforce.smartstore.keyStoreEncryptedStores";
static NSString * const kKeyStoreHasExternalSalt = @"com.salesforce.smartstore.external.hasExternalSalt";

@implementation SFSmartStoreUpgrade

+ (void)updateStoreLocations
{
    [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"Migrating stores from legacy locations, where necessary."];
    NSArray *allStoreNames = [SFSmartStoreUpgrade legacyAllStoreNames];
    if ([allStoreNames count] == 0) {
        [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"No legacy stores to migrate."];
        return;
    }
    [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"Number of stores to migrate: %d", [allStoreNames count]];
    for (NSString *storeName in allStoreNames) {
        BOOL migratedStore = [SFSmartStoreUpgrade updateStoreLocationForStore:storeName];
        if (migratedStore) {
            [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"Successfully migrated store '%@'", storeName];
        }
    }
    NSFileManager *manager = [NSFileManager defaultManager];
    [manager removeItemAtPath:[SFSmartStoreUpgrade legacyRootStoreDirectory] error:nil];
}

+ (BOOL)updateStoreLocationForStore:(NSString *)storeName
{
    NSString *origStoreDirPath = [SFSmartStoreUpgrade legacyStoreDirectoryForStoreName:storeName];
    NSString *origStoreFilePath = [SFSmartStoreUpgrade legacyFullDbFilePathForStoreName:storeName];
    NSString *newStoreDirPath = [[SFSmartStoreDatabaseManager sharedManager] storeDirectoryForStoreName:storeName];
    NSString *newStoreFilePath = [[SFSmartStoreDatabaseManager sharedManager] fullDbFilePathForStoreName:storeName];

    // No store in the original location?  Nothing to do.
    NSFileManager *manager = [NSFileManager defaultManager];
    if (![manager fileExistsAtPath:origStoreFilePath]) {
        [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"File for store '%@' does not exist at legacy path.  Nothing to do.", storeName];
        [manager removeItemAtPath:origStoreDirPath error:nil];
        return YES;
    }
    
    // Create the new store directory.
    NSError *fileIoError = nil;
    BOOL createdNewStoreDir = [manager createDirectoryAtPath:newStoreDirPath withIntermediateDirectories:YES attributes:nil error:&fileIoError];
    if (!createdNewStoreDir) {
        [SFSDKSmartStoreLogger e:[SFSmartStoreUpgrade class] format:@"Error creating new store directory for store '%@': %@", storeName, [fileIoError localizedDescription]];
        return NO;
    }
    
    // Move the store from the old directory to the new one.
    BOOL movedStore = [manager moveItemAtPath:origStoreFilePath toPath:newStoreFilePath error:&fileIoError];
    if (!movedStore) {
        [SFSDKSmartStoreLogger e:[SFSmartStoreUpgrade class] format:@"Error moving store '%@' to new directory: %@", storeName, [fileIoError localizedDescription]];
        return NO;
    }
    
    // Remove the old store directory.
    [manager removeItemAtPath:origStoreDirPath error:nil];
    return YES;
}

+ (void)updateEncryption
{
    [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"Updating encryption method for all stores, where necessary."];
    NSArray *allStoreNames = [[SFSmartStoreDatabaseManager sharedManager] allStoreNames];
    [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"Number of stores to update: %d", [allStoreNames count]];
    [SFSmartStoreUpgrade updateEncryptionUserKeys];
    
    // Encryption updates will only apply to the current user.  Multi-user comes concurrently with these encryption updates.
    SFUserAccount *currentUser = [SFUserAccountManager sharedInstance].currentUser;
    for (NSString *storeName in allStoreNames) {
        if (![SFSmartStoreUpgrade updateEncryptionForStore:storeName user:currentUser]) {
            [SFSDKSmartStoreLogger e:[SFSmartStoreUpgrade class] format:@"Could not update encryption for '%@', which means the data is no longer accessible. Removing store.", storeName];
            [SFSmartStore removeSharedStoreWithName:storeName forUser:currentUser];
        }
    }
}

+ (void)updateEncryptionUserKeys {
    // The userID length changed in 8.2, update the user key used to track key store encryption
    NSUserDefaults *userDefaults = [NSUserDefaults msdkUserDefaults];
    NSMutableDictionary *keyStoreDict = [[userDefaults objectForKey:kKeyStoreEncryptedStoresKey] mutableCopy];
    BOOL updateDictionary = NO;
    for (NSString *key in [keyStoreDict allKeys]) {
        NSString *legacyUserId = [SFSmartStoreUpgrade legacyUserIdFromKey:key];
        if (legacyUserId){
            // Create new key with 18 character ID
            NSString *newUserId = [legacyUserId entityId18];
            NSString *newKey = [key stringByReplacingOccurrencesOfString:legacyUserId withString:newUserId];

            // Move value from old key to new key
            NSDictionary *userKeyStoreDict = keyStoreDict[key];
            keyStoreDict[newKey] = userKeyStoreDict;
            [keyStoreDict removeObjectForKey:key];
            updateDictionary = YES;
        }
    }

    if (updateDictionary) {
        [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"Updating encrypted key stores dictionary to use 18-character user ID"];
        [userDefaults setObject:keyStoreDict forKey:kKeyStoreEncryptedStoresKey];
        [userDefaults synchronize];
    }
}

+ (NSString *)legacyUserIdFromKey:(NSString *)key {
    NSString *pattern = @"00D[a-zA-Z0-9]{15}-(005[a-zA-Z0-9]{12})-"; // OrgId-UserId-
    NSRegularExpression *userIdExpression = [NSRegularExpression regularExpressionWithPattern:pattern options:0 error:nil];
    NSTextCheckingResult *match = [userIdExpression firstMatchInString:key options:0 range:NSMakeRange(0, key.length)];
    if (match) {
        NSRange matchRange = [match rangeAtIndex:1];
        return [key substringWithRange:matchRange];
    }
    return nil;
}

+ (void)updateEncryptionSalt
{
    
    if ( ![SFSDKDatasharingHelper sharedInstance].appGroupEnabled || [[NSUserDefaults msdkUserDefaults] boolForKey:kKeyStoreHasExternalSalt]) {
        //already migrated or does not need Externalizing of Salt
        return;
    }
    
    [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"Updating encryption salt for stores in shared mode."];
    NSArray *allStoreNames = [[SFSmartStoreDatabaseManager sharedManager] allStoreNames];
    [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"Number of stores to update: %d", [allStoreNames count]];
    SFUserAccount *currentUser = [SFUserAccountManager sharedInstance].currentUser;
    for (NSString *storeName in allStoreNames) {
        if (![SFSmartStoreUpgrade updateSaltForStore:storeName user:currentUser]) {
             [SFSDKSmartStoreLogger e:[SFSmartStoreUpgrade class] format:@"Failed to upgrade store for sharing mode: %@", storeName];
        }
    }
}

+ (BOOL)updateSaltForStore:(NSString *)storeName user:(SFUserAccount *)user {
    
    SFSmartStoreDatabaseManager *databaseManager = [SFSmartStoreDatabaseManager sharedManagerForUser:user];
    if (![databaseManager persistentStoreExists:storeName]) {
        //NEW Database no need for External Salt migration
        [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"Store '%@' does not exist on the filesystem. Skipping Externalized Salt based migration is not required. ", storeName];
        return NO;
    }
    
    NSError *openDbError = nil;
    
    //get Key and new Salt
    NSString *key = [SFSmartStore encKey];
    NSString *newSalt = [SFSmartStore salt];
    
    FMDatabase *originalEncyptedDB = [databaseManager openStoreDatabaseWithName:storeName
                                                                            key:key
                                                                           salt:nil
                                                                          error:&openDbError];
    if (originalEncyptedDB == nil || openDbError != nil) {
        [SFSDKSmartStoreLogger e:[SFSmartStoreUpgrade class] format:@"Error opening store '%@' to update encryption: %@", storeName, [openDbError localizedDescription]];
        return NO;
    } else if (![[databaseManager class] verifyDatabaseAccess:originalEncyptedDB error:&openDbError]) {
        [SFSDKSmartStoreLogger e:[SFSmartStoreUpgrade class] format:@"Error reading the content of store '%@' during externalized salt encryption upgrade: %@", storeName, [openDbError  localizedDescription]];
        [originalEncyptedDB close];
        return NO;
    }
    
    if ([key length] > 0) {
        // Unencrypt with previous key.
        NSString *origDatabasePath = originalEncyptedDB.databasePath;
        
        NSString *storePath = [databaseManager fullDbFilePathForStoreName:storeName];
        NSString *backupStorePath = [NSString stringWithFormat:@"%@_%@",storePath,@"backup"];
        NSError *backupError = nil;
        
        // backup and attempt to copy the reencryopted db with the new key + salt
        NSFileManager *fileManager = [NSFileManager defaultManager];
        NSURL *origDatabaseURL = [NSURL fileURLWithPath:origDatabasePath isDirectory:NO];
        NSURL *backupDatabaseURL = [NSURL fileURLWithPath:backupStorePath isDirectory:NO];
        
        if ([fileManager fileExistsAtPath:backupStorePath]) {
            [fileManager removeItemAtPath:backupStorePath error:nil];
        }
        
        [fileManager copyItemAtURL:origDatabaseURL toURL:backupDatabaseURL error:&backupError];
        if (backupError) {
            [SFSDKSmartStoreLogger e:[SFSmartStoreUpgrade class] format:@"Failed to backup db from '%@' to '%@'", origDatabaseURL, backupDatabaseURL];
            return NO;
        }
        
        [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"Migrating db, did backup db first from '%@' to '%@'", origDatabaseURL, backupDatabaseURL];
        NSError *decryptDbError = nil;
        
        //lets decryptDB
        FMDatabase *decryptedDB = [SFSmartStoreDatabaseManager encryptOrUnencryptDb:originalEncyptedDB name:storeName  path:originalEncyptedDB.databasePath  oldKey:key newKey:nil salt:nil error:&decryptDbError];
        if (decryptDbError || ![SFSmartStoreDatabaseManager verifyDatabaseAccess:decryptedDB error:&decryptDbError] ) {
            NSString *errorDesc = [NSString stringWithFormat:@"Migrating db, Failed to decrypt  DB %@:", [decryptedDB lastErrorMessage]];
            [SFSDKSmartStoreLogger e:[SFSmartStoreUpgrade class] format:@"Migrating db '%@', %@", storePath, errorDesc];
            [self restoreBackupTo:origDatabaseURL from:backupDatabaseURL];
            return NO;
        }
        
        // Now encrypt with new SALT + KEY
        NSError *reEncryptDbError = nil;
        FMDatabase *reEncryptedDB = [SFSmartStoreDatabaseManager encryptOrUnencryptDb:decryptedDB name:storeName  path:decryptedDB.databasePath  oldKey:@"" newKey:key salt:newSalt error:&reEncryptDbError];
        if (!reEncryptedDB || reEncryptDbError) {
            NSString *errorDesc = [NSString stringWithFormat:@"Migrating db, Failed to reencrypt DB %@:", [reEncryptedDB lastErrorMessage]];
            [SFSDKSmartStoreLogger e:[SFSmartStoreUpgrade class] format:@"Migrating db '%@', %@", storePath, errorDesc];
            [fileManager removeItemAtPath:decryptedDB.databasePath error:nil];
            [self restoreBackupTo:origDatabaseURL from:backupDatabaseURL];
            return NO;
        }
        
        if (![SFSmartStoreDatabaseManager verifyDatabaseAccess:reEncryptedDB error:&decryptDbError]) {
            NSString *errorDesc = [NSString stringWithFormat:@"Failed to verify reencrypted  DB %@:", [decryptedDB lastErrorMessage]];
            [SFSDKSmartStoreLogger e:[SFSmartStoreUpgrade class] format:@"Migrating db at '%@', %@", storePath,errorDesc];
            [fileManager removeItemAtPath:reEncryptedDB.databasePath error:nil];
            [self restoreBackupTo:origDatabaseURL from:backupDatabaseURL];
            return NO;
        }
        [reEncryptedDB close];
        [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"Migrating db '%@',  Migration complete.", storePath];
        [fileManager removeItemAtPath:backupStorePath error:nil];
        [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"Migrating db '%@',  Removed backup.", backupStorePath];
        [[NSUserDefaults msdkUserDefaults] setBool:YES forKey:kKeyStoreHasExternalSalt];
        return YES;
    }
    return NO;
}

+ (BOOL)restoreBackupTo:(NSURL *)origDatabaseURL from:(NSURL *)backupDatabaseURL {
    BOOL success = NO;
    NSFileManager *fileManager = [NSFileManager defaultManager];
    NSError *restoreBackupError = nil;
    [fileManager removeItemAtPath:origDatabaseURL.path error:nil];
    [fileManager copyItemAtURL:backupDatabaseURL toURL:origDatabaseURL error:&restoreBackupError];
    if (restoreBackupError) {
        [SFSDKSmartStoreLogger e:[SFSmartStoreUpgrade class] format:@"Migrating db at '%@', Could not restore  from backup.", origDatabaseURL];
    } else {
        success = YES;
        [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"Migrating db at '%@', Recovered from backup.", origDatabaseURL];
    }
    return success;
}

+ (BOOL)updateEncryptionForStore:(NSString *)storeName user:(SFUserAccount *)user
{
    if (![[SFSmartStoreDatabaseManager sharedManagerForUser:user] persistentStoreExists:storeName]) {
        [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"Store '%@' does not exist on the filesystem.  Skipping.", storeName];
        return YES;
    } else if ([SFSmartStoreUpgrade usesKeyStoreEncryptionForUser:user store:storeName]) {
        [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"Store '%@' is already using the current encryption scheme.  Skipping.", storeName];
        return YES;
    }
    
    // All SmartStore encryption key management is now handled by SFKeyStoreManager.  We will convert
    // each store to use that infrastructure, in this method.
    // First, get the current encryption key for the store.
    NSString *origKey;
    NSString *legacyPasscodeKey = [SFSmartStoreUpgrade legacyEncKey];
    if ([legacyPasscodeKey length] > 0) {
        // Uses the passcode-based encryption key.
        [SFSDKSmartStoreLogger d:[SFSmartStoreUpgrade class] format:@"Store '%@' currently using passcode-based encryption.", storeName];
        origKey = legacyPasscodeKey;
    } else if ([SFSmartStoreUpgrade usesLegacyDefaultKey:storeName]) {
        // Uses the old default key, for orgs without passcodes.
        SFSmartStoreLegacyDefaultEncryptionType encType = [SFSmartStoreUpgrade legacyDefaultEncryptionTypeForStore:storeName];
        switch (encType) {
            case SFSmartStoreDefaultEncryptionTypeNone:
            case SFSmartStoreDefaultEncryptionTypeMac:
                [SFSDKSmartStoreLogger d:[SFSmartStoreUpgrade class] format:@"Store '%@' currently using default encryption key based on MAC address.", storeName];
                origKey = [SFSmartStoreUpgrade legacyDefaultKeyMac];
                break;
            case SFSmartStoreDefaultEncryptionTypeIdForVendor:
                [SFSDKSmartStoreLogger d:[SFSmartStoreUpgrade class] format:@"Store '%@' currently using default encryption key based on vendor identifier.", storeName];
                origKey = [SFSmartStoreUpgrade legacyDefaultKeyIdForVendor];
                break;
            case SFSmartStoreDefaultEncryptionTypeBaseAppId:
                [SFSDKSmartStoreLogger d:[SFSmartStoreUpgrade class] format:@"Store '%@' currently using default encryption key based on generated app identifier.", storeName];
                origKey = [SFSmartStoreUpgrade legacyDefaultKeyBaseAppId];
                break;
            default:
                [SFSDKSmartStoreLogger e:[SFSmartStoreUpgrade class] format:@"Unknown encryption type '%d'.  Cannot upgrade encryption for store '%@'.", encType, storeName];
                return NO;
        }
    } else {

        // No encryption.
        [SFSDKSmartStoreLogger d:[SFSmartStoreUpgrade class] format:@"Store '%@' currently does not employ encryption.", storeName];
        origKey = @"";
    }
    
    // New key will be the keystore-managed key.
    NSString *newKey = [SFSmartStore encKey];
    NSString *salt = [SFSmartStore salt];
    BOOL encryptionUpgradeSucceeded = [SFSmartStoreUpgrade changeEncryptionForStore:storeName user:user oldKey:origKey newKey:newKey salt:salt];
    if (encryptionUpgradeSucceeded) {
        [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"Encryption update succeeded for store '%@'.", storeName];
    } else {
        [SFSDKSmartStoreLogger e:[SFSmartStoreUpgrade class] format:@"Encryption update did NOT succeed for store '%@'.", storeName];
    }
    [SFSmartStoreUpgrade setUsesLegacyDefaultKey:!encryptionUpgradeSucceeded forStore:storeName];
    [SFSmartStoreUpgrade setUsesKeyStoreEncryption:encryptionUpgradeSucceeded forUser:user store:storeName];
    return encryptionUpgradeSucceeded;
}

+ (BOOL)changeEncryptionForStore:(NSString *)storeName user:(SFUserAccount *)user oldKey:(NSString *)oldKey newKey:(NSString *)newKey salt:(NSString *)salt
{
    NSString * const kEncryptionChangeErrorMessage = @"Error changing the encryption key for store '%@': %@";
    NSString * const kNewEncryptionErrorMessage = @"Error encrypting the unencrypted store '%@': %@";
    NSString * const kDecryptionErrorMessage = @"Error decrypting the encrypted store '%@': %@";
    
    NSError *openDbError = nil;
    NSError *verifyDbAccessError = nil;
    SFSmartStoreDatabaseManager *dbMgr = [SFSmartStoreDatabaseManager sharedManagerForUser:user];
    
    FMDatabase *db = [dbMgr openStoreDatabaseWithName:storeName
                                                  key:oldKey
                                                 salt:nil
                                                error:&openDbError];
    if (db == nil || openDbError != nil) {
        [SFSDKSmartStoreLogger e:[SFSmartStoreUpgrade class] format:@"Error opening store '%@' to update encryption: %@", storeName, [openDbError localizedDescription]];
        return NO;
    } else if (![[dbMgr class] verifyDatabaseAccess:db error:&verifyDbAccessError]) {
        [SFSDKSmartStoreLogger e:[SFSmartStoreUpgrade class] format:@"Error reading the content of store '%@' during encryption upgrade: %@", storeName, [verifyDbAccessError localizedDescription]];
        [db close];
        return NO;
    }
    
    if ([oldKey length] == 0) {
        // Going from unencrypted to encrypted.
        NSError *encryptDbError = nil;
        db = [dbMgr encryptDb:db name:storeName key:newKey salt:salt error:&encryptDbError];
        [db close];
        if (encryptDbError != nil) {
            [SFSDKSmartStoreLogger e:[SFSmartStoreUpgrade class] format:kNewEncryptionErrorMessage, storeName, [encryptDbError localizedDescription]];
            return NO;
        } else {
            return YES;
        }
    } else if ([newKey length] == 0) {
        // Going from encrypted to unencrypted (unlikely, but okay).
        NSError *decryptDbError = nil;
        db = [dbMgr unencryptDb:db name:storeName oldKey:oldKey salt:salt error:&decryptDbError];
        [db close];
        if (decryptDbError != nil) {
            [SFSDKSmartStoreLogger e:[SFSmartStoreUpgrade class] format:kDecryptionErrorMessage, storeName, [decryptDbError localizedDescription]];
            return NO;
        } else {
            return YES;
        }
    } else {
        // Going from encrypted to encrypted.
        BOOL rekeyResult = [db rekey:newKey];
        [db close];
        if (!rekeyResult) {
            [SFSDKSmartStoreLogger e:[SFSmartStoreUpgrade class] format:kEncryptionChangeErrorMessage, storeName, [db lastErrorMessage]];
            return NO;
        } else {
            return YES;
        }
    }
}

+ (BOOL)usesKeyStoreEncryptionForUser:(SFUserAccount *)user store:(NSString *)storeName
{
    NSUserDefaults *userDefaults = [NSUserDefaults msdkUserDefaults];
    NSDictionary *keyStoreDict = [userDefaults objectForKey:kKeyStoreEncryptedStoresKey];
    
    if (keyStoreDict == nil)
        return NO;
    
    NSString *userKey = [SFSmartStoreUtils userKeyForUser:user];
    NSDictionary *userKeyStoreDict = keyStoreDict[userKey];
    if (userKeyStoreDict == nil)
        return NO;
    
    NSNumber *usesKeyStoreNum = userKeyStoreDict[storeName];
    if (usesKeyStoreNum == nil)
        return NO;
    else
        return [usesKeyStoreNum boolValue];
}

+ (void)setUsesKeyStoreEncryption:(BOOL)usesKeyStoreEncryption forUser:(SFUserAccount *)user store:(NSString *)storeName
{
    NSUserDefaults *userDefaults = [NSUserDefaults msdkUserDefaults];
    NSDictionary *keyStoreDict = [userDefaults objectForKey:kKeyStoreEncryptedStoresKey];
    NSMutableDictionary *newDict;
    if (keyStoreDict == nil) {
        newDict = [NSMutableDictionary dictionary];
    } else {
        newDict = [NSMutableDictionary dictionaryWithDictionary:keyStoreDict];
    }
    
    NSString *userKey = [SFSmartStoreUtils userKeyForUser:user];
    NSDictionary *userDict = newDict[userKey];
    NSMutableDictionary *newUserDict;
    if (userDict == nil) {
        newUserDict = [NSMutableDictionary dictionary];
    } else {
        newUserDict = [NSMutableDictionary dictionaryWithDictionary:userDict];
    }
    
    NSNumber *usesDefaultNum = @(usesKeyStoreEncryption);
    newUserDict[storeName] = usesDefaultNum;
    if (userKey) {
        newDict[userKey] = newUserDict;
    }
    [userDefaults setObject:newDict forKey:kKeyStoreEncryptedStoresKey];
    [userDefaults synchronize];
}

#pragma mark - Legacy SmartStore filesystem functionality

+ (NSArray *)legacyAllStoreNames
{
    NSString *rootDir = [SFSmartStoreUpgrade legacyRootStoreDirectory];
    NSError *getStoresError = nil;
    NSFileManager *manager = [NSFileManager defaultManager];
    
    // First see if the legacy root folder exists.
    BOOL rootDirIsDirectory = NO;
    BOOL rootDirExists = [manager fileExistsAtPath:rootDir isDirectory:&rootDirIsDirectory];
    if (!rootDirExists || !rootDirIsDirectory) {
        [SFSDKSmartStoreLogger i:[SFSmartStoreUpgrade class] format:@"Legacy SmartStore directory does not exist. Nothing to do."];
        return nil;
    }
    
    // Get the folder paths of the legacy stores.
    NSArray *storesDirNames = [manager contentsOfDirectoryAtPath:rootDir error:&getStoresError];
    if (getStoresError) {
        [SFSDKSmartStoreLogger w:[SFSmartStoreUpgrade class] format:@"Problem retrieving store names from legacy SmartStore directory: %@.  Will not continue.", [getStoresError localizedDescription]];
        return nil;
    }
    NSMutableArray *allStoreNames = [NSMutableArray array];
    for (NSString *storesDirName in storesDirNames) {
        if ([SFSmartStoreUpgrade legacyPersistentStoreExists:storesDirName])
            [allStoreNames addObject:storesDirName];
    }
    return allStoreNames;
}

+ (BOOL)legacyPersistentStoreExists:(NSString *)storeName
{
    NSString *fullDbFilePath = [SFSmartStoreUpgrade legacyFullDbFilePathForStoreName:storeName];
    NSFileManager *manager = [NSFileManager defaultManager];
    BOOL result = [manager fileExistsAtPath:fullDbFilePath];
    return result;
}

+ (NSString *)legacyFullDbFilePathForStoreName:(NSString *)storeName
{
    NSString *storePath = [SFSmartStoreUpgrade legacyStoreDirectoryForStoreName:storeName];
    NSString *fullDbFilePath = [storePath stringByAppendingPathComponent:kStoreDbFileName];
    return fullDbFilePath;
}

+ (NSString *)legacyStoreDirectoryForStoreName:(NSString *)storeName
{
    NSString *storesDir = [SFSmartStoreUpgrade legacyRootStoreDirectory];
    NSString *result = [storesDir stringByAppendingPathComponent:storeName];
    
    return result;
}

+ (NSString *)legacyRootStoreDirectory
{
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *documentsDirectory = paths[0];
    NSString *storesDir = [documentsDirectory stringByAppendingPathComponent:kStoresDirectory];
    
    return storesDir;
}

#pragma mark - Legacy encryption key functionality

+ (NSString *)legacyEncKey
{
    NSString *key = [SFPasscodeManager sharedManager].encryptionKey;
    return (key == nil ? @"" : key);
}

+ (BOOL)usesLegacyDefaultKey:(NSString *)storeName {
    NSUserDefaults *userDefaults = [NSUserDefaults msdkUserDefaults];
    NSDictionary *defaultPasscodeDict = [userDefaults objectForKey:kLegacyDefaultPasscodeStoresKey];
    
    if (defaultPasscodeDict == nil)
        return NO;
    
    NSNumber *usesDefaultKeyNum = defaultPasscodeDict[storeName];
    if (usesDefaultKeyNum == nil)
        return NO;
    else
        return [usesDefaultKeyNum boolValue];
}

+ (void)setUsesLegacyDefaultKey:(BOOL)usesDefault forStore:(NSString *)storeName {
    NSUserDefaults *userDefaults = [NSUserDefaults msdkUserDefaults];
    NSDictionary *defaultPasscodeDict = [userDefaults objectForKey:kLegacyDefaultPasscodeStoresKey];
    NSMutableDictionary *newDict;
    if (defaultPasscodeDict == nil)
        newDict = [NSMutableDictionary dictionary];
    else
        newDict = [NSMutableDictionary dictionaryWithDictionary:defaultPasscodeDict];
    
    NSNumber *usesDefaultNum = @(usesDefault);
    newDict[storeName] = usesDefaultNum;
    [userDefaults setObject:newDict forKey:kLegacyDefaultPasscodeStoresKey];
    [userDefaults synchronize];
    
    // Update the default encryption type too.
    if (usesDefault)
        [SFSmartStoreUpgrade setLegacyDefaultEncryptionType:SFSmartStoreDefaultEncryptionTypeBaseAppId forStore:storeName];
    else
        [SFSmartStoreUpgrade setLegacyDefaultEncryptionType:SFSmartStoreDefaultEncryptionTypeNone forStore:storeName];
}

+ (void)setLegacyDefaultEncryptionType:(SFSmartStoreLegacyDefaultEncryptionType)encType forStore:(NSString *)storeName
{
    NSUserDefaults *userDefaults = [NSUserDefaults msdkUserDefaults];
    NSDictionary *defaultEncTypeDict = [userDefaults objectForKey:kLegacyDefaultEncryptionTypeKey];
    NSMutableDictionary *newDict;
    if (defaultEncTypeDict == nil)
        newDict = [NSMutableDictionary dictionary];
    else
        newDict = [NSMutableDictionary dictionaryWithDictionary:defaultEncTypeDict];
    
    NSNumber *encTypeNum = [NSNumber numberWithUnsignedInteger:encType];
    newDict[storeName] = encTypeNum;
    [userDefaults setObject:newDict forKey:kLegacyDefaultEncryptionTypeKey];
    [userDefaults synchronize];
}

+ (SFSmartStoreLegacyDefaultEncryptionType)legacyDefaultEncryptionTypeForStore:(NSString *)storeName
{
    NSDictionary *encTypeDict = [[NSUserDefaults msdkUserDefaults] objectForKey:kLegacyDefaultEncryptionTypeKey];
    if (encTypeDict == nil) return SFSmartStoreDefaultEncryptionTypeMac;
    NSNumber *encTypeNum = encTypeDict[storeName];
    if (encTypeNum == nil) return SFSmartStoreDefaultEncryptionTypeMac;
    return [encTypeNum unsignedIntegerValue];
}

+ (NSString *)legacyDefaultKey
{
    return [SFSmartStoreUpgrade legacyDefaultKeyBaseAppId];
}

+ (NSString *)legacyDefaultKeyIdForVendor
{
    NSString *idForVendor = [[[UIDevice currentDevice] identifierForVendor] UUIDString];
    return [SFSmartStoreUpgrade legacyDefaultKeyWithSeed:idForVendor];
}

+ (NSString *)legacyDefaultKeyMac
{
    NSString *macAddress = [[UIDevice currentDevice] macaddress];
    return [SFSmartStoreUpgrade legacyDefaultKeyWithSeed:macAddress];
}

+ (NSString *)legacyDefaultKeyBaseAppId
{
    NSString *baseAppId = [SFCrypto baseAppIdentifier];
    return [SFSmartStoreUpgrade legacyDefaultKeyWithSeed:baseAppId];
}

+ (NSString *)legacyDefaultKeyWithSeed:(NSString *)seed
{
    NSString *constKey = [[NSString alloc] initWithBytes:const_key length:strlen(const_key) encoding:NSUTF8StringEncoding];
    NSString *strSecret = [seed stringByAppendingString:constKey];
    return [[strSecret sha256] base64Encode];
}

@end
