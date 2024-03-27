import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-template',
  templateUrl: './question-template.component.html',
  styleUrls: ['./question-template.component.scss'],
})
export class QuestionTemplateComponent implements OnInit {
@Input() questiondetail:any;
  constructor() { }

  ngOnInit() {
    var _this=this;
    console.log('ngOnInit this.questiondetail',_this.questiondetail);
   

  }

}
