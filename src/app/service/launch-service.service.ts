import { registerLocaleData } from '@angular/common';
import { Injectable, NgZone } from '@angular/core';
import { Network } from '@ionic-native/network/ngx'
import { ForceApiService } from '../service/force-api.service';
import { error, promise } from 'protractor';
import * as _ from 'underscore';
import { Router, NavigationExtras } from '@angular/router';
import { resolve } from 'dns';
import { LoaderService } from '../service/loader.service';
import { LoadingPage } from '../pages/loading/loading.page';
import { Observable, Subject } from 'rxjs';
import { FlscheckService } from '../service/flscheck.service'
declare var window: any;
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Device } from '@ionic-native/device/ngx';
import { GlobalParamService } from './global-param.service';

@Injectable({
  providedIn: 'root'
})
export class LaunchServiceService {

  public objectNameList: any;
  public percentLoading: any;
  public decrementval: any;
  public TrackerConfigList: any;
  public objandFieldFlsDetail: any;
  private serviceSubject = new Subject<any>();
  public static assessmentTrackerConfig = [];
  public AppVersionNum: any;
  public static versionAPIName: any;
  public static MobileAppVersionDetailObj: any;
  public hasNetwork: any;
  public Assessment_Templates_Array :any;
  public RecordTypeDetails:any;
  public ResultquestionLookupObjects:any;

  publishSomeData(data: any) {
    this.serviceSubject.next(data);
  }

  getObservable(): Observable<any> {
    return this.serviceSubject.asObservable();
  }

  constructor(private zone: NgZone,
    private router: Router,
    private network: Network,
    private forceapi: ForceApiService,
    private loader: LoaderService,
    private flsservice: FlscheckService,
    private loadingpage: LoadingPage,
    private appVersion: AppVersion,
    private GlobalParam: GlobalParamService,

    private device: Device) {
    this.hasNetwork = this.network.type != 'none' ? true : false;
  }
  // watch network for a disconnection
  disconnectSubscription = this.network.onDisconnect().subscribe(() => {
    this.hasNetwork = false;
  });
  // watch network for a connection
  connectSubscription = this.network.onConnect().subscribe(() => {
    this.hasNetwork = true;
  });

  launchservice() {

    this.objectNameList = [];
    LaunchServiceService.versionAPIName = (this.device && this.device.platform == 'iOS') ? 'ExAM_Tracker__iOS_App_Version__c' : 'ExAM_Tracker__Android_App_Version__c';
    this.appVersion.getVersionNumber().then(value => {
      this.AppVersionNum = value;
      if (this.network.type != 'none') {
        this.percentLoading = 10;
        this.loadingpage.setloading('Loading Salesforce Data - ' + this.percentLoading + '%');
        //this.showLoader('Loading '+this.percentLoading+'%');
        this.launchwithOnline();
      } else {
        this.launchwithOffline();
      }
    }).catch(err => {
      alert(err);
    });
  }
  //Start offline process
  launchwithOffline() {
    var _this = this;

    var MobileAppVersionQuerySpec = window.navigator.smartstore.buildAllQuerySpec();
    window.navigator.smartstore.querySoup('TrackerMobileAppVersionDetail', MobileAppVersionQuerySpec, function (MobileAppVersionData) {
      if (MobileAppVersionData.totalEntries > 0) {

        LaunchServiceService.MobileAppVersionDetailObj = MobileAppVersionData.currentPageOrderedEntries[0];
        var ATQuerySpec = window.navigator.smartstore.buildExactQuerySpec('valueName', 'DefaultScreenValue', 1);
        window.navigator.smartstore.querySoup("GenericConfigurationsData", ATQuerySpec, function (defaultData) {

          if (defaultData.currentPageOrderedEntries && defaultData.currentPageOrderedEntries[0]) {
            var ATQuerySpec = window.navigator.smartstore.buildAllQuerySpec('Id', '', 1000);
            window.navigator.smartstore.querySoup("AssessmentTrackerList", ATQuerySpec, function (localATData) {

              if (localATData.totalEntries && localATData.currentPageOrderedEntries
                && localATData.currentPageOrderedEntries.length > 0) {

                LaunchServiceService.assessmentTrackerConfig = localATData.currentPageOrderedEntries;
                if (!defaultData.currentPageOrderedEntries[0].isMyTracker) {

                  var index = _.findIndex(localATData.currentPageOrderedEntries, { 'Id': defaultData.currentPageOrderedEntries[0].Id });
                  if (index != -1) {
                    var trackerObj = localATData.currentPageOrderedEntries[index];
                    var defaultScreenTrackerId = defaultData.currentPageOrderedEntries[0].Id;
                    let navigationExtras: NavigationExtras = {
                      state: {
                        ATObj: trackerObj
                      }
                    };
                    _this.zone.run(() => {

                      _this.publishSomeData({
                        isFrom: 'checkOfflineData'
                      });

                      _this.router.navigate(['assessment-tracker-detail'], navigationExtras);
                    })
                  } else {
                    _this.zone.run(() => {

                      _this.publishSomeData({
                        isFrom: 'checkOfflineData'
                      });

                      _this.router.navigate(['/folder/ATList']);
                    })
                  }
                } else {
                  _this.zone.run(() => {
                    _this.publishSomeData({
                      isFrom: 'checkOfflineData'
                    });

                    _this.router.navigate(['/folder/ATList']);
                  })
                }
              } else {
                alert('No trackers found');
              }
            });
          } else {
            _this.router.navigate(['/folder/ATList']);
          }
        });
        window.cordova.plugins.backgroundMode.disable();

      } else {
        window.cordova.plugins.backgroundMode.disable();

        alert('Mobile app version detail not found. Please contact administrator');
      }
    });

  }
  //Start online process
  launchwithOnline() {
    this.registersmartstore();
  }
  //register soup
  registersmartstore() {
    var _this = this;
    window.navigator.smartstore.soupExists("AssessmentTrackerList", function (response) {
      _this.successCallback(response, 'AssessmentTrackerList');
      window.navigator.smartstore.soupExists("AssessmentTrackerData", function (response) {
        _this.successCallback(response, 'AssessmentTrackerData');
        window.navigator.smartstore.soupExists("ColumnSorting", function (response) {
          _this.successCallback(response, 'ColumnSorting');
          window.navigator.smartstore.soupExists("ObjectDescribe", function (response) {
            _this.successCallback(response, 'ObjectDescribe');
            window.navigator.smartstore.soupExists("TrackerConfigurationFieldset", function (response) {
              _this.successCallback(response, 'TrackerConfigurationFieldset');
              window.navigator.smartstore.soupExists("SyncOptionSetting", function (response) {
                _this.successCallback(response, 'SyncOptionSetting');
                window.navigator.smartstore.soupExists("GenericConfigurationsData", function (response) {
                  _this.successCallback(response, 'GenericConfigurationsData');
                  window.navigator.smartstore.soupExists("TrackerMobileAppVersionDetail", function (response) {
                    _this.successCallback(response, 'TrackerMobileAppVersionDetail');
                    window.navigator.smartstore.soupExists("ExAM_Configuration", function (response) {
                      _this.successCallback(response, 'ExAM_Configuration');
                      window.navigator.smartstore.soupExists("Assignment_Manager", function (response) {
                        _this.successCallback(response, 'Assignment_Manager');
                        window.navigator.smartstore.soupExists("Assessment_Templates", function (response) {
                          _this.successCallback(response, 'Assessment_Templates');
                          window.navigator.smartstore.soupExists("QuestionTemplate", function (response) {
                            _this.successCallback(response, 'QuestionTemplate');
                            window.navigator.smartstore.soupExists("DecisionTreeTemplate", function (response) {
                              _this.successCallback(response, 'DecisionTreeTemplate');
                              window.navigator.smartstore.soupExists("VideoAttachment", function (response) {
                                _this.successCallback(response, 'VideoAttachment');
                                window.navigator.smartstore.soupExists("MobileAppVersionDetail", function (response) {
                                  _this.successCallback(response, 'MobileAppVersionDetail');
                                  window.navigator.smartstore.soupExists("LocalConfigurationData", function (response) {
                                    _this.successCallback(response, 'LocalConfigurationData');
                                    window.navigator.smartstore.soupExists("schemaTemplateViewList", function (response) {
                                      _this.successCallback(response, 'schemaTemplateViewList');
                                    }, _this.errorCallback);
                                    window.navigator.smartstore.soupExists("RecordTypeDetails", function (response) {
                                      _this.successCallback(response, 'RecordTypeDetails');
                                    }, _this.errorCallback);
                                  }, _this.errorCallback);
                                }, _this.errorCallback);
                              }, _this.errorCallback);
                            }, _this.errorCallback);
                          }, _this.errorCallback);
                        }, _this.errorCallback);
                      }, _this.errorCallback);
                    }, _this.errorCallback);
                  }, _this.errorCallback);
                }, _this.errorCallback);
              }, _this.errorCallback);
            }, _this.errorCallback);
          }, _this.errorCallback);
        }, _this.errorCallback);
      }, _this.errorCallback);
    }, _this.errorCallback);
  }
  //index soup
  Index = {
    Assignment_Manager: [{ path: "Id", type: "string" },
    { path: "Name", type: "string" },
    { path: "ExAM__InvestigationType__c", type: "string" },
    { path: "ExAM__Status__c", type: "string" },
    { path: "ExAM__Facility_Name__c", type: "string" },
    { path: "ExAM__Assessor_Resource__c", type: "string" },
    { path: "_soupEntryId", type: "string" },
    { path: "isSubmited", type: "string" },
    { path: "toUpdate", type: "string" },
    { path: "isfromschema", type: "string" },
    { path: "schemaviewId", type: "string" },
    { path: "currentschemaIndex", type: "string" },
    { path: "isAmEdited", type: "string" },
    { path: "isAmSavedfromQuickSync", type: "string" },
    { path: "parentId", type: "string" },
    { path: "ExAM_Inspection__Inspection__c", type: "string" },
    { path: "assObjfieldApiName", type: "string" }],
    MobileAppVersionDetail: [{ path: "ExAM__Assessment_Template_Fields__c", type: "string" },
    { path: "ExAM__Configuration_Fields__c", type: "string" },
    { path: "ExAM__Functionality_Map__c", type: "string" },
    { path: "ExAM__Mobile_API_List__c", type: "string" },
    { path: LaunchServiceService.versionAPIName, type: "string" }],
    DecisionTreeTemplate: [{ path: "templateId", type: "string" }],
    QuestionTemplate: [{ path: "templateId", type: "string" }],
    Assessment_Templates: [{ path: "Id", type: "string" },
    { path: "Name", type: "string" }],
    ExAM_Configuration: [{ path: "Name", type: "string" },
    { path: "Id", type: "string" },
    { path: "ExAM__Lens_Type__c", type: "string" },
    { path: "ExAM__Overall_Status_on_Submit__c", type: "string" },
    { path: "ExAM__Data_Management_Tab_Filter__c", type: "string" },
    { path: "ExAM__Primary_Assessment_Template__c", type: "string" }],
    LocalAnswer: [{ path: "response", type: "string" },
    { path: "responseName", type: "string" },
    { path: "comment", type: "string" },
    { path: "photo", type: "string" },
    { path: "currentASMAssesssmentTemplateTdStr", type: "string" },
    { path: "currentASMIdStr", type: "string" },
    { path: "isSubmit", type: "string" },
    { path: "date", type: "string" },
    { path: "tempImageObject", type: "string" },
    { path: "responseKeys", type: "string" },
    { path: "questionTemplateDetails", type: "string" },
    { path: "_soupEntryId", type: "string" },
    { path: "modechange", type: "string" }],
    VideoAttachment: [{ path: "localURL", type: "string" },
    { path: "videoQuestionId", type: "string" },
    { path: "currentASMIdStr", type: "string" },
    { path: "attachmentId", type: "string" },
    { path: "_soupEntryId", type: "string" },
    { path: "type", type: "string" }],
    TempAttachment: [{ path: "Name", type: "string" },
    { path: "ContentType", type: "string" },
    { path: "Body", type: "string" },
    { path: "ParentId", type: "string" },
    { path: "IsPrivate", type: "string" },
    { path: "photoQuestionId", type: "string" },
    { path: "currentASMIdStr", type: "string" },
    { path: "_soupEntryId", type: "string" },
    { path: "QnId", type: "string" },
    { path: "isSavedFromQuickSync", type: "string" },
    { path: "ASMQuestion", type: "string" },
    { path: "ASMId", type: "string" }],
    DecisionTree: [{ path: "templateId", type: "string" },
    { path: "questionOrder", type: "integer" }],
    Offline_DecisionTree: [{ path: "currentASMIdStr", type: "string" },
    { path: "ExAM__Response__c", type: "string" },
    { path: "ExAM__Issue_Request__c", type: "string" },
    { path: "parentSoupIdformultipickDTflow", type: "string" },
    { path: "relatedSoupId", type: "string" },
    { path: "DecisionTreeresponse", type: "string" },
    { path: "DecisionTreeresponseName", type: "string" },
    { path: "crDate", type: "string" },
    { path: "DecisionTreeresponsekeys", type: "string" },
    { path: "decisionTreeStartQuestionId", type: "string" },
    { path: "decisionTreeStartQuestionLabel", type: "string" },
    { path: "questionTemplateDetails", type: "string" },
    { path: "resultQuestion", type: "string" },
    { path: "tempVideoSoupId", type: "string" },
    { path: "tempImageSoupId", type: "string" },
    { path: "_soupEntryId", type: "string" },
    { path: "ResultQnRecordLookup", type: "string" },
    { path: "imageSoupIdList", type: "string" },
    { path: "saveAndCloneSoupIdList", type: "string" }],
    CustomSettings: [{ path: "label", type: "string" },
    { path: "selected", type: "string" },
    { path: "field", type: "string" }],
    Label: [{ path: "Primary_Assessment_Type", type: "string" }],
    isAnswered: [{ path: "isAnsweredArray", type: "string" },
    { path: "ASMId", type: "string" }],
    LocalConfigurationData: [{ path: "valueName", type: "string" }],
    FieldsetsData: [{ path: "fieldSetApi", type: "string" }],
    FeedbackQuestionsTemplate: [{ path: "questionId", type: "string" }],
    MobileSettings: [{ path: "fontSize", type: "string" }],
    Account_Local: [{ path: "Name", type: "string" },
    { path: "_soupEntryId", type: "string" },
    { path: "Id", type: "string" }],
    LookupFilterTemplate: [{ path: "Id", type: "string" }],
    DebugLogDetails: [{ path: "_soupEntryId", type: "string" },
    { path: "message", type: "string" },
    { path: "location", type: "string" },
    { path: "_soupLastModifiedDate", type: "string" }],
    ChatterOffline: [{ path: "ASMId", type: "string" },
    { path: "isOnline", type: "string" },
    { path: "id", type: "string" }],
    MentionUser: [{ path: "_soupEntryId", type: "string" }],
    AssessableObjectData: [{ path: "Id", type: "string" },
    { path: "_soupEntryId", type: "string" }],
    AMConfigurationData: [{ path: "valueName", type: "string" }],
    dataviewerfieldsetfields: [{ path: "fieldPath", type: "string" },
    { path: "fieldSetApi", type: "string" },
    { path: "selected", type: "string" }],
    amIdwithsectioncriteria: [{ path: "valueName", type: "string" },
    { path: "value", type: "string" },
    { path: "isOnline", type: "string" }],
    templatesectionrulueandcriteria: [{ path: "templateId", type: "string" },
    { path: "sectionwithruleId", type: "string" },
    { path: "rulewithcriteria", type: "string" },
    { path: "ruleIdWthCondition", type: "string" }],
    documentfile: [{ path: "valueName", type: "string" },
    { path: "value", type: "string" },
    { path: "isbase", type: "string" }],
    AMIdwithQuestionCriteriaData: [{ path: "amid", type: "string" },
    { path: "templateid", type: "string" },
    { path: "valueName", type: "string" },
    { path: "value", type: "string" },
    { path: "isOnline", type: "string" }],
    TemplateIdwithAssessablefields: [{ path: "templateid", type: "string" },
    { path: "valueName", type: "string" },
    { path: "value", type: "string" }],
    SubmitAllValidationData: [{ path: "valueName", type: "string" },
    { path: "value", type: "string" }],
    offlinemodeenable: [{ path: "valueName", type: "string" },
    { path: "isOfflineModeDisabled", type: "string" }],
    ResultFldLookupList: [{ path: "valueName", type: "string" },
    { path: "value", type: "string" },
    { path: "objectName", type: "string" }],
    OfflineFeedbackResponseData: [{ path: "answerList", type: "string" },
    { path: "userId", type: "string" },
    { path: "screenName", type: "string" },
    { path: "decisionTreeQuestionId", type: "string" },
    { path: "valueName", type: "string" },
    { path: "value", type: "string" }],
    ResultpageConfigurationData: [{ path: "templateId", type: "string" },
    { path: "resultrequiredconfig", type: "string" },
    { path: "resultconfig", type: "string" },
    { path: "ResultReqIdwithruleIdMap", type: "string" },
    { path: "rulewithcriteria", type: "string" },
    { path: "ruleIdWthCondition", type: "string" },
    { path: "valueName", type: "string" },
    { path: "value", type: "string" }],
    AMObjectDescribe: [{ path: "valueName", type: "string" },
    { path: "value", type: "string" }],
    AnswerObjDescribe: [{ path: "valueName", type: "string" },
    { path: "value", type: "string" }],
    AllObjectDescribe: [{ path: "valueName", type: "string" },
    { path: "value", type: "string" }],
    ObjectDescribeDetail: [{ path: "valueName", type: "string" },
    { path: "value", type: "string" }],
    isDTAnsweredQuestion: [{ path: "isDTAnsweredQuestionArray", type: "string" },
    { path: "ASMId", type: "string" }],
    schemaTemplateViewList: [{ path: "schemaTemplateId", type: "string" }],
    SchemaEditedRecordList: [{ "path": "Id", "type": "string" },
    { "path": "currentschemaIdex", "type": "string" },
    { "path": "schemaviewId", "type": "string" },
    { "path": "value", "type": "string" },
    { "path": "parentId", "type": "string" }],
    SamplingStatusUpdateRecords: [{ "path": "Id", "type": "string" },
    { "path": "currentschemaIdex", "type": "string" },
    { "path": "schemaviewId", "type": "string" },
    { "path": "value", "type": "string" },
    { "path": "parentId", "type": "string" }],
    OfflineRecordList: [{ "path": "Id", "type": "string" },
    { "path": "currentschemaIdex", "type": "string" },
    { "path": "schemaviewId", "type": "string" },
    { "path": "value", "type": "string" },
    { "path": "objectName", "type": "string" },
    { "path": "parentId", "type": "string" },
    { "path": "isOffline", "type": "string" }],
    SchemaCreatedAmRecordList: [{ "path": "Id", "type": "string" },
    { "path": "currentschemaIndex", "type": "string" },
    { "path": "schemaviewId", "type": "string" },
    { "path": "value", "type": "string" }],
    htmldocumentfile: [{ path: "valueName", type: "string" },
    { path: "value", type: "string" },
    { path: "isbase", type: "string" },
    { path: "ddsectionID", type: "string" }],
    staticfile: [{ path: "valueName", type: "string" },
    { path: "value", type: "string" },
    { path: "staticresourceID", type: "string" }],
    RecordTypeDetails: [{ path: "valueName", type: "string" },
    { path: "defaultRecordType", type: "string" }],
    Retrydata: [{ path: "valueName", type: "string" },
    { path: "value", type: "string" },
    { "path": "HasRetryData", "type": "string" }],
    Sampling_Chart_Line__mdt: [{ path: "valueName", type: "string" },
    { path: "value", type: "string" }],
    InitialneedDataForSampling: [{ path: "valueName", type: "string" },
    { path: "value", type: "string" }],
    InspectionObjectData: [{ "path": "Id", "type": "string" },
    { path: "_soupEntryId", type: "string" },
    { path: "ExAM_Inspection__Property__c", type: "string" },
    { path: "schemaviewId", type: "string" },
    { path: "currentschemaIndex", type: "string" },
    { path: "isNeedtoAddtopLevel", type: "string" }],
    inspectionRecalculationData: [{ "path": "Id", "type": "string" },
    { path: "_soupEntryId", type: "string" },
    { path: "ExAM_Inspection__Property__c", type: "string" },
    { path: "schemaviewId", type: "string" },
    { path: "currentschemaIndex", type: "string" }],
    DeleteinspectionData: [{ "path": "Id", "type": "string" },
    { path: "_soupEntryId", type: "string" },
    { path: "ExAM_Inspection__Property__c", type: "string" },
    { path: "schemaviewId", type: "string" },
    { path: "currentschemaIndex", type: "string" }],
    InspectionAMData: [{ "path": "Id", "type": "string" },
    { path: "_soupEntryId", type: "string" },
    { path: "noObjectLink", type: "string" },
    { path: "ExAM_Inspection__Inspection__c", type: "string" },
    { path: "ExAM__Facility_Name__c", type: "string" }],
    SamplingAccountData: [{ "path": "Id", "type": "string" },
    { path: "_soupEntryId", type: "string" }],
    AssessmentTrackerList: [{ path: "Id", type: "string" },
    { path: "Name", type: "string" },
    { path: "_soupEntryId", type: "string" },
    { path: "hasOffineData", type: "string" }],
    AssessmentTrackerData: [{ path: "ATcongId", type: "string" },
    { path: "valueDetail", type: "string" },
    ],
    ColumnSorting: [{ path: "columnsort", type: "string" },
    { path: "valueDetail", type: "string" },
    ],
    ObjectDescribe: [{ path: "objectName", type: "string" },
    { path: "valueDetail", type: "string" },
    ],
    TrackerConfigurationFieldset: [{ path: "FieldsetName", type: "string" },
    { path: "FieldsetDetail", type: "string" },
    ],
    SyncOptionSetting: [{ path: "ValueName", type: "string" },
    { path: "ValueDetail", type: "string" },
    ],
    GenericConfigurationsData: [{ path: "valueName", type: "string" }],
    TrackerMobileAppVersionDetail: [{ path: "ExAM_Tracker__Functionality_Map__c", type: "String" },
    { path: LaunchServiceService.versionAPIName, type: "String" }],


  };

