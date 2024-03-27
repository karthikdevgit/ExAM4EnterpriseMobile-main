import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators,FormGroupDirective,ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-checkbox-question',
  templateUrl: './checkbox-question.component.html',
  styleUrls: ['./checkbox-question.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class CheckboxQuestionComponent implements OnInit {
  @Input() eachQuestionDetail:any;
  @Input() amIdWithresponse:any;
  @Input() amresponseformGroup:any;
  @Input() amId:any;
  constructor(public formBuilder: FormBuilder,  public parentForm: FormGroupDirective,) {
    console.log('checkbox  call::::child called')
   
  }
  ngOnInit() {
    var _this=this;
   
    console.log('checkbox this.QuestionDetail',_this.eachQuestionDetail);
    console.log('checkbox this.amIdWithresponse',_this.amIdWithresponse);
    console.log('checkbox textthis.amresponseformGroup',_this.amresponseformGroup);
   console.log('checkbox.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
   _this.amresponseformGroup.addControl(
    [_this.eachQuestionDetail.Name],new FormControl([
      '',
      [
        Validators.required,
      ]
    ])
    );
    console.log('checkbox form this.amresponseformGroup',_this.amresponseformGroup);
   
  }

}
