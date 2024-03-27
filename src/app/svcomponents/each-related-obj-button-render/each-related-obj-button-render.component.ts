import { Component,Input, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { GlobalParamService } from 'src/app/service/global-param.service';
@Component({
  selector: 'app-each-related-obj-button-render',
  templateUrl: './each-related-obj-button-render.component.html',
  styleUrls: ['./each-related-obj-button-render.component.scss'],
})
export class EachRelatedObjButtonRenderComponent implements OnInit {
  @Input() eachassessableObject:any;
  @Input() schemaViewData:any;
  @Input() currentIndex:any;
  @Input() parentId:any;
  @Input() isFromback:boolean;
  constructor( public router: Router,public GlobalParamService:GlobalParamService) { }

  ngOnInit() {
    var _this=this;
    console.log('EachRelatedObjButtonRenderComponent eachassessableObject',_this.eachassessableObject)
    console.log('EachRelatedObjButtonRenderComponent schemaViewData',_this.schemaViewData)

    console.log('EachRelatedObjButtonRenderComponent currentIndex',_this.currentIndex)

  }
  relatedObject( schemaViewData1: any,relatedIndex1:any,parentId1: any,eachassessableObject1: any,isfrom1:boolean){
    var _this=this;
    //here call common page 
    console.log('call from EachRelatedObjButtonRenderComponent schemaViewData',schemaViewData1);
    console.log('call from EachRelatedObjButtonRenderComponent currentIndex',relatedIndex1);
    console.log('call from EachRelatedObjButtonRenderComponent eachassessableObject',eachassessableObject1);
    console.log('call from EachRelatedObjButtonRenderComponent parentId',parentId1);
    console.log('isfrom from button',isfrom1);
    console.log('call from EachRelatedObjButtonRenderComponent _this.schemaViewData',_this.schemaViewData);
    console.log('call from EachRelatedObjButtonRenderComponent _this.currentIndex',_this.currentIndex);
    console.log('call from EachRelatedObjButtonRenderComponent _this.eachassessableObject',_this.eachassessableObject);
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
        isFrom:'objectButtoncall'
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
