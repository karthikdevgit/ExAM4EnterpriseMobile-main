import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var window: any;
@Component({
  selector: 'app-relate-amdetail-page',
  templateUrl: './relate-amdetail-page.page.html',
  styleUrls: ['./relate-amdetail-page.page.scss'],
})
export class RelateAMDetailPagePage implements OnInit {
  amData:any;
  sectionTemplateList: any; 
  sectionaIdWithquestionTemplateRecords:any;
  myControl:string;
  amresponse:any;
  ionicForm: FormGroup;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  public amresponseformGroup:FormGroup;
  constructor(private router: Router, 
              public activatedRoute : ActivatedRoute,
              public formBuilder: FormBuilder) {
    console.log(' this.activatedRoute', this.activatedRoute);

    this.amData = JSON.parse(this.activatedRoute.snapshot.paramMap.get('amData'));
    

   }

  ngOnInit() {
    console.log('Am detail page render');
    var _this = this;
    console.log('this.response', _this.amresponse);
    console.log('this.amresponseformGroup', _this.amresponseformGroup);
    _this.amresponse={};
    _this.amresponse[_this.amData.Id]={};
    _this.amresponseformGroup = _this.formBuilder.group({
    })
    console.log('this.amresponse', _this.amresponse);

    _this.getQusetionDetail().then(function (QuestionData) {
      console.log('QuestionData',QuestionData);

     
    });
   
  }
  
  submitForm = () => {
    if (this.ionicForm.valid) {
      console.log(this.ionicForm.value);
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };
   
getQusetionDetail(): Promise<any> {

  return new Promise(async (resolve, reject) => {
    var _this = this;
    console.log('gettemplateDetail',_this.amData);
    console.log('_this.amData',_this.amData.ExAM__InvestigationType__c)

    var QuestionTemplateQuerySpec = window.navigator.smartstore.buildExactQuerySpec("templateId",_this.amData.ExAM__InvestigationType__c,1000);
    window.navigator.smartstore.querySoup("QuestionTemplate", QuestionTemplateQuerySpec, function(QuestionTemplateQuerydata){
      console.log('QuestionTemplateQuerydata',QuestionTemplateQuerydata);
      var newobj = {};
      var ObjectDataDetails = [];
      newobj[_this.amData.Id] = QuestionTemplateQuerydata.currentPageOrderedEntries[0].QuestionTemplate['sectionTemplateRecord'];
      console.log('newobj',newobj);
      _this.sectionTemplateList=QuestionTemplateQuerydata.currentPageOrderedEntries[0].QuestionTemplate['sectionTemplateRecord'];
      console.log('_this.sectionTemplateList',_this.sectionTemplateList);
      _this.sectionaIdWithquestionTemplateRecords=QuestionTemplateQuerydata.currentPageOrderedEntries[0].QuestionTemplate['questionTemplateRecords'];
      resolve(newobj);
    });
  });
}
get errorControl() {
  console.log('this.amresponseformGroup.controls',this.amresponseformGroup.controls);
  return this.amresponseformGroup.controls;
}
submitam = () => {

  if (this.amresponseformGroup.valid) {
    console.log('succes',this.amresponseformGroup.value);
    console.log(',this.amresponse',this.amresponse)
    return false;
  } else {
    console.log('erreo' );

    return console.log('Please provide all the required values!');
  }
};
previousRleatedScreen() {
  var _this = this;

  _this.router.navigate(['/']);
}
}
