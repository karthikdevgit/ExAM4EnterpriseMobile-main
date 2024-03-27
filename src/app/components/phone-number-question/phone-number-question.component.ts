import { Component,Input, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators,FormGroupDirective,ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-phone-number-question',
  templateUrl: './phone-number-question.component.html',
  styleUrls: ['./phone-number-question.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class PhoneNumberQuestionComponent implements OnInit {
  @Input() eachQuestionDetail:any;
  @Input() amIdWithresponse:any;
  @Input() amresponseformGroup:any;
  @Input() amId:any;
  constructor(public formBuilder: FormBuilder,  public parentForm: FormGroupDirective,) {
    console.log('constructor phone number call::::child called')
    
   }

  ngOnInit() {
    var _this=this;
   
    console.log('phonenumber this.QuestionDetail',_this.eachQuestionDetail);
    console.log('phonenumber this.amIdWithresponse',_this.amIdWithresponse);
    console.log('phonenumber textthis.amresponseformGroup',_this.amresponseformGroup);
   console.log('phonenumber _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
   _this.amresponseformGroup.addControl(
    [_this.eachQuestionDetail.Name],new FormControl([
      '',
      [
        Validators.required,
      ]
    ])
    );
    console.log('phonenumber form this.amresponseformGroup',_this.amresponseformGroup);
  }

}
