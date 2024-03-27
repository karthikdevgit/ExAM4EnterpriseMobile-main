import { Component,Input, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators,FormGroupDirective,ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-date-time-question',
  templateUrl: './date-time-question.component.html',
  styleUrls: ['./date-time-question.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class DateTimeQuestionComponent implements OnInit {

  @Input() eachQuestionDetail:any;
  @Input() amIdWithresponse:any;
  @Input() amresponseformGroup:any;
  @Input() amId:any;
  constructor(public formBuilder: FormBuilder,  public parentForm: FormGroupDirective,) {
    console.log('Datetime  call::::child called')
    
  }


  ngOnInit() {
    var _this=this;
   
    console.log('Date time this.QuestionDetail',_this.eachQuestionDetail);
    console.log('Date timethis.amIdWithresponse',_this.amIdWithresponse);
    console.log('Date timetextthis.amresponseformGroup',_this.amresponseformGroup);
   console.log('Date.timeamresponseformGroup[_this.amId][_this.eachQuestionDetail]');
   _this.amresponseformGroup.addControl(
    [_this.eachQuestionDetail.Name],new FormControl([
      '',
      [
        Validators.required,
      ]
    ])
    );
    console.log('Datetime  form this.amresponseformGroup',_this.amresponseformGroup);
  }

}
