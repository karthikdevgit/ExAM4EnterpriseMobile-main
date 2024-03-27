import { Component,Input, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators,FormGroupDirective,ControlContainer } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-location-question',
  templateUrl: './location-question.component.html',
  styleUrls: ['./location-question.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class LocationQuestionComponent implements OnInit {
  @Input() eachQuestionDetail:any;
  @Input() amIdWithresponse:any;
  @Input() amresponseformGroup:any;
  @Input() amId:any;
  optionsArr:[];
  selectedValue: any;
  constructor(public formBuilder: FormBuilder,public parentForm: FormGroupDirective,private geolocation: Geolocation) {
    console.log('Location questionconstructor call::::child called')
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      console.log('resp.coords.latitude',resp)

      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     
   }

  ngOnInit() {
    var _this=this;
    console.log('Location.QuestionDetail',_this.eachQuestionDetail);
   console.log('Location.amIdWithresponse',_this.amIdWithresponse);
   console.log('Location textthis.amresponseformGroup',_this.amresponseformGroup);
  console.log('Location _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
  _this.amresponseformGroup.addControl(
   [_this.eachQuestionDetail.Name],new FormControl([
     '',
     [
       Validators.required,
     ]
   ])
   );
  }

}
