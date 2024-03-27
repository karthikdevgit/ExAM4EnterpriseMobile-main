import { Injectable } from '@angular/core';
import { LaunchServiceService } from './launch-service.service';
import { error, promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class GlobalParamService {
  public trackparamFormObjRedirect: any;
  public static istreeViewEnabledSV:false;
  public isSupportValidation:any;
  public isSupportRecordtype:any;
  public isSupportAMViewDetailsAndschemaTemplatecustomlabel:any;
  public isSupportSchemaFieldset:any;
  public currentSchemaViewDetail:any;
  public schemaViewData:any;
  public availableSchemaViews:any;

  constructor() { }
 
  utilMethodForFunctionalityMap(functionKey): Promise<any> {
    console.log('utilMethodForFunctionalityMap',functionKey);
    return new Promise(async (resolve, reject) => {
    

    var appversion = LaunchServiceService.MobileAppVersionDetailObj;
    console.log('appversion',appversion);
    if(appversion 
        && appversion.ExAM__Functionality_Map__c 
        && Object.keys(appversion.ExAM__Functionality_Map__c).length > 0  
        && appversion.ExAM__Functionality_Map__c[functionKey]
        && appversion.ExAM__Functionality_Map__c[functionKey] == 'true'){
          console.log('have appversion',functionKey);

          resolve(true);
    }else{
      console.log('else',functionKey);

      resolve(null);
    }

  });
 }
}
