import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, Gesture, GestureController, IonCard, ModalController } from '@ionic/angular';
import { ViewDetailsPage } from '../objects-list/view-details/view-details.page';
import { EditDetailsPage } from '../objects-list/edit-details/edit-details.page';

@Component({
  selector: 'app-objects-details',
  templateUrl: './objects-details.page.html',
  styleUrls: ['./objects-details.page.scss'],
})
export class ObjectsDetailsPage implements OnInit, AfterViewInit {

  name: string; 
  schemaViewData: any;
  assessableObject: any;
  feedback: any;

  assessableObjs = []; 
  label: any;
  labelPlural: any; 
  amWithassessableIDMap = []; 
  level: number;
  childLabel: string;
  childLabelPlural: string; 
  childObjs: number;

  longPressActive = true;
  @ViewChildren(IonCard) cards: QueryList<IonCard>;

  constructor(private router: Router, public activatedRoute : ActivatedRoute, private gestureCtrl: GestureController, private actionSheetCtrl: ActionSheetController, private modalController: ModalController) {
    
    this.assessableObject = JSON.parse(this.activatedRoute.snapshot.paramMap.get('assessableObject'));
    this.schemaViewData = JSON.parse(this.activatedRoute.snapshot.paramMap.get('schemaViewData'));
    this.feedback = JSON.parse(this.activatedRoute.snapshot.paramMap.get('feedback'));

    this.level = JSON.parse(this.activatedRoute.snapshot.paramMap.get('level'));
    this.name = this.assessableObject.Name;
    this.assessableObjs = this.schemaViewData[this.level+1].childAssessableObjs[this.assessableObject.Id];


    this.amWithassessableIDMap = this.schemaViewData[this.level+1].amWithAssessableIdMap[this.assessableObject.AIM_Property__c]

    this.childObjs = this.schemaViewData[this.level+2].childAssessableObjs

    this.childLabel = this.schemaViewData[this.level+2].schemaTemplateobjectLabel;
    this.childLabelPlural = this.schemaViewData[this.level+2].schemaTemplatepluralLabel;
  }

   navigate(assessableObjs: any, schemaViewData: any, level: number){
    if(level+3 < this.schemaViewData.length){
      this.router.navigate(['/objects-details', {
        assessableObject: JSON.stringify(assessableObjs), 
        schemaViewData: JSON.stringify(schemaViewData),
        level: JSON.stringify(++level)
      }])
    }
    
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.cards.forEach((card: IonCard, index: number)=>{
      console.log(":::::: DETAILS CARD HAS USE LONG PRESS: "+card);
      
      let startTime = Date.now();

      const gesture: Gesture = this.gestureCtrl.create({
        el: card['el'],
        threshold: 0,
        gestureName: 'long-press',
        onStart: ev => {
          
          startTime = Date.now();
          setTimeout(() => {
            if(this.longPressActive === true){
              this.presentActions(this.schemaViewData, this.assessableObjs[index])
              this.longPressActive = false;
            }
          }, 1000);
          
        },
        onEnd: ev => {
          const duration = Date.now() - startTime;

          if (duration < 1000) {

            this.navigate(this.assessableObjs[index], this.schemaViewData, this.level)
            this.longPressActive = false;
          } else {
            this.longPressActive = true;
          }
        
        }
      });

      gesture.enable(true); 
    })
  }

  async presentActions(schemaViewData: any, assessableObject: any) {

    let optionConfigDetailsMap = schemaViewData[0].optionConfigDetailsMap;

    let buttonArray = [];

    buttonArray.push({text : 'View Details',
    handler: () => {
      this.openViewDetails(assessableObject, schemaViewData)
    }})
    if(optionConfigDetailsMap['disableAddAM'] !== 'false'){

    }
    if(optionConfigDetailsMap['disableEditAM'] !== 'false'){
      buttonArray.push({text : 'Edit '+ schemaViewData[0].schemaTemplateobjectLabel,
      handler: () => {
  
    }})
    }
    if(optionConfigDetailsMap['disableObjectAdd'] !== 'false'){
      buttonArray.push({text : 'Create '+ this.childLabel,
      handler: () => {
  
    }})
    }
    
    if(optionConfigDetailsMap['disableObjectEdit'] !== 'false'){
      buttonArray.push({text : 'Edit '+ this.childLabel,
      handler: () => {
        this.openEditDetails(assessableObject, schemaViewData)
    }})
    }
    
    if(optionConfigDetailsMap['disableRelatedObj'] !== 'false'){
      buttonArray.push({text : 'Related Records',
      handler: () => {
  
    }})
    }
    if(optionConfigDetailsMap['disableRelatedAM'] !== 'false'){
      buttonArray.push({text : 'Related Assignment Managers',
      handler: () => {
        this.openRelatedAMs(assessableObject, schemaViewData);
    }})
    
    }
    if(this.feedback === false){
      buttonArray.push({text : 'Submit Feedback',
      handler: () => {
  
    }});
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
      header: 'Actions',
      buttons: buttonArray,
    });

    await actionSheet.present();
  }

  async openViewDetails(assessableObject: any, schemaViewData: any) {
    
    const modal = await this.modalController.create({
      component: ViewDetailsPage,
      componentProps: { 
        assessableObject: assessableObject,
        schemaViewData: schemaViewData
      }
    });
    modal.present();
  }

  async openEditDetails(assessableObject: any, schemaViewData: any) {
    const modal = await this.modalController.create({
      component: EditDetailsPage,
      componentProps: { 
        assessableObject: assessableObject,
        schemaViewData: schemaViewData
      }
    });
    modal.present();
  }

  async openRelatedAMs(assessableObject: any, schemaViewData: any) {

    this.router.navigate(['/related-ams', {
      assessableObject: JSON.stringify(assessableObject), 
      schemaViewData: JSON.stringify(schemaViewData),
      level: 0
    }])
  }

}
