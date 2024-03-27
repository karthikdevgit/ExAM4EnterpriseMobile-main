import { Component, Input,OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators,FormGroupDirective,ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-text-question',
  templateUrl: './text-question.component.html',
  styleUrls: ['./text-question.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class TextQuestionComponent implements OnInit {
  @Input() eachQuestionDetail:any;
  @Input() amIdWithresponse:any;
  @Input() amresponseformGroup:any;
  @Input() amId:any;
  constructor(public formBuilder: FormBuilder,  public parentForm: FormGroupDirective,) {
    console.log('constructor text call::::child called')
    
   }

  ngOnInit() {
    var _this=this;
   
    console.log('ngOnInittext this.QuestionDetail',_this.eachQuestionDetail);
    console.log('ngOnInittext this.amIdWithresponse',_this.amIdWithresponse);
    console.log('ngOnInit textthis.amresponseformGroup',_this.amresponseformGroup);
   console.log('text _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
   _this.amresponseformGroup.addControl(
    [_this.eachQuestionDetail.Name],new FormControl([
      '',
      [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
      ]
    ])
    );
    console.log('textafter form this.amresponseformGroup',_this.amresponseformGroup);

  }

}
