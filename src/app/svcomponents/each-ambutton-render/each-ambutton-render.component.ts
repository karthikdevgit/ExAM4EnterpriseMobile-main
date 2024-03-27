import { Component,Input, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-each-ambutton-render',
  templateUrl: './each-ambutton-render.component.html',
  styleUrls: ['./each-ambutton-render.component.scss'],
})
export class EachAMButtonRenderComponent implements OnInit {
@Input() eachassessableObject:any;
@Input() schemaViewData:any;
@Input() currentIndex:any;
  constructor(public router: Router,) {
    var _this=this;
    console.log('EachAMButtonRenderComponent constructor',_this.eachassessableObject)
    console.log('EachAMButtonRenderComponentconstructor schemaViewData',_this.schemaViewData)

    console.log('EachAMButtonRenderComponent constructor currentIndex',_this.currentIndex)

   }

  ngOnInit() {
    var _this=this;
    console.log('EachAMButtonRenderComponent eachassessableObject',_this.eachassessableObject)
    console.log('EachAMButtonRenderComponent schemaViewData',_this.schemaViewData)

    console.log('EachAMButtonRenderComponent currentIndex',_this.currentIndex)

  }
  async openRelatedAMsDetailPage(am: any) {
    console.log('openRelatedAMsDetailPage',am);
     this.router.navigate(['/relate-amdetail-page', {
       amData: JSON.stringify(am)
       
     }])
   }

}
