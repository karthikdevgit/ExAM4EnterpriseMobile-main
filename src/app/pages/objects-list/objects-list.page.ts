import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { ForceApiService } from "src/app/service/force-api.service";
import * as _ from "underscore";
import { LaunchServiceService } from "../../service/launch-service.service";
import { GlobalParamService } from "src/app/service/global-param.service";
import * as moment from "moment";
import { ActivatedRoute, Router } from "@angular/router";
import {
  ActionSheetController,
  AlertController,
  IonCard,
  ModalController,
} from "@ionic/angular";
import { Gesture, GestureController } from "@ionic/angular";
import { ViewDetailsPage } from "./view-details/view-details.page";
import { EditDetailsPage } from "./edit-details/edit-details.page";
import { RelatedAmsPage } from "../related-ams/related-ams.page";
import { FeedbackPage } from "../feedback/feedback.page";
import { SchemaViewSelectComponent } from 'src/app/svcomponents/schema-view-select/schema-view-select.component';
declare var window: any;

@Component({
  selector: "app-objects-list",
  templateUrl: "./objects-list.page.html",
  styleUrls: ["./objects-list.page.scss"],
})
export class ObjectsListPage implements OnInit, AfterViewInit {
  objectReturnData: any;
  recordTypeDetails: any;
  assessableObjs = [];
  properties: any;
  objectTitle: any;
  public schemaViewData: any;
  availableSchemaNames = [];
  availableSchemaViews = [];
  currentSchemaViewDetail:any;
  defaultConfiguration: any;
  //mobileAppVersionDetailObj: any;
  feedbackQuestions = [];
  showTreeViewNotEnabledView = false;
  longPressActive = true;
  istreeViewEnabledSV=false;
  currentIndex:number;
  @ViewChildren(IonCard, { read: ElementRef }) cards: QueryList<ElementRef>;

  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private forceapi: ForceApiService,
    private launchService: LaunchServiceService,
    private modalController: ModalController,
    private alertController: AlertController,
    private gestureCtrl: GestureController,
    private actionSheetCtrl: ActionSheetController,
    public GlobalParamService:GlobalParamService,
    public route:ActivatedRoute
  ) {
    var _this = this;
    console.log("object list page call");
    console.log("GlobalParamService empty here");

    GlobalParamService.trackparamFormObjRedirect=[];
    console.log("obj list page _this.GlobalParamService.currentSchemaViewDetail", _this.GlobalParamService.currentSchemaViewDetail);
    //console.log("obj list page_this.currentSchemaViewDetail.SchemaId",_this.currentSchemaViewDetail.SchemaId);
    console.log("obj list page_this.currentSchemaViewDetail.",_this.currentSchemaViewDetail);
    this.route.queryParams.subscribe(params => {
      console.log('RedirectpageforrelatedlevelObjPage call'); 

      var _this=this;
     
          if(_this.router.getCurrentNavigation() && _this.router.getCurrentNavigation().extras && _this.router.getCurrentNavigation().extras.state && _this.router.getCurrentNavigation().extras.state.schemaViewData ) {
            _this.currentIndex=0;
            // var tempSchemaval = ;
            console.log('_this.router',_this.router);
            _this.schemaViewData = _this.router.getCurrentNavigation().extras.state.schemaViewData;
           _this.currentSchemaViewDetail = _this.router.getCurrentNavigation().extras.state.currentSchemaViewDetail;
          
          }else{
            //if app run first time It defaulty render zeroth level SV
          var QuerySpec = window.navigator.smartstore.buildAllQuerySpec(
            "schemaTemplateId",
            "",
            1000
          );
          console.log("schema QuerySpec ", QuerySpec);
          window.navigator.smartstore.querySoup(
            "schemaTemplateViewList",
            QuerySpec,
            function (schemaTemplatedata) {
              console.log("schema schemaTemplatedata ", schemaTemplatedata);

              if (schemaTemplatedata.totalEntries > 0) {
                var ObjectData = schemaTemplatedata.currentPageOrderedEntries;
                console.log("ObjectData", ObjectData);
                // var schemaIDlist= Object.keys(ObjectData);
                //console.log('schemaIDlist',schemaIDlist);
                if (
                  ObjectData &&
                  ObjectData.length > 0 &&
                  ObjectData[0] &&
                  ObjectData[0].value &&
                  ObjectData[0].value.schemaViewData
                ) {
                  console.log(
                    "ObjectData[0].value.schemaViewData",
                    ObjectData[0].value.schemaViewData
                  );
                  _this.availableSchemaViews=ObjectData;
                  _this.GlobalParamService.availableSchemaViews= _this.availableSchemaViews

                  _this.currentIndex=0;
                  // var tempSchemaval = ;
                  console.log("schemaViewData111", _this.schemaViewData);

                  _this.schemaViewData = ObjectData[0].value.schemaViewData;
                  _this.GlobalParamService.schemaViewData= _this.schemaViewData;

                  _this.currentSchemaViewDetail=ObjectData[0];
                  _this.GlobalParamService.currentSchemaViewDetail= _this.currentSchemaViewDetail;

                  console.log("schemaViewData222", _this.schemaViewData);
                
                }
              }
            },
            function (error) {
              console.log("schemaTemplateViewList error", error);
            }
          );
          }
  });
   
  
  }
 
  ionViewWillEnter() {
    console.log("ionViewWillEnter event fired");
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave event fired");
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter event fired");
    var _this = this;
    console.log("schemaViewData111", _this.schemaViewData);

    console.log(
      " _this.showTreeViewNotEnabledView",
      _this.showTreeViewNotEnabledView
    );
  }

  ionViewDidLeave() {
    console.log("ionViewDidLeave event fired");
  }

  getFeedbackQuestions() {
    var _this = this;
    this.forceapi.postRest("FeedbackQuestions", { feedbackQuestion: {} }).then(
      function (data) {
        // AddDebugLogs('FeedbackQuestions force.postRest success','StartupService,FeedbackQuestionsTemplateQuery');
        if (_this.isJSONString(data)) {
          _this.feedbackQuestions = JSON.parse(JSON.parse(data));
        }
      },
      function (error) {
        // AddDebugLogs('FeedbackQuestions force.postRest error','StartupService,FeedbackQuestionsTemplateQuery',JSON.stringify(error));
        // QuestionAndDecisionTreeTemplate();
      }
    );
  }

  ngAfterViewInit() {
    this.cards.changes.subscribe((c) => {
      c.toArray().forEach((card) => {
        console.log(":::::: THIS CARD HAS USE LONG PRESS: " + card);
        let i = c.toArray().indexOf(card);

        let startTime = Date.now();

        const gesture: Gesture = this.gestureCtrl.create({
          el: card.nativeElement,
          threshold: 0,
          gestureName: "long-press",
          onStart: (ev) => {
            startTime = Date.now();
            setTimeout(() => {
              if (this.longPressActive === true) {
                this.presentActions(
                  this.schemaViewData,
                  this.assessableObjs[i]
                );
                this.longPressActive = false;
              }
            }, 1000);
          },
          onEnd: (ev) => {
            const duration = Date.now() - startTime;

            if (duration < 1000) {
              this.navigate(this.assessableObjs[i], this.schemaViewData);
              this.longPressActive = false;
            } else {
              this.longPressActive = true;
            }
          },
        });

        gesture.enable(true);
      });
    });
  }


  ngOnInit(): void {
    
  }

   async openAvailableSchemaViews() {
    console.log('header method call')
    let buttons = [];
    var _this = this;
                     for(var schemaIndex=0;schemaIndex< _this.availableSchemaViews.length;schemaIndex++){

   // _this.availableSchemaViews.forEach((schemaIndex) => {
      console.log('schemaIndex',schemaIndex);
      console.log('_this.availableSchemaViews[schemaIndex]',_this.availableSchemaViews[schemaIndex]);
      var schemaviewName= _this.availableSchemaViews[schemaIndex].schemaviewName;
      console.log('schemaviewName',schemaviewName);
      // buttons.push({

      //   text: schemaviewName ,
      //   handler: () => {
      //     _this.reloadSchemaData(schemaIndex);
      //     console.log(":::::::::::::" + schemaIndex + " clicked");
      //   },
      // });
   // });
    }
    // const alert = await this.alertController.create({
    //   header: "Available Schema Views",
    //   buttons: buttons,
    // });

    const modal = await this.modalController.create({
      component:SchemaViewSelectComponent,
      componentProps: {
        availableSchemaViews: _this.availableSchemaViews,
        currentselectedview:_this.currentSchemaViewDetail
      },
    });
    modal.onDidDismiss().then((dataReturned) => {
      console.log('dataReturned',dataReturned);
      if (dataReturned.data !== null && dataReturned.data != 'undefined') {
        console.log('Modal data:', dataReturned['selectedItem']);
        var objectData=dataReturned.data['selectedItem'];
        console.log('objectData',objectData);
        _this.currentSchemaViewDetail=objectData;
        console.log('_this.currentSchemaViewDetail[index]',_this.currentSchemaViewDetail);
    
        _this.schemaViewData = objectData.value.schemaViewData
        console.log('current schama_this.schemaViewData',_this.schemaViewData);
        
      }
    });
    await modal.present();
   // await alert.present();
  }

   triggerChangeschema(){
    this.openAvailableSchemaViews();
   }
  reloadSchemaData(index: number) {
    let _this = this;
    console.log('index',index);
    var index=index-1;
    console.log('index',index);

    console.log('_this.availableSchemaViews[index]',_this.availableSchemaViews[index])
    var objectData=_this.availableSchemaViews[index];
    console.log('objectData',objectData);
    _this.currentSchemaViewDetail=objectData;
    console.log('_this.currentSchemaViewDetail[index]',_this.currentSchemaViewDetail);

    _this.schemaViewData = objectData.value.schemaViewData
    console.log('current schama_this.schemaViewData',_this.schemaViewData);
    
  }

  getASMFields() {
    return [
      "Id",
      "Name",
      "Remote_Verification__c",
      "ExAM__Assessment_Date_Time__c",
      "Completion_Status__c",
      "ExAM__Related_Assignment_Manager1__c",
      "ExAM__Field_End_Time__c",
      "ExAM__Related_Assignment_Manager2__c",
      "ExAM__Related_Assignment_Manager3__c",
      "ExAM__Related_Assignment_Manager4__c",
      "ExAM__Facility_Name__c",
      "ExAM__InvestigationType__c",
      "Overall_Status__c",
      "ExAM__Assessment_Template_Type__c",
      "ExAM__Location__c",
      "ExAM__Assessor_Resource__r.Name",
      "ExAM__Assessor_Resource__r.Email",
      "ExAM__Scheduled_Start_Date__c",
      "Inspection_Type__c",
      "Overall_Status_Comments__c",
      "CreatedBy.Name",
      "LastModifiedBy.Name",
    ];
  }

  getResponseFields() {
    return [
      "Fund_Req_Q__c",
      "HCV_Pass_Fail__c",
      "UPCS_V_Pass_or_Fail__c",
      "LTE__c",
      "Question_Name__c",
      "ExAM__Question_Label__c",
      "Defect_Level__c",
      "Section_Name__c",
      "Defect_Location__c",
      "Floor_Number__c",
      "Resolution_Status__c",
      "ExAM__Comment__c",
      "Responsibility_of_Repair__c",
      "Room__c",
      "PHA_Code__c",
      "Remote_Verification_Type_s__c",
    ];
  }

  getAccountFields() {
    return [
      "Name",
      "Unit_City__c",
      "Unit_County__c",
      "Unit_ST__c",
      "Unit_Zip__c",
      "Year_Built__c",
      "Housing_Type__c",
      "Other_Housing_Type_Comments__c",
      "Special_Housing_Type__c",
      "Lead_Free_Certificate__c",
      "General_Unit_Comments__c",
      "Number_of_Sleeping_Rooms__c",
      "Rooms_Tenant_is_Using_for_Sleeping__c",
      "Living_Room_Present__c",
      "Kitchen_Present__c",
      "Bathroom_Present__c",
      "Number_of_Full_Bathrooms__c",
      "Number_of_Half_Bathrooms__c",
      "Separate_Entrance__c",
      "SRO_Space_Requirement__c",
      "Owner.Name",
      "PHA_Code__c",
      "Agent_Email_Address__c",
      "Description",
      "Unit_Qualification_Comments__c",
      "Parent.Name",
      "Parent.Phone",
      "Parent.Unit_City__c",
      "Parent.Unit_ST__c",
      "Parent.Unit_Zip__c",
    ];
  }

  navigate(assessableObject: any, schemaViewData: any) {
    // $event.preventDefault();
    if (this.longPressActive === false) {
      this.router.navigate([
        "/objects-details",
        {
          assessableObject: JSON.stringify(assessableObject),
          schemaViewData: JSON.stringify(schemaViewData),
          feedback: JSON.stringify(
            this.defaultConfiguration.ExAM__Hide_Feedback_Button__c
          ),
          level: 0,
        },
      ]);
    }
  }
  async presentActions(schemaViewData: any, assessableObject: any) {
    let optionConfigDetailsMap = schemaViewData[0].optionConfigDetailsMap;

    // optionConfigDetailsMap['disableAddAM']
    // optionConfigDetailsMap['disableEditAM']
    // optionConfigDetailsMap['disableObjectAdd']
    // optionConfigDetailsMap['disableObjectEdit']
    // optionConfigDetailsMap['disableRelatedAM']
    // optionConfigDetailsMap['disableRelatedObj']
    // this.defaultConfiguration.ExAM__Hide_Feedback_Button__c

    // var currentSchema = $scope.currentparticularschemaObj.value['schemaViewData'][currentIndex];
    // $scope.currentschemaIndexposition = parseInt(currentIndex);
    // let isSupportSchemaViewOptionsChange = this.mobileAppVersionDetailObj.ExAM__Functionality_Map__c['isSupportSchemaViewOptionsChange'];
    // let wrapperArrayButton =[{text : 'Edit '+ schemaViewData[0].schemaTemplateobjectLabel,wrappervalue:'disableEditAM'}];
    let buttonArray = [];
    buttonArray.push({
      text: "View Details",
      handler: () => {
        this.openViewDetails(assessableObject, schemaViewData);
      },
    });

    if (optionConfigDetailsMap["disableAddAM"] !== "false") {
      buttonArray.push({
        text: "Create " + schemaViewData[0].schemaTemplateobjectLabel,
        handler: () => {},
      });
    }
    if (optionConfigDetailsMap["disableEditAM"] !== "false") {
    }
    optionConfigDetailsMap["disableObjectAdd"];
    optionConfigDetailsMap["disableObjectEdit"];

    if (optionConfigDetailsMap["disableObjectEdit"] !== "false") {
      buttonArray.push({
        text: "Edit " + schemaViewData[0].schemaTemplateobjectLabel,
        handler: () => {
          this.openEditDetails(assessableObject, schemaViewData);
        },
      });
    }

    if (optionConfigDetailsMap["disableRelatedObj"] !== "false") {
      buttonArray.push({ text: "Related Records", handler: () => {} });
    }
    if (optionConfigDetailsMap["disableRelatedAM"] !== "false") {
      buttonArray.push({
        text: "Related Assignment Managers",
        handler: () => {
          // this.openRelatedAMs(assessableObject, schemaViewData);
        },
      });
    }
    if (this.defaultConfiguration.ExAM__Hide_Feedback_Button__c === false) {
      buttonArray.push({
        text: "Submit Feedback",
        handler: () => {
          this.openFeedback(assessableObject, schemaViewData);
        },
      });
    }

    // for(let i=0;i < Object.keys(wrapperArrayButton).length;i++){
    //     let tempval = Object.values(wrapperArrayButton)[i].wrappervalue;
    //     if(isSupportSchemaViewOptionsChange && $scope.optionConfigDetailsMap[tempval] === "true"){
    //         buttonArray.push(Object.values(wrapperArrayButton)[i]);
    //     }
    //     else if(!isSupportSchemaViewOptionsChange && $scope.optionConfigDetailsMap[tempval] === "false"){
    //         buttonArray.push(Object.values(wrapperArrayButton)[i]);
    //     }
    // }
    // $scope.AMTreeViewMenu = buttonArray;
    // $scope.AMDetail = angular.copy(am);
    // $scope.schemadetailAM = angular.copy(schemadetail);
    // $scope.currentInd = angular.copy(currentIndex);

    // const actionSheet = await this.actionSheetCtrl.create({
    //      buttons:buttonArray,
    //      header: 'Actions for '+ assesableObject.Inspector_Logged_In__c,
    //      buttonClicked:function(index) {
    //          if(index === 0){
    //             var SchemaSortQuerySpec = navigator.smartstore.buildExactQuerySpec("valueName","schemaViewObjectAndAMSorting",1);
    //             navigator.smartstore.querySoup("LocalConfigurationData", SchemaSortQuerySpec, function(LocalConfigData) {
    //                 if(LocalConfigData.totalEntries){
    //                     if(LocalConfigData.currentPageOrderedEntries && LocalConfigData.currentPageOrderedEntries[0]){
    //                         if(LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[$scope.currentschemaviewId]){
    //                             if(LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[$scope.currentschemaviewId][$scope.currentschemaIndexposition] &&  LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[$scope.currentschemaviewId][$scope.currentschemaIndexposition]['AMFieldSet']){
    //                                 $scope.AMFieldsets = LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[$scope.currentschemaviewId][$scope.currentschemaIndexposition]['AMFieldSet'];
    //                             }
    //                         }
    //                     }
    //                 }
    //                 $scope.viewDetailForAM($scope.AMFieldsets,am,$scope.sortObjName);
    //             });
    //             showAMActionSheet();
    //          }
    //          if(buttonArray[index].wrappervalue === 'disableEditAM'){
    //              $scope.SchemaTreeViewAMEdit(am,currentSchema,currentIndex);
    //              showAMActionSheet();
    //          }
    //      }
    //  });

    const actionSheet = await this.actionSheetCtrl.create({
      header: "Actions",
      buttons: buttonArray,
    });

    await actionSheet.present();
  }
  async openFeedback(assessableObject: any, schemaViewData: any) {
    const modal = await this.modalController.create({
      component: FeedbackPage,
      componentProps: {
        assessableObject: assessableObject,
        schemaViewData: schemaViewData,
        feedbackQuestions: this.feedbackQuestions,
      },
    });
    modal.present();
  }

  close() {
    this.modalController.dismiss();
  }

  onLongPress($event) {
    console.log("onLongPress", $event);
  }

  onTap() {
    console.log("onTap");
  }

  async openViewDetails(assessableObject: any, schemaViewData: any) {
    const modal = await this.modalController.create({
      component: ViewDetailsPage,
      componentProps: {
        assessableObject: assessableObject,
        schemaViewData: schemaViewData,
      },
    });
    modal.present();
  }

  async openEditDetails(assessableObject: any, schemaViewData: any) {
    const modal = await this.modalController.create({
      component: EditDetailsPage,
      componentProps: {
        assessableObject: assessableObject,
        schemaViewData: schemaViewData,
      },
    });
    modal.present();
  }

  async openRelatedAMs(assessableObject: any, schemaViewData: any) {
    this.router.navigate([
      "/related-ams",
      {
        assessableObject: JSON.stringify(assessableObject),
        schemaViewData: JSON.stringify(schemaViewData),
        level: 0,
      },
    ]);
  }

  // async openRelatedAMs() {
  //   var _this = this;
  //   _this.getAmListData().then(function (amListData) {
  //     console.log('amListData',amListData);
  //     // console.log('this.router',this.router);
  //     _this.router.navigate(['/related-ams', {
  //    // assessableObject: JSON.stringify(assessableObject),
  //    // schemaViewData: JSON.stringify(schemaViewData),
  //     amListData:JSON.stringify(amListData),
  //     level: 0
  //   }])
  // });
  // }

  //Get Testing Am record for devolping detail page (getAmListData) method added by GB
  getAmListData(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      var _this = this;

      //var amList = [];

      var AmQuery = `SELECT Id, Name,ExAM__InvestigationType__c,ExAM__Status__c FROM ExAM__IssueRequest_Life_Cycle__c LIMIT 20`;

      _this.forceapi.query(AmQuery).then(
        function (amQueryData) {
          console.log("amQueryData", amQueryData);

          if (amQueryData && amQueryData.length) {
            // amQueryData.forEach(s => {
            //   if (s.Id) {
            //     //amList.push(s.Id);
            //   }
            // })
            resolve(amQueryData);
          } else {
            resolve("");
          }
        },
        function (error) {
          resolve("");
        }
      );
    });
  }

  //   async openRelatedRecords(index, Schemadetail, parentRecIndex, isfromback, isActionSheetCall, isFromTreeViewButton,CurrentReleatedIndex,isFromTrackCAll) {
  //     // StartupService.AddDebugLogs('$scope.getRelatedschemaTree start','schemaViewlistCtrl,$scope.getRelatedschemaTree');
  //     // if( $scope.modalOpen == true){
  //     //     $scope.relatedSchemaTreemodal.remove();
  //     //     $scope.modalOpen = false;
  //     // }
  //     // if(isFromTrackCAll){ // if(!$rootScope.isFromAppRestart && isFromTrackCAll && $rootScope.isFromFullSyncButton){
  //     //     StartupService.showLoading('',true);
  //     // }else{
  //     //     StartupService.showLoading();
  //     // }
  //     // $scope.amListFromTree = true;
  //      var defer = $q.defer();
  //      $scope.parentTreeRecord = Schemadetail;
  //      $scope.isCalledByActionSheet = isActionSheetCall;
  //      //Added for tree view direct relatedIndex
  //      $scope.isFromTreeViewButton = false;
  //      $scope.ishaveSingleRelatedIndex = false;
  //     if($scope.childIndexList && $scope.childIndexList[index] && $scope.childIndexList[index].length == 1){
  //         $scope.ishaveSingleRelatedIndex = true;
  //         CurrentReleatedIndex = 0;
  //     }
  //      $scope.treeViewChildApiNameList = [];
  //      if(Schemadetail && Schemadetail.Id){
  //         findObj = {'Id' : Schemadetail.Id};
  //      } else if(Schemadetail && Schemadetail._soupEntryId){
  //         findObj = {'_soupEntryId' : Schemadetail._soupEntryId};
  //      }
  //      if(index== 0){
  //         var parentList = $scope.currentparticularschemaObj.value['schemaViewData'][index]['assessableObjs'];
  //         parentRecIndex = _.findIndex(parentList,findObj);
  //      }
  //      if(!isFromTrackCAll){
  //         if($rootScope.schemaviewTreeTrackPath && $rootScope.schemaviewTreeTrackPath[index]
  //             && Object.keys($rootScope.schemaviewTreeTrackPath[index]).length > 0){
  //                if(!$rootScope.schemaviewTreeTrackPath[index]['schema']){
  //                    $rootScope.schemaviewTreeTrackPath[index]['schema'] = [];
  //                }
  //                $rootScope.schemaviewTreeTrackPath[index]['schema'].push({
  //                 'methodname' : 'getRelatedschemaTree',
  //                 'params' : [index, Schemadetail, parentRecIndex, isfromback, isActionSheetCall, isFromTreeViewButton,CurrentReleatedIndex]
  //                });
  //         } else {
  //             $rootScope.schemaviewTreeTrackPath[index] = {};
  //             $rootScope.schemaviewTreeTrackPath[index]['schema'] = [];
  //             $rootScope.schemaviewTreeTrackPath[index]['schema'].push({
  //                 'methodname' : 'getRelatedschemaTree',
  //                 'params' : [index, Schemadetail, parentRecIndex, isfromback, isActionSheetCall, isFromTreeViewButton,CurrentReleatedIndex]
  //             });
  //         }
  //      }

  //      if($rootScope.schemaviewTreeTrackPath[index] && $ionicScrollDelegate.$getByHandle('SchemaViewRelatedModel') && $ionicScrollDelegate.$getByHandle('SchemaViewRelatedModel').getScrollPosition()){

  //         //$rootScope.RelatedschemascrollPostion = $ionicScrollDelegate.$getByHandle('SchemaViewRelatedModel').getScrollPosition();

  //         $rootScope.schemaviewTreeTrackPath[index]['RelatedschemascrollPostion']= $ionicScrollDelegate.$getByHandle('SchemaViewRelatedModel').getScrollPosition();

  //     }
  //     mainappservice.SetuserBasedSelectedschemaviewTreeTrackPath($rootScope.schemaviewTreeTrackPath).then(function(){
  //     });
  //   if(isFromTrackCAll){
  //     $timeout(function(){
  //             // $rootScope.RelatedschemascrollPostion=$ionicScrollDelegate.$getByHandle('SchemaViewRelatedModel').getScrollPosition().top;

  //         $ionicScrollDelegate.$getByHandle('SchemaViewRelatedModel').scrollTo(0,$rootScope.RelatedschemascrollPostion);
  //     },200);
  //   }
  //      var previousParentIndex = 0;
  //      var previous
  //      if(isfromback){
  //          previousParentIndex = angular.copy($scope.currentTreeViewParentIndex);

  //      }
  //      var currentschemaObj =   $scope.currentparticularschemaObj.value['schemaViewData'][$scope.currentschemaIndexposition];

  //      $scope.currentTreeViewParentIndex = index;
  //      $scope.currentschemaIndexposition = index;
  //      $scope.parentRecIndex = parentRecIndex;
  //      var schemaObj =   $scope.currentparticularschemaObj.value['schemaViewData'][index];
  //      var childSchemaInd = [];
  //      $scope.ChildRecLength = 0;
  //      $scope.IsTreeViewRelatedModalOpen = true;

  //      if(schemaObj.relatedObjectsIndex != null && schemaObj.relatedObjectsIndex != '') {
  //          childSchemaInd = schemaObj.relatedObjectsIndex;
  //      }
  //      if(!isActionSheetCall && schemaObj.amWithAssessableIdMap != null && schemaObj.amWithAssessableIdMap != '') {
  //          $scope.amListTree = schemaObj.amWithAssessableIdMap[Schemadetail.Id];
  //         // getAMListByAMSharing(schemaObj, Schemadetail.Id, index, 'RelatedSchemaTree');
  //      }
  //     if(schemaObj['amWithAssessableIdMap'] && schemaObj['amWithAssessableIdMap'][Schemadetail.Id] && isActionSheetCall == false){
  //         //for  prevent empty related modal open(without AM count)
  //         //$scope.ChildRecLength += Object.keys(schemaObj['amWithAssessableIdMap'][Schemadetail.Id]).length;
  //     }
  //     else if(schemaObj['amWithAssessableIdMap'] && schemaObj['amWithAssessableIdMap'][Schemadetail._soupEntryId] && isActionSheetCall == false){
  //          //for  prevent empty related modal open(without AM count)
  //        // $scope.ChildRecLength += Object.keys(schemaObj['amWithAssessableIdMap'][Schemadetail._soupEntryId]).length;
  //     }
  //     for(var i = 0; i < childSchemaInd.length; i++){
  //         var schemaval=$scope.currentparticularschemaObj.value['schemaViewData'][childSchemaInd[i]];
  //         if(schemaval['childAssessableObjs'] && schemaval['childAssessableObjs'][Schemadetail.Id]){
  //             $scope.ChildRecLength += Object.keys(schemaval['childAssessableObjs'][Schemadetail.Id]).length;
  //         }
  //         else if(schemaval['childAssessableObjs'] && schemaval['childAssessableObjs'][Schemadetail._soupEntryId]){
  //             $scope.ChildRecLength += Object.keys(schemaval['childAssessableObjs'][Schemadetail._soupEntryId]).length;
  //         }
  //     }
  //     // for prevent empty related modal
  //     if($scope.ChildRecLength == 0){
  //      //if($scope.ChildRecLength == 0 && isActionSheetCall == false){
  //         $scope.IsTreeViewRelatedModalOpen = false;
  //      }
  //     if($scope.IsTreeViewRelatedModalOpen){
  //     // StartupService.showLoading();
  //      if(Schemadetail.Id){
  //         $scope.parentId = Schemadetail.Id;
  //      }
  //      else if(Schemadetail._soupEntryId){
  //         $scope.parentId = Schemadetail._soupEntryId;
  //      }
  //     if( Schemadetail && Schemadetail.Id && Schemadetail.Id.toString().length > 14){
  //         $scope.objectRecordparentId = Schemadetail.Id;
  //         $scope.parentObjdetails=Schemadetail;

  //         previousParentId =  Schemadetail.Id;
  //         launchParentId = Schemadetail.Id;
  //     }else{
  //         $scope.objectRecordparentId = Schemadetail._soupEntryId;
  //         $scope.parentObjdetails=Schemadetail;

  //         previousParentId = Schemadetail._soupEntryId;
  //         launchParentId = Schemadetail._soupEntryId;
  //     }
  //      var parentSchemaIndex = index;
  //      $scope.ParentNodeIndex = index;
  //     $scope.getPrimaryObjectRecordList().then(function(){
  //          $scope.parentAssessableName = $scope.currentparticularschemaObj.value['schemaViewData'][parentSchemaIndex].objectLabel;
  //          var parentschemaObj =   $scope.currentparticularschemaObj.value['schemaViewData'][parentSchemaIndex];

  //         //Added for parent label display in  related modal title
  //         if( $scope.isSupportAMViewDetailsAndschemaTemplatecustomlabel){
  //             if(parentschemaObj && parentschemaObj.schemaTemplatepluralLabel!='' && parentschemaObj.schemaTemplatepluralLabel!=null){
  //                 $scope.parentobjectLabel =parentschemaObj.schemaTemplatepluralLabel;

  //             }else{
  //                 $scope.parentobjectLabel = parentschemaObj.objectLabel;

  //             }

  //             if(parentschemaObj && parentschemaObj.schemaTemplateobjectLabel!='' && parentschemaObj.schemaTemplateobjectLabel!=null){
  //                 $scope.parentsingularobjectLabel =parentschemaObj.schemaTemplateobjectLabel;

  //             }else{
  //                 if(parentschemaObj && parentschemaObj.objectLabel){
  //                     $scope.parentsingularobjectLabel = parentschemaObj.objectLabel;

  //                 }
  //             }

  //         }else{
  //             if(parentschemaObj && parentschemaObj.objectLabel){
  //                 $scope.parentsingularobjectLabel = parentschemaObj.objectLabel;

  //             }
  //         }
  //         var tempobjLabelForSchemaView = $rootScope.objLabelForSchemaView[parentSchemaIndex].apiName;
  //         if($rootScope.objLabelForSchemaView && $rootScope.objLabelForSchemaView[parentSchemaIndex] && Schemadetail[tempobjLabelForSchemaView]){
  //             $scope.relatedAMsAssessableObjectRecordName = Schemadetail[tempobjLabelForSchemaView];
  //         }else{
  //             if($scope.currentparticularschemaObj.value['schemaViewData'][parentSchemaIndex].apiName == 'Case'){
  //                 $scope.relatedAMsAssessableObjectRecordName = Schemadetail['CaseNumber'];
  //             }else{
  //                 $scope.relatedAMsAssessableObjectRecordName = Schemadetail['Name'];
  //             }
  //         }

  //          if(!isfromback) {
  //              parentDetailsWithIndex[index] = Schemadetail;
  //              parentRecIndexWithIndex[index] = parentRecIndex;
  //          }else{
  //              // $ionicLoading.hide();
  //          }

  //          if(!isfromback) {
  //              //parentSchemaIndex = angular.copy($scope.currentschemaIndexposition);
  //              if(isFromTrackCAll) {
  //                  if( force.tempAssignment_Manager && (force.tempAssignment_Manager['isSubmited'] =="true" ||  force.tempAssignment_Manager['isSubmited'] =="save"  ||  force.tempAssignment_Manager['isAmEdited'] =="true") ){
  //                      //need to check update or not force.tempAssignment_Manager.toUpdate=="true"
  //                      $scope.ischildhaveeditedrecord=true;
  //                  }
  //              }
  //          } else {

  //              //Added for sync text update in parent level
  //            if(isfromback && $scope.ischildhaveeditedrecord){
  //              var QuerySpec = navigator.smartstore.buildExactQuerySpec("schemaTemplateId",$scope.currentschemaviewId,1000);
  //              navigator.smartstore.querySoup("schemaTemplateViewList", QuerySpec, function(schemaTemplatedata) {

  //                  var ObjectData= schemaTemplatedata.currentPageOrderedEntries;
  //                  var schemaData = ObjectData;

  //                  $scope.treeViewSchemalist[previousParentIndex][Schemadetail.Id][parentRecIndexWithIndex[previousParentIndex]]['isEdited'] = true;
  //                  schemaData[0].value['schemaViewData'][previousParentIndex]['childAssessableObjs'][Schemadetail.Id][parentRecIndexWithIndex[previousParentIndex]]['isEdited'] = true;
  //                  $scope.currentparticularschemaObj.value['schemaViewData'][previousParentIndex]['childAssessableObjs'][Schemadetail.Id][parentRecIndexWithIndex[previousParentIndex]]['isEdited'] = true;
  //                  navigator.smartstore.upsertSoupEntries("schemaTemplateViewList", schemaData, function(assessableData) {

  //                  });

  //               });
  //              }

  //          }

  //          for(var i = 0; i < childSchemaInd.length; i++) {

  //          //   $scope.relatedSchemalist=[];
  //          //    $scope.relatedApiName = schemaval.apiName;
  //          //   $scope.relatedSchemafieldset =[];
  //          //   $scope.relatedSchemafieldset = schemaval.ObjectFieldSet;
  //              var schemaval=$scope.currentparticularschemaObj.value['schemaViewData'][childSchemaInd[i]];
  //              $scope.treeViewChildApiNameWithIndex[schemaval.apiName] = childSchemaInd[i];
  //              if(!$scope.treeViewChildApiNameList.includes(schemaval.apiName)){
  //                  //Added for trversal Looku type

  //                  if($scope.isSupportTraversalLookUp && $scope.currentparticularschemaObj.value['schemaViewData'][childSchemaInd[i]] && $scope.currentparticularschemaObj.value['schemaViewData'][childSchemaInd[i]].traversal !=null && $scope.currentparticularschemaObj.value['schemaViewData'][childSchemaInd[i]].traversal=='Look Up'){
  //                     //for future use
  //                     }else{
  //                         $scope.treeViewChildApiNameList.push(schemaval.apiName);

  //                     }
  //              }
  //              angular.forEach($scope.relatedSchemafieldset, function(value, key){
  //                  if(value.type == 'reference'){
  //                      value.fieldPath = value.fieldPath.replace('__c','__r');
  //                      if(value.fieldPath.endsWith('Id')){
  //                          value.fieldPath = value.fieldPath.replace('Id','');
  //                      }
  //                  }
  //              });

  //              if(schemaval && schemaval.childAssessableObjs && schemaval.childAssessableObjs[Schemadetail.Id]){
  //                //  $scope.relatedSchemalist=schemaval.childAssessableObjs[Schemadetail.Id];
  //                  $scope.treeViewSchemalist[childSchemaInd[i]] = schemaval.childAssessableObjs;
  //                  if(schemaval['childAssessableObjs'] && schemaval['childAssessableObjs'][Schemadetail.Id]){

  //                     $scope.rootNodeIdwithChildlistIndexwise[childSchemaInd[i]] = schemaval['childAssessableObjs'][Schemadetail.Id].filter(function(item) {

  //                     if(item && item.Id){
  //                         if($scope.OrderNumberWithIndexMap && $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber] == '0'){
  //                            if($rootScope.ChildIdwithrootNodeparentIdddetails && Object.keys($rootScope.ChildIdwithrootNodeparentIdddetails).length > 0 && $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]] ){
  //                                 $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]][item.Id] = Schemadetail.Id;
  //                                 $rootScope.eachNodeIdwithParentId[childSchemaInd[i]][item.Id] = Schemadetail.Id;
  //                                 $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]][item.Id] = Schemadetail.Id;

  //                             }else if($rootScope.ChildIdwithrootNodeparentIdddetails ){
  //                                 $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]] = {};
  //                                 $rootScope.eachNodeIdwithParentId[childSchemaInd[i]] = {};
  //                                 $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]] = {};

  //                                 $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]][item.Id] = Schemadetail.Id;
  //                                 $rootScope.eachNodeIdwithParentId[childSchemaInd[i]][item.Id] = Schemadetail.Id;
  //                                 $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]][item.Id] = Schemadetail.Id;

  //                             }

  //                         }else{
  //                             //here rootnode parentID value get from parent ID in direct paraent
  //                             if($rootScope.eachNodeIdwithParentId && Object.keys($rootScope.eachNodeIdwithParentId).length > 0 && $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail.Id]){
  //                                 if($rootScope.ChildIdwithrootNodeparentIdddetails && Object.keys($rootScope.ChildIdwithrootNodeparentIdddetails).length > 0 && $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]] ){
  //                                     //$rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]][item.Id]={};
  //                                     //$rootScope.eachNodeIdwithParentId[childSchemaInd[i]][item.Id]={};
  //                                     $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]][item.Id] = $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail.Id];
  //                                     $rootScope.eachNodeIdwithParentId[childSchemaInd[i]][item.Id] = $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail.Id];
  //                                     $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]][item.Id] = Schemadetail.Id;

  //                                 }else if($rootScope.ChildIdwithrootNodeparentIdddetails ){
  //                                     $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]] = {};
  //                                     $rootScope.eachNodeIdwithParentId[childSchemaInd[i]] = {};
  //                                     $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]] = {};

  //                                     $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]][item.Id] = $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail.Id];
  //                                     $rootScope.eachNodeIdwithParentId[childSchemaInd[i]][item.Id] = $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail.Id];
  //                                     $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]][item.Id] = Schemadetail.Id;

  //                                 }

  //                             }

  //                         }
  //                         return item.Id;
  //                     }else{
  //                         if( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber] == '0'){
  //                             if($rootScope.ChildIdwithrootNodeparentIdddetails && Object.keys($rootScope.ChildIdwithrootNodeparentIdddetails).length > 0 && $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]] ){

  //                                 $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]][item._soupEntryId] = Schemadetail.Id;
  //                                 $rootScope.eachNodeIdwithParentId[childSchemaInd[i]][item._soupEntryId] = Schemadetail.Id;
  //                                 $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]][item._soupEntryId] = Schemadetail.Id;

  //                             }else if($rootScope.ChildIdwithrootNodeparentIdddetails ){
  //                                 $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]] = {};
  //                                 $rootScope.eachNodeIdwithParentId[childSchemaInd[i]] = {};
  //                                 $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]] = {};

  //                                 $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]][item._soupEntryId] = Schemadetail.Id;
  //                                 $rootScope.eachNodeIdwithParentId[childSchemaInd[i]][item._soupEntryId] = Schemadetail.Id;
  //                                 $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]][item._soupEntryId] = Schemadetail.Id;

  //                             }

  //                         }else{
  //                             //here rootnode parentID value get from parent ID in direct paraent
  //                             if($rootScope.eachNodeIdwithParentId && Object.keys($rootScope.eachNodeIdwithParentId).length > 0 && $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail.Id]){
  //                                 if($rootScope.ChildIdwithrootNodeparentIdddetails && Object.keys($rootScope.ChildIdwithrootNodeparentIdddetails).length > 0 && $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]] ){

  //                                     $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]][item._soupEntryId] =$rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail.Id];
  //                                     $rootScope.eachNodeIdwithParentId[childSchemaInd[i]][item._soupEntryId] = $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail.Id];
  //                                     $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]][item._soupEntryId] = Schemadetail.Id;

  //                                 }else if($rootScope.ChildIdwithrootNodeparentIdddetails ){
  //                                     $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]] = {};
  //                                     $rootScope.eachNodeIdwithParentId[childSchemaInd[i]] = {};
  //                                     $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]] = {};

  //                                     $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]][item._soupEntryId] = $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail.Id];

  //                                     $rootScope.eachNodeIdwithParentId[childSchemaInd[i]][item._soupEntryId] = $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail.Id];
  //                                     $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]][item._soupEntryId] = Schemadetail.Id;

  //                                 }

  //                             }

  //                         }

  //                         return item._soupEntryId;
  //                     }
  //                 });
  //             }else if(schemaval['childAssessableObjs'] && schemaval['childAssessableObjs'][Schemadetail._soupEntryId]){
  //                 $scope.rootNodeIdwithChildlistIndexwise[childSchemaInd[i]] = schemaval['childAssessableObjs'][Schemadetail._soupEntryId].filter(function(item) {
  //                     if(item && item.Id){
  //                         if( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber] == '0'){
  //                             if($rootScope.ChildIdwithrootNodeparentIdddetails && Object.keys($rootScope.ChildIdwithrootNodeparentIdddetails).length > 0 && $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]] ){

  //                             $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]][item.Id] = Schemadetail._soupEntryId;

  //                             $rootScope.eachNodeIdwithParentId[childSchemaInd[i]][item.Id] = Schemadetail._soupEntryId;
  //                             $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]][item.Id] = Schemadetail._soupEntryId;

  //                             }else if($rootScope.ChildIdwithrootNodeparentIdddetails ){
  //                                 $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]] = {};
  //                                 $rootScope.eachNodeIdwithParentId[childSchemaInd[i]] = {};
  //                                 $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]] = {};

  //                                 $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]][item.Id] = Schemadetail._soupEntryId;
  //                                 $rootScope.eachNodeIdwithParentId[childSchemaInd[i]][item.Id] = Schemadetail._soupEntryId;
  //                                 $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]][item.Id] = Schemadetail._soupEntryId;

  //                             }

  //                         }else{
  //                             if($rootScope.eachNodeIdwithParentId && Object.keys($rootScope.eachNodeIdwithParentId).length > 0 &&  $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail._soupEntryId]){
  //                                 if($rootScope.ChildIdwithrootNodeparentIdddetails && Object.keys($rootScope.ChildIdwithrootNodeparentIdddetails).length > 0 && $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]] ){

  //                                 $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]][item.Id] = $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail._soupEntryId];

  //                                 $rootScope.eachNodeIdwithParentId[childSchemaInd[i]][item.Id] = $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail._soupEntryId];
  //                                 $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]][item.Id] = Schemadetail._soupEntryId;

  //                             }else if($rootScope.ChildIdwithrootNodeparentIdddetails ){
  //                                 $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]] = {};
  //                                 $rootScope.eachNodeIdwithParentId[childSchemaInd[i]] = {};
  //                                 $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]] = {};

  //                                 $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]][item.Id] = $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail._soupEntryId];

  //                                 $rootScope.eachNodeIdwithParentId[childSchemaInd[i]][item.Id] = $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail._soupEntryId];
  //                                 $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]][item.Id] = Schemadetail._soupEntryId;

  //                             }
  //                             }
  //                         }
  //                         return item.Id;
  //                     }else{
  //                         if( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber] == '0'){
  //                             if($rootScope.ChildIdwithrootNodeparentIdddetails && Object.keys($rootScope.ChildIdwithrootNodeparentIdddetails).length > 0 && $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]] ){

  //                             $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]][item._soupEntryId] = Schemadetail._soupEntryId;

  //                             $rootScope.eachNodeIdwithParentId[childSchemaInd[i]][item._soupEntryId] = Schemadetail._soupEntryId;
  //                             $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]][item._soupEntryId] = Schemadetail._soupEntryId;

  //                             }else if($rootScope.ChildIdwithrootNodeparentIdddetails ){
  //                                 $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]] = {};
  //                                 $rootScope.eachNodeIdwithParentId[childSchemaInd[i]] = {};
  //                                 $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]] = {};

  //                                 $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]][item._soupEntryId] = Schemadetail._soupEntryId;

  //                                 $rootScope.eachNodeIdwithParentId[childSchemaInd[i]][item._soupEntryId] = Schemadetail._soupEntryId;
  //                                 $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]][item._soupEntryId] = Schemadetail._soupEntryId;

  //                             }
  //                         }else{
  //                             if($rootScope.eachNodeIdwithParentId && Object.keys($rootScope.eachNodeIdwithParentId).length > 0 && $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail._soupEntryId]){
  //                                 if($rootScope.ChildIdwithrootNodeparentIdddetails && Object.keys($rootScope.ChildIdwithrootNodeparentIdddetails).length > 0 && $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]] ){

  //                                     $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]][item._soupEntryId] = $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail._soupEntryId];
  //                                     $rootScope.eachNodeIdwithParentId[childSchemaInd[i]][item._soupEntryId] = $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail._soupEntryId];
  //                                     $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]][item._soupEntryId] =Schemadetail._soupEntryId;

  //                                 }else if($rootScope.ChildIdwithrootNodeparentIdddetails ){
  //                                     $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]] = {};
  //                                     $rootScope.eachNodeIdwithParentId[childSchemaInd[i]] = {};
  //                                     $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]] = {};

  //                                     $rootScope.ChildIdwithrootNodeparentIdddetails[childSchemaInd[i]][item._soupEntryId] = $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail._soupEntryId];

  //                                     $rootScope.eachNodeIdwithParentId[childSchemaInd[i]][item._soupEntryId] = $rootScope.eachNodeIdwithParentId[parseInt( $scope.OrderNumberWithIndexMap[schemaval.parentOrderNumber])][Schemadetail._soupEntryId];
  //                                     $rootScope.eachNodeIdwithdirectParentId[childSchemaInd[i]][item._soupEntryId] = Schemadetail._soupEntryId;

  //                                 }

  //                             }
  //                         }
  //                         return item._soupEntryId;
  //                     }
  //                 });
  //             }

  //                  $scope.relatedschemarelatedObjectsIndex = schemaval.relatedObjectsIndex;
  //              }
  //          }
  //          var schemaViewObj = $scope.currentparticularschemaObj.value['schemaViewData'];
  //          var schemadata = $scope.currentparticularschemaObj.value['schemaViewData'][$scope.currentschemaIndexposition];
  //          var schemarelatedObjectsIndex = schemadata.relatedObjectsIndex;

  //          //Added for tree view particular related Index
  //          if(isFromTreeViewButton || $scope.ishaveSingleRelatedIndex){
  //             $scope.isFromTreeViewButton = isFromTreeViewButton;
  //             $scope.CurrentTreeViewRelatedIndex =  $scope.childIndexList[index][CurrentReleatedIndex];
  //             $scope.childAssessableName =  $scope.currentparticularschemaObj.value['schemaViewData'][$scope.CurrentTreeViewRelatedIndex].objectLabel;
  //             var CurrentReleatedIndexschemaObj =   $scope.currentparticularschemaObj.value['schemaViewData'][$scope.CurrentTreeViewRelatedIndex];
  //             //Added for template label display in related modal title
  //             if( $scope.isSupportAMViewDetailsAndschemaTemplatecustomlabel){
  //                if(CurrentReleatedIndexschemaObj && CurrentReleatedIndexschemaObj.schemaTemplatepluralLabel!='' && CurrentReleatedIndexschemaObj.schemaTemplatepluralLabel!=null){
  //                    $scope.relatedobjectLabel =CurrentReleatedIndexschemaObj.schemaTemplatepluralLabel;
  //                }else{
  //                    $scope.relatedobjectLabel = CurrentReleatedIndexschemaObj.objectLabel;

  //                }

  //                if(CurrentReleatedIndexschemaObj && CurrentReleatedIndexschemaObj.schemaTemplateobjectLabel!='' && CurrentReleatedIndexschemaObj.schemaTemplateobjectLabel!=null){
  //                    $scope.relatedsingularobjectLabel =CurrentReleatedIndexschemaObj.schemaTemplateobjectLabel;

  //                }else{
  //                    $scope.relatedsingularobjectLabel = '';

  //                }

  //            }else{
  //                $scope.relatedobjectLabel = CurrentReleatedIndexschemaObj.relatedobjectLabel;

  //            }
  //            $scope.objectLabel = angular.copy($scope.relatedobjectLabel);

  //          }
  //         //$scope.SchemaviewSorting($scope.CurrentTreeViewRelatedIndex).then(function(){ //added for sorting
  //             //added for form child listview filter data
  //             if($scope.isSupportListViewFilter && $scope.currentparticularschemaObj && $scope.currentparticularschemaObj.value['schemaViewData'] && $scope.currentparticularschemaObj.value['schemaViewData'][$scope.CurrentTreeViewRelatedIndex] && $scope.currentparticularschemaObj.value['schemaViewData'][$scope.CurrentTreeViewRelatedIndex].listviewlist){
  //                 formListViewFilterData(0,$scope.currentparticularschemaObj.value['schemaViewData'][$scope.CurrentTreeViewRelatedIndex].listviewlist,$scope.CurrentTreeViewRelatedIndex,$scope.currentparticularschemaObj.value['schemaViewData'][$scope.CurrentTreeViewRelatedIndex].optionConfigDetailsMap).then(function(){
  //                     if($scope.ListViewData && Object.keys($scope.ListViewData) && Object.keys($scope.ListViewData).length > 0){
  //                         $scope.ListViewLength = Object.keys($scope.ListViewData).length;
  //                     }else{
  //                         $scope.ListViewLength = 0;
  //                     }
  //                 });
  //             }

  //             //Added here for initialize schema view filter text,filed and display search bar options - vinoth
  //             if(($scope.TreeViewViewDetail && $scope.TreeViewViewDetail[$scope.CurrentTreeViewRelatedIndex] && $scope.TreeViewViewDetail[$scope.CurrentTreeViewRelatedIndex].length > 0)
  //                 || ($scope.objLabelForTreeView && $scope.objLabelForTreeView[$scope.CurrentTreeViewRelatedIndex] && $scope.objLabelForTreeView[$scope.CurrentTreeViewRelatedIndex].apiName)){
  //                 formSchemaViewFilterData($scope.CurrentTreeViewRelatedIndex,$scope.currentschemaviewId).then(function(){
  //                 });
  //             }
  //             //end  for initialize schema view filter text,filed and display search bar options - vinoth
  //             //commented for modal closed in method change
  //            /* if( $scope.modalOpen == true){
  //                 $scope.relatedSchemaTreemodal.remove();
  //                 $scope.modalOpen = false;
  //             }*/
  //             if( $scope.modalOpen == false){
  //             //if(val == 'modalone'){
  //                 if(device && device.platform == 'iOS'){
  //                     $scope.relatedSchemaTreemodal = $ionicModal.fromTemplate(modalservice.iostreeViewNotEnabled, {
  //                         scope: $scope,
  //                         hardwareBackButtonClose: false,
  //                         animation: 'slide-in-right'
  //                     });
  //                 }else{
  //                     $scope.relatedSchemaTreemodal = $ionicModal.fromTemplate(modalservice.treeViewNotEnabled, {
  //                         scope: $scope,
  //                         hardwareBackButtonClose: false,
  //                         animation: 'slide-in-right'

  //                     });
  //                 }
  //                 $scope.modalOpen = true;

  //                 $scope.relatedSchemaTreemodal.show();
  //                 $rootScope.relatedSchemaTreemodalforsyncclose=$scope.relatedSchemaTreemodal;
  //                 $scope.openedTreeModels.push('relatedSchemaTreemodal');
  //                 if(!isFromTrackCAll){
  //                     //$ionicLoading.hide();
  //                 }
  //             }
  //             $timeout(function(){
  //                 if(!isFromTrackCAll){
  //                     $ionicLoading.hide();
  //                 }
  //                 defer.resolve();
  //             },2000);
  //         //});
  //     });
  //     }else{
  //         $timeout(function(){
  //             if(!isFromTrackCAll){
  //                 $ionicLoading.hide();
  //             }
  //             defer.resolve();
  //         },2000);
  //     }
  //     if(isActionSheetCall == true && $scope.IsTreeViewRelatedModalOpen == false){
  //         StartupService.showAlert("No Records Found");
  //     }
  //      return defer.promise;
  //  }

  //  async openRelatedAM(Schemadetail,isFrom,currentobjIndexpostion,relatedobjparentId,isFromTree,currentSchemIndex,isfromautomticcallmethod){
  //   StartupService.AddDebugLogs('$scope.getRelatedAmlist start','schemaViewlistCtrl,$scope.getRelatedAmlist');
  //   var tempTrackerData = '';
  //   $scope.amParentRecord = Schemadetail;
  //   if(Schemadetail){
  //       $rootScope.schemadetailAM=Schemadetail;
  //   }
  //   if(!isFromTree){
  //       $scope.isFromTreeViewAm = false; // Added for tree view sorting
  //       relatedobjparentId = $scope.relatedobjparentId;
  //       if($rootScope.schemaviewTrackPath && $rootScope.schemaviewTrackPath[$scope.currentschemaIndexposition]
  //           && Object.keys($rootScope.schemaviewTrackPath[$scope.currentschemaIndexposition]).length > 0){

  //               tempTrackerData = angular.copy($rootScope.schemaviewTrackPath); //Added to get stored AMId

  //           $rootScope.schemaviewTrackPath[$scope.currentschemaIndexposition]['amList'] = {
  //               'methodname' : 'getRelatedAmlist',
  //               'params' : [Schemadetail,isFrom,currentobjIndexpostion,relatedobjparentId,isFromTree,currentSchemIndex]
  //           }

  //       } else {
  //           $rootScope.schemaviewTrackPath[$scope.currentschemaIndexposition] = {};
  //           $rootScope.schemaviewTrackPath[$scope.currentschemaIndexposition]['amList'] = {
  //               'methodname' : 'getRelatedAmlist',
  //               'params' : [Schemadetail,isFrom,currentobjIndexpostion,relatedobjparentId,isFromTree,currentSchemIndex]
  //           }

  //       }
  //   } else {

  //       $scope.isFromTreeViewAm = true; // Added for tree view sorting
  //       $scope.amListFromTree = true;
  //       // changed $scope.currentschemaIndexposition - currentSchemIndex for am list popover open issue
  //       if($rootScope.schemaviewTreeTrackPath && $rootScope.schemaviewTreeTrackPath[currentSchemIndex]
  //           && Object.keys($rootScope.schemaviewTreeTrackPath[currentSchemIndex]).length > 0){

  //               tempTrackerData = angular.copy($rootScope.schemaviewTreeTrackPath); //Added to get stored AMId

  //           $rootScope.schemaviewTreeTrackPath[currentSchemIndex]['amList'] = {
  //               'methodname' : 'getRelatedAmlist',
  //               'params' : [Schemadetail,isFrom,currentobjIndexpostion,relatedobjparentId,isFromTree,currentSchemIndex]
  //           }

  //       } else {
  //           $rootScope.schemaviewTreeTrackPath[currentSchemIndex] = {};
  //           $rootScope.schemaviewTreeTrackPath[currentSchemIndex]['amList'] = {
  //               'methodname' : 'getRelatedAmlist',
  //               'params' : [Schemadetail,isFrom,currentobjIndexpostion,relatedobjparentId,isFromTree,currentSchemIndex]
  //           }

  //       }

  //   }

  //   $scope.Amlist=[];
  //   $scope.templateIds = {};
  //   $scope.amFilterOptionlen = [];

  //  // var schemaval=$scope.currentparticularschemaObj.value['schemaViewData'][0];
  //  // console.log('schemaval',schemaval);
  //  $scope.currentobjIndexpostion=currentobjIndexpostion;
  //  $scope.currentschemaIndexposition=currentSchemIndex;
  //   if(isfromautomticcallmethod){
  //       if( force.tempAssignment_Manager && (force.tempAssignment_Manager['isSubmited'] =="true" ||  force.tempAssignment_Manager['isSubmited'] =="save" ||  force.tempAssignment_Manager['isAmEdited'] =="true" ) ){
  //           //need to check update or not force.tempAssignment_Manager.toUpdate=="true"
  //           $scope.ischildhaveeditedrecord=true;
  //           if($scope.ischildhaveeditedrecord){

  //               var findObj = {};
  //               if(Schemadetail && Schemadetail.Id && Schemadetail.Id.toString().length > 14){
  //                   findObj = {'Id':Schemadetail.Id};
  //               } else {
  //                   findObj = {'_soupEntryId':Schemadetail._soupEntryId};
  //               }
  //               var QuerySpec = navigator.smartstore.buildExactQuerySpec("schemaTemplateId",$scope.currentschemaviewId,1000);
  //               navigator.smartstore.querySoup("schemaTemplateViewList", QuerySpec, function(schemaTemplatedata) {

  //                   var ObjectData= schemaTemplatedata.currentPageOrderedEntries;

  //               if($scope.currentschemaIndexposition==0){
  //                   var schemaData = ObjectData;
  //                   var schemaInd = _.findIndex(schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition]['assessableObjs'],findObj);
  //                   if(schemaInd != -1){
  //                       schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition]['assessableObjs'][schemaInd]['isEdited']=true;
  //                   }
  //                   var currentSchemaInd = _.findIndex($scope.currentparticularschemaObj.value['schemaViewData'][$scope.currentschemaIndexposition]['assessableObjs'],findObj);
  //                   if(currentSchemaInd != -1){
  //                       $scope.currentparticularschemaObj.value['schemaViewData'][$scope.currentschemaIndexposition]['assessableObjs'][currentSchemaInd]['isEdited']=true
  //                   }
  //                   if($scope.isSupportSchemaFieldset){
  //                       var treeInd = _.findIndex($scope.treeViewSchemalist[$scope.currentschemaIndexposition],findObj);
  //                       if(treeInd != -1){
  //                           $scope.treeViewSchemalist[$scope.currentschemaIndexposition][treeInd]['isEdited']=true;
  //                       }
  //                   }
  //                   navigator.smartstore.upsertSoupEntries("schemaTemplateViewList", schemaData, function(assessableData) {
  //                   });
  //               }else{
  //                   //for related update tha value in schema back button
  //                   var schemaData = ObjectData;
  //                   var schemaInd = _.findIndex(schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition]['childAssessableObjs'][relatedobjparentId],findObj);
  //                   if(schemaInd != -1){
  //                       schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition]['childAssessableObjs'][relatedobjparentId][schemaInd]['isEdited']=true;
  //                   }
  //                   var currentSchemaInd = _.findIndex($scope.currentparticularschemaObj.value['schemaViewData'][$scope.currentschemaIndexposition]['childAssessableObjs'][relatedobjparentId],findObj);
  //                   if(currentSchemaInd != -1){
  //                       $scope.currentparticularschemaObj.value['schemaViewData'][$scope.currentschemaIndexposition]['childAssessableObjs'][relatedobjparentId][currentSchemaInd]['isEdited']=true
  //                   }
  //                   if($scope.isSupportSchemaFieldset){
  //                       var treeInd = _.findIndex($scope.treeViewSchemalist[$scope.currentschemaIndexposition][relatedobjparentId],findObj);
  //                       if(treeInd != -1){
  //                           $scope.treeViewSchemalist[$scope.currentschemaIndexposition][relatedobjparentId][treeInd]['isEdited']=true;
  //                       }
  //                   }
  //               // schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition]['childAssessableObjs'][relatedobjparentId][currentobjIndexpostion]['isEdited']=true;
  //               // $scope.currentparticularschemaObj.value['schemaViewData'][$scope.currentschemaIndexposition]['childAssessableObjs'][relatedobjparentId][currentobjIndexpostion]['isEdited']=true
  //                   navigator.smartstore.upsertSoupEntries("schemaTemplateViewList", schemaData, function(assessableData) {

  //                   });
  //               }

  //               });
  //           }

  //       }else{
  //          /* if( force.tempAssignment_Manager ){
  //               //need to check update or not force.tempAssignment_Manager.toUpdate=="true"
  //               if(!angular.isUndefined(force.tempLocal_Answer) && force.tempLocal_Answer!== 'null' && force.tempLocal_Answer !== 'undefined') {

  //                   if(force.tempLocal_Answer && (force.tempLocal_Answer.response && (Object.keys(force.tempLocal_Answer.response).length > 0 ) ||(force.tempLocal_Answer.decisionTreeSoupId && force.tempLocal_Answer.decisionTreeSoupId.length>0) )){
  //                       $scope.ischildhaveeditedrecord=true;
  //                       if($scope.ischildhaveeditedrecord){

  //                           var findObj = {};
  //                           if(Schemadetail && Schemadetail.Id && Schemadetail.Id.toString().length > 14){
  //                               findObj = {'Id':Schemadetail.Id};
  //                           } else {
  //                               findObj = {'_soupEntryId':Schemadetail._soupEntryId};
  //                           }
  //                           var QuerySpec = navigator.smartstore.buildExactQuerySpec("schemaTemplateId",$scope.currentschemaviewId,1000);
  //                           navigator.smartstore.querySoup("schemaTemplateViewList", QuerySpec, function(schemaTemplatedata) {

  //                               var ObjectData= schemaTemplatedata.currentPageOrderedEntries;

  //                           if($scope.currentschemaIndexposition==0){
  //                               var schemaData = ObjectData;
  //                               var schemaInd = _.findIndex(schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition]['assessableObjs'],findObj);
  //                               if(schemaInd != -1){
  //                                   schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition]['assessableObjs'][schemaInd]['isEdited']=true;
  //                               }
  //                               var currentSchemaInd = _.findIndex($scope.currentparticularschemaObj.value['schemaViewData'][$scope.currentschemaIndexposition]['assessableObjs'],findObj);
  //                               if(currentSchemaInd != -1){
  //                                   $scope.currentparticularschemaObj.value['schemaViewData'][$scope.currentschemaIndexposition]['assessableObjs'][currentSchemaInd]['isEdited']=true
  //                               }
  //                               if($scope.isSupportSchemaFieldset){
  //                                   var treeInd = _.findIndex($scope.treeViewSchemalist[$scope.currentschemaIndexposition],findObj);
  //                                   if(treeInd != -1){
  //                                       $scope.treeViewSchemalist[$scope.currentschemaIndexposition][treeInd]['isEdited']=true;
  //                                   }
  //                               }
  //                               navigator.smartstore.upsertSoupEntries("schemaTemplateViewList", schemaData, function(assessableData) {
  //                               });
  //                           }else{
  //                               //for related update tha value in schema back button
  //                               var schemaData = ObjectData;
  //                               var schemaInd = _.findIndex(schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition]['childAssessableObjs'][relatedobjparentId],findObj);
  //                               if(schemaInd != -1){
  //                                   schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition]['childAssessableObjs'][relatedobjparentId][schemaInd]['isEdited']=true;
  //                               }
  //                               var currentSchemaInd = _.findIndex($scope.currentparticularschemaObj.value['schemaViewData'][$scope.currentschemaIndexposition]['childAssessableObjs'][relatedobjparentId],findObj);
  //                               if(currentSchemaInd != -1){
  //                                   $scope.currentparticularschemaObj.value['schemaViewData'][$scope.currentschemaIndexposition]['childAssessableObjs'][relatedobjparentId][currentSchemaInd]['isEdited']=true
  //                               }
  //                               if($scope.isSupportSchemaFieldset){
  //                                   var treeInd = _.findIndex($scope.treeViewSchemalist[$scope.currentschemaIndexposition][relatedobjparentId],findObj);
  //                                   if(treeInd != -1){
  //                                       $scope.treeViewSchemalist[$scope.currentschemaIndexposition][relatedobjparentId][treeInd]['isEdited']=true;
  //                                   }
  //                               }
  //                           // schemaData[0].value['schemaViewData'][$scope.currentschemaIndexposition]['childAssessableObjs'][relatedobjparentId][currentobjIndexpostion]['isEdited']=true;
  //                           // $scope.currentparticularschemaObj.value['schemaViewData'][$scope.currentschemaIndexposition]['childAssessableObjs'][relatedobjparentId][currentobjIndexpostion]['isEdited']=true
  //                               navigator.smartstore.upsertSoupEntries("schemaTemplateViewList", schemaData, function(assessableData) {

  //                               });
  //                           }

  //                           });
  //                       }
  //                   }
  //               }

  //           }*/
  //       }
  //   }

  // //  $scope.SchemaviewSorting($scope.currentschemaIndexposition).then(function(){

  //       $scope.updateSubmitedAMData(tempTrackerData,Schemadetail).then(function(){

  //            var currentschemaval= $scope.currentparticularschemaObj.value['schemaViewData'][currentSchemIndex];

  //            $scope.relatedAMsAssessableObjectName = currentschemaval.objectLabel;

  //            $scope.templateIds = Object.keys(currentschemaval.assessmentIds).length;

  //            if(currentschemaval && currentschemaval.optionConfigDetailsMap
  //               && currentschemaval.optionConfigDetailsMap['amSelectedFilterOptions']
  //               && currentschemaval.optionConfigDetailsMap['amSelectedFilterOptions'] != ''){
  //                   var tempAmfilter =  currentschemaval.optionConfigDetailsMap['amSelectedFilterOptions'].split(';');
  //                   $scope.amFilterOptionlen = tempAmfilter.length;

  //               }

  //            if(currentschemaval.apiName == 'Case'){
  //                $scope.relatedonlyAMsAssessableObjectRecordName = Schemadetail['CaseNumber'];
  //            }else{
  //                $scope.relatedonlyAMsAssessableObjectRecordName = Schemadetail['Name'];
  //            }
  //            $scope.isFromData = isFrom;
  //            $scope.amSchemadetail = Schemadetail;
  //            $scope.Amfieldset = angular.copy(currentschemaval.AMFieldSet);

  //            angular.forEach($scope.Amfieldset, function(value, key){
  //                if(value.type == 'reference'){
  //                    value.fieldPath = value.fieldPath.replace('__c','__r');
  //                    if(value.fieldPath.endsWith('Id')){
  //                        value.fieldPath = value.fieldPath.replace('Id','');
  //                    }
  //                }
  //            });

  //            if($scope.currentparticularschemaObj.value['amSharing']){
  //                $scope.Amlist=currentschemaval.amWithAssessableIdMap[Schemadetail.Id];

  //            }else{

  //                if(currentschemaval.amWithAssessableIdMap[Schemadetail.Id] && currentschemaval.amWithAssessableIdMap[Schemadetail.Id].length>0){

  //                    for(var i=0;i< currentschemaval.amWithAssessableIdMap[Schemadetail.Id].length;i++){

  //                        if(currentschemaval.amWithAssessableIdMap[Schemadetail.Id][i].ExAM__Assessor_Resource__c==mainappservice.convertId(force.getCurrentUser().userId)){
  //                        // if($scope.Amlist)
  //                        var amlistId= _.pluck($scope.Amlist, 'Id');
  //                        if(!amlistId.includes(currentschemaval.amWithAssessableIdMap[Schemadetail.Id][i].Id)){
  //                            $scope.Amlist.push(currentschemaval.amWithAssessableIdMap[Schemadetail.Id][i]);

  //                        }
  //                        }
  //                    }
  //                }

  //            }
  //            var tempAMList = [];

  //            angular.forEach($scope.Amlist, function(value, key){

  //                if( value && $scope.UnitTemplateIdArray.includes(value.ExAM__InvestigationType__c)){

  //                    tempAMList.push(value);
  //                }
  //            });
  //            $scope.Amlist = tempAMList;
  //            if($scope.AMFieldsets[currentSchemIndex].length > 0){
  //               $scope.relatedAmlistmodal = $ionicModal.fromTemplate(modalservice.relatedAmlistView, {
  //                   scope: $scope,
  //                   hardwareBackButtonClose: false,
  //                   animation: 'slide-in-right'
  //               });
  //               $scope.relatedAmlistmodal.show();
  //           }else{
  //               StartupService.showAlert("Fieldset not configured");
  //           }
  //        });
  //        //});
  //    }

  isJSONString(str) {
    try {
      JSON.parse(str);
      return true;
    } catch (ex) {
      return false;
    }
  }

  formatDate(date): string {
    return date ? moment(date).format("YYYY-MM-DD") : "";
  }
}
