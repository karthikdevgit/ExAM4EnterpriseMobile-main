import { Injectable,NgZone} from '@angular/core';
import { Network } from '@ionic-native/network/ngx'
import {ForceApiService} from '../service/force-api.service';
import { error, promise } from 'protractor';
import * as _ from 'underscore';
import { Router } from '@angular/router';
import { resolve } from 'dns';
import { LoaderService } from '../service/loader.service';

declare var window: any;
@Injectable({
  providedIn: 'root'
})
export class FlscheckService {

  constructor() { }

  getFLSDetail(ATId): Promise<any> {
    return new Promise((resolve, reject) => {

      var _this = this,objectNameList = [];

      var ATQuerySpec = window.navigator.smartstore.buildExactQuerySpec('ATcongId', ATId, 1);
      window.navigator.smartstore.querySoup("AssessmentTrackerData", ATQuerySpec, function(ATobjlist) {
       
        if(ATobjlist.totalEntries){
          if(ATobjlist.currentPageOrderedEntries &&ATobjlist.currentPageOrderedEntries[0] &&  ATobjlist.currentPageOrderedEntries[0].valueDetail ){
            objectNameList = ATobjlist.currentPageOrderedEntries[0].valueDetail.ObjectNameList;

            _this.getFlsForObjectFields(0,objectNameList,{},{}).then(function(data) {
              resolve(data);
            }).catch(function(error){
             reject();
            }); 
          }
        }
      });
    });
  }

  getFlsForObjectFields(index,objectNameList,fieldwithDetail, objectwithlabel): Promise <any> {

    var _this = this;

    return new Promise((resolve,reject) => {

      if(index < objectNameList.length){

        var DescribeQuerySpec = window.navigator.smartstore.buildExactQuerySpec('objectName',objectNameList[index], 1);
        window.navigator.smartstore.querySoup("ObjectDescribe", DescribeQuerySpec, function(describedata) {
        
          if(describedata.totalEntries){
            if(describedata.currentPageOrderedEntries
              && describedata.currentPageOrderedEntries[0]
              && describedata.currentPageOrderedEntries[0].valueDetail){
              _.each(describedata.currentPageOrderedEntries[0].valueDetail.fields, function (coldata, colkey) {
               
                if(fieldwithDetail.hasOwnProperty(objectNameList[index])){
                  fieldwithDetail[objectNameList[index]][coldata['name']] = coldata;
                }else{
                  fieldwithDetail[objectNameList[index]] = {[coldata['name']]:coldata};
                }                
              });

              if(objectwithlabel.hasOwnProperty(objectNameList[index])){
                objectwithlabel[objectNameList[index]] = describedata.currentPageOrderedEntries[0].valueDetail;
              }else{
                objectwithlabel[objectNameList[index]] = describedata.currentPageOrderedEntries[0].valueDetail;
              }  
            }
          }
          _this.getFlsForObjectFields(++index, objectNameList,fieldwithDetail,objectwithlabel).then(function(){
            resolve({'objectwithlabel':objectwithlabel,'fieldwithDetail':fieldwithDetail});
          },function(error){
            reject();
          });
        });
      } else{
        resolve({'objectwithlabel':objectwithlabel,'fieldwithDetail':fieldwithDetail});
      }
    });
   
  }

}
