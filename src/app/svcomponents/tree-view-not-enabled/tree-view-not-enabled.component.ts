import { Component, Input, OnInit } from "@angular/core";
import { Injectable, NgZone } from '@angular/core';
import { ActivatedRoute,Router, NavigationExtras } from '@angular/router';
import { GlobalParamService } from "src/app/service/global-param.service";
@Component({
  selector: "app-tree-view-not-enabled",
  templateUrl: "./tree-view-not-enabled.component.html",
  styleUrls: ["./tree-view-not-enabled.component.scss"],
})
export class TreeViewNotEnabledComponent implements OnInit {
  @Input() schemaViewData: any;
  @Input() currentIndex: any;
  
  @Input() parentId: any;
  index: number;

  constructor(private zone: NgZone,private router: Router,public activatedRoute : ActivatedRoute,public GlobalParamService:GlobalParamService) {
    var _this = this;
    console.log(
      "Date tree-view-not-enabled  comp[onent].schemaViewData",
      _this.schemaViewData
    );
    _this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    _this.router.onSameUrlNavigation = 'reload';
    console.log("currentIndex", _this.currentIndex);
  }

  ngOnInit() {
    var _this = this;
    console.log(
      "Date tree-view-not-enabled ngOnInit comp[onent].schemaViewData",
      _this.schemaViewData
    );
    console.log("currentIndex", _this.currentIndex);
    
  }
  toNumber(value: string): number {
    return parseInt(value);
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
  // async relatedObject(schemaViewData: any, relatedIndex: any,parentId: any) {
  //   var _this=this;
  //   console.log('schemaViewData',schemaViewData);
  //   console.log('relatedIndex',relatedIndex);
  //   console.log('parentId',parentId);
  //   _this.index++;

  //   let navigationExtras = {
  //     state: {
  //       schemaViewData:schemaViewData,
  //       relatedIndex:relatedIndex,
  //       parentId:parentId,
  //     }
     
  //   };
  //   console.log('navigationExtras',navigationExtras);
   
  //   _this.zone.run(() => {
  //     // _this.router.navigate(['/related-object'], {
  //     //   relativeTo: _this.activatedRoute,
  //     //   queryParams: { index: _this.index, schemaViewData:JSON.stringify(schemaViewData),
  //     //     relatedIndex:relatedIndex,
  //     //     parentId:parentId, },
  //     //   queryParamsHandling: 'merge'
  //     // });
  //     _this.router.navigate(['/related-object'],navigationExtras);
  //   });

  // }

}
