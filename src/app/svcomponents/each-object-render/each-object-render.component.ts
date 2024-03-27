import { Component, Input,ElementRef, OnInit,QueryList,ViewChildren,AfterViewInit } from "@angular/core";
import { Injectable, NgZone } from '@angular/core';
import { ActivatedRoute,Router, NavigationExtras } from '@angular/router';
import { ActionSheetController, AlertController, IonCard, ModalController } from '@ionic/angular';
import { Gesture, GestureController } from '@ionic/angular';
import { GlobalParamService } from "src/app/service/global-param.service";

@Component({
  selector: 'app-each-object-render',
  templateUrl: './each-object-render.component.html',
  styleUrls: ['./each-object-render.component.scss'],
})
export class EachObjectRenderComponent implements OnInit,AfterViewInit {
  @Input() eachassessableObject: any;
  @Input() schemaViewData: any;
  @Input() currentIndex: any;
  @Input() isfromTreeView:boolean;
  isHaveChild=false;
  componentRenderSuccess=false;
  longPressActive = true;
  @ViewChildren(IonCard, {read: ElementRef}) cards: QueryList<ElementRef>;

  constructor(private zone: NgZone,private router: Router,public GlobalParamService:GlobalParamService ,private gestureCtrl: GestureController, private actionSheetCtrl: ActionSheetController) {
   }

  ngOnInit() {
    var _this=this;
    console.log('EachObjectRenderComponent ngOnInit textthis.assessableObject',_this.eachassessableObject);

    console.log('EachObjectRenderComponent this.schemaViewData',_this.schemaViewData);
    console.log('EachObjectRenderComponent this.currentIndex',_this.currentIndex);
  }
  RelatedChildRendercall() {
    console.log('RelatedChildRendercall');
    var _this=this;
    if (this.isHaveChild) {
      this.isHaveChild = false;
    } else {
      this.isHaveChild = true;
    }
  }
 
  ishaveChild(schemaViewData,currentIndex,eachassessableObject){
       // return new Promise((resolve, reject) => {
        
     var ishaveChild=false;
          if(schemaViewData &&
            schemaViewData[currentIndex] &&
            schemaViewData[currentIndex].relatedObjectsIndex &&
            schemaViewData[currentIndex].relatedObjectsIndex.length > 0){
              Object.keys(schemaViewData[currentIndex]
                .relatedObjectsIndex).forEach(function(relatedObjectsIndex){
                 // console.log('relatedObjectsIndex',relatedObjectsIndex);
                  var relatedIndex=schemaViewData[currentIndex]
                  .relatedObjectsIndex[relatedObjectsIndex];
                  //console.log('relatedIndex',relatedIndex);

                  if( schemaViewData &&
                    schemaViewData[relatedIndex] &&
                    schemaViewData[relatedIndex].childAssessableObjs &&
                    schemaViewData[relatedIndex].childAssessableObjs[
                      eachassessableObject.Id
                    ] &&
                    schemaViewData[relatedIndex].childAssessableObjs[
                      eachassessableObject.Id
                    ].length > 0){
                     // console.log('ishaveChild',ishaveChild);
                      ishaveChild=true;
                      return ishaveChild;
                    }
                })
                //console.log('outside loop ishaveChild',ishaveChild);

                return ishaveChild;
            }else{
              return ishaveChild;
            }
      //});
     }

     ngAfterViewInit() {
      console.log('ngAfterViewInit',this.cards)
      var cardArray=this.cards.toArray();
      for(let i=0;i<cardArray.length;i++){
      //this.cards.changes.subscribe(c => { c.toArray().forEach(card => { 
        const card = cardArray[i];
        console.log(":::::: THIS CARD HAS USE LONG PRESS: "+card);
        //let i = c.toArray().indexOf(card)
  
        let startTime = Date.now();
  
        const gesture: Gesture = this.gestureCtrl.create({
          el: card.nativeElement,
          threshold: 0,
          gestureName: 'long-press',
          onStart: ev => {
            this.longPressActive=true;
            startTime = Date.now();
            setTimeout(() => {
              if(this.longPressActive === true){
                console.log('inside true')

                this.actionSheetopen();
                this.longPressActive = false;
              }
            }, 1000);
            
          },
          onEnd: ev => {
            const duration = Date.now() - startTime;
  
            if (duration < 1000) {
              console.log('less than 100')
             // this.navigate(this.assessableObjs[i], this.schemaViewData)
              this.longPressActive = false;
            } else {
              console.log('else than 100')

              this.longPressActive = true;
            }
          
          }
        });
        gesture.enable(true); 

        }
  
      //}) 
    
    }
  
    async actionSheetopen() {
  
      console.log('actionSheetopen')
     
      let buttonArray = [];
      if(this.schemaViewData[0].optionConfigDetailsMap['disableRelatedObj'] !== 'false'){
        buttonArray.push({text : 'Related Records',
        handler: () => {
          console.log('call here action sheet method all related obj')
          this.allrelatedObject(this.schemaViewData,this.currentIndex,this.eachassessableObject.Id,this.eachassessableObject,false)
      }})
    }
    if(this.schemaViewData[0].optionConfigDetailsMap['disableObjectAdd'] !== 'false'){
        buttonArray.push({text : 'Add object',
        handler: () => {
          console.log('disableObjectAdd obj')
      }})
    }
    if(true){
      buttonArray.push({text : 'Submit Feedback',
      handler: () => {
        console.log('obj')
    }})
  }
      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Actions',
        buttons: buttonArray,
      });
  
      await actionSheet.present();
    }
    allrelatedObject( schemaViewData1: any,relatedIndex1:any,parentId1: any,eachassessableObject1: any,isfrom1:boolean){
      var _this=this;
      //here call common page 
      console.log('call from EachRelatedObjButtonRenderComponent schemaViewData',schemaViewData1);
      console.log('call from EachRelatedObjButtonRenderComponent currentIndex',relatedIndex1);
      console.log('call from EachRelatedObjButtonRenderComponent eachassessableObject',eachassessableObject1);
      console.log('call from EachRelatedObjButtonRenderComponent parentId',parentId1);
      console.log('isfrom from button',isfrom1);
      
      
      //  let parentnavigationExtras = {
      //   state: {
      //     schemaViewData:_this.schemaViewData,
      //     currentIndex:_this.currentIndex,
      //     parentId:_this.eachassessableObject.Id,
      //     eachassessableObject:_this.eachassessableObject,
      //     isFromback:false
      //   }
       
      // };
      
    // _this.index++;
  
      let navigationExtras = {
        state: {
          schemaViewData:schemaViewData1,
          currentIndex:relatedIndex1,
          parentId:eachassessableObject1.Id,
          eachassessableObject:eachassessableObject1,
          isFromback:isfrom1,
          isFrom:'allRelatedcall'
        }
       
      };
      console.log('isfrom1',isfrom1);
      console.log('call from EachRelatedObjButtonRenderComponent navigationExtras',navigationExtras);
      //_this.zone.run(() => {
        // _this.router.navigate(['/related-object'], {
        //   relativeTo: _this.activatedRoute,
        //   queryParams: { index: _this.index, schemaViewData:JSON.stringify(schemaViewData),
        //     relatedIndex:relatedIndex,
        //     parentId:parentId, },
        //   queryParamsHandling: 'merge'
        // });
        if(!isfrom1){
          _this.GlobalParamService.trackparamFormObjRedirect.push(navigationExtras);
      
        }
        _this.router.navigate(['/redirectpageforrelatedlevel-obj'],navigationExtras);
      //});
  
  
    }


}
