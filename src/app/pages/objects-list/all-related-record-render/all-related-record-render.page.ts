import { Component,Input, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { GlobalParamService } from "src/app/service/global-param.service";
@Component({
  selector: 'app-all-related-record-render',
  templateUrl: './all-related-record-render.page.html',
  styleUrls: ['./all-related-record-render.page.scss'],
})
export class AllRelatedRecordRenderPage implements OnInit {
  showTreeViewNotEnabledView = false;

  navigationExtras: any;
  index: number;
  schemaViewData: any;
  currentIndex: any;
  parentId: any;
  eachassessableObject: any;
  isFromback:boolean;
  constructor(public router: Router, public route:ActivatedRoute,public GlobalParamService:GlobalParamService) {
    var _this = this;
    this.route.queryParams.subscribe(params => {
      _this.schemaViewData =
      _this.router.getCurrentNavigation().extras.state.schemaViewData;
      //if it call from all related record page not pass related inde it pass only current index so here assign relted inex value ti currentIndex
    _this.currentIndex =
      _this.router.getCurrentNavigation().extras.state.relatedIndex;
    _this.parentId = _this.router.getCurrentNavigation().extras.state.parentId;
    _this.eachassessableObject =
      _this.router.getCurrentNavigation().extras.state.eachassessableObject;
      _this.isFromback= _this.router.getCurrentNavigation().extras.state.isFromback;
      console.log(' _this.allrelated level push.trackparamFormObjRedirect', _this.GlobalParamService.trackparamFormObjRedirect);
    });
    console.log("allrelated object list page call");
   }

  ngOnInit() {
    var _this = this;

    console.log(
  "allrelated object list page  schemaViewData",
  _this.schemaViewData
);

console.log(
  "allrelated object list page  this.relatedIndex:::",
  _this.currentIndex
);

console.log("allrelated object list page  this.parentId:::", _this.parentId);
console.log(
  "allrelated object list page  this.eachassessableObject:::",
  _this.eachassessableObject
);
  }

  previousRleatedScreen() {
    var _this = this;
    console.log('_this.allrelated.trackparamFormObjRedirect',_this.GlobalParamService.trackparamFormObjRedirect);

    if(_this.GlobalParamService.trackparamFormObjRedirect && _this.GlobalParamService.trackparamFormObjRedirect.length > 0){
      console.log('_this.allrelated.trackparamFormObjRedirect.length',_this.GlobalParamService.trackparamFormObjRedirect.length);
      //Added for  last level render 2 time issue fix
      const navigationExtras = _this.GlobalParamService.trackparamFormObjRedirect[_this.GlobalParamService.trackparamFormObjRedirect.length-1];
      console.log('navigationExtras',_this.currentIndex,navigationExtras.state.currentIndex);
      if(_this.currentIndex== navigationExtras.state.currentIndex){
        const currentlevelIndex = _this.GlobalParamService.trackparamFormObjRedirect.length - 1;
        _this.GlobalParamService.trackparamFormObjRedirect.splice(currentlevelIndex, 1); // Removes the last element

      }
      console.log('allrelated remove after length',_this.GlobalParamService.trackparamFormObjRedirect.length);
      const lastIndex = _this.GlobalParamService.trackparamFormObjRedirect.length - 1;
      console.log('lastIndex-1',lastIndex);
      console.log('allrelated',_this.GlobalParamService.trackparamFormObjRedirect,lastIndex);

      const parentnavigationExtras = _this.GlobalParamService.trackparamFormObjRedirect[lastIndex];

      console.log('allrelated',parentnavigationExtras);
     
      if( parentnavigationExtras && parentnavigationExtras.state ){
        console.log('allrelated',_this.currentIndex,parentnavigationExtras.state.currentIndex);

        parentnavigationExtras.state.isFromback=true;
    //  _this.GlobalParamService.trackparamFormObjRedirect.splice(lastIndex, 1); // Removes the last element
         console.log('After allrelated last track',_this.GlobalParamService.trackparamFormObjRedirect);
        console.log('navigationExtras',parentnavigationExtras);
         _this.router.navigate(['/redirectpageforrelatedlevel-obj'],parentnavigationExtras);
      }else{
        _this.GlobalParamService.trackparamFormObjRedirect=[];
        _this.router.navigate(['/inspections-list']);
      }
     
     
     
    }else{
      _this.GlobalParamService.trackparamFormObjRedirect=[];
      _this.router.navigate(['/inspections-list']);
    }
  }

}
