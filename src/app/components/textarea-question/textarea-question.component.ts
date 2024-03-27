import { Component,Input, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators,FormGroupDirective,ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-textarea-question',
  templateUrl: './textarea-question.component.html',
  styleUrls: ['./textarea-question.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class TextareaQuestionComponent implements OnInit {
  @Input() eachQuestionDetail:any;
  @Input() amIdWithresponse:any;
  @Input() amresponseformGroup:any;
  @Input() amId:any;
  constructor(public formBuilder: FormBuilder,  public parentForm: FormGroupDirective,) {
    console.log('texteare text call::::child called')
    
   }
  ngOnInit() {
    var _this=this;
   
    console.log('texteare this.QuestionDetail',_this.eachQuestionDetail);
    console.log('texteare this.amIdWithresponse',_this.amIdWithresponse);
    console.log('texteare textthis.amresponseformGroup',_this.amresponseformGroup);
   console.log('texteare _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
   _this.amresponseformGroup.addControl(
    [_this.eachQuestionDetail.Name],new FormControl([
      '',
      [
        Validators.required,
      ]
    ])
    );
    console.log('texteare form this.amresponseformGroup',_this.amresponseformGroup);
  }

}
