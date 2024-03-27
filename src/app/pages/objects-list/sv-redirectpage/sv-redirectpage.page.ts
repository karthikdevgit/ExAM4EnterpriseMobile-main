import { Component,Input, OnInit,NgZone } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sv-redirectpage',
  templateUrl: './sv-redirectpage.page.html',
  styleUrls: ['./sv-redirectpage.page.scss'],
})
export class SvRedirectpagePage implements OnInit {
  schemaViewData:any;
  currentSchemaViewDetail:any;
  constructor(private zone: NgZone,public router: Router,public route:ActivatedRoute,) {
    console.log('sv-redirectpage constructor call ');
    this.route.queryParams.subscribe(params => {
      console.log('RedirectpageforrelatedlevelObjPage call'); 

      var _this=this;
      console.log('_this.router',_this.router);
      _this.schemaViewData = _this.router.getCurrentNavigation().extras.state.schemaViewData;
     _this.currentSchemaViewDetail = _this.router.getCurrentNavigation().extras.state.currentSchemaViewDetail;
     
    });
   }

  ngOnInit() {
   
    console.log('sv-redirectpage ngOnInit call ');
  }
  ionViewDidEnter() {
    var _this=this;
    console.log('sv-redirectpage ionViewDidEnter call ');
    let navigationExtras:NavigationExtras = {
      state: {
        schemaViewData:_this.schemaViewData,
        currentSchemaViewDetail: _this.currentSchemaViewDetail,


      }
    
    };

    console.log('navigationExtras',navigationExtras);
    this.zone.run(() =>{
      
      _this.router.navigate(['/inspections-list'],navigationExtras );

    })
   }
  
}
