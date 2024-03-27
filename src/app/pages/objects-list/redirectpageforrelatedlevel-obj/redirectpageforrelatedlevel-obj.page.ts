import { Component,Input, OnInit, NgZone } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { GlobalParamService } from "src/app/service/global-param.service";

@Component({
  selector: 'app-redirectpageforrelatedlevel-obj',
  templateUrl: './redirectpageforrelatedlevel-obj.page.html',
  styleUrls: ['./redirectpageforrelatedlevel-obj.page.scss'],
})
export class RedirectpageforrelatedlevelObjPage implements OnInit {
 schemaViewData:any;
 currentIndex:any;
 parentId:any;
 eachassessableObject:any;
 isFromback:boolean;
 isFrom:any;

  constructor(private zone: NgZone, public router: Router,public route:ActivatedRoute,public GlobalParamService:GlobalParamService) {
    
    this.route.queryParams.subscribe(params => {
      console.log('RedirectpageforrelatedlevelObjPage call'); 

      var _this=this;
      console.log('_this.router',_this.router);
      _this.schemaViewData = _this.router.getCurrentNavigation().extras.state.schemaViewData;
     _this.currentIndex = _this.router.getCurrentNavigation().extras.state.currentIndex;
     _this.parentId = _this.router.getCurrentNavigation().extras.state.parentId;
     _this.eachassessableObject = _this.router.getCurrentNavigation().extras.state.eachassessableObject;
      _this.isFromback= _this.router.getCurrentNavigation().extras.state.isFromback;
      _this.isFrom= _this.router.getCurrentNavigation().extras.state.isFrom;

     console.log('call from RedirectpageforrelatedlevelObjPage _this.schemaViewData',_this.schemaViewData);
     console.log('call from RedirectpageforrelatedlevelObjPage _this.relatedIndex',_this.currentIndex);
     console.log('call from RedirectpageforrelatedlevelObjPage _this.parentId',_this.parentId);
     console.log('call from RedirectpageforrelatedlevelObjPage _this.RedirectpageforrelatedlevelObjPage',_this.eachassessableObject);
  
     console.log('_this.parentId',_this.parentId);
     
    });
   }

  ngOnInit() {
    
  }
  ionViewDidEnter() {
   

  var _this=this;
  console.log('ionViewDidEnter');
  console.log('_this.router',_this.router);
 // console.log('_this.router.getCurrentNavigation()',_this.router.getCurrentNavigation());

   let navigationExtras:NavigationExtras = {
        state: {
          schemaViewData:_this.schemaViewData,
          relatedIndex:_this.currentIndex,
          parentId:_this.eachassessableObject.Id,
          eachassessableObject:_this.eachassessableObject,
          isFromback:_this.isFromback,
          isFrom:_this.isFrom

        }
       
      };
      
     
    
    
      
      console.log('after push',_this.GlobalParamService.trackparamFormObjRedirect);
   // console.log('_this.router.getCurrentNavigation().extras',_this.router.getCurrentNavigation().extras);
    //if('')
         console.log('call from RedirectpageforrelatedlevelObjPage navigationExtras',navigationExtras);
         if( _this.isFrom=='objectButtoncall'){
          this.zone.run(() =>{
            _this.router.navigate(['/related-object'],navigationExtras);
      
          })
         }else if( _this.isFrom=='allRelatedcall'){
          this.zone.run(() =>{
            _this.router.navigate(['/all-related-record-render-obj'],navigationExtras);
      
          })
         }
    
    
    
   
}

}
