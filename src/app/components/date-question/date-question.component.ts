import { Component, Input,OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators,FormGroupDirective,ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-date-question',
  templateUrl: './date-question.component.html',
  styleUrls: ['./date-question.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class DateQuestionComponent implements OnInit {
  @Input() eachQuestionDetail:any;
  @Input() amIdWithresponse:any;
  @Input() amresponseformGroup:any;
  @Input() amId:any;
  constructor(public formBuilder: FormBuilder,  public parentForm: FormGroupDirective,) {
    console.log('Date  call::::child called')
    
  }

  ngOnInit() {
    var _this=this;
   
    console.log('Date this.QuestionDetail',_this.eachQuestionDetail);
    console.log('Date this.amIdWithresponse',_this.amIdWithresponse);
    console.log('Date textthis.amresponseformGroup',_this.amresponseformGroup);
   console.log('Date.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
   _this.amresponseformGroup.addControl(
    [_this.eachQuestionDetail.Name],new FormControl([
      '',
      [
        Validators.required,
      ]
    ])
    );
    console.log('Date form this.amresponseformGroup',_this.amresponseformGroup);
  }

}
