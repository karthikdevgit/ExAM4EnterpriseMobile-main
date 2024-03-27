import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { ForceApiService } from 'src/app/service/force-api.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.page.html',
  styleUrls: ['./edit-details.page.scss'],
})
export class EditDetailsPage implements OnInit {

  constructor(private forceapi: ForceApiService, private modal: ModalController) { }

  ngOnInit() {
  }

  // saveSchemaObject(localData: any,currentobjIndexpostion){
  saveSchemaObject(assessableObject: any){

      // StartupService.AddDebugLogs('$scope.relatedobjsaveschemaObj start','schemaViewlistCtrl,$scope.relatedobjsaveschemaObj');

      // let required = false;
      // let templocalData = localData;
      // let type;
      // let objName='';
      // // StartupService.showLoading('');
      // if( templocalData && templocalData.Id && templocalData.Id.toString().length > 14){


      //     let attr=templocalData.attributes;
      //     type = 'update';
      //     objName=attr.type;
      //     templocalData.isEdited=true;

      // }

  //     ExAM_AIM__Alias__c: "Properrty 1"

  // ExAM_AIM__Status__c: "Completed"

  // Id: "a1C4x00000CBNGTEA5"

  // Name: "A-000000"

  // RecordType: {attributes: {type: "RecordType", url: "/services/data/v59.0/sobjects/RecordType/0124x000000mTzbAAE"}, Id: "0124x000000mTzbAAE", Name: "ExAM Property"}

  // RecordTypeId: "0124x000000mTzbAAE"

  // attributes: Object

  // type: "ExAM_AIM__AIM_Asset__c"

  // url: "/services/data/v59.0/sobjects/ExAM_AIM__AIM_Asset__c/a1C4x00000CBNGTEA5"
      let objName = assessableObject.attributes.type;
      delete assessableObject.AIM_Property__r;
      delete assessableObject.ExAM_Inspection_Inspector__r;

      this.forceapi.update(objName, assessableObject).then(function(data) {
            // var QuerySpec = navigator.smartstore.buildExactQuerySpec("schemaTemplateId",$scope.currentschemaviewId,1000);
      // navigator.smartstore.querySoup("schemaTemplateViewList", QuerySpec, function(schemaTemplatedata) {
        console.log(":::::::::::::::::UPDATE DATA: " + data);
      //     if( schemaTemplatedata.totalEntries > 0){

      //         var ObjectData= schemaTemplatedata.currentPageOrderedEntries;

      //         var recordIndex = _.findIndex($scope.relatedSchemalist, {'Id' : templocalData.Id});
      //         if(recordIndex != -1) {
      //             $scope.relatedSchemalist[recordIndex]=templocalData;
      //         }
      //         if($scope.isSupportSchemaFieldset){
      //             var treeIndex = _.findIndex($scope.treeViewSchemalist[$scope.currentschemaIndexposition][$scope.parentId],  {'Id' : templocalData.Id});
      //             if(treeIndex != -1) {
      //                 $scope.treeViewSchemalist[$scope.currentschemaIndexposition][$scope.parentId][treeIndex]=templocalData;
      //             }
      //         }
      //         var schemaData = ObjectData;
      //         var schemaIndex = _.findIndex(schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition].childAssessableObjs[$scope.parentId],{'Id' : templocalData.Id});
      //         if(schemaIndex != -1) {
      //             schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition].childAssessableObjs[$scope.parentId][schemaIndex]=templocalData;
      //         }
      //         navigator.smartstore.upsertSoupEntries("schemaTemplateViewList", schemaData, function(assessableData) {
      //             $ionicLoading.hide();
      //             StartupService.showAlert("Record updated successfully.");
      //             $scope.relatedschemaObjectEditModal.hide();
      //             $scope.ObjectRecordList ={};
      //             $scope.searchObjectRecord ={};
      //             $scope.ObjectRecordData = {};
      //         });

      //     }
      });

      // let readonlyfieldremovedtemplocalData = templocalData;
      // let keysToBeRemovedFromObj = Object.keys(readonlyfieldremovedtemplocalData);
      // angular.forEach($scope.objectfieldset, function(value, key){

      //     if(value.type == 'time' && templocalData && templocalData[value.fieldPath]){
      //         readonlyfieldremovedtemplocalData[value.fieldPath] = StartupService.changeFormat(angular.copy(templocalData[key]),"HH:mm:ss.SSS").concat('Z');

      //     }


      //     if(value.type == 'multipicklist'
      //     && templocalData && templocalData[value.fieldPath]){
      //         var options = '';
      //         angular.forEach(templocalData[value.fieldPath], function(value1, key1){
      //             options += value1;
      //             if((templocalData[value.fieldPath].length) != key1){
      //                 options += ';';
      //             }
      //         });
      //         templocalData[value.fieldPath] = options;
      //         readonlyfieldremovedtemplocalData[value.fieldPath] = options;
      //     }



      //     if(value.type == 'reference'){


      //         if(value.fieldPath.endsWith('Id')){

      //             delete readonlyfieldremovedtemplocalData[value.fieldPath.replace('Id','')];

      //             if($scope.tempData[value.fieldPath.replace('Id','')]){
      //                 $scope.ObjectRecordData[value.fieldPath] = $scope.tempData[value.fieldPath.replace('Id','')].Name;
      //             }

      //         }else{
      //             delete readonlyfieldremovedtemplocalData[value.fieldPath.replace('__c','__r')];
      //         }

      //     }

      //     if(!value.isUpdatable){
      //          delete readonlyfieldremovedtemplocalData[value.fieldPath];
      //     }
      //     angular.forEach(Object.keys(readonlyfieldremovedtemplocalData), function(value1, key1){
      //         if(value1 == value.fieldPath){
      //             var index = keysToBeRemovedFromObj.indexOf(value1);
      //             if (index > -1) {
      //                 keysToBeRemovedFromObj.splice(index,1);
      //             }
      //         }
      //     });
      //     if( (value.dbRequired || value.required)  && value.isUpdatable){

      //         if(!templocalData[value.fieldPath]){
      //             required = true;
      //         }
      //     }
      // });
      // var index = keysToBeRemovedFromObj.indexOf('Id');
      // if (index > -1) {
      //     keysToBeRemovedFromObj.splice(index,1);
      // }
      // keysToBeRemovedFromObj.forEach(function(key){
      //       if(readonlyfieldremovedtemplocalData[key]) {
      //         //Added for Name field value dissplay in sync text

      //         if(key != "attributes" && key != "Name") {
      //           delete readonlyfieldremovedtemplocalData[key];
      //         }
      //        }
      // });
      // if(!required){
      // if(navigator.connection.type != 'none'  && $rootScope.isOfflineModeDisabled =='true'){

      //     if(templocalData && templocalData.Id && templocalData.Id.length>14) {
      //         var data=[{Id:templocalData.Id,value:templocalData,schemaviewId:$scope.currentschemaviewId,currentschemaIdex:$scope.currentschemaIndexposition,parentId:$scope.parentId}];
      //         if(templocalData["isEdited"]){
      //             delete  templocalData["isEdited"];
      //         }
      //           if(readonlyfieldremovedtemplocalData["isEdited"]){
      //             delete  readonlyfieldremovedtemplocalData["isEdited"];
      //         }

      //         force.update( $scope.ObjName, readonlyfieldremovedtemplocalData).then(function(data) {
      //               var QuerySpec = navigator.smartstore.buildExactQuerySpec("schemaTemplateId",$scope.currentschemaviewId,1000);
      //         navigator.smartstore.querySoup("schemaTemplateViewList", QuerySpec, function(schemaTemplatedata) {

      //             if( schemaTemplatedata.totalEntries > 0){

      //                 var ObjectData= schemaTemplatedata.currentPageOrderedEntries;

      //                 var recordIndex = _.findIndex($scope.relatedSchemalist, {'Id' : templocalData.Id});
      //                 if(recordIndex != -1) {
      //                     $scope.relatedSchemalist[recordIndex]=templocalData;
      //                 }
      //                 if($scope.isSupportSchemaFieldset){
      //                     var treeIndex = _.findIndex($scope.treeViewSchemalist[$scope.currentschemaIndexposition][$scope.parentId],  {'Id' : templocalData.Id});
      //                     if(treeIndex != -1) {
      //                         $scope.treeViewSchemalist[$scope.currentschemaIndexposition][$scope.parentId][treeIndex]=templocalData;
      //                     }
      //                 }
      //                 var schemaData = ObjectData;
      //                 var schemaIndex = _.findIndex(schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition].childAssessableObjs[$scope.parentId],{'Id' : templocalData.Id});
      //                 if(schemaIndex != -1) {
      //                     schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition].childAssessableObjs[$scope.parentId][schemaIndex]=templocalData;
      //                 }
      //                 navigator.smartstore.upsertSoupEntries("schemaTemplateViewList", schemaData, function(assessableData) {
      //                     $ionicLoading.hide();
      //                     StartupService.showAlert("Record updated successfully.");
      //                     $scope.relatedschemaObjectEditModal.hide();
      //                     $scope.ObjectRecordList ={};
      //                     $scope.searchObjectRecord ={};
      //                     $scope.ObjectRecordData = {};
      //                 });

      //             }
      //         });


      //         },function(error){
      //             console.log('error:::',error);
      //         });

      //     } else if(templocalData && templocalData._soupEntryId){
      //         var childrecordQuerySpec = navigator.smartstore.buildExactQuerySpec("_soupEntryId",templocalData._soupEntryId,10000);

      //                 navigator.smartstore.querySoup("OfflineRecordList", childrecordQuerySpec, function(queryrecord) {
      //                     if(queryrecord.totalEntries > 0){
      //                         queryrecord.currentPageOrderedEntries[0].value=templocalData;
      //                         var QuerySpec = navigator.smartstore.buildExactQuerySpec("schemaTemplateId",$scope.currentschemaviewId,1000);

      //                         navigator.smartstore.upsertSoupEntries("OfflineRecordList",queryrecord.currentPageOrderedEntries, function(updatechildrecord) {
      //                         navigator.smartstore.querySoup("schemaTemplateViewList", QuerySpec, function(schemaTemplatedata) {

      //                             if( schemaTemplatedata.totalEntries > 0){

      //                                 var ObjectData= schemaTemplatedata.currentPageOrderedEntries;
      //                                 $scope.relatedSchemalist[currentobjIndexpostion]=templocalData;
      //                                 $scope.treeViewSchemalist[$scope.currentschemaIndexposition][$scope.parentId][currentobjIndexpostion]=templocalData;
      //                                 /*var schemaData = ObjectData;
      //                                 if(schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition].childAssessableObjs[$scope.parentId][currentobjIndexpostion]){
      //                                     schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition].childAssessableObjs[$scope.parentId][currentobjIndexpostion]=[];
      //                                     schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition].childAssessableObjs[$scope.parentId][currentobjIndexpostion].push(templocalData);
      //                                 }else{
      //                                     schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition].childAssessableObjs[$scope.parentId][currentobjIndexpostion].push(templocalData);
      //                                 }*/

      //                                 var recordIndex = _.findIndex($scope.relatedSchemalist, {'_soupEntryId' : templocalData._soupEntryId});
      //                                 if(recordIndex != -1) {
      //                                     $scope.relatedSchemalist[recordIndex]=templocalData;
      //                                 }
      //                                 if($scope.isSupportSchemaFieldset){
      //                                     var treeIndex = _.findIndex($scope.treeViewSchemalist[$scope.currentschemaIndexposition][$scope.parentId], {'_soupEntryId' : templocalData._soupEntryId});
      //                                     if(treeIndex != -1) {
      //                                         $scope.treeViewSchemalist[$scope.currentschemaIndexposition][$scope.parentId][treeIndex]=templocalData;
      //                                     }
      //                                 }
      //                                 var schemaData = ObjectData;
      //                                 var schemaRecordIndex = _.findIndex(schemaData[0].value['schemaViewData'][ $scope.currentschemaIndexposition].childAssessableObjs[$scope.parentId], {'_soupEntryId' : templocalData._soupEntryId});
      //                                 if(schemaRecordIndex != -1) {
      //                                     schemaData[0].value['schemaViewData'][ $scope.currentschemaIndexposition].childAssessableObjs[$scope.parentId][schemaRecordIndex]=templocalData;
      //                                 }

      //                                 navigator.smartstore.upsertSoupEntries("schemaTemplateViewList", schemaData, function(assessableData) {
      //                                     if($scope.isSupportSchemaFieldset){
      //                                         updateSyncStatus($scope.currentschemaIndexposition, templocalData);
      //                                     }
      //                                     $ionicLoading.hide();

      //                                 });
      //                                 $scope.relatedschemaObjectEditModal.hide();

      //                                 $scope.ObjectRecordList ={};
      //                                 $scope.searchObjectRecord ={};
      //                                 $scope.ObjectRecordData = {};
      //                             }
      //                         });
      //                     });
      //                     }else{
      //                         if(templocalData && templocalData.Id && templocalData.Id.length>14){
      //                             var data=[{Id:templocalData.Id,value:templocalData,schemaviewId:$scope.currentschemaviewId,currentschemaIdex:$scope.currentschemaIndexposition,parentId:$scope.parentId}];
      //                                                 var QuerySpec = navigator.smartstore.buildExactQuerySpec("schemaTemplateId",$scope.currentschemaviewId,1000);

      //                                 navigator.smartstore.upsertSoupEntries("SchemaEditedRecordList", data, function(upsertdata) {
      //                                         var QuerySpec = navigator.smartstore.buildExactQuerySpec("schemaTemplateId",$scope.currentschemaviewId,1000);
      //                                 navigator.smartstore.querySoup("schemaTemplateViewList", QuerySpec, function(schemaTemplatedata) {

      //                                     if( schemaTemplatedata.totalEntries > 0){

      //                                         var ObjectData= schemaTemplatedata.currentPageOrderedEntries;
      //                                         var recordIndex = _.findIndex($scope.relatedSchemalist, {'Id' : templocalData.Id});
      //                                         if(recordIndex != -1) {
      //                                             $scope.relatedSchemalist[recordIndex]=templocalData;
      //                                         }
      //                                         if($scope.isSupportSchemaFieldset){
      //                                             var treeIndex = _.findIndex($scope.treeViewSchemalist[$scope.currentschemaIndexposition][$scope.parentId],  {'Id' : templocalData.Id});
      //                                             if(treeIndex != -1) {
      //                                                 $scope.treeViewSchemalist[$scope.currentschemaIndexposition][$scope.parentId][treeIndex]=templocalData;
      //                                             }
      //                                         }
      //                                         var schemaData = ObjectData;
      //                                         var schemaIndex = _.findIndex(schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition].childAssessableObjs[$scope.parentId],{'Id' : templocalData.Id});
      //                                         if(schemaIndex != -1) {
      //                                             schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition].childAssessableObjs[$scope.parentId][schemaIndex]=templocalData;
      //                                         }

      //                                         navigator.smartstore.upsertSoupEntries("schemaTemplateViewList", schemaData, function(assessableData) {

      //                                             if($scope.isSupportSchemaFieldset){
      //                                                 updateSyncStatus($scope.currentschemaIndexposition, templocalData);
      //                                             }
      //                                             $ionicLoading.hide();

      //                                         //StartupService.showAlert("Record has been updated offline.");
      //                                         $scope.relatedschemaObjectEditModal.hide();

      //                                         $scope.ObjectRecordList ={};
      //                                         $scope.searchObjectRecord ={};
      //                                         $scope.ObjectRecordData = {};

      //                                         });

      //                                     }
      //                                 });


      //                             });
      //                         }
      //                     }
      //                 });
      //     }

      //     }else{
      //         // templocalData.ishaveofflinevalue=true;
      //         // templocalData.isEdited=true;
      //         $scope.ischildhaveeditedrecord=true;
      //         if(templocalData && templocalData.Id && templocalData.Id.length>14){
      //         var data=[{Id:templocalData.Id,value:readonlyfieldremovedtemplocalData,schemaviewId:$scope.currentschemaviewId,currentschemaIdex:$scope.currentschemaIndexposition,parentId:$scope.parentId}];
      //                             var QuerySpec = navigator.smartstore.buildExactQuerySpec("schemaTemplateId",$scope.currentschemaviewId,1000);

      //             navigator.smartstore.upsertSoupEntries("SchemaEditedRecordList", data, function(upsertdata) {
      //                     var QuerySpec = navigator.smartstore.buildExactQuerySpec("schemaTemplateId",$scope.currentschemaviewId,1000);
      //             navigator.smartstore.querySoup("schemaTemplateViewList", QuerySpec, function(schemaTemplatedata) {

      //                 if( schemaTemplatedata.totalEntries > 0){

      //                     var ObjectData= schemaTemplatedata.currentPageOrderedEntries;
      //                     var recordIndex = _.findIndex($scope.relatedSchemalist, {'Id' : templocalData.Id});
      //                     if(recordIndex != -1) {
      //                         $scope.relatedSchemalist[recordIndex]=templocalData;
      //                     }
      //                     if($scope.isSupportSchemaFieldset){
      //                         var treeIndex = _.findIndex($scope.treeViewSchemalist[$scope.currentschemaIndexposition][$scope.parentId],  {'Id' : templocalData.Id});
      //                         if(treeIndex != -1) {
      //                             $scope.treeViewSchemalist[$scope.currentschemaIndexposition][$scope.parentId][treeIndex]=templocalData;
      //                         }
      //                     }

      //                     var schemaData = ObjectData;
      //                     var schemaIndex = _.findIndex(schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition].childAssessableObjs[$scope.parentId],{'Id' : templocalData.Id});
      //                     if(schemaIndex != -1) {
      //                         schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition].childAssessableObjs[$scope.parentId][schemaIndex]=templocalData;
      //                     }
      //                     var scheIndex = _.findIndex($scope.currentparticularschemaObj.value['schemaViewData'][$scope.currentschemaIndexposition]['childAssessableObjs'][$scope.parentId], {'Id' : templocalData.Id});
      //                     if(scheIndex != -1) {
      //                         $scope.currentparticularschemaObj.value['schemaViewData'][$scope.currentschemaIndexposition]['childAssessableObjs'][$scope.parentId][scheIndex]=templocalData;
      //                     }
      //                     navigator.smartstore.upsertSoupEntries("schemaTemplateViewList", schemaData, function(assessableData) {


      //                         //if($scope.isSupportSchemaFieldset && !$scope.schemaViewDisabled[$scope.currentschemaIndexposition]) {
      //                             updateSyncStatus($scope.currentschemaIndexposition, templocalData);
      //                         //}
      //                         $ionicLoading.hide();
      //                        // StartupService.showAlert("Record has been updated offline.");
      //                         $scope.relatedschemaObjectEditModal.hide();
      //                         $scope.ObjectRecordList ={};
      //                         $scope.searchObjectRecord ={};
      //                         $scope.ObjectRecordData = {};

      //                     });

      //                 }
      //             });


      //         });
      //         }else if(templocalData && templocalData._soupEntryId){

      //                 var childrecordQuerySpec = navigator.smartstore.buildExactQuerySpec("_soupEntryId",templocalData._soupEntryId,10000);

      //                 navigator.smartstore.querySoup("OfflineRecordList", childrecordQuerySpec, function(queryrecord) {
      //                     if(queryrecord.totalEntries > 0){
      //                         queryrecord.currentPageOrderedEntries[0].value=templocalData;
      //                         var QuerySpec = navigator.smartstore.buildExactQuerySpec("schemaTemplateId",$scope.currentschemaviewId,1000);

      //                         navigator.smartstore.upsertSoupEntries("OfflineRecordList",queryrecord.currentPageOrderedEntries, function(updatechildrecord) {
      //                         navigator.smartstore.querySoup("schemaTemplateViewList", QuerySpec, function(schemaTemplatedata) {

      //                             if( schemaTemplatedata.totalEntries > 0){

      //                                 var ObjectData= schemaTemplatedata.currentPageOrderedEntries;

      //                                 var recordIndex = _.findIndex($scope.relatedSchemalist, {'_soupEntryId' : templocalData._soupEntryId});
      //                                 if(recordIndex != -1) {
      //                                     $scope.relatedSchemalist[recordIndex]=templocalData;
      //                                 }
      //                                 if($scope.isSupportSchemaFieldset){
      //                                     var treeIndex = _.findIndex($scope.treeViewSchemalist[$scope.currentschemaIndexposition][$scope.parentId], {'_soupEntryId' : templocalData._soupEntryId});
      //                                     if(treeIndex != -1) {
      //                                         $scope.treeViewSchemalist[$scope.currentschemaIndexposition][$scope.parentId][treeIndex]=templocalData;
      //                                     }
      //                                 }
      //                                 var schemaData = ObjectData;
      //                                 var schemaRecordIndex = _.findIndex(schemaData[0].value['schemaViewData'][ $scope.currentschemaIndexposition].childAssessableObjs[$scope.parentId], {'_soupEntryId' : templocalData._soupEntryId});
      //                                 if(schemaRecordIndex != -1) {
      //                                     schemaData[0].value['schemaViewData'][ $scope.currentschemaIndexposition].childAssessableObjs[$scope.parentId][schemaRecordIndex]=templocalData;
      //                                 }

      //                                 navigator.smartstore.upsertSoupEntries("schemaTemplateViewList", schemaData, function(assessableData) {
      //                                     if($scope.isSupportSchemaFieldset){
      //                                         updateSyncStatus($scope.currentschemaIndexposition, templocalData);
      //                                     }
      //                                     $ionicLoading.hide();

      //                                 });
      //                                 $scope.relatedschemaObjectEditModal.hide();

      //                                 $scope.ObjectRecordList ={};
      //                                 $scope.searchObjectRecord ={};
      //                                 $scope.ObjectRecordData = {};
      //                             }
      //                         });
      //                     });
      //                     }else{
      //                         if(templocalData && templocalData.Id && templocalData.Id.length>14){
      //                             var data=[{Id:templocalData.Id,value:templocalData,schemaviewId:$scope.currentschemaviewId,currentschemaIdex:$scope.currentschemaIndexposition,parentId:$scope.parentId}];
      //                                                 var QuerySpec = navigator.smartstore.buildExactQuerySpec("schemaTemplateId",$scope.currentschemaviewId,1000);

      //                                 navigator.smartstore.upsertSoupEntries("SchemaEditedRecordList", data, function(upsertdata) {
      //                                         var QuerySpec = navigator.smartstore.buildExactQuerySpec("schemaTemplateId",$scope.currentschemaviewId,1000);
      //                                 navigator.smartstore.querySoup("schemaTemplateViewList", QuerySpec, function(schemaTemplatedata) {

      //                                     if( schemaTemplatedata.totalEntries > 0){

      //                                         var ObjectData= schemaTemplatedata.currentPageOrderedEntries;
      //                                         var recordIndex = _.findIndex($scope.relatedSchemalist, {'Id' : templocalData.Id});
      //                                         if(recordIndex != -1) {
      //                                             $scope.relatedSchemalist[recordIndex]=templocalData;
      //                                         }
      //                                         if($scope.isSupportSchemaFieldset){
      //                                             var treeIndex = _.findIndex($scope.treeViewSchemalist[$scope.currentschemaIndexposition][$scope.parentId],  {'Id' : templocalData.Id});
      //                                             if(treeIndex != -1) {
      //                                                 $scope.treeViewSchemalist[$scope.currentschemaIndexposition][$scope.parentId][treeIndex]=templocalData;
      //                                             }
      //                                         }
      //                                         var schemaData = ObjectData;
      //                                         var schemaIndex = _.findIndex(schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition].childAssessableObjs[$scope.parentId],{'Id' : templocalData.Id});
      //                                         if(schemaIndex != -1) {
      //                                             schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition].childAssessableObjs[$scope.parentId][schemaIndex]=templocalData;
      //                                         }

      //                                         navigator.smartstore.upsertSoupEntries("schemaTemplateViewList", schemaData, function(assessableData) {

      //                                             if($scope.isSupportSchemaFieldset){
      //                                                 updateSyncStatus($scope.currentschemaIndexposition, templocalData);
      //                                             }
      //                                             $ionicLoading.hide();

      //                                             //StartupService.showAlert("Record has been updated offline.");
      //                                             $scope.relatedschemaObjectEditModal.hide();

      //                                             $scope.ObjectRecordList ={};
      //                                             $scope.searchObjectRecord ={};
      //                                             $scope.ObjectRecordData = {};

      //                                         });

      //                                     }
      //                                 });


      //                             });
      //                         }
      //                     }
      //                 });
      //         }
      //     }
      // }else{
      //     StartupService.showAlert('Please fill all required fields to continue.');
      //     // $ionicLoading.hide();
      // }

  }

  formatDate(date):string{
    return date ? moment(date).format('YYYY-MM-DD'): "";
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

}