  //success and error method for register soup
  successCallback(response, soupName) {
    var _this = this;
    if (response === false) {

      window.navigator.smartstore.registerSoup(soupName, _this.Index[soupName], function (response) {
      });
    }
    if (soupName == 'TrackerMobileAppVersionDetail') {
      _this.getConfigurationData();
    }
  }
  errorCallback(error) {
    console.log(error);
  }

  //Added by sivasankar on 15 feb 2024. 

  getConfigurationData(){

    var _this = this;
    _this.forceapi.postRest('appconfig',{configWrapperData:{appVersion:(this.device && this.device.platform == 'iOS'?'9.916':'3.3.4') , OSPlatform: (this.device && this.device.platform == 'iOS'?'iOS':'Android'),answerFieldset:this.getResponseFields(), accountFieldset:this.getAccountFields(), assignmentManagerFieldset:this.getASMFields()}}).then(function(data) {

      let configData = JSON.parse(JSON.parse(data));
      console.log("configData::",configData);
      if(configData && !configData.errorMessage  && configData.appVersionDetail && configData.appVersionDetail.length){

          if( configData.appVersionDetail[0]
              && configData.appVersionDetail[0].ExAM__Functionality_Map__c
              && JSON.parse(configData.appVersionDetail[0].ExAM__Functionality_Map__c)){

              configData.appVersionDetail[0].ExAM__Functionality_Map__c = JSON.parse(configData.appVersionDetail[0].ExAM__Functionality_Map__c);
          }
          LaunchServiceService.MobileAppVersionDetailObj = configData.appVersionDetail[0];
          
          _this.clearAndUpsertData('Assessment_Templates', configData.templatesList).then(function(atSoupdata){
            _this.getAssessmentTemplate(configData);
          },function(error){
          });
      
      } else{
          alert(configData.errorMessage);
      }
  
        //});   
    });
  }
  // Here is the logic to get assessment template list
  getAssessmentTemplate(configData){
    var _this = this;
    _this.Assessment_Templates_Array = [];
    var UnitTemplateIdArray = [], ASMFieldsetNameArray = [];

    if (configData.templatesList && configData.templatesList.length) {

      var isSupportNewResultConfig = false;

      configData.templatesList.map(function(templateValue){

          if(templateValue){
            _this.Assessment_Templates_Array.push(templateValue.Id);
          }

      });
      console.log("Assessment_Templates_Array:::",_this.Assessment_Templates_Array);
        _this.QuestionAndDecisionTreeTemplate();
    }else{
        alert('No Assessment Template has been configured');
    }
   
  }

