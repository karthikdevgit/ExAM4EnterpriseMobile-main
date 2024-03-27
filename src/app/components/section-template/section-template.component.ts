import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-template',
  templateUrl: './section-template.component.html',
  styleUrls: ['./section-template.component.scss'],
})
export class SectionTemplateComponent implements OnInit {
  @Input() sectionDetail:any;
  @Input() sectionaIdWithquestionTemplateRecords:any;
  @Input() amIdWithresponse:any;
  @Input() amresponseformGroup:any;
  @Input() amId:any;
  constructor() {
    //var _this=this;
    //console.log('this.sectionDetail',_this.sectionDetail);
    //console.log('this.eachQuestionTemplate',_this.sectionaIdWithquestionTemplateRecords);

   }

  ngOnInit() {
    var _this=this;
    console.log('ngOnInit this.sectionDetail',_this.sectionDetail);
    console.log('ngOnInit this.eachQuestionTemplate',_this.sectionaIdWithquestionTemplateRecords);
    console.log('amIdWithresponse',_this.amIdWithresponse);
  }


}
