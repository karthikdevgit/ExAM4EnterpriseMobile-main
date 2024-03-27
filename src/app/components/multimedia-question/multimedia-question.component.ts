import { Component,Input, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators,FormGroupDirective,ControlContainer } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-multimedia-question',
  templateUrl: './multimedia-question.component.html',
  styleUrls: ['./multimedia-question.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class MultimediaQuestionComponent implements OnInit {

  @Input() eachQuestionDetail:any;
  @Input() amIdWithresponse:any;
  @Input() amresponseformGroup:any;
  @Input() amId:any;
  constructor(public formBuilder: FormBuilder,  public parentForm: FormGroupDirective,private sanitizer: DomSanitizer) {
    console.log('multimedia  call::::child called')
    
   }

  ngOnInit() {
    var _this=this;
   
    console.log('multimedia this.QuestionDetail',_this.eachQuestionDetail);
    console.log('multimedia this.amIdWithresponse',_this.amIdWithresponse);
    console.log('multimedia textthis.amresponseformGroup',_this.amresponseformGroup);
   console.log('multimedia _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
   _this.amresponseformGroup.addControl(
    [_this.eachQuestionDetail.Name],new FormControl([
      '',
      [
        Validators.required,
      ]
    ])
    );
    console.log('number form this.amresponseformGroup',_this.amresponseformGroup);
  }
  urlConverter(ques) {
    if(ques && typeof ques =='string' && ques.indexOf("watch?v=") > 0){
        ques = ques.replace('watch?v=','embed/');
    }
    console.log('ques',ques);
    return this.sanitizer.bypassSecurityTrustResourceUrl(ques);
}
}
