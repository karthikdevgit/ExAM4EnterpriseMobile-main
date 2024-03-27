import { Component,Input, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators,FormGroupDirective,ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-email-question',
  templateUrl: './email-question.component.html',
  styleUrls: ['./email-question.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class EmailQuestionComponent implements OnInit {
  @Input() eachQuestionDetail:any;
  @Input() amIdWithresponse:any;
  @Input() amresponseformGroup:any;
  @Input() amId:any;
  constructor(public formBuilder: FormBuilder,  public parentForm: FormGroupDirective,) {
    console.log('checkbox  call::::child called')
    
  }
  ngOnInit() {
    var _this=this;
   
    console.log('email this.QuestionDetail',_this.eachQuestionDetail);
    console.log('email this.amIdWithresponse',_this.amIdWithresponse);
    console.log('email textthis.amresponseformGroup',_this.amresponseformGroup);
   console.log('email.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
   _this.amresponseformGroup.addControl(
    [_this.eachQuestionDetail.Name],new FormControl([
      '',
      [
        Validators.required,
      ]
    ])
    );
    console.log('email form this.amresponseformGroup',_this.amresponseformGroup);
  }
  
}
