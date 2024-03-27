import { Component,Input, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators,FormGroupDirective,ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-rich-text-question',
  templateUrl: './rich-text-question.component.html',
  styleUrls: ['./rich-text-question.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class RichTextQuestionComponent implements OnInit {
  @Input() eachQuestionDetail:any;
  @Input() amIdWithresponse:any;
  @Input() amresponseformGroup:any;
  @Input() amId:any;
  constructor(public formBuilder: FormBuilder,  public parentForm: FormGroupDirective,) {
    console.log('richText text call::::child called')
    
   }
  ngOnInit() {
    var _this=this;
   
    console.log('richText this.QuestionDetail',_this.eachQuestionDetail);
    console.log('richText this.amIdWithresponse',_this.amIdWithresponse);
    console.log('richText textthis.amresponseformGroup',_this.amresponseformGroup);
   console.log('richText _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
   _this.amresponseformGroup.addControl(
    [_this.eachQuestionDetail.Name],new FormControl([
      '',
      [
        Validators.required,
      ]
    ])
    );
    console.log('richText form this.amresponseformGroup',_this.amresponseformGroup);

  }

}