  QuestionAndDecisionTreeTemplate(){
    var _this = this;
    window.navigator.smartstore.clearSoup("QuestionTemplate", function(Question_Template_data) {
      window.navigator.smartstore.clearSoup("DecisionTreeTemplate", function(Question_Template_data) { 
        window.navigator.smartstore.clearSoup("schemaTemplateViewList", function(Question_Template_data) { 

        _this.getQuestionTemplateAndDecisionTreeTemplate(0).then(function(){
          _this.getSchemaviewData(0).then(function(){
            console.log('navigation call');
            _this.zone.run(() => {
              _this.router.navigate(['/inspections-list']);
            });
          })
        }) 
      });                                                                               
      });
    });
  }
  getSchemaviewData(index): Promise<any> {
    return new Promise((resolve, reject) => {

      var _this = this;
      var schemaviewIdList = [];

      var SchemaviewQuery = `SELECT Id, Name, ExAM__Object_Rules__c, ExAM__Schema_Template__c, ExAM__Enable_Assignment_Manager_Sharing__c,
      ExAM__Offline_Record_Count__c, ExAM__Status_Mapping__c, ExAM__Schema_Template__r.ExAM__Schema_Template_Definition_JSON__c,
      ExAM__Rule__r.ExAM__Allow_Access_To_All_Users__c, ExAM__Rule__r.ExAM__Type__c
      FROM ExAM__Schema_View__c
      WHERE ExAM__Rule__c != null AND ExAM__Rule__r.ExAM__Type__c = \'Schema View\' ORDER BY LastModifiedDate DESC`;

      _this.forceapi.query(SchemaviewQuery).then(function (schemaviewQueryData) {

        if (schemaviewQueryData && schemaviewQueryData.length) {

          schemaviewQueryData.forEach(s => {
            if (s.Id) {
              schemaviewIdList.push(s.Id);
            }
          })

          schemaviewIdList = _.uniq(schemaviewIdList);
          
          _this.getSchemaViewById(schemaviewIdList, 0).then(function(){
            resolve('');

          });
        }
      }, function (error) {
        resolve('');
      });
    });
  }
  getSchemaViewById(SchemaidList, indexval): Promise<any> {

    return new Promise(async (resolve, reject) => {
      var _this = this;
      if (indexval < SchemaidList.length) {

        _this.forceapi.postRest('SchemaTemplateViews', { schemaWrapper: { SchemaviewId: SchemaidList[indexval], mobileAppVersion: '9.915' } }).then(function (ObjectData) {
           

          if (ObjectData != null && ObjectData != '' && ObjectData.includes('~~')) {

            var tempval=ObjectData.split('~~')

            var schemaData = JSON.parse(JSON.parse(tempval[0] + "\""));
            var schemaviewDetail=JSON.parse(JSON.parse("\"" + tempval[1]));
            console.log('schemaData',schemaData);
            console.log('schemaviewDetail',schemaviewDetail);

            var schemaIDlist= Object.keys(schemaData);
            var temparray=[];
            Object.keys(schemaData).forEach(function (key) {
              var value1=schemaData[key];
              var newobj={};
              newobj['Id']=key;
              newobj['value']=value1;
              temparray.push(newobj);
            });
           
            if (schemaIDlist && schemaIDlist[0] && schemaData[schemaIDlist[0]] && schemaData[schemaIDlist[0]].schemaViewData && Object.keys(schemaData[schemaIDlist[0]].schemaViewData).length > 0) {

              // var ObjectDataDetails = [];

              //_this.mobileAppVersionDetailObj = LaunchServiceService.MobileAppVersionDetailObj

              if (schemaIDlist && schemaIDlist[0] && schemaData[schemaIDlist[0]] && schemaData[schemaIDlist[0]].schemaViewData && Object.keys(schemaData[schemaIDlist[0]].schemaViewData).length > 0) {
                var isSupportValidation=false,isThisViewHaveAtleastonelevelvalidationEnable=false,isSupportRecordtype=false,isSupportAMViewDetailsAndschemaTemplatecustomlabel=false,isSupportSchemaFieldset=false;
            
                console.log('_this.GlobalParam.isSupportValidation',_this.GlobalParam.isSupportValidation);
                _this.GlobalParam.utilMethodForFunctionalityMap('isSupportValidationCreate').then(function(issupport){
                  console.log('issupport',issupport);
                   _this.GlobalParam.isSupportValidation=issupport;
                   _this.GlobalParam.utilMethodForFunctionalityMap('isSupportRecordtype').then(function(isSupportRecordtype){
                    _this.GlobalParam.isSupportRecordtype=isSupportRecordtype;
                    //Added for AMViewDetails support inschema views
                    _this.GlobalParam.utilMethodForFunctionalityMap('isSupportAMViewDetailsAndschemaTemplatecustomlabel').then(function(isSupportAMViewDetailsAndschemaTemplatecustomlabel){
                      _this.GlobalParam.isSupportAMViewDetailsAndschemaTemplatecustomlabel=isSupportAMViewDetailsAndschemaTemplatecustomlabel;
                      _this.GlobalParam.utilMethodForFunctionalityMap('isSupportSchemaFieldset').then(function(isSupportSchemaFieldset){
                        _this.GlobalParam.isSupportSchemaFieldset=isSupportSchemaFieldset;
                      });
                    });
                   });
                });
                 

                
                  if(_this.GlobalParam.isSupportRecordtype){
                    if(schemaIDlist && schemaIDlist[0] && schemaData[schemaIDlist[0]] && schemaData[schemaIDlist[0]].schemaViewData && Object.keys(schemaData[schemaIDlist[0]].schemaViewData).length > 0){

                        var tempSchemaval = schemaData[schemaIDlist[0]].schemaViewData;
                        if(!RecordTypeDetails){
                           var RecordTypeDetails = {};
                        }
                        Object.keys(tempSchemaval).forEach(function(key){
                          var value=tempSchemaval[key];
                            if(value.optionConfigDetailsMap
                                && value.optionConfigDetailsMap['defaultRecordType']
                                && value.optionConfigDetailsMap['defaultRecordType'] != null
                                && value.optionConfigDetailsMap['defaultRecordType'] != ""){

                                    var RecTypeId = value.optionConfigDetailsMap['defaultRecordType'];
                                    _this.forceapi.getUrl("/services/data/v48.0/sobjects/"+value.apiName+"/describe/layouts/"+RecTypeId+"").then(function(result) {
                                        var len = 0;

                                        if(RecordTypeDetails[schemaIDlist[0]]){
                                            RecordTypeDetails[schemaIDlist[0]] = {};
                                        }
                                        if(result && result.detailLayoutSections && Object.keys(result.detailLayoutSections).length>0){
                                          for(var i =0 ;i<result.detailLayoutSections.length;i++){
                                            var detailLayoutSections = result.detailLayoutSections[i];
                                            for(var j=0;j<detailLayoutSections.rows;j++){
                                                var layoutRows = detailLayoutSections.layoutRows[j];
                                                if(RecordTypeDetails[schemaIDlist[0]][RecTypeId]){
                                                    RecordTypeDetails[schemaIDlist[0]][RecTypeId] = {};
                                                }
                                                for(var k=0;k<detailLayoutSections.columns;k++){
                                                    if(layoutRows.layoutItems[k].label || layoutRows.layoutItems[k].label!=""){

                                                        if(RecordTypeDetails[schemaIDlist[0]][RecTypeId][len]){
                                                            RecordTypeDetails[schemaIDlist[0]][RecTypeId][len] = {};
                                                        }
                                                        RecordTypeDetails[schemaIDlist[0]][RecTypeId][len] = {
                                                            'fieldPath':layoutRows.layoutItems[k].layoutComponents[0].details.name,
                                                            'type':layoutRows.layoutItems[k].layoutComponents[0].details.type,
                                                            'picklistValues':layoutRows.layoutItems[k].layoutComponents[0].details.picklistValues
                                                        };
                                                        len = len+1;
                                                    }

                                                }
                                            }
                                        }
                                        }
                                        
                                        var ATQuerySpec = window.navigator.smartstore.buildExactQuerySpec('valueName', 'DefaultScreenValue', 1);
                                        console.log('ATQuerySpec',ATQuerySpec);
                                        window.navigator.smartstore.querySoup("GenericConfigurationsData", ATQuerySpec, function (defaultData) {
                                
                                        var RecordTypeDetailsQuerySpec =window.navigator.smartstore.buildExactQuerySpec('valueName','defaultRecordType',1);
                                        console.log('RecordTypeDetailsQuerySpec',RecordTypeDetailsQuerySpec);

                                        window.navigator.smartstore.querySoup("RecordTypeDetails",RecordTypeDetailsQuerySpec, function(data) {
                                          console.log('data',data);

                                            if(data.totalEntries > 0){
                                                var tempRecordTypeDetails = {_soupEntryId:data.currentPageOrderedEntries[0]._soupEntryId,valueName:'defaultRecordType',defaultRecordType:RecordTypeDetails};
                                                window.navigator.smartstore.upsertSoupEntries("RecordTypeDetails",[tempRecordTypeDetails], function(data) {
                                                });
                                            }
                                            else{
                                                var tempRecordTypeDetails2 = {valueName:'defaultRecordType',defaultRecordType:RecordTypeDetails};
                                                window.navigator.smartstore.upsertSoupEntries("RecordTypeDetails",[tempRecordTypeDetails2], function(data) {
                                                });
                                            }
                                        });

                                    });
                            });
                          }
                        });
                      
                    }
                }
                //End
                var tempSchemaval = schemaData[schemaIDlist[0]].schemaViewData;
                var ObjectDataDetails=[];
               
                console.log("::::::::::::::SCHEMA #"+indexval);
                _this.getReferenceFieldWithObject(schemaData,_this.GlobalParam.isSupportValidation).then(function(){

                 // _this.getSchemaViewById(SchemaidList, ++indexval).then(function (SchemaviewQueryData) {
                    _this.getlistofschemadata(0,temparray,schemaviewDetail,ObjectDataDetails).then(function(ObjectDataDetails1){
                      //added for app restarted with smartstore values (W-042626 - #2 )
                      window.navigator.smartstore.upsertSoupEntries("schemaTemplateViewList", ObjectDataDetails, function(response) {
                        console.log('schema response response ',response);
                        // isSupportSchemaFieldset                                                        
                        if(_this.GlobalParam.isSupportSchemaFieldset){

                            var SchemaSortQuerySpec = window.navigator.smartstore.buildExactQuerySpec("valueName","schemaViewObjectAndAMSorting",1);
                            window.navigator.smartstore.querySoup("LocalConfigurationData", SchemaSortQuerySpec, function(LocalConfigData) {
                              console.log('LocalConfigData',LocalConfigData);
                               var schemaViewSortObjEachLevel = {};
                                schemaViewSortObjEachLevel=LocalConfigData.currentPageOrderedEntries[0];
                                console.log('schemaViewSortObjEachLevel',schemaViewSortObjEachLevel);
                                if(schemaViewSortObjEachLevel && Object.keys(schemaViewSortObjEachLevel).length>0 && schemaViewSortObjEachLevel['schemaSortObj'] && !schemaViewSortObjEachLevel['schemaSortObj'][response[0].schemaTemplateId]){
                                    schemaViewSortObjEachLevel['schemaSortObj'][response[0].schemaTemplateId] = {};
                                }
                                for(var i=0;i<Object.keys(response[0].value.schemaViewData).length;i++){
                                    var tempObjFieldset = [];
                                    var tempAMFieldset = [];

                                    if(response[0] && response[0].value && response[0].value.schemaViewData && response[0].value.schemaViewData[i] && response[0].value.schemaViewData[i].optionConfigDetailsMap != null){
                                        if(LocalConfigData.currentPageOrderedEntries && LocalConfigData.currentPageOrderedEntries[0] && Object.keys(LocalConfigData.currentPageOrderedEntries[0]).length>0 && LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId] && LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId][i] && LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId][i].IsuserModifiedObj && LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId][i].IsuserModifiedAM){
                                            schemaViewSortObjEachLevel['schemaSortObj'][response[0].schemaTemplateId][i] = LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId][i];
                                        }

                                        else if(LocalConfigData.currentPageOrderedEntries && LocalConfigData.currentPageOrderedEntries[0] && Object.keys(LocalConfigData.currentPageOrderedEntries[0]).length>0 &&  LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId] && LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId][i] && LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId][i].IsuserModifiedObj){
                                        schemaViewSortObjEachLevel['schemaSortObj'][response[0].schemaTemplateId][i]['ObjSortFieldName'] = LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId][i]['ObjSortFieldName'];
                                        schemaViewSortObjEachLevel['schemaSortObj'][response[0].schemaTemplateId][i]['ObjSortOrder'] = LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId][i]['ObjSortOrder'];
                                        }

                                        else if(LocalConfigData.currentPageOrderedEntries && LocalConfigData.currentPageOrderedEntries[0] && Object.keys(LocalConfigData.currentPageOrderedEntries[0]).length>0  && LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId] && LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId][i] && LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId][i].IsuserModifiedAM){
                                        schemaViewSortObjEachLevel['schemaSortObj'][response[0].schemaTemplateId][i]['AMSortFieldName'] = LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId][i]['AMSortFieldName'];
                                        schemaViewSortObjEachLevel['schemaSortObj'][response[0].schemaTemplateId][i]['AmSortOrder'] = LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId][i]['AmSortOrder'];

                                        }
                                        else if(LocalConfigData.currentPageOrderedEntries && LocalConfigData.currentPageOrderedEntries[0] && Object.keys(LocalConfigData.currentPageOrderedEntries[0]).length>0 &&  LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId] && LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId][i] && LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId][i].IsuserModifyObjfields){
                                        schemaViewSortObjEachLevel['schemaSortObj'][response[0].schemaTemplateId][i]['ObjFieldset'] = LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId][i]['ObjFieldset'];

                                        }
                                        else if(LocalConfigData.currentPageOrderedEntries && LocalConfigData.currentPageOrderedEntries[0] && Object.keys(LocalConfigData.currentPageOrderedEntries[0]).length>0 &&  LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId] && LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId][i] && LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId][i].IsuserModifyAMfields){
                                        schemaViewSortObjEachLevel['schemaSortObj'][response[0].schemaTemplateId][i]['AMFieldSet'] = LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[response[0].schemaTemplateId][i]['AMFieldSet'];

                                        }
                                        else{
                                            // Added for App hang in startup loading (when options tap value not created in schema view)

                                            if(isSupportAMViewDetailsAndschemaTemplatecustomlabel && response[0] && response[0].value && response[0].value.schemaViewData[i] && response[0].value.schemaViewData[i].ObjectFieldSet && Object.keys(response[0].value.schemaViewData[i].ObjectFieldSet).length >0){

                                                //  if(response[0] && response[0].value && response[0].value.schemaViewData[i] && response[0].value.schemaViewData[i].ObjectFieldSet && Object.keys(response[0].value.schemaViewData[i].ObjectFieldSet).length >0){

                                                for(var j =0;j< Object.keys(response[0].value.schemaViewData[i].ObjectFieldSet).length;j++){
                                                    if(response[0].value.schemaViewData[i].optionConfigDetailsMap['ObjectSortField'] == response[0].value.schemaViewData[i].ObjectFieldSet[j].fieldPath){
                                                        var tempObj = {label: response[0].value.schemaViewData[i].ObjectFieldSet[j].label,
                                                        isDateFormat: false,
                                                        isReference: false,
                                                        type:response[0].value.schemaViewData[i].ObjectFieldSet[j].type,
                                                        fieldPath: (response[0].value.schemaViewData[i].optionConfigDetailsMap['ObjectSortOrder'] == 'DESC') ? '-'+response[0].value.schemaViewData[i].optionConfigDetailsMap['ObjectSortField']:response[0].value.schemaViewData[i].optionConfigDetailsMap['ObjectSortField'],
                                                        showArrowdown : (response[0].value.schemaViewData[i].optionConfigDetailsMap['ObjectSortOrder'] == 'DESC') ? true : false,
                                                        selected: true};
                                                        if(response[0].value.schemaViewData[i].ObjectFieldSet[j].type == 'datetime' || response[0].value.schemaViewData[i].ObjectFieldSet[j].type == 'date'){
                                                            tempObj.isDateFormat = true;
                                                        }else if(response[0].value.schemaViewData[i].ObjectFieldSet[j].type == 'reference'){
                                                            tempObj.isReference = true;
                                                            if(tempObj.fieldPath.endsWith('__c'))
                                                                tempObj.fieldPath = tempObj.fieldPath.replace('__c','__r');
                                                            if(tempObj.fieldPath.endsWith('Id'))
                                                                tempObj.fieldPath = tempObj.fieldPath.replace('Id','');
                                                        }

                                                    }
                                                    var fieldset = response[0].value.schemaViewData[i].ObjectFieldSet[j];
                                                    var tempObj1 = {label: fieldset.label,
                                                            isDateFormat: false,
                                                            isReference: false,
                                                            fieldPath: fieldset.fieldPath,
                                                            type:fieldset.type,
                                                            selected: true};
                                                    if(fieldset.type == 'datetime' || fieldset.type == 'date'){
                                                        tempObj1.isDateFormat = true;
                                                    }else if(fieldset.type == 'reference'){
                                                        tempObj1.isReference = true;
                                                        if(tempObj1.fieldPath.endsWith('__c'))
                                                            tempObj1.fieldPath = tempObj1.fieldPath.replace('__c','__r');
                                                        if(tempObj1.fieldPath.endsWith('Id'))
                                                            tempObj1.fieldPath = tempObj1.fieldPath.replace('Id','');
                                                    }
                                                    tempObjFieldset.push(tempObj1);

                                                }
                                            }else if(!isSupportAMViewDetailsAndschemaTemplatecustomlabel && response[0] && response[0].value && response[0].value.schemaViewData[i] && response[0].value.schemaViewData[i].ViewObjectFieldSet && Object.keys(response[0].value.schemaViewData[i].ViewObjectFieldSet).length >0){
                                                //This else if added for Object view detail fieldset for sorting
                                                for(var j =0;j< Object.keys(response[0].value.schemaViewData[i].ViewObjectFieldSet).length;j++){
                                                    if(response[0].value.schemaViewData[i].optionConfigDetailsMap['ObjectSortField'] == response[0].value.schemaViewData[i].ViewObjectFieldSet[j].fieldPath){
                                                        var tempObj = {label: response[0].value.schemaViewData[i].ViewObjectFieldSet[j].label,
                                                        isDateFormat: false,
                                                        isReference: false,
                                                        type:response[0].value.schemaViewData[i].ViewObjectFieldSet[j].type,
                                                        fieldPath: (response[0].value.schemaViewData[i].optionConfigDetailsMap['ObjectSortOrder'] == 'DESC') ? '-'+response[0].value.schemaViewData[i].optionConfigDetailsMap['ObjectSortField']:response[0].value.schemaViewData[i].optionConfigDetailsMap['ObjectSortField'],
                                                        showArrowdown : (response[0].value.schemaViewData[i].optionConfigDetailsMap['ObjectSortOrder'] == 'DESC') ? true : false,
                                                        selected: true};
                                                        if(response[0].value.schemaViewData[i].ViewObjectFieldSet[j].type == 'datetime' || response[0].value.schemaViewData[i].ViewObjectFieldSet[j].type == 'date'){
                                                            tempObj.isDateFormat = true;
                                                        }else if(response[0].value.schemaViewData[i].ViewObjectFieldSet[j].type == 'reference'){
                                                            tempObj.isReference = true;
                                                            if(tempObj.fieldPath.endsWith('__c'))
                                                                tempObj.fieldPath = tempObj.fieldPath.replace('__c','__r');
                                                            if(tempObj.fieldPath.endsWith('Id'))
                                                                tempObj.fieldPath = tempObj.fieldPath.replace('Id','');
                                                        }

                                                    }
                                                    var fieldset = response[0].value.schemaViewData[i].ViewObjectFieldSet[j];
                                                   var tempObj1 = {label: fieldset.label,
                                                            isDateFormat: false,
                                                            isReference: false,
                                                            fieldPath: fieldset.fieldPath,
                                                            type:fieldset.type,
                                                            selected: true};
                                                    if(fieldset.type == 'datetime' || fieldset.type == 'date'){
                                                        tempObj1.isDateFormat = true;
                                                    }else if(fieldset.type == 'reference'){
                                                        tempObj1.isReference = true;
                                                        if(tempObj1.fieldPath.endsWith('__c'))
                                                            tempObj1.fieldPath = tempObj1.fieldPath.replace('__c','__r');
                                                        if(tempObj1.fieldPath.endsWith('Id'))
                                                            tempObj1.fieldPath = tempObj1.fieldPath.replace('Id','');
                                                    }
                                                    tempObjFieldset.push(tempObj1);

                                                }
                                            }


                                            if(response[0].value.schemaViewData[i].optionConfigDetailsMap['ObjectSortField'] == ''){
                                                var tempObj2 = {
                                                    isDateFormat: false,
                                                    isReference: false,
                                                    fieldPath: 'Name',
                                                    showArrowdown : false,
                                                    selected: true
                                                };
                                            }
                                            if(!isSupportAMViewDetailsAndschemaTemplatecustomlabel && response[0] && response[0].value && response[0].value.schemaViewData[i] && response[0].value.schemaViewData[i].AMFieldSet && Object.keys(response[0].value.schemaViewData[i].AMFieldSet).length>0){

                                            //if(response[0] && response[0].value && response[0].value.schemaViewData[i] && response[0].value.schemaViewData[i].AMFieldSet && Object.keys(response[0].value.schemaViewData[i].AMFieldSet).length>0){

                                                for(var j=0;j< Object.keys(response[0].value.schemaViewData[i].AMFieldSet).length;j++){
                                                    if(response[0].value.schemaViewData[i].optionConfigDetailsMap['AMSortField'] == response[0].value.schemaViewData[i].AMFieldSet[j].fieldPath){
                                                        var tempAM = {label: response[0].value.schemaViewData[i].AMFieldSet[j].label,
                                                        isDateFormat: false,
                                                        isReference: false,
                                                        type: response[0].value.schemaViewData[i].AMFieldSet[j].type,
                                                        fieldPath: (response[0].value.schemaViewData[i].optionConfigDetailsMap['AMSortOrder'] == 'DESC') ? '-'+response[0].value.schemaViewData[i].optionConfigDetailsMap['AMSortField']:response[0].value.schemaViewData[i].optionConfigDetailsMap['AMSortField'],
                                                        showArrowdown : ( response[0].value.schemaViewData[i].optionConfigDetailsMap['AMSortOrder'] == 'DESC') ? true : false,
                                                        selected: true};
                                                        if(response[0].value.schemaViewData[i].AMFieldSet[j].type == 'datetime' || response[0].value.schemaViewData[i].AMFieldSet[j].type == 'date'){
                                                            tempAM.isDateFormat = true;
                                                        }else if(response[0].value.schemaViewData[i].AMFieldSet[j].type == 'reference'){
                                                            tempAM.isReference = true;
                                                            if(tempAM.fieldPath.endsWith('__c'))
                                                                tempAM.fieldPath = tempAM.fieldPath.replace('__c','__r');
                                                            if(tempAM.fieldPath.endsWith('Id'))
                                                                tempAM.fieldPath = tempAM.fieldPath.replace('Id','');
                                                        }
                                                    }
                                                    var fieldset = response[0].value.schemaViewData[i].AMFieldSet[j];
                                                    var tempAM1 = {label: fieldset.label,
                                                            isDateFormat: false,
                                                            isReference: false,
                                                            fieldPath: fieldset.fieldPath,
                                                            picklistValues:fieldset.picklistValues,
                                                            type: fieldset.type,
                                                            selected: true};
                                                    if(fieldset.type == 'datetime' || fieldset.type == 'date'){
                                                        tempAM1.isDateFormat = true;
                                                    }else if(fieldset.type == 'reference'){
                                                        tempAM1.isReference = true;
                                                        if(tempAM1.fieldPath.endsWith('__c'))
                                                            tempAM1.fieldPath = tempAM1.fieldPath.replace('__c','__r');
                                                        if(tempAM1.fieldPath.endsWith('Id'))
                                                            tempAM1.fieldPath = tempAM1.fieldPath.replace('Id','');
                                                    }
                                                    tempAMFieldset.push(tempAM1);
                                                }
                                            }else if(isSupportAMViewDetailsAndschemaTemplatecustomlabel && response[0] && response[0].value && response[0].value.schemaViewData[i] && response[0].value.schemaViewData[i].AMViewFieldset && Object.keys(response[0].value.schemaViewData[i].AMViewFieldset).length>0){
                                                //This else if added for AM view details support in sorting

                                                for(var j=0;j< Object.keys(response[0].value.schemaViewData[i].AMViewFieldset).length;j++){
                                                    if(response[0].value.schemaViewData[i].optionConfigDetailsMap['AMSortField'] == response[0].value.schemaViewData[i].AMViewFieldset[j].fieldPath){
                                                        var tempAM = {label: response[0].value.schemaViewData[i].AMViewFieldset[j].label,
                                                        isDateFormat: false,
                                                        isReference: false,
                                                        type: response[0].value.schemaViewData[i].AMViewFieldset[j].type,
                                                        fieldPath: (response[0].value.schemaViewData[i].optionConfigDetailsMap['AMSortOrder'] == 'DESC') ? '-'+response[0].value.schemaViewData[i].optionConfigDetailsMap['AMSortField']:response[0].value.schemaViewData[i].optionConfigDetailsMap['AMSortField'],
                                                        showArrowdown : ( response[0].value.schemaViewData[i].optionConfigDetailsMap['AMSortOrder'] == 'DESC') ? true : false,
                                                        selected: true};
                                                        if(response[0].value.schemaViewData[i].AMViewFieldset[j].type == 'datetime' || response[0].value.schemaViewData[i].AMViewFieldset[j].type == 'date'){
                                                            tempAM.isDateFormat = true;
                                                        }else if(response[0].value.schemaViewData[i].AMViewFieldset[j].type == 'reference'){
                                                            tempAM.isReference = true;
                                                            if(tempAM.fieldPath.endsWith('__c'))
                                                                tempAM.fieldPath = tempAM.fieldPath.replace('__c','__r');
                                                            if(tempAM.fieldPath.endsWith('Id'))
                                                                tempAM.fieldPath = tempAM.fieldPath.replace('Id','');
                                                        }
                                                    }
                                                    var fieldset = response[0].value.schemaViewData[i].AMViewFieldset[j];
                                                    tempAM1 = {label: fieldset.label,
                                                            isDateFormat: false,
                                                            isReference: false,
                                                            fieldPath: fieldset.fieldPath,
                                                            picklistValues:fieldset.picklistValues,
                                                            type: fieldset.type,
                                                            selected: true};
                                                    if(fieldset.type == 'datetime' || fieldset.type == 'date'){
                                                        tempAM1.isDateFormat = true;
                                                    }else if(fieldset.type == 'reference'){
                                                        tempAM1.isReference = true;
                                                        if(tempAM1.fieldPath.endsWith('__c'))
                                                            tempAM1.fieldPath = tempAM1.fieldPath.replace('__c','__r');
                                                        if(tempAM1.fieldPath.endsWith('Id'))
                                                            tempAM1.fieldPath = tempAM1.fieldPath.replace('Id','');
                                                    }
                                                    tempAMFieldset.push(tempAM1);
                                                }

                                            }
                                            //end AM view details support in sorting


                                            if(response[0].value.schemaViewData[i].optionConfigDetailsMap['AMSortField'] == ''){
                                                var tempAM2 = {
                                                    isDateFormat: false,
                                                    isReference: false,
                                                    fieldPath: 'Name',
                                                    showArrowdown : false,
                                                    selected: true
                                                };
                                            }
                                            console.log('schemaViewSortObjEachLevel',schemaViewSortObjEachLevel);
                                            if(schemaViewSortObjEachLevel && Object.keys(schemaViewSortObjEachLevel).length>0 && schemaViewSortObjEachLevel['schemaSortObj'] && Object.keys(schemaViewSortObjEachLevel['schemaSortObj']).length>0 && response[0] && response[0].schemaTemplateId && schemaViewSortObjEachLevel['schemaSortObj'][response[0].schemaTemplateId]){
                                              schemaViewSortObjEachLevel['schemaSortObj'][response[0].schemaTemplateId][i] = {
                                                'ObjSortFieldName' : tempObj,
                                                'ObjSortOrder' : response[0].value.schemaViewData[i].optionConfigDetailsMap['ObjectSortField'] != '' ? response[0].value.schemaViewData[i].optionConfigDetailsMap['ObjectSortOrder'] : 'ASC',
                                                'sortObjName' :response[0].value.schemaViewData[i].apiName,
                                                'AMSortFieldName' :tempAM2,
                                                'AmSortOrder' : response[0].value.schemaViewData[i].optionConfigDetailsMap['AMSortField'] != '' ? response[0].value.schemaViewData[i].optionConfigDetailsMap['AMSortOrder'] : 'ASC',
                                                'Index':i,
                                                'IsuserModifiedObj' : false,
                                                'IsuserModifiedAM' : false,
                                                'IsuserModifyAMfields': false,
                                                'IsuserModifyObjfields': false,
                                                'AMFieldSet': tempAMFieldset,
                                                'ObjFieldset': tempObjFieldset
                                            };
                                            }
                                           
                                        }

                                    }

                                }
                                //window.navigator.smartstore.upsertSoupEntries("LocalConfigurationData",[schemaViewSortObjEachLevel], function(data) {
                                  _this.getSchemaViewById(SchemaidList, ++indexval).then(function (SchemaviewQueryData) {
                                    resolve('');
                                    });
                                // },function(error){
                                //   console.log('LocalConfigurationData error',error)
                                // });
                            });
                        }else{
                          _this.getSchemaViewById(SchemaidList, ++indexval).then(function (SchemaviewQueryData) {
                            resolve('');
                            });
                        }
                      });
                     
                    });
                 // });
                });
              }

            } else {
              _this.getSchemaViewById(SchemaidList, ++indexval).then(function (SchemaviewQueryData) {
                resolve("");
              });

            }
          } else {
            _this.getSchemaViewById(SchemaidList, ++indexval).then(function (SchemaviewQueryData) {
              resolve("");
            });

          }
        }, function (error) {
          console.log('error:::', error);
        });

      } else {
        resolve("All iteration completed");
        

      }
    });
  }
   getlistofschemadata(index,temparray,schemaviewDetail,ObjectDataDetails): Promise<any> {
    var _this = this;

    return new Promise((resolve, reject) => {

    if(index < temparray.length){

        
        var value1=temparray[index].value;
        var key=temparray[index].Id;
        var queryString='SELECT Id ,ExAM__Schema_Template__r.Name, ExAM__Schema_Template__r.Id FROM ExAM__Schema_View__c WHERE Id = '+'\''+key+'\'';

       
        _this.forceapi.query(queryString).then(function(queryData) {
            var QuerySpec = window.navigator.smartstore.buildExactQuerySpec("schemaviewId",temparray[index].Id,1000);
            console.log('schemaTemplatedata',QuerySpec);

           // window.navigator.smartstore.querySoup("SchemaEditedRecordList", QuerySpec, function(schemaTemplatedata) {
             // console.log('schemaTemplatedata',schemaTemplatedata);

                // var offlineQuerySpec = window.navigator.smartstore.buildExactQuerySpec("schemaviewId",temparray[index].Id,1000);
                // window.navigator.smartstore.querySoup("OfflineRecordList", QuerySpec, function(offlineschemaTemplatedata) {
                //   console.log('offlineschemaTemplatedata',offlineschemaTemplatedata);

                // //addOfflineSamplingInRelaunch(temparray[index].Id, value1).then(function(){
                    //addparentFieldUpdateval(temparray[index].Id, value1).then(function(){
                        //  if(offlineschemaTemplatedata.totalEntries>0){
                        //     if(offlineschemaTemplatedata.currentPageOrderedEntries && offlineschemaTemplatedata.currentPageOrderedEntries[0]){
                        //       Object.keys(offlineschemaTemplatedata.currentPageOrderedEntries).forEach(function(editedkey){
                        //           var editedval=offlineschemaTemplatedata.currentPageOrderedEntries[editedkey]
                        //             var currentshcemsIdex=editedval.currentschemaIdex;
                        //             if(value1['schemaViewData'] && value1['schemaViewData'][currentshcemsIdex] ){
    
                        //                 if(currentshcemsIdex != 0){
                        //                     if(editedval && editedval.isLookUpNode){
                        //                         if(value1['schemaViewData'][currentshcemsIdex].childAssessableObjs !=null && value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.lookUpParentId]){
                        //                             if(editedval && editedval.includeReadonlyField){
                        //                                 value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.lookUpParentId].push(editedval.includeReadonlyField);

                        //                             }else if(editedval && editedval.value){
                        //                                 value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.lookUpParentId].push(editedval.value);

                        //                             }                                                    
                        //                         }else{
                        //                             if(value1['schemaViewData'][currentshcemsIdex].childAssessableObjs==null || value1['schemaViewData'][currentshcemsIdex].childAssessableObjs==undefined){
                        //                                 value1['schemaViewData'][currentshcemsIdex].childAssessableObjs={};
                        //                                 value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.lookUpParentId]=[];
                        //                                 if(editedval && editedval.includeReadonlyField){
                        //                                     value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.lookUpParentId].push(editedval.includeReadonlyField);

                        //                                 }else if(editedval && editedval.value){
                        //                                     value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.lookUpParentId].push(editedval.value);
    
                        //                                 }  
    
                        //                             }else{
                        //                                 if(typeof value1['schemaViewData'][currentshcemsIdex].childAssessableObjs == 'object'){
                        //                                      // value1['schemaViewData'][currentshcemsIdex].childAssessableObjs={};

                        //                                     value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.lookUpParentId]=[];
                        //                                     if(editedval && editedval.includeReadonlyField){
                        //                                         value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.lookUpParentId].push(editedval.includeReadonlyField);
    
                        //                                     }else if(editedval && editedval.value){
                        //                                         value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.lookUpParentId].push(editedval.value);
        
                        //                                     }         
                        //                                 }
                                                       
                        //                             }
                                                  
                        //                         }
                        //                     }else{
                        //                         if(value1['schemaViewData'][currentshcemsIdex].childAssessableObjs !=null && value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.parentId]){
                        //                             if(editedval && editedval.includeReadonlyField){
                        //                                 value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.parentId].push(editedval.includeReadonlyField);

                        //                             }else if(editedval && editedval.value){
                        //                                 value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.parentId].push(editedval.value);

                        //                             }                                                    
                        //                         }else{
                        //                             if(value1['schemaViewData'][currentshcemsIdex].childAssessableObjs==null || value1['schemaViewData'][currentshcemsIdex].childAssessableObjs==undefined){
                        //                                 value1['schemaViewData'][currentshcemsIdex].childAssessableObjs={};
                        //                                 value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.parentId]=[];
                        //                                 if(editedval && editedval.includeReadonlyField){
                        //                                     value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.parentId].push(editedval.includeReadonlyField);

                        //                                 }else if(editedval && editedval.value){
                        //                                     value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.parentId].push(editedval.value);
    
                        //                                 }  
    
                        //                             }else{
                        //                                 if(typeof value1['schemaViewData'][currentshcemsIdex].childAssessableObjs == 'object'){
                        //                                      // value1['schemaViewData'][currentshcemsIdex].childAssessableObjs={};

                        //                                     value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.parentId]=[];
                        //                                     if(editedval && editedval.includeReadonlyField){
                        //                                         value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.parentId].push(editedval.includeReadonlyField);
    
                        //                                     }else if(editedval && editedval.value){
                        //                                         value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.parentId].push(editedval.value);
        
                        //                                     }         
                        //                                 }
                                                       
                        //                             }
                                                  
                        //                         }
                        //                     }
                                            
        
                        //                 }else if(currentshcemsIdex == 0){
                        //                     if(value1['schemaViewData'][currentshcemsIdex].assessableObjs){
                        //                         if(editedval && editedval.includeReadonlyField){
                        //                             if(value1['schemaViewData'][currentshcemsIdex].assessableObjs){
                        //                                 value1['schemaViewData'][currentshcemsIdex].assessableObjs.push(editedval.includeReadonlyField);

                        //                             }else{
                        //                                 value1['schemaViewData'][currentshcemsIdex].assessableObjs=[];
                        //                                 value1['schemaViewData'][currentshcemsIdex].assessableObjs.push(editedval.includeReadonlyField);

                        //                             }

                        //                         }else if(editedval && editedval.value){
                        //                             //Added here for Cannot read properties of undefined (reading 'push')
                        //                             // value1['schemaViewData'][currentshcemsIdex].assessableObjs[editedval.parentId].push(editedval.value);

                        //                             if(value1['schemaViewData'][currentshcemsIdex].assessableObjs){
                        //                                 value1['schemaViewData'][currentshcemsIdex].assessableObjs.push(editedval.value);

                        //                             }else{
                        //                                 value1['schemaViewData'][currentshcemsIdex].assessableObjs=[];
                        //                                 value1['schemaViewData'][currentshcemsIdex].assessableObjs.push(editedval.value);

                        //                             }

                        //                         }  
        
                                                
                        //                     }
                        //                 }
                        //             }

                        //         });
                        //     }
                        // } 


                // if(schemaTemplatedata.totalEntries>0){
                //   console.log('schemaTemplatedata',schemaTemplatedata);
                //         if(schemaTemplatedata.currentPageOrderedEntries && schemaTemplatedata.currentPageOrderedEntries[0]){
                //           Object.keys(offlineschemaTemplatedata.currentPageOrderedEntries).forEach(function(editedkey){
                //             var editedval=offlineschemaTemplatedata.currentPageOrderedEntries[editedkey]
                //              var currentshcemsIdex=editedval.currentschemaIdex;
                //             if(value1['schemaViewData'] && value1['schemaViewData'][currentshcemsIdex] ){

                //             if(value1['schemaViewData'][currentshcemsIdex].childAssessableObjs !=null){
                //                 if(value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.parentId]){
                //                     // value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.parentId]=editedval.value;
                //                     var childassObjIdList = _.pluck(value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.parentId], 'Id');
                //                     if(childassObjIdList.includes(editedval.Id)){
                //                         var childassObjIdIndex = _.findIndex(value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.parentId],{'Id' : editedval.Id});

                //                         value1['schemaViewData'][currentshcemsIdex].childAssessableObjs[editedval.parentId][childassObjIdIndex]=editedval.value;

                //                     }
                //                 }

                //             }else if(value1['schemaViewData'][currentshcemsIdex].assessableObjs !=null){
                //                 if(value1['schemaViewData'][currentshcemsIdex].assessableObjs){
                //                     var assObjIdList = _.pluck(value1['schemaViewData'][currentshcemsIdex].assessableObjs, 'Id');
                //                     if(assObjIdList.includes(editedval.Id)){
                //                         var assObjIdIndex = _.findIndex(value1['schemaViewData'][currentshcemsIdex].assessableObjs,{'Id' : editedval.Id});

                //                         value1['schemaViewData'][currentshcemsIdex].assessableObjs[assObjIdIndex]=editedval.value;

                //                     }
                //                 }
                //             }
                //             }
                //             });
                //             var SchemaTemlplateName='';
                //             if(queryData && queryData.records && queryData.records[0] && queryData.records[0].ExAM__Schema_Template__r && queryData.records[0].ExAM__Schema_Template__r.Name){
                //                 SchemaTemlplateName=queryData.records[0].ExAM__Schema_Template__r.Name;
                //             }
                //             var SchemaId='';
                //             if(queryData && queryData.records && queryData.records[0] && queryData.records[0].ExAM__Schema_Template__r && queryData.records[0].ExAM__Schema_Template__r.Id){
                //                 SchemaId=queryData.records[0].ExAM__Schema_Template__r.Id;
                //             }

                //             //isEnabledReadOnlySV Added for ReadOnlySV(W-063677)
                //             var thisviewhaveisEnabledReadOnlySV=false;
                //             var thisviewhaveisEnabledSFDataSync = false;
                //             var overrideBtnTruncate = false;
                //             var overrideBtnWidth;
                //             //sync buttons with ordernumber
                //             var thisviewhaveSyncButtonOrder=false;
                //             // Added for sync text update  Mobile - Custom Sync Text - W-066973
                //             var Full_Sync_Button = '', Full_Sync_Description = '';
                //             var Smart_Sync_Button = '', Smart_Sync_Description = '';

                //             if(value1 && value1['amStatusMapping'] && value1['amStatusMapping'] != null && value1['amStatusMapping'] !='undefined' && value1['amStatusMapping']!=''){
                //                 var amstatusmap=value1['amStatusMapping'];
                //                 var jsonval=JSON.parse(_.unescape(amstatusmap));
                //                 var amstatusfieldval=Object.keys(jsonval);
                //                 var amstatusmapping={};
                //                 var syncOptionDetails = []; //added for sync modal updates work item(multiple sync button) - vinoth
                //                 amstatusmapping=jsonval;
                             
                //                 if(amstatusmapping &&  Object.keys(amstatusmapping).length>0 && amstatusmapping){
                                           
                //                     if(amstatusfieldval && amstatusfieldval.length>0){
                //                         Object.keys(amstatusfieldval).forEach(function(mapkey){
                //                           var mapvalue=amstatusfieldval[mapkey];
                //                             if(mapvalue && mapvalue!='' && mapvalue!=null && mapvalue=='SVOptions'){

                //                                 if(jsonval[mapvalue] && jsonval[mapvalue]!='' && jsonval[mapvalue]!=null){
                //                                     if(jsonval[mapvalue]['ReadOnlySync'] && jsonval[mapvalue]['ReadOnlySync']!='' && jsonval[mapvalue]['ReadOnlySync']!=null && jsonval[mapvalue]['ReadOnlySync']=='True'){
                //                                         thisviewhaveisEnabledReadOnlySV=true;
                //                                     }else{
                //                                         thisviewhaveisEnabledReadOnlySV=false;
                //                                     }
                //                                 }
                                              
                                              
                //                                 if(jsonval[mapvalue]['full_Sync_Button_order_no'] || jsonval[mapvalue]['smart_Sync_Button_order_no'] || jsonval[mapvalue]['sF_Data_Load_Button_order_no']){
                //                                     thisviewhaveSyncButtonOrder=true; 
                //                                 }else{
                //                                     thisviewhaveSyncButtonOrder=false;
                //                                 }
                //                                 if(jsonval[mapvalue]['enableSFDataSync'] && jsonval[mapvalue]['enableSFDataSync']!='' && jsonval[mapvalue]['enableSFDataSync']!=null && jsonval[mapvalue]['enableSFDataSync']=='true'){
                //                                     thisviewhaveisEnabledSFDataSync=true;
                //                                 }else{
                //                                     thisviewhaveisEnabledSFDataSync=false;
                //                                 }

                //                                 if(jsonval[mapvalue]['overrideBtnTruncate'] && jsonval[mapvalue]['overrideBtnTruncate']!='' && jsonval[mapvalue]['overrideBtnTruncate']!=null && jsonval[mapvalue]['overrideBtnTruncate']=='true'){
                //                                     overrideBtnTruncate=true;
                //                                 }else{
                //                                     overrideBtnTruncate=false;
                //                                 }
                //                                 if(jsonval[mapvalue]['overrideBtnWidth'] && jsonval[mapvalue]['overrideBtnWidth']!='' && jsonval[mapvalue]['overrideBtnWidth']!=null){
                //                                     overrideBtnWidth = jsonval[mapvalue]['overrideBtnWidth'];
                //                                 }else{
                //                                     overrideBtnWidth= 100;
                //                                 }

                                               
                                                
                //                             }else if(mapvalue && mapvalue!='' && mapvalue!=null && mapvalue=='newSyncOptionDetail' && jsonval && jsonval[mapvalue] && jsonval[mapvalue].length > 0){
                //                                 syncOptionDetails = jsonval[mapvalue];
                //                             }

                //                         });
                //                     }
                                   
                //             }


                            

                //             var amstatusmap1=value1['amStatusMapping'];
                //             var amstatusmap=JSON.parse(_.unescape(amstatusmap));

                //             if(thisviewhaveSyncButtonOrder &&  amstatusmap &&  amstatusmap['SVOptions']){
                //                 _this.ordertheJsonUseOrderNum(amstatusmap['SVOptions']).then(function(syncButtonorederedDetail){
                                            
                //                     var newObjectDataDetails = {SchemaId:SchemaId,schemaTemplateId:key,value:value1,schemaviewName:schemaviewDetail[key],schemaviewTemplateName:SchemaTemlplateName,thisviewhaveisEnabledReadOnlySV:thisviewhaveisEnabledReadOnlySV,thisviewhaveSyncButtonOrder:thisviewhaveSyncButtonOrder,thisviewhaveisEnabledSFDataSync:thisviewhaveisEnabledSFDataSync,syncButtonorederedDetail:syncButtonorederedDetail,overrideBtnTruncate:overrideBtnTruncate,overrideBtnWidth:overrideBtnWidth,syncOptionDetails:syncOptionDetails};
            
                //                     ObjectDataDetails.push(newObjectDataDetails);
                //                     // defer.resolve(ObjectDataDetails);
                //                     _this.getlistofschemadata(++index,temparray,schemaviewDetail,ObjectDataDetails).then(function(ObjectDataDetails){
                //                         resolve(ObjectDataDetails);
                //                     });
                //                 });
                //             }else{
                //                 var newObjectDataDetails2 = {SchemaId:SchemaId,schemaTemplateId:key,value:value1,schemaviewName:schemaviewDetail[key],schemaviewTemplateName:SchemaTemlplateName,thisviewhaveisEnabledReadOnlySV:thisviewhaveisEnabledReadOnlySV,thisviewhaveSyncButtonOrder:thisviewhaveSyncButtonOrder,thisviewhaveisEnabledSFDataSync:thisviewhaveisEnabledSFDataSync,overrideBtnTruncate:overrideBtnTruncate,overrideBtnWidth:overrideBtnWidth,syncOptionDetails:syncOptionDetails};
        
                //                 ObjectDataDetails.push(newObjectDataDetails2);
                //                 // defer.resolve(ObjectDataDetails);
                //                 _this.getlistofschemadata(++index,temparray,schemaviewDetail,ObjectDataDetails).then(function(ObjectDataDetails){
                //                     resolve(ObjectDataDetails);
                //                 });
                //             }

                //         }else{

                //             var newObjectDataDetails3 = {SchemaId:SchemaId,schemaTemplateId:key,value:value1,schemaviewName:schemaviewDetail[key],schemaviewTemplateName:SchemaTemlplateName,thisviewhaveisEnabledReadOnlySV:thisviewhaveisEnabledReadOnlySV,thisviewhaveSyncButtonOrder:thisviewhaveSyncButtonOrder,thisviewhaveisEnabledSFDataSync:thisviewhaveisEnabledSFDataSync,overrideBtnTruncate:overrideBtnTruncate,overrideBtnWidth:overrideBtnWidth,syncOptionDetails:syncOptionDetails};
    
                //             ObjectDataDetails.push(newObjectDataDetails3);
                //             // defer.resolve(ObjectDataDetails);
                //               _this.getlistofschemadata(++index,temparray,schemaviewDetail,ObjectDataDetails).then(function(ObjectDataDetails){
                //                 resolve(ObjectDataDetails);
                //              });
                //         }
            
                //     }else{
                //       _this.getlistofschemadata(++index,temparray,schemaviewDetail,ObjectDataDetails).then(function(ObjectDataDetails){
                //                             resolve(ObjectDataDetails);
                //                         });
                //     }

                // }else{
                    var SchemaTemlplateName='';
                    if(queryData  && queryData[0] && queryData[0].ExAM__Schema_Template__r && queryData[0].ExAM__Schema_Template__r.Name){
                        SchemaTemlplateName=queryData[0].ExAM__Schema_Template__r.Name;
                    }
                    var SchemaId='';
                    if(queryData && queryData[0] && queryData[0].ExAM__Schema_Template__r && queryData[0].ExAM__Schema_Template__r.Id){
                        SchemaId=queryData[0].ExAM__Schema_Template__r.Id;
                    }
                        //isEnabledReadOnlySV Added for ReadOnlySV(W-063677)
                        var thisviewhaveisEnabledReadOnlySV=false;
                        var thisviewhaveisEnabledSFDataSync=false;
                        var overrideBtnTruncate = false;
                        var overrideBtnWidth;
                        //sync buttons with ordernumber
                        var thisviewhaveSyncButtonOrder=false;
                        // Added for sync text update  Mobile - Custom Sync Text - W-066973
                        var Full_Sync_Button = '', Full_Sync_Description = '';
                        var Smart_Sync_Button = '', Smart_Sync_Description = '';

                        if(value1 && value1['amStatusMapping'] && value1['amStatusMapping'] != null && value1['amStatusMapping'] !='undefined' && value1['amStatusMapping']!=''){
                            var amstatusmap=value1['amStatusMapping'];
                            var jsonval=JSON.parse(_.unescape(amstatusmap));
                            var amstatusfieldval=Object.keys(jsonval);
                            var amstatusmapping={};
                            var syncOptionDetails = []; //added for sync modal updates work item(multiple sync button) - vinoth
                            amstatusmapping=jsonval;
                        
                            if(amstatusmapping &&  Object.keys(amstatusmapping).length>0 && amstatusmapping){
                                    
                                if(amstatusfieldval && amstatusfieldval.length>0){
                                    Object.keys(amstatusfieldval).forEach(function(mapkey){
                                      var mapvalue=amstatusfieldval[mapkey];
                                        if(mapvalue && mapvalue!='' && mapvalue!=null && mapvalue=='SVOptions'){

                                            if(jsonval[mapvalue] && jsonval[mapvalue]!='' && jsonval[mapvalue]!=null){
                                                if(jsonval[mapvalue]['ReadOnlySync'] && jsonval[mapvalue]['ReadOnlySync']!='' && jsonval[mapvalue]['ReadOnlySync']!=null && jsonval[mapvalue]['ReadOnlySync']=='True'){
                                                    thisviewhaveisEnabledReadOnlySV=true;
                                                }else{
                                                    thisviewhaveisEnabledReadOnlySV=false;
                                                }
                                            }
                                            if(jsonval[mapvalue]['full_Sync_Button_order_no']  ){
                                                thisviewhaveSyncButtonOrder=true;
                                            }else{
                                                thisviewhaveSyncButtonOrder=false;
                                            }
                                           if(jsonval[mapvalue]['enableSFDataSync'] && jsonval[mapvalue]['enableSFDataSync']!='' && jsonval[mapvalue]['enableSFDataSync']!=null && jsonval[mapvalue]['enableSFDataSync']=='true'){
                                                thisviewhaveisEnabledSFDataSync=true;
                                            }else{
                                                thisviewhaveisEnabledSFDataSync=false;
                                            }

                                            if(jsonval[mapvalue]['overrideBtnTruncate'] && jsonval[mapvalue]['overrideBtnTruncate']!='' && jsonval[mapvalue]['overrideBtnTruncate']!=null && jsonval[mapvalue]['overrideBtnTruncate']=='true'){
                                                overrideBtnTruncate=true;
                                            }else{
                                                overrideBtnTruncate=false;
                                            }
                                            if(jsonval[mapvalue]['overrideBtnWidth'] && jsonval[mapvalue]['overrideBtnWidth']!='' && jsonval[mapvalue]['overrideBtnWidth']!=null){
                                                overrideBtnWidth = jsonval[mapvalue]['overrideBtnWidth'];
                                            }else{
                                                overrideBtnWidth= 100;
                                            }
                                           
                                            /* // Added for sync text update  Mobile - Custom Sync Text - W-066973
                                             if(jsonval[mapvalue] && jsonval[mapvalue]!='' && jsonval[mapvalue]!=null){
                                                console.log('jsonval[mapvalue]',jsonval[mapvalue]);
                                                if(jsonval[mapvalue]['Full_Sync_Button'] && jsonval[mapvalue]['Full_Sync_Button']!='' && jsonval[mapvalue]['Full_Sync_Button']!=null && jsonval[mapvalue]['Full_Sync_Button']){
                                                    Full_Sync_Button=jsonval[mapvalue]['Full_Sync_Button'];;
                                                }else{
                                                    Full_Sync_Button='full sync button';
                                                }
                                            }
                                            if(jsonval[mapvalue] && jsonval[mapvalue]!='' && jsonval[mapvalue]!=null){
                                                console.log('jsonval[mapvalue]',jsonval[mapvalue]);
                                                if(jsonval[mapvalue]['Full_Sync_Description'] && jsonval[mapvalue]['Full_Sync_Description']!='' && jsonval[mapvalue]['Full_Sync_Description']!=null && jsonval[mapvalue]['Full_Sync_Description']){
                                                    Full_Sync_Description=jsonval[mapvalue]['Full_Sync_Description'];
                                                }else{
                                                    Full_Sync_Description='full sync description';
                                                }
                                            }
                                            if(jsonval[mapvalue] && jsonval[mapvalue]!='' && jsonval[mapvalue]!=null){
                                                console.log('jsonval[mapvalue]',jsonval[mapvalue]);
                                                if(jsonval[mapvalue]['Smart_Sync_Button'] && jsonval[mapvalue]['Smart_Sync_Button']!='' && jsonval[mapvalue]['Smart_Sync_Button']!=null && jsonval[mapvalue]['Smart_Sync_Button']){
                                                    Smart_Sync_Button=jsonval[mapvalue]['Smart_Sync_Button'];
                                                }else{
                                                    Smart_Sync_Button='smart sync button';
                                                }
                                            }
                                            if(jsonval[mapvalue] && jsonval[mapvalue]!='' && jsonval[mapvalue]!=null){
                                                console.log('jsonval[mapvalue]',jsonval[mapvalue]);
                                                if(jsonval[mapvalue]['Smart_Sync_Description'] && jsonval[mapvalue]['Smart_Sync_Description']!='' && jsonval[mapvalue]['Smart_Sync_Description']!=null && jsonval[mapvalue]['Smart_Sync_Description']){
                                                    Smart_Sync_Description=jsonval[mapvalue]['Smart_Sync_Description'];
                                                }else{
                                                    Smart_Sync_Description='smart sync description';
                                                }
                                            }
                                            // End
                                            */
                                        }else if(mapvalue && mapvalue!='' && mapvalue!=null && mapvalue=='newSyncOptionDetail' && jsonval && jsonval[mapvalue] && jsonval[mapvalue].length > 0){
                                            syncOptionDetails = jsonval[mapvalue];
                                        }
                                    });
                                }
                            
                            }

                            
                                var amstatusmap1=value1['amStatusMapping'];
                                var amstatusmap=JSON.parse(_.unescape(amstatusmap));

                            if(thisviewhaveSyncButtonOrder &&  amstatusmap &&  amstatusmap['SVOptions']){
                                _this.ordertheJsonUseOrderNum(amstatusmap['SVOptions']).then(function(syncButtonorederedDetail){
                                    
                                    var newObjectDataDetails4 = {SchemaId:SchemaId,schemaTemplateId:key,value:value1,schemaviewName:schemaviewDetail[key],schemaviewTemplateName:SchemaTemlplateName,thisviewhaveisEnabledReadOnlySV:thisviewhaveisEnabledReadOnlySV,thisviewhaveSyncButtonOrder:thisviewhaveSyncButtonOrder,thisviewhaveisEnabledSFDataSync:thisviewhaveisEnabledSFDataSync,syncButtonorederedDetail:syncButtonorederedDetail,overrideBtnTruncate:overrideBtnTruncate,overrideBtnWidth:overrideBtnWidth,syncOptionDetails:syncOptionDetails};
            
                                    ObjectDataDetails.push(newObjectDataDetails4);
                                    // defer.resolve(ObjectDataDetails);
                                      _this.getlistofschemadata(++index,temparray,schemaviewDetail,ObjectDataDetails).then(function(ObjectDataDetails){
                                        resolve(ObjectDataDetails);
                                     });
                                });
                            }else{
                                var newObjectDataDetails5 = {SchemaId:SchemaId,schemaTemplateId:key,value:value1,schemaviewName:schemaviewDetail[key],schemaviewTemplateName:SchemaTemlplateName,thisviewhaveisEnabledReadOnlySV:thisviewhaveisEnabledReadOnlySV,thisviewhaveSyncButtonOrder:thisviewhaveSyncButtonOrder,thisviewhaveisEnabledSFDataSync:thisviewhaveisEnabledSFDataSync,overrideBtnTruncate:overrideBtnTruncate,overrideBtnWidth:overrideBtnWidth,syncOptionDetails:syncOptionDetails};
        
                                ObjectDataDetails.push(newObjectDataDetails5);
                                // defer.resolve(ObjectDataDetails);
                                _this.getlistofschemadata(++index,temparray,schemaviewDetail,ObjectDataDetails).then(function(ObjectDataDetails){
                                    resolve(ObjectDataDetails);
                                 });
                            }

                        }else{

                            var newObjectDataDetails6 = {SchemaId:SchemaId,schemaTemplateId:key,value:value1,schemaviewName:schemaviewDetail[key],schemaviewTemplateName:SchemaTemlplateName,thisviewhaveisEnabledReadOnlySV:thisviewhaveisEnabledReadOnlySV,thisviewhaveSyncButtonOrder:thisviewhaveSyncButtonOrder,thisviewhaveisEnabledSFDataSync:thisviewhaveisEnabledSFDataSync,overrideBtnTruncate:overrideBtnTruncate,overrideBtnWidth:overrideBtnWidth,syncOptionDetails:syncOptionDetails};
    
                            ObjectDataDetails.push(newObjectDataDetails6);
                            // defer.resolve(ObjectDataDetails);
                              _this.getlistofschemadata(++index,temparray,schemaviewDetail,ObjectDataDetails).then(function(ObjectDataDetails){
                                resolve(ObjectDataDetails);
                             });
                        }
                       
                //}
              
            //});
        //});
      // },function(error){
      //   console.log('offline edit error',error);
      // });
  // },function(error){
  //   console.log('schema error',error);
  // });
        },function(error){
          console.log('template data error',error);

            });
        }else{
            resolve(ObjectDataDetails);
        }
      });
}

 ordertheJsonUseOrderNum(tempJson): Promise<any> {
  var _this = this;

  return new Promise((resolve, reject) => {
  var syncButtonorederedDetail=[];
  if(tempJson.smart_Sync_Button_order_no){
      var smartSync={};
      if(tempJson.Smart_Sync_Button !='' && tempJson.Smart_Sync_Button != null){
          smartSync['buttonText']=tempJson.Smart_Sync_Button;
      }else{
          smartSync['buttonText']='Smart Sync';
      }
      smartSync['Description']=tempJson.Smart_Sync_Description;
      smartSync['smart_Sync_Button_order_no']=tempJson.smart_Sync_Button_order_no;
      smartSync['issmartSyncButton']=true;
      smartSync['isfullSyncButton']=false;
      smartSync['isdataloadSyncButton']=false;
      smartSync['orderNumber']=tempJson.smart_Sync_Button_order_no;

      syncButtonorederedDetail.push(smartSync);

  }

   if(tempJson.full_Sync_Button_order_no){
      var fullSync={};
      if(tempJson.Full_Sync_Button !='' && tempJson.Full_Sync_Button != null){
          fullSync['buttonText']=tempJson.Full_Sync_Button;
      }else{
          fullSync['buttonText']='Full Sync';
      }
      fullSync['Description']=tempJson.Full_Sync_Description;
      fullSync['OrderNo']=tempJson.full_Sync_Button_order_no;
      fullSync['issmartSyncButton']=false;
      fullSync['isfullSyncButton']=true;
      fullSync['isdataloadSyncButton']=false;
      fullSync['orderNumber']=tempJson.full_Sync_Button_order_no;
      syncButtonorederedDetail.push(fullSync);

      


  }
  if(tempJson.sF_Data_Load_Button_order_no){
      var dataLoadSync={};
      if(tempJson.SF_Data_Load_Button !='' && tempJson.SF_Data_Load_Button != null){
          dataLoadSync['buttonText']=tempJson.SF_Data_Load_Button;
      }else{
          dataLoadSync['buttonText']='Load Data from Salesforce';
      }
      dataLoadSync['Description']=tempJson.SF_Data_Load_Description;
      dataLoadSync['OrderNo']=tempJson.sF_Data_Load_Button_order_no;
      dataLoadSync['issmartSyncButton']=false;
      dataLoadSync['isfullSyncButton']=false;
      dataLoadSync['isdataloadSyncButton']=true;
      dataLoadSync['orderNumber']=tempJson.sF_Data_Load_Button_order_no;


      syncButtonorederedDetail.push(dataLoadSync);


  }
  syncButtonorederedDetail = syncButtonorederedDetail.sort(function (a, b) {  return a.orderNumber - b.orderNumber });

 resolve(syncButtonorederedDetail);


});
}
    //Added to support lookup type in schema view

     getReferenceFieldWithObject(schemaData,isSupportValidation): Promise<any> {
      var _this = this;
  
      return new Promise((resolve, reject) => {

      if(schemaData && Object.keys(schemaData).length > 0){
           if(Object.keys(schemaData).length >= 10){

            

          var schemaid = Object.keys(schemaData)[0];
          var referenceFieldAPIandObject = {};
          var referenceObjectArray = [];
          var ObjectArray = [];

          if(schemaData[schemaid] && schemaData[schemaid].schemaViewData && Object.keys(schemaData[schemaid].schemaViewData).length > 0){

            Object.keys(schemaData[schemaid].schemaViewData).forEach(function( key1){
              var value1=schemaData[schemaid].schemaViewData[key1];
                  if(value1 && value1.ObjectFieldSet && value1.ObjectFieldSet.length){

                    Object.keys(value1.ObjectFieldSet).forEach(function(key2){
                                var value2=value1.ObjectFieldSet[key2]
                              if(value2 && value2.type == 'reference' && value2.isUpdatable){

                                  if(referenceFieldAPIandObject && referenceFieldAPIandObject[value1.apiName]){
                                      if(!Object.keys(referenceFieldAPIandObject).includes(value1.apiName)){
                                          referenceFieldAPIandObject[value1.apiName].push(value2.fieldPath);

                                      }

                                  }else{
                                      if(!Object.keys(referenceFieldAPIandObject).includes(value1.apiName)){

                                      referenceFieldAPIandObject[value1.apiName] = [];
                                           referenceFieldAPIandObject[value1.apiName].push(value2.fieldPath);

                                      }
                                  }
                              }else{
                                  if(referenceFieldAPIandObject && referenceFieldAPIandObject[value1.apiName]){
                                      if(!Object.keys(referenceFieldAPIandObject).includes(value1.apiName)){

                                      referenceFieldAPIandObject[value1.apiName] = [];
                                      }

                                  }else{
                                      if(!Object.keys(referenceFieldAPIandObject).includes(value1.apiName)){

                                      referenceFieldAPIandObject[value1.apiName] = [];
                                      }

                                  }
                              }
                          });
                      }else{
                          //Added for objfiedlset not config that level
                          if(value1 && value1.apiName && !Object.keys(referenceFieldAPIandObject).includes(value1.apiName)){

                             referenceFieldAPIandObject[value1.apiName] = [];
                              }
                      }

                  });

                   //for Am object describe
                   if(!Object.keys(referenceFieldAPIandObject).includes('ExAM__IssueRequest_Life_Cycle__c')){

                      referenceFieldAPIandObject['ExAM__IssueRequest_Life_Cycle__c'] = [];
                   }

                   if(isSupportValidation){
                      //for Am object describe
                      if(!Object.keys(referenceFieldAPIandObject).includes('ExAM__Validation__c')){

                          referenceFieldAPIandObject['ExAM__Validation__c'] = [];
                      }
                  }
                  if(Object.keys(referenceFieldAPIandObject).length > 0){

                      _this.findReferenceObjectNameANDQueryRecord(0, referenceFieldAPIandObject).then(function(){
                         resolve('');
                      });
                  }else{
                     resolve('');
                  }

          }else{
              resolve('');
          }

      }else{
         resolve('');
      }
    }
    });
  }
 findReferenceObjectNameANDQueryRecord(index,temparray): Promise<any> {
  var _this = this;

  return new Promise((resolve, reject) => {


    if(index < Object.keys(temparray).length){

      _this.forceapi.getUrl("/services/data/v48.0/sobjects/"+Object.keys(temparray)[index]+"/describe").then(function(result) {

            if(result && result.fields){


                window.navigator.smartstore.upsertSoupEntries("ObjectDescribeDetail", [{valueName:Object.keys(temparray)[index], value:result.fields}], function(response) {
                  console.log('ObjectDescribeDetail',response)

                  var  ResultquestionLookupObjects = [];

                    var refernceFldArray = _.uniq(temparray[Object.keys(temparray)[index]]);

                    Object.keys(result.fields).forEach(function(key2){
                          var value2=result.fields[key2];
                        if( value2 && refernceFldArray.includes(value2.name) && value2.type == 'reference' && value2.referenceTo[0]){
                            ResultquestionLookupObjects.push(value2.referenceTo[0]);
                        }

                    });

                    _this.getResultFldLookupData(0,ResultquestionLookupObjects).then(function(){
                        _this.findReferenceObjectNameANDQueryRecord(++index, temparray).then(function(){
                          resolve('');
                        });
                    });

                });
            }else{
              _this.findReferenceObjectNameANDQueryRecord(++index, temparray).then(function(){
                  resolve('');
                });
            }
        });

    }else{
        resolve('');

    }
  });

}
//End
 //Added for resultquestionlookup data
  getResultFldLookupData(index,ResultquestionLookupObjects): Promise<any> {
  var _this = this;

  return new Promise((resolve, reject) => {

  if(index < ResultquestionLookupObjects.length){

      var queryString ="SELECT Id";
      if(ResultquestionLookupObjects[index] == 'Case'){
          queryString += ", CaseNumber";
      }else{
          queryString += ", Name";
      }
      queryString += " FROM " +ResultquestionLookupObjects[index]+" ORDER BY CreatedDate DESC NULLS LAST LIMIT 20";

      _this.forceapi.query(queryString).then(function(lookuprecData) {

          if( lookuprecData.records && lookuprecData.records.length){

              window.navigator.smartstore.upsertSoupEntries("ResultFldLookupList", [{'objectName':ResultquestionLookupObjects[index] , recordList:lookuprecData.records}], function(response) {
                console.log('ResultFldLookupList',response);

                  _this.getResultFldLookupData(++index,ResultquestionLookupObjects).then(function(){
                     resolve('');
                  });

              },function(error){
                  console.log('error',error);
              });

          }else{
            _this.getResultFldLookupData(++index,ResultquestionLookupObjects).then(function(){
                  resolve('');
              });
          }

      },function(error){
          console.log('error:::',error);
      });
  }else{
     resolve('');
  }
  });
}


