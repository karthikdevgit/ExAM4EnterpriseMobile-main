import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { GlobalParamService } from "src/app/service/global-param.service";
import { Location } from '@angular/common';

import * as _ from "underscore";
import { property } from "underscore";
@Component({
  selector: "app-related-object",
  templateUrl: "./related-object.page.html",
  styleUrls: ["./related-object.page.scss"],
})
export class RelatedObjectPage implements OnInit {
  showTreeViewNotEnabledView = false;

  navigationExtras: any;
  index: number;
  schemaViewData: any;
  relatedIndex: any;
  parentId: any;
  eachassessableObject: any;
  isFromback:boolean;
  isFrom:any;
  constructor(public router: Router, public route:ActivatedRoute,public GlobalParamService:GlobalParamService) {
    var _this = this;
    this.route.queryParams.subscribe(params => {
      _this.schemaViewData =
      _this.router.getCurrentNavigation().extras.state.schemaViewData;
    _this.relatedIndex =
      _this.router.getCurrentNavigation().extras.state.relatedIndex;
    _this.parentId = _this.router.getCurrentNavigation().extras.state.parentId;
    _this.eachassessableObject =
      _this.router.getCurrentNavigation().extras.state.eachassessableObject;
      _this.isFromback= _this.router.getCurrentNavigation().extras.state.isFromback;
      console.log(' _this.relatd level push.trackparamFormObjRedirect', _this.GlobalParamService.trackparamFormObjRedirect);
      _this.isFromback= _this.router.getCurrentNavigation().extras.state.isFromback;
      console.log(' _this.relatd level push.trackparamFormObjRedirect', _this.GlobalParamService.trackparamFormObjRedirect);
      _this.isFrom= _this.router.getCurrentNavigation().extras.state.isFrom;
      console.log(' _this.relatd level push.trackparamFormObjRedirect', _this.isFrom);
   
    });
    console.log("related object list page call");
    // _this.schemaViewData = _this.router.getCurrentNavigation().extras.state.schemaViewData;
    // _this.relatedIndex = _this.router.getCurrentNavigation().extras.state.relatedIndex;
    // _this.parentId = _this.router.getCurrentNavigation().extras.state.parentId;
  }

