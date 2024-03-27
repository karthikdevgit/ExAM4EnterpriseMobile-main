import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { RelateAMDetailPagePage } from '../relate-amdetail-page/relate-amdetail-page.page';
import { SectionTemplateComponent } from 'src/app/components/section-template/section-template.component';
@Component({
  selector: 'app-related-ams',
  templateUrl: './related-ams.page.html',
  styleUrls: ['./related-ams.page.scss'],
})
export class RelatedAmsPage implements OnInit {

  //schemaViewData: any;
  //assessableObject: any;
  level: any;
  amListData:any;
  constructor(private router: Router, public activatedRoute : ActivatedRoute) {
    console.log(' this.activatedRoute', this.activatedRoute);

    //this.assessableObject = JSON.parse(this.activatedRoute.snapshot.paramMap.get('assessableObject'));
   // this.schemaViewData = JSON.parse(this.activatedRoute.snapshot.paramMap.get('schemaViewData'));
    this.level = JSON.parse(this.activatedRoute.snapshot.paramMap.get('level'));
    this.amListData=JSON.parse(this.activatedRoute.snapshot.paramMap.get('amListData'));
    console.log(' this.amListData', this.amListData);
  }

  ngOnInit() {
  }

  formatDate(date):string{
    return date ? moment(date).format('YYYY-MM-DD'): "";
  }
  async openRelatedAMsDetailPage(am: any) {
   console.log('openRelatedAMsDetailPage',am);
    this.router.navigate(['/relate-amdetail-page', {
      amData: JSON.stringify(am)
      
    }])
  }


}