//
  getQuestionTemplateAndDecisionTreeTemplate(index): Promise<any> {
    var _this = this;

    return new Promise((resolve, reject) => {

        if (index < _this.Assessment_Templates_Array.length) {

          _this.forceapi.postRest('QuestionTemplate', {questionTemplateClassInput:{"templateId":_this.Assessment_Templates_Array[index]}}).then(function(questionTemplateData) {

            var QuestionTemplate = JSON.parse(JSON.parse(questionTemplateData));
            console.log("QuestionTemplate:::",QuestionTemplate);

              if(QuestionTemplate){

                  if(QuestionTemplate && QuestionTemplate.assobjwithFieldset){
                    //  templateIdWithAssobjFieldset[Assessment_Templates_Array[index]] = QuestionTemplate.assobjwithFieldset;
                  }
                  //Added for new result page configuration

                  if(QuestionTemplate && QuestionTemplate.resultpageconfigId && QuestionTemplate.resultpageconfigId.length > 0){

                      var tempresultpageconfigId = QuestionTemplate.resultpageconfigId;

                      // if(TemplateIdwithResultPageConfigurationId && Object.keys(TemplateIdwithResultPageConfigurationId).length > 0){

                      //     if(TemplateIdwithResultPageConfigurationId[Assessment_Templates_Array[index]] && TemplateIdwithResultPageConfigurationId[Assessment_Templates_Array[index]].length > 0){

                      //         TemplateIdwithResultPageConfigurationId[Assessment_Templates_Array[index]] = TemplateIdwithResultPageConfigurationId[Assessment_Templates_Array[index]].concat(tempresultpageconfigId);
                      //     }else{
                      //         TemplateIdwithResultPageConfigurationId[Assessment_Templates_Array[index]] = [];
                      //         TemplateIdwithResultPageConfigurationId[Assessment_Templates_Array[index]] = tempresultpageconfigId;
                      //     }
                      // }else{
                      //     TemplateIdwithResultPageConfigurationId[Assessment_Templates_Array[index]] = [];
                      //     TemplateIdwithResultPageConfigurationId[Assessment_Templates_Array[index]] = tempresultpageconfigId;
                      // }
                  }

                      window.navigator.smartstore.upsertSoupEntries("QuestionTemplate", [{templateId:_this.Assessment_Templates_Array[index], QuestionTemplate: QuestionTemplate}], function(response) {

                             // templateIdandsectionobjarrayobj[response[0].templateId]=response[0].QuestionTemplate.sectionTemplateRecord;
                             // templteIdwithDefaultvalue[response[0].templateId]=response[0].hasDefaultValue;

                              if(QuestionTemplate && QuestionTemplate.imageQuestionAttachId){
                                //  imgQAttachmentIdArray = imgQAttachmentIdArray.concat(QuestionTemplate.imageQuestionAttachId);
                              }

                              _this.forceapi.postRest('DecisionTreeTemplate', {decisionTreeTemplateClassInput:{"templateId":_this.Assessment_Templates_Array[index]}}).then(function(decisionTreeTemplateData) {

                                var DecisionTreeQuestionTemplate = JSON.parse(JSON.parse(decisionTreeTemplateData));
                                console.log("DecisionTreeQuestionTemplate:::",DecisionTreeQuestionTemplate);

                                  if(DecisionTreeQuestionTemplate){

                                      var tempLookupfilterIdArray = [];

                                      //Added for new result page configuration

                                      if(DecisionTreeQuestionTemplate && DecisionTreeQuestionTemplate.resultpageconfigId && DecisionTreeQuestionTemplate.resultpageconfigId.length > 0){

                                          var tempresultpageconfigId = DecisionTreeQuestionTemplate.resultpageconfigId;

                                          // if(TemplateIdwithResultPageConfigurationId && Object.keys(TemplateIdwithResultPageConfigurationId).length > 0){

                                          //     if(TemplateIdwithResultPageConfigurationId[Assessment_Templates_Array[index]] && TemplateIdwithResultPageConfigurationId[Assessment_Templates_Array[index]].length > 0){

                                          //         TemplateIdwithResultPageConfigurationId[Assessment_Templates_Array[index]] = TemplateIdwithResultPageConfigurationId[Assessment_Templates_Array[index]].concat(tempresultpageconfigId);
                                          //     }else{

                                          //         TemplateIdwithResultPageConfigurationId[Assessment_Templates_Array[index]] = [];
                                          //         TemplateIdwithResultPageConfigurationId[Assessment_Templates_Array[index]] = tempresultpageconfigId;
                                          //     }
                                          // }else{

                                          //     TemplateIdwithResultPageConfigurationId[Assessment_Templates_Array[index]] = [];
                                          //     TemplateIdwithResultPageConfigurationId[Assessment_Templates_Array[index]] = tempresultpageconfigId;
                                          // }

                                      }

                                      if(DecisionTreeQuestionTemplate && DecisionTreeQuestionTemplate.questionNamewithQuestionTemplate && Object.keys(DecisionTreeQuestionTemplate.questionNamewithQuestionTemplate).length){


                                          if(DecisionTreeQuestionTemplate && DecisionTreeQuestionTemplate.lookupQuestionIdSet){
                                            //  lookupfilterIdArray = lookupfilterIdArray.concat(DecisionTreeQuestionTemplate.lookupQuestionIdSet);
                                          }

                                          if(DecisionTreeQuestionTemplate && DecisionTreeQuestionTemplate.imageQuestionAttachId){
                                            //  imgQAttachmentIdArray = imgQAttachmentIdArray.concat(DecisionTreeQuestionTemplate.imageQuestionAttachId);
                                          }
                                      }
                                      window.navigator.smartstore.upsertSoupEntries("DecisionTreeTemplate", [{templateId:_this.Assessment_Templates_Array[index], decisionTreeTemplate:DecisionTreeQuestionTemplate }], function(response) {

                                          // if(MobileAppVersionDetailObj
                                          //     && MobileAppVersionDetailObj.ExAM__Functionality_Map__c
                                          //     && Object.keys(MobileAppVersionDetailObj.ExAM__Functionality_Map__c).length > 0
                                          //     && MobileAppVersionDetailObj.ExAM__Functionality_Map__c.isOptimizeLoading
                                          //     && MobileAppVersionDetailObj.ExAM__Functionality_Map__c.isOptimizeLoading == 'true'){


                                          //         if(DecisionTreeQuestionTemplate && DecisionTreeQuestionTemplate.layoutAssessableFieldsMap) {
                                          //             layoutAssessableFieldsMapWithTemplateId[Assessment_Templates_Array[index]] = DecisionTreeQuestionTemplate.layoutAssessableFieldsMap ;
                                          //         }
                                          // }else{
                                          //     if(QuestionTemplate && QuestionTemplate.layoutAssessableFieldsMap) {
                                          //         layoutAssessableFieldsMapWithTemplateId[Assessment_Templates_Array[index]] = QuestionTemplate.layoutAssessableFieldsMap;
                                          //     }
                                          // }


                                          _this.getQuestionTemplateAndDecisionTreeTemplate(++index).then(function(){
                                            resolve('');
                                          });
                                      },function(error){
                                      });
                                  }else{
                                     alert((decisionTreeTemplateData));
                                  }
                              },function(error){
                                console.log('error:::',error)
                              });
                         
                  },function(error){
                  });
              }else{
                  alert((questionTemplateData));
              }
          },function(error){
          });
        } else {
          resolve('');
        }

    });
  }

  //end

  checkMobileAppVersionDetail() {
    var _this = this;
    var MobileAppVersionQuerySpec = window.navigator.smartstore.buildAllQuerySpec();
    window.navigator.smartstore.querySoup('TrackerMobileAppVersionDetail', MobileAppVersionQuerySpec, function (MobileAppVersionData) {

      if (MobileAppVersionData.totalEntries) {
        if (MobileAppVersionData.currentPageOrderedEntries[0] && MobileAppVersionData.currentPageOrderedEntries[0][LaunchServiceService.versionAPIName] == _this.AppVersionNum) {
          _this.getAssessmentTrackerList();
        } else {
          _this.getAssessmentTrackerList();
          console.log(':: not match app version');
        }
      } else {
        _this.getAssessmentTrackerList();
      }
    }, function (err) {
      console.log(':: checkMobileAppVersionDetail ::', err);
    });

  }

  getAssessmentTrackerList() {

    var _this = this, soupidlist = [];
    this.percentLoading = 20;
    this.loadingpage.setloading('Loading Salesforce Data - ' + this.percentLoading + '%');

    _this.forceapi.getUserDetail().then(function (userDetail) {

      if (userDetail && userDetail != null) {
        var userobj = window.navigator.smartstore.buildExactQuerySpec('valueName', 'UserName', 10000);
        window.navigator.smartstore.querySoup("GenericConfigurationsData", userobj, function (userobj) {

          if (userobj.currentPageOrderedEntries && userobj.currentPageOrderedEntries.length > 0) {

            userobj.currentPageOrderedEntries.forEach(function (value) {
              soupidlist.push(value._soupEntryId);
            });

          }
          if (soupidlist.length) {
            window.navigator.smartstore.removeFromSoup('GenericConfigurationsData', soupidlist, function (reomveddata) {
              var userObj = { 'valueName': 'UserName', 'Name': userDetail['Name'], 'Id': userDetail['Id'] };
              window.navigator.smartstore.upsertSoupEntries('GenericConfigurationsData', [userObj], function (defaultUpsertData) {
              });
            });
          } else {
            var userObj = { 'valueName': 'UserName', 'Name': userDetail['Name'], 'Id': userDetail['Id'] };
            window.navigator.smartstore.upsertSoupEntries('GenericConfigurationsData', [userObj], function (defaultUpsertData) {
            });
          }

        });


      }

      _this.SyncAllData().then(function () {

        _this.percentLoading = 30;
        _this.loadingpage.setloading('Loading Salesforce Data - ' + _this.percentLoading + '%');

        _this.forceapi.postRest('ExAMTrackerList', { "getListofExamTrackerInput": { "appVersion": _this.AppVersionNum, OSPlatform: (_this.device && _this.device.platform == 'iOS' ? 'iOS' : 'Android') } })
          .then(function (result) {
            if (result != null && _this.IsJSONString(_.unescape(result))) {
              var resultDataJson = {};
              resultDataJson = JSON.parse(_.unescape(result));
              var resultData = {};

              try {
                if (typeof resultDataJson == 'string') {
                  resultDataJson = JSON.parse(resultDataJson);
                }
              } catch (er) {
              }

              if (resultDataJson['errorMessage'] == null && resultDataJson['trackerAppVersionDetail']
                && resultDataJson['trackerAppVersionDetail'].length > 0) {

                console.log('resultDataJson:::', resultDataJson);
                var appversionDetail = resultDataJson['trackerAppVersionDetail'][0];
                appversionDetail.ExAM_Tracker__Functionality_Map__c = JSON.parse(appversionDetail.ExAM_Tracker__Functionality_Map__c);
                if (appversionDetail.ExAM_Tracker__Functionality_Map__c
                  && _this.IsJSONString(appversionDetail.ExAM_Tracker__Functionality_Map__c)
                  && JSON.parse(appversionDetail.ExAM_Tracker__Functionality_Map__c)) {
                  appversionDetail.ExAM_Tracker__Functionality_Map__c = JSON.parse(appversionDetail.ExAM_Tracker__Functionality_Map__c);
                }
                LaunchServiceService.MobileAppVersionDetailObj = appversionDetail;

                _this.clearAndUpsertData('TrackerMobileAppVersionDetail', resultDataJson['trackerAppVersionDetail']).then(function (atSoupdata) {
                  resultData = resultDataJson['trackerList'];
                  if (resultData['ATListofRecord'] && resultData['ATListofRecord'].length > 0) {
                    LaunchServiceService.assessmentTrackerConfig = resultData['ATListofRecord'];
                    _this.clearAndUpsertData('AssessmentTrackerList', resultData['ATListofRecord']).then(function (atSoupdata) {

                      if (resultData && resultData['namewithId'] && Object.keys(resultData['namewithId']).length > 0) {

                        window.navigator.smartstore.clearSoup("AssessmentTrackerData", function (atdata) {
                          window.navigator.smartstore.clearSoup("ObjectDescribe", function (atdata) {
                            window.navigator.smartstore.clearSoup("TrackerConfigurationFieldset", function (atdata) {

                              _this.StoreFieldsetDetail(0, resultData).then(function () {

                                _this.getATObjectList(0, Object.keys(resultData['namewithId'])).then(function () {

                                  _this.getObjectDescribe(0, _this.objectNameList).then(function () {

                                    console.log('Successfully Updated AssessmentTrackerData');

                                    var ATQuerySpec = window.navigator.smartstore.buildExactQuerySpec('valueName', 'DefaultScreenValue', 1);
                                    window.navigator.smartstore.querySoup("GenericConfigurationsData", ATQuerySpec, function (defaultData) {
                                      if (defaultData.currentPageOrderedEntries && defaultData.currentPageOrderedEntries[0]
                                        && !defaultData.currentPageOrderedEntries[0].isMyTracker) {
                                        var index = _.findIndex(resultData['ATListofRecord'], { 'Id': defaultData.currentPageOrderedEntries[0].Id });
                                        if (index != -1) {
                                          var trackerObj = resultData['ATListofRecord'][index];
                                          let navigationExtras: NavigationExtras = {
                                            state: {
                                              ATObj: trackerObj
                                            }
                                          };
                                          _this.zone.run(() => {
                                            _this.publishSomeData({
                                              isFrom: 'checkOfflineData'
                                            });

                                            _this.router.navigate(['assessment-tracker-detail'], navigationExtras);
                                          });
                                        } else {
                                          _this.zone.run(() => {
                                            _this.publishSomeData({
                                              isFrom: 'checkOfflineData'
                                            });

                                            _this.router.navigate(['/folder/ATList']);
                                          });
                                        }
                                      } else {
                                        _this.zone.run(() => {
                                          _this.publishSomeData({
                                            isFrom: 'checkOfflineData'
                                          });

                                          _this.router.navigate(['/folder/ATList']);
                                        });
                                      }
                                      window.cordova.plugins.backgroundMode.disable();

                                    },function(error){
                                      console.log('error',error);
                                    });

                                  }).catch(function (error) {
                                    if (error && error.response && error.response.body && error.response.body[0].message) alert(error.response.body[0].message);

                                  });

                                }).catch(function (error) {
                                  if (error && error.response && error.response.body && error.response.body[0].message) alert(error.response.body[0].message);

                                });

                              }).catch(function (error) {
                                if (error && error.response && error.response.body && error.response.body[0].message) alert(error.response.body[0].message);

                              });

                            }, function (error) {
                              console.log(error);
                            });

                          }, function (error) {
                            console.log(error);
                          });
                        }, function (error) {
                          console.log(error);
                        });
                      }

                    });
                  } else {
                    alert('No trackers found');
                  }
                });

              } else {
                if (resultDataJson['errorMessage'] == 'There is no AT configuration for mobile') {
                  alert('No trackers found');
                } else {
                  alert(resultDataJson['errorMessage']);
                }

              }

            }
          }).catch(function (error) {
            if (error && error.response && error.response.body && error.response.body[0].message) {
              //alert(error.response.body[0].message);
              if (error.response.body[0].message == 'Could not find a match for URL') {
                alert('ExAM Tracker package version is not supported for this app. Please upgrade the package or contact your salesforce administrator.');
              }
            }

          });

      });

    });

  }

  StoreFieldsetDetail(index, resultData): Promise<any> {
    var _this = this;

    return new Promise((resolve, reject) => {
      if (resultData && resultData['trackerConfigFieldSetMap'] && Object.keys(resultData['trackerConfigFieldSetMap']).length > 0) {

        if (index < Object.keys(resultData['trackerConfigFieldSetMap']).length) {

          window.navigator.smartstore.upsertSoupEntries("TrackerConfigurationFieldset", [{ "FieldsetName": Object.keys(resultData['trackerConfigFieldSetMap'])[index], "FieldsetDetail": resultData['trackerConfigFieldSetMap'][Object.keys(resultData['trackerConfigFieldSetMap'])[index]] }], function (response) {
            _this.StoreFieldsetDetail(++index, resultData).then(function () {
              resolve('');
            }, function (error) {
              reject();
            });

          }, function (error) {
            reject();
          });
        } else {
          resolve('');
        }

      } else {
        resolve('');
      }

    });
  }

  getATObjectList(index, ATConfigIdList): Promise<any> {

    var _this = this;

    return new Promise((resolve, reject) => {

      if (index < ATConfigIdList.length) {

        if (ATConfigIdList.length >= 10) {
          if (index == 0) {
            _this.decrementval = 10;
          }

          if ((ATConfigIdList.length / 10) <= index && _this.decrementval) {

            _this.percentLoading = _this.percentLoading + 2;
            if (_this.percentLoading > 99) {
              _this.percentLoading = 99;
            }
            _this.loadingpage.setloading('Loading Salesforce Data - ' + _this.percentLoading + '%');
            _this.decrementval--;
          } else {
            if (_this.percentLoading > 99) {
              _this.percentLoading = 99;
            }
            _this.loadingpage.setloading('Loading Salesforce Data - ' + _this.percentLoading + '%');
          }

        } else {
          _this.percentLoading = _this.percentLoading + Math.floor(10 / ATConfigIdList.length);
          if (_this.percentLoading > 99) {
            _this.percentLoading = 99;
          }
          _this.loadingpage.setloading('Loading Salesforce Data - ' + _this.percentLoading + '%');
        }

        _this.forceapi.postRest('ExAMTrackerData', { ATwrapper: { "ATId": ATConfigIdList[index] } }).then(function (data) {

          if (data != null && _this.IsJSONString(_.unescape(data))) {

            var resultData = {};
            resultData = JSON.parse(_.unescape(data));
            try {
              if (typeof resultData == 'string') {
                resultData = JSON.parse(resultData);
              }
            } catch (er) {
            }
            if (resultData['ObjectNameList']) {
              _this.objectNameList = _.union(_this.objectNameList.concat(resultData['ObjectNameList']));
            }

            window.navigator.smartstore.upsertSoupEntries("AssessmentTrackerData", [{ "ATcongId": ATConfigIdList[index], "valueDetail": resultData }], function (response) {
              _this.getATObjectList(++index, ATConfigIdList).then(function () {
                resolve('');
              }, function (error) {
                reject();
              });

            }, function (error) {
              reject();
            });
          } else {
            _this.getATObjectList(++index, ATConfigIdList).then(function () {
              resolve('');
            }, function (error) {
              reject();
            });
          }
        }).catch(function (error) {
          if (error && error.response && error.response.body && error.response.body[0].message) alert(error.response.body[0].message);
        });
      } else {
        resolve('');
      }
    });

  }

  getObjectDescribe(index, objectNameList): Promise<any> {

    var _this = this;

    return new Promise((resolve, reject) => {

      if (index < objectNameList.length) {

        if (objectNameList.length >= 10) {
          //var decrementval;
          if (index == 0) {
            _this.decrementval = 10;
          }

          if (index >= objectNameList.length / 10 && _this.decrementval) {

            _this.percentLoading = _this.percentLoading + 2;
            if (_this.percentLoading > 99) {
              _this.percentLoading = 99;
            }
            _this.loadingpage.setloading('Loading Salesforce Data - ' + _this.percentLoading + '%');
            _this.decrementval--;

          } else {
            if (_this.percentLoading > 99) {
              _this.percentLoading = 99;
            }
            _this.loadingpage.setloading('Loading Salesforce Data - ' + _this.percentLoading + '%');
          }

        } else {

          _this.percentLoading = _this.percentLoading + Math.floor(10 / objectNameList.length);
          if (_this.percentLoading > 99) {
            _this.percentLoading = 99;
          }
          _this.loadingpage.setloading('Loading Salesforce Data - ' + _this.percentLoading + '%');
        }

        if (index == (objectNameList.length - 1)) {
          _this.percentLoading = 99;
          _this.loadingpage.setloading('Loading Salesforce Data - ' + _this.percentLoading + '%');
        }

        _this.forceapi.describe(objectNameList[index]).then(function (data) {

          if (data != null) {

            window.navigator.smartstore.upsertSoupEntries("ObjectDescribe", [{ "objectName": objectNameList[index], "valueDetail": data }], function (response) {
              _this.getObjectDescribe(++index, objectNameList).then(function () {
                resolve('');
              }, function (error) {
                reject();
              });

            }, function (error) {
              reject();
            });

          } else {
            _this.getObjectDescribe(++index, objectNameList).then(function () {
              resolve('');
            }, function (error) {
              reject();
            });
          }
        });
      } else {
        resolve('');
      }
    });

  }

  IsJSONString(str) {
    try {
      JSON.parse(str);
      return true;
    } catch (ex) {
      return false;
    }
  }

  clearAndUpsertData(soupName, data): Promise<any> {
    return new Promise((resolve, reject) => {
      window.navigator.smartstore.clearSoup(soupName, function (Question_Template_data) {
        window.navigator.smartstore.upsertSoupEntries(soupName, data, function (response) {
          resolve(response);
        }, function (error) {
          console.log('::::error:::', error, JSON.stringify(error));
        });
      }, function (error) {
        console.log(':outer:::error:::', error, JSON.stringify(error));
      });
    });
  }

  upsertData(soupName, data): Promise<any> {
    return new Promise((resolve, reject) => {
      window.navigator.smartstore.upsertSoupEntries(soupName, data, function (response) {
        resolve(response);
      }, function (error) {
        console.log('::::error:::', error, JSON.stringify(error));
      });
    });
  }

  showLoader(txtmessage) {
    this.loader.showLoader(txtmessage);
  }
  updateloadedMessage(txtmessage) {
    this.loader.updateMessage(txtmessage);
  }

  hideLoader() {
    this.loader.hideLoader();
  }
  //Added for sync logic

  SyncAllData(): Promise<any> {

    return new Promise((resolve, reject) => {
      var _this = this;
      var ATQuerySpec = window.navigator.smartstore.buildExactQuerySpec('hasOffineData', true, 1000);
      _this.TrackerConfigList = [];

      window.navigator.smartstore.querySoup("AssessmentTrackerList", ATQuerySpec, function (localATData) {

        if (localATData.totalEntries) {
          if (localATData.currentPageOrderedEntries) {
            var TrackerConfigList = [];
            _.each(localATData.currentPageOrderedEntries, function (data, key) {

              if (data && data['Id']) {
                TrackerConfigList.push(data['Id']);
              }
            });
            _this.TrackerConfigList = TrackerConfigList;
            _this.getOfflineDataAndSave(0, _this.TrackerConfigList).then(function () {
              resolve('');
            }, function (error) {
              reject();
            });
          }
        } else {
          _this.TrackerConfigList = [];
          resolve('');
        }
      }, function (error) {
        console.log('error:::', error);
      });
    });
  }
  // This method is created for get offline record by using tracker config and save the data to sf.

  getOfflineDataAndSave(index, trackerconfiglist): Promise<any> {

    return new Promise((resolve, reject) => {
      var _this = this, saveRecordList = [], objNameWithfields = {};

      if (index < trackerconfiglist.length) {
        var ATQuerySpec = window.navigator.smartstore.buildExactQuerySpec('ATcongId', trackerconfiglist[index], 1);
        window.navigator.smartstore.querySoup("AssessmentTrackerData", ATQuerySpec, function (ATobjlist) {

          _this.flsservice.getFlsForObjectFields(0, ATobjlist.currentPageOrderedEntries[0]['valueDetail']['ObjectNameList'], {}, {}).then(function (data) {

            _this.objandFieldFlsDetail = data['fieldwithDetail'];
            if (_this.hasNetwork) {

              _.each(ATobjlist['currentPageOrderedEntries'][0]['valueDetail']['ATData'], function (row, key) {

                var temprecordObj = {}, fieldlist = [];
                var objName = row['attributes']['type'];

                if (row['isEdited']) {
                  delete row['isEdited'];
                  _.each(row, function (coldata, colkey) {

                    if (colkey != 'Object' && colkey != 'S.No') {

                      if (_this.objandFieldFlsDetail[objName]
                        && _this.objandFieldFlsDetail[objName][colkey]
                        && _this.objandFieldFlsDetail[objName][colkey].updateable) {
                        temprecordObj[colkey] = coldata;
                        temprecordObj['attributes'] = row['attributes'];
                        fieldlist.push(colkey);
                      }
                      //added logic to add id for update record
                      if (colkey.toLowerCase() == 'id') {
                        temprecordObj[colkey] = coldata;
                      }
                    }
                  });
                  if (Object.keys(temprecordObj).length > 0) {
                    saveRecordList.push(temprecordObj);
                  }
                  objNameWithfields[objName] = fieldlist;
                }
              });
              console.log('saveRecordList::::', saveRecordList);
              saveRecordList = _.uniq(saveRecordList, x => x.Id);

              if (saveRecordList && saveRecordList.length > 0) {

                _this.forceapi.postRest('updateATrecord', { savewrapper: { "recordList": saveRecordList, "objNameWithfields": objNameWithfields } })
                  .then(function (result) {
                    _this.getOfflineDataAndSave(++index, trackerconfiglist).then(function () {
                      resolve('');
                    }, function (error) {
                      reject();
                    });
                  }).catch(function (error) {
                    if (error && error.response && error.response.body && error.response.body[0].message) alert(error.response.body[0].message);
                  });

              } else {
                _this.getOfflineDataAndSave(++index, trackerconfiglist).then(function () {
                  resolve('');
                }, function (error) {
                  reject();
                });
              }
            }
          });

        });
      } else {
        resolve('');
      }

    });
  }
  // This method is used to update offline detail for tracker list smartstore
  updateOfflineDataInTrackerConfig(valueId, status): Promise<any> {

    return new Promise((resolve, reject) => {

      var ATQuerySpec = window.navigator.smartstore.buildExactQuerySpec('Id', valueId, 1);
      window.navigator.smartstore.querySoup("AssessmentTrackerList", ATQuerySpec, function (localATData) {

        if (localATData.totalEntries) {

          if (localATData.currentPageOrderedEntries && localATData.currentPageOrderedEntries[0]) {
            localATData.currentPageOrderedEntries[0]['hasOffineData'] = status;
          }
          window.navigator.smartstore.upsertSoupEntries("AssessmentTrackerList", localATData['currentPageOrderedEntries'], function (upsertdata) {
            console.log('upsertdata::', upsertdata);
            resolve('');
          }, function (errr) {
            console.log('errr:::', errr);
          });

        } else {
          resolve('');
        }
      });
    });
  }

  utilMethodForFunctionalityMap(functionKey): Promise<any> {
    console.log('utilMethodForFunctionalityMap',functionKey);
   // return new Promise(async (resolve, reject) => {
    
      return new Promise((resolve, reject) => {

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
  getSyncOptionSetting(): Promise<any> {
    return new Promise((resolve, reject) => {

      var ColQuerySpec = window.navigator.smartstore.buildExactQuerySpec('ValueName', 'syncsetting', 1);
      window.navigator.smartstore.querySoup("SyncOptionSetting", ColQuerySpec, function (syncsetting) {

        if (syncsetting.totalEntries) {
          if (syncsetting.currentPageOrderedEntries
            && syncsetting.currentPageOrderedEntries[0]) {

            resolve(syncsetting.currentPageOrderedEntries[0].ValueDetail);

          } else {
            resolve(false);
          }
        } else {
          resolve(false);
        }
      });
    });
  }

  getASMFields() {

    return ['Id', 'Name', 'Remote_Verification__c', 'ExAM__Assessment_Date_Time__c', 'Completion_Status__c', 'ExAM__Related_Assignment_Manager1__c', 'ExAM__Field_End_Time__c', 'ExAM__Related_Assignment_Manager2__c',
      'ExAM__Related_Assignment_Manager3__c', 'ExAM__Related_Assignment_Manager4__c', 'ExAM__Facility_Name__c', 'ExAM__InvestigationType__c', 'Overall_Status__c',
      'ExAM__Assessment_Template_Type__c', 'ExAM__Location__c', 'ExAM__Assessor_Resource__r.Name', 'ExAM__Assessor_Resource__r.Email', 'ExAM__Scheduled_Start_Date__c',
      'Inspection_Type__c', 'Overall_Status_Comments__c', 'CreatedBy.Name', 'LastModifiedBy.Name'];

  }

  getResponseFields() {


    return ['Fund_Req_Q__c', 'HCV_Pass_Fail__c', 'UPCS_V_Pass_or_Fail__c', 'LTE__c', 'Question_Name__c', 'ExAM__Question_Label__c', 'Defect_Level__c', 'Section_Name__c', 'Defect_Location__c',
      'Floor_Number__c', 'Resolution_Status__c', 'ExAM__Comment__c', 'Responsibility_of_Repair__c', 'Room__c', 'PHA_Code__c', 'Remote_Verification_Type_s__c'];

  }

  getAccountFields() {

    return ['Name', 'Unit_City__c', 'Unit_County__c', 'Unit_ST__c', 'Unit_Zip__c', 'Year_Built__c', 'Housing_Type__c', 'Other_Housing_Type_Comments__c', 'Special_Housing_Type__c',
      'Lead_Free_Certificate__c', 'General_Unit_Comments__c', 'Number_of_Sleeping_Rooms__c', 'Rooms_Tenant_is_Using_for_Sleeping__c', 'Living_Room_Present__c', 'Kitchen_Present__c', 'Bathroom_Present__c',
      'Number_of_Full_Bathrooms__c', 'Number_of_Half_Bathrooms__c', 'Separate_Entrance__c', 'SRO_Space_Requirement__c', 'Owner.Name', 'PHA_Code__c', 'Agent_Email_Address__c', 'Description',
      'Unit_Qualification_Comments__c', 'Parent.Name', 'Parent.Phone', 'Parent.Unit_City__c', 'Parent.Unit_ST__c', 'Parent.Unit_Zip__c'];
  }
}