  ngOnInit() {
    var _this = this;

        console.log(
      "related object list page  schemaViewData",
      _this.schemaViewData
    );

    console.log(
      "related object list page  this.relatedIndex:::",
      _this.relatedIndex
    );

    console.log("related object list page  this.parentId:::", _this.parentId);
    console.log(
      "related object list page  this.eachassessableObject:::",
      _this.eachassessableObject
    );
  }
  previousRleatedScreen() {
    var _this = this;
    console.log('_this.GlobalParamService.trackparamFormObjRedirect',_this.GlobalParamService.trackparamFormObjRedirect);

    if(_this.GlobalParamService.trackparamFormObjRedirect && _this.GlobalParamService.trackparamFormObjRedirect.length > 0){
      console.log('_this.GlobalParamService.trackparamFormObjRedirect.length',_this.GlobalParamService.trackparamFormObjRedirect.length);
      //Added for  last level render 2 time issue fix
      const navigationExtras = _this.GlobalParamService.trackparamFormObjRedirect[_this.GlobalParamService.trackparamFormObjRedirect.length-1];
      console.log('navigationExtras',_this.relatedIndex,navigationExtras.state.currentIndex);
      if(_this.relatedIndex== navigationExtras.state.currentIndex){
        const currentlevelIndex = _this.GlobalParamService.trackparamFormObjRedirect.length - 1;
        _this.GlobalParamService.trackparamFormObjRedirect.splice(currentlevelIndex, 1); // Removes the last element

      }
      console.log('currenlevel remove after length',_this.GlobalParamService.trackparamFormObjRedirect.length);
      const lastIndex = _this.GlobalParamService.trackparamFormObjRedirect.length - 1;
      console.log('lastIndex-1',lastIndex);
      console.log('parentnavigationExtras',_this.GlobalParamService.trackparamFormObjRedirect,lastIndex);

      const parentnavigationExtras = _this.GlobalParamService.trackparamFormObjRedirect[lastIndex];

      console.log('parentnavigationExtras',parentnavigationExtras);
     
      if( parentnavigationExtras && parentnavigationExtras.state ){
        console.log('parentnavigationExtras',_this.relatedIndex,parentnavigationExtras.state.currentIndex);

        parentnavigationExtras.state.isFromback=true;
    //  _this.GlobalParamService.trackparamFormObjRedirect.splice(lastIndex, 1); // Removes the last element
         console.log('After delte last track',_this.GlobalParamService.trackparamFormObjRedirect);
        console.log('navigationExtras',parentnavigationExtras);
        // if( parentnavigationExtras.isFrom=='objectButtoncall'){
          // console.log('parentnavigationExtras.isFrom',parentnavigationExtras.isFrom);
          
          _this.router.navigate(['/redirectpageforrelatedlevel-obj'],parentnavigationExtras);
      
         
        //  }else if( parentnavigationExtras.isFrom=='allRelatedcall'){
        //   console.log('parentnavigationExtras.isFrom',parentnavigationExtras.isFrom);

        //     _this.router.navigate(['/redirectpageforrelatedlevel-obj'],parentnavigationExtras);
      
        //  }
      }else{
        _this.GlobalParamService.trackparamFormObjRedirect=[];
        _this.router.navigate(['/inspections-list']);
      }
      //   console.log(' window.history', window.history);
      // if(_this.eachassessableObject.Id && navigationExtras && navigationExtras.state && !navigationExtras.state.isFromback){
      //   navigationExtras.state.isFromback=true;
      //   console.log('_this.relatedIndex',_this.relatedIndex);
      //   console.log('navigationExtras.state.currentIndex',navigationExtras.state.currentIndex);
      //   if(_this.relatedIndex == navigationExtras.state.currentIndex){
      //     const currentIndex = _this.GlobalParamService.trackparamFormObjRedirect.length - 1;
      //     console.log('currentIndex',currentIndex);

      //     _this.GlobalParamService.trackparamFormObjRedirect.splice(currentIndex, 1); // Removes the last element
      //     console.log('first one delete', _this.GlobalParamService);
      //     const  navigationExtras2 = _this.GlobalParamService.trackparamFormObjRedirect[currentIndex-1];

      //   _this.GlobalParamService.trackparamFormObjRedirect.splice(currentIndex-1, 1); // Removes the last element

      // console.log('After delte last track',_this.GlobalParamService.trackparamFormObjRedirect);
      // console.log('navigationExtras',navigationExtras2);
      // _this.router.navigate(['/redirectpageforrelatedlevel-obj'],navigationExtras2);
      // console.log(' window.history', window.history);
      //   }else{
      //     _this.GlobalParamService.trackparamFormObjRedirect.splice(lastIndex, 1); // Removes the last element
      //     console.log('After delte last track',_this.GlobalParamService.trackparamFormObjRedirect);
      //     console.log('navigationExtras',navigationExtras);
      //     _this.router.navigate(['/redirectpageforrelatedlevel-obj'],navigationExtras);
      //     console.log(' window.history', window.history);
      //   }
      // }else{
      //   _this.GlobalParamService.trackparamFormObjRedirect.splice(lastIndex, 1); // Removes the last element
      //   console.log('After delte last track',_this.GlobalParamService.trackparamFormObjRedirect);
      //   console.log('navigationExtras',navigationExtras);
      //   _this.router.navigate(['/redirectpageforrelatedlevel-obj'],navigationExtras);
      //   console.log(' window.history', window.history);
      // }
      
     
     
    }else{
      _this.GlobalParamService.trackparamFormObjRedirect=[];
      _this.router.navigate(['/inspections-list']);
    }
  }
}
