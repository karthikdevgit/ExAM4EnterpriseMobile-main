import { Component,Input, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-each-amrender',
  templateUrl: './each-amrender.component.html',
  styleUrls: ['./each-amrender.component.scss'],
})
export class EachAMRenderComponent implements OnInit {
  @Input() eachassessableObject:any;
  @Input() schemaViewData:any;
  @Input() currentIndex:any;
  @Input() eachamdetail:any;
  constructor(public router: Router,) {
    var _this=this;
    console.log('EachAMRenderComponent constructor textthis.assessableObject',_this.eachassessableObject);

    console.log('EachAMRenderComponent this.schemaViewData',_this.schemaViewData);
    console.log('EachAMRenderComponent this.currentIndex',_this.currentIndex);
    console.log('EachAMRenderComponent this.amdetail',_this.eachamdetail);

   }

  ngOnInit() {
    var _this=this;
    console.log('EachAMRenderComponent ngOnInit textthis.assessableObject',_this.eachassessableObject);

    console.log('EachAMRenderComponent this.schemaViewData',_this.schemaViewData);
    console.log('EachAMRenderComponent this.currentIndex',_this.currentIndex);
    console.log('EachAMRenderComponent this.amdetail',_this.eachamdetail);

 
  }
  async openRelatedAMsDetailPage(am: any) {
    console.log('openRelatedAMsDetailPage',am);
     this.router.navigate(['/relate-amdetail-page', {
       amData: JSON.stringify(am)
       
     }])
   }

}
