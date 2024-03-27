#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "CDVPlugin+SFAdditions.h"
#import "SFAccountManagerPlugin.h"
#import "SFForcePlugin.h"
#import "SFHybridViewConfig.h"
#import "SFHybridViewController.h"
#import "SFLocalhostSubstitutionCache.h"
#import "SFMobileSyncPlugin.h"
#import "SFNetworkPlugin.h"
#import "SFSDKHybridLogger.h"
#import "SFSDKInfoPlugin.h"
#import "SFSmartStorePlugin.h"
#import "SalesforceHybridSDK.h"
#import "SalesforceHybridSDKManager.h"
#import "SalesforceOAuthPlugin.h"

FOUNDATION_EXPORT double SalesforceHybridSDKVersionNumber;
FOUNDATION_EXPORT const unsigned char SalesforceHybridSDKVersionString[];

