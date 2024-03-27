import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-component',
  templateUrl: './accordion-component.component.html',
  styleUrls: ['./accordion-component.component.scss'],
})
export class AccordionComponentComponent implements OnInit {
  @Input() sectionDetail: any; 
  @Input() sectionaIdWithquestionTemplateRecords:any;
  @Input() amIdWithresponse:any;
  @Input() amresponseformGroup:any;
  @Input() amId:any;
  public isMenuOpen : boolean = false;

  constructor() { }

  ngOnInit() {
    var _this=this;
    console.log('ngOnInit this.sectionDetail',_this.sectionDetail);
    console.log('ngOnInit this.eachQuestionTemplate',_this.sectionaIdWithquestionTemplateRecords);
    console.log('amId',_this.amIdWithresponse)
  }
  public toggleAccordion() : void
  {
      this.isMenuOpen = !this.isMenuOpen;
  }


}
