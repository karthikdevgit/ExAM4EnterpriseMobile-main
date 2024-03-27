import { Component, OnInit } from '@angular/core';
import { any, object } from 'underscore';
import { PopoverController, NavParams } from '@ionic/angular';
import {ForceApiService} from '../../service/force-api.service';
import { Network } from '@ionic-native/network/ngx';
import { LoaderService } from '../../service/loader.service';
import * as _ from 'underscore';
import {LookupPage} from '../lookup/lookup.page';
import { AlertController} from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";

declare var window:any;
@Component({
  selector: 'app-editpopover',
  templateUrl: './editpopover.page.html',
  styleUrls: ['./editpopover.page.scss'],
})
export class EditpopoverPage implements OnInit {
  data:any; 
  rowdetail:any;
  filedtype:any;
  field:any;
  objName:any;
  temprowdetail:any;
  columns:any;
   labelwithFieldDetail:any;
   fieldwithDetail:any;
   labelwithfield:any;
   objectname:any;
   public isedited:any;
   public isselected:any;
   public lookupsearchObj:any;
   public lookupdetailobj:any;
  public temprows: any;
  public hasNetwork: any;
  public tempAssessmentTrackerData:any;
  listobj:any;
  public searchtext:any;
  public isSubmitted :any;
  public loginForm: FormGroup;
  constructor(private navparam:NavParams,
    private popover:PopoverController,
    private forceapi:ForceApiService,
    private loader:LoaderService,
    private lookuppage:LookupPage,
     private network: Network,
     private formBuilder: FormBuilder,
     private alertController: AlertController,
     ) { 
      this.isSubmitted = false;
      this.hasNetwork = this.network.type != 'none' ? true: false;
      this.loginForm = this.formBuilder.group({});
      this.loader.showLoader('');
     }

    // watch network for a disconnection
    disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(',this.network.type);
      this.hasNetwork = false;
    });
    // watch network for a connection
    connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!',this.network.type);
      this.hasNetwork = true;
    });  
  ngOnInit() {
    var _this = this;
   // this.isfrommodel=false;
    this.rowdetail = this.navparam.data.rowdetail;
    this.filedtype = this.navparam.data.filedtype;
    this.field = this.navparam.data.field;
    this.objName = this.navparam.data.objName;
    
    this.labelwithFieldDetail = this.navparam.data.labelwithFieldDetail;
    this.temprowdetail= Object.assign({}, this.navparam.data.rowdetail);
//this.fieldwithDetail=this.navparam.data.tablefieldwithDetail;
this.labelwithfield=this.navparam.data.labelwithField;
this.lookupdetailobj=this.navparam.data.lookupdetailobj;
console.log('editpopover console log',this.lookupdetailobj, this.temprowdetail, this.labelwithfield,this.field,this.labelwithfield[this.field]);
this.lookupsearchObj = {};
this.objectname=this.labelwithfield[this.field]['referenceTo'][0];
this.isedited=false;
if(this.filedtype=='reference'){
  this.searchtext=this.labelwithfield[this.field]['referenceTo'][0] !='Case' ?  (this.temprowdetail[this.labelwithfield[this.field]['referenceTo'][0]] && this.temprowdetail[this.labelwithfield[this.field]['referenceTo'][0]]['Name']): (this.temprowdetail[this.labelwithfield[this.field]['referenceTo'][0]] && this.temprowdetail[this.labelwithfield[this.field]['referenceTo'][0]]['CaseNumber']);
  this.isselected=false;
  console.log("this.searchtext start",this.searchtext)

  if(this.searchtext !=null && this.searchtext!='undefined'){
  this.getrecord(this.objectname,this.labelwithfield[this.field]['referenceTo'][0] !='Case' ?  (this.temprowdetail[this.labelwithfield[this.field]['referenceTo'][0]] && this.temprowdetail[this.labelwithfield[this.field]['referenceTo'][0]]['Name']): (this.temprowdetail[this.labelwithfield[this.field]['referenceTo'][0]] && this.temprowdetail[this.labelwithfield[this.field]['referenceTo'][0]]['CaseNumber']));
  
}
  console.log("this.searchtext next",this.searchtext)

}
if(_this.labelwithfield[this.field] && _this.labelwithfield[this.field].updateable ){

  if(!_this.labelwithfield[this.field].nillable){
    this.loginForm.addControl(this.field, new FormControl(_this.temprowdetail[this.field], Validators.required));
  }else{

    if(_this.labelwithfield[this.field].type == 'email'){
      this.loginForm.addControl(this.field, new FormControl(_this.temprowdetail[this.field],[
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]));

    }else if(_this.labelwithfield[this.field].type == 'double'
             || _this.labelwithfield[this.field].type == 'number' 
             || _this.labelwithfield[this.field].type == 'phone' 
             || _this.labelwithfield[this.field].type == 'double' 
             || _this.labelwithfield[this.field].type == 'int' 
             || _this.labelwithfield[this.field].type == 'currency'
      ){
      this.loginForm.addControl(this.field, new FormControl(_this.temprowdetail[this.field],[
        Validators.pattern('^[0-9]+$')
      ]));
    }else if(_this.labelwithfield[this.field].type == 'currency'){
      this.loginForm.addControl(this.field, new FormControl(_this.temprowdetail[this.field],[
        Validators.pattern('^\\$?(([1-9](\\d*|\\d{0,2}(,\\d{3})*))|0)(\\.\\d{1,2})?$')
      ]));
    }
    else{
      if(_this.labelwithfield && _this.labelwithfield[this.field] && _this.labelwithfield[this.field].type =='multipicklist'){
        if(_this.temprowdetail[this.field]){
          _this.temprowdetail[this.field] = _this.temprowdetail[this.field].split(';');
        }
      }
      this.loginForm.addControl(this.field, new FormControl(_this.temprowdetail[this.field], Validators.nullValidator));
    }
    

  }

}
this.loader.hideLoader();


  }
  async saverecord(temprowdetail,save) {
    var _this = this;
    console.log('editpopover console log', temprowdetail,temprowdetail[this.field]);
    _this.loader.showLoader('');

  if(save){
    if(this.isedited){
      this.isedited=false;
        if(this.hasNetwork ){
          //this.rowdetail=temprowdetail;
          if(_this.loginForm.valid){
            this.isSubmitted =false;
            var objNameWithfields={};
            var temrecorddetail={};
            var fieldlist=[];
            temrecorddetail= this.rowdetail;
          var saveRecordList=[];
            var obj = {};
            var labelwithFieldDetail=this.labelwithFieldDetail;
          var tempfieldname= labelwithFieldDetail[this.field]
            obj['Id']= temprowdetail['Id'];
            obj['attributes']= temprowdetail['attributes'];
            
            console.log('temrecorddetail',temrecorddetail,labelwithFieldDetail,_this.labelwithfield);
           // this.rowdetail=temprowdetail;
           if(_this.labelwithfield && _this.labelwithfield[this.field] && _this.labelwithfield[this.field].type =='time'){
            console.log('temprowdetail[this.field]test11',temprowdetail[this.field]);

            if(temprowdetail[this.field] && !temprowdetail[this.field].includes('Z')){
              console.log('temprowdetail[this.field]11',temprowdetail[this.field]);

              obj[tempfieldname[this.objName]]= temprowdetail[this.field]+'Z';
             // var temptime=temprowdetail[this.field].split('T')[1];
              console.log('temprowdetail[this.field]',temprowdetail[this.field],obj,temprowdetail[this.field]);
              this.rowdetail[this.field]=temprowdetail[this.field]+'Z';

            }
           
          }else if(_this.labelwithfield && _this.labelwithfield[this.field]  && _this.labelwithfield[this.field].type =='multipicklist'){
            console.log('temprowdetail[this.field] test',temprowdetail[this.field]);

            if(temprowdetail[this.field]){
              console.log('temprowdetail[this.field]',temprowdetail[this.field]);

              obj[tempfieldname[this.objName]] =temprowdetail[this.field].join('; ');
              console.log('temprowdetail[this.field] 22',temprowdetail[this.field],obj);
              this.rowdetail[this.field]=temprowdetail[this.field].join('; ');
            }
          } else{
            obj[tempfieldname[this.objName]]= temprowdetail[this.field];
            this.rowdetail[this.field]=temprowdetail[this.field];

          }
            console.log('obj obj:::',temrecorddetail,obj);
            saveRecordList.push(obj);
            console.log('saveRecordList',saveRecordList,this.objName);
        fieldlist.push(tempfieldname[this.objName]);
        console.log('saveRecordList',fieldlist,fieldlist);
        if(_this.labelwithfield && _this.labelwithfield[this.field]  && _this.labelwithfield[this.field].type =='reference'){
          if(_this.labelwithfield[this.field]['referenceTo'][0] !='Case'){
            if(this.temprowdetail[_this.labelwithfield[this.field]['referenceTo'][0]]){
            this.rowdetail[_this.labelwithfield[this.field]['referenceTo'][0]]['Name']=this.temprowdetail[_this.labelwithfield[this.field]['referenceTo'][0]]['Name'];
            } 
          }else{
            if(this.temprowdetail[_this.labelwithfield[this.field]['referenceTo'][0]]){
            this.rowdetail[_this.labelwithfield[this.field]['referenceTo'][0]]['CaseNumber']=this.temprowdetail[_this.labelwithfield[this.field]['referenceTo'][0]]['CaseNumber']
            }
          }
        }
            objNameWithfields[this.objName]=fieldlist;
            console.log('objNameWithfields',objNameWithfields);

            this.forceapi.postRest('updateATrecord',{savewrapper:{"recordList":saveRecordList,"objNameWithfields":objNameWithfields}})
            .then(function(result){
              
              alert('Record saved successfully');
              _this.loader.hideLoader();

            },function(error){
              console.log('error::',error);
          
            });
            await this.popover.dismiss(null);
          }else{
            _this.loader.hideLoader();
            console.log('form not valid');
          }
      }else{
        this.rowdetail[this.field]=temprowdetail[this.field];
       // this.rowdetail=this.temprowdetail;
        console.log('else offline',  this.rowdetail, this.rowdetail[this.field]);
        this.rowdetail['isEdited']=true;
        console.log('else offline 22',  this.rowdetail);
     
        _this.loader.hideLoader();
       
        await this.popover.dismiss('offline');
      }
    }
    else{
      _this.loader.hideLoader();
      this.isedited=false;
      //alert('No edited record ');
     // this.rowdetail= this.rowdetail;
      await this.popover.dismiss(null);
  
    }
  }else{
    _this.loader.hideLoader();

   // this.rowdetail= this.rowdetail;
    await this.popover.dismiss(null);

  }
 
  
}

/*getRecordlist(ev: any, objectname , searchtext): Promise<any> {
  console.log('open:::',objectname , searchtext);

  return new Promise((resolve, reject) => {

    if(this.network.type != 'none'){
      console.log('result::',searchtext,objectname);
      var _this = this, queryString, searchString;
      console.log('outter objectname::',objectname,(objectname != null));

      if(objectname != null){
        console.log('inner objectname::',objectname,(objectname != null));

        searchString = '\'%' + searchtext + '%\'';
        queryString = 'SELECT Id';
        if(objectname == 'Case'){
          queryString += ',CaseNumber FROM '+objectname+' WHERE CaseNumber LIKE '+searchString+' Limit 50'
        }else{
          queryString += ',Name FROM '+objectname+' WHERE Name LIKE  '+searchString+' Limit 50'
        }
        console.log('queryString::',queryString);

        _this.forceapi.query(queryString).then(function(Userrecord){
        console.log('Userrecord::',Userrecord);
          resolve(Userrecord);
        },function(error){
          console.log('error::',error);

        });
      }
    // setTimeout( () => {
        
      //}, 100);
    }else{
      console.log('else:::');
    }
});
}
enablelookup(ev: any,label, searchtext,objectname){
  this.lookupsearchObj = {};
  this.lookupsearchObj[label] = true;
  this.lookupsearchObj['search'] = searchtext;
  console.log('this.lookupsearchObj::',this.lookupsearchObj);
}
async getrecord(ev: any,label, searchtext,objectname){
  console.log('result::',searchtext,objectname);
  var _this = this;
  this.loader.showLoader('');
  _this.getRecordlist(ev,objectname,searchtext).then(function(result){
    _this.loader.hideLoader();
    console.log('result::',result);
    _this.opensort(ev,label, searchtext,objectname,result);
    
  });
}

async opensort(ev: any,label, searchtext,objectname,result){
    
  if(this.network.type != 'none'){
   
    const popover = await this.popover.create({
      component: LookupPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      backdropDismiss:true,
      componentProps: {
        "listobj":result,
        "searchtext":searchtext,
        "objectname":objectname,
        "rows":this.rowdetail,
        "columnlabel":label
      }
      
    });
    popover.onDidDismiss().then((dataReturned) => {
      console.log('dataReturned:::',dataReturned);
      if (dataReturned != null && dataReturned.data) {
      
      }
    });
    return await popover.present();
  }
}*/
async getrecord(objectname,searchtext){
  console.log('result::',searchtext,objectname);
  var _this = this;
  if(this.network.type != 'none'){

    this.loader.showLoader('');
    _this.getRecordlist(objectname,searchtext).then(function(result){
      _this.loader.hideLoader();
      console.log('result::',result);
      
    });
  }else{
    alert('Reference type field edit not supported in offline mode');
  }
}
onInput(objectname , searchtext){
  console.log('open change1111:::',objectname , searchtext);

  var _this = this;
  _this.getRecordlist(objectname,searchtext).then(function(result){
    console.log('result::',result);
  });
}
getRecordlist(objectname , searchtext): Promise<any> {
  console.log('open:::',objectname , searchtext);
 this.isselected=false;
  return new Promise((resolve, reject) => {

    if(this.network.type != 'none'){

      var _this = this, queryString, searchString;
      console.log('outter objectname::',objectname,(objectname != null));

      if(objectname != null){
        console.log('inner objectname::',objectname,(objectname != null));

        searchString = '\'%' + searchtext + '%\'';
        queryString = 'SELECT Id';
        if(objectname == 'Case'){
          queryString += ',CaseNumber FROM '+objectname+' WHERE CaseNumber LIKE '+searchString+' Limit 50'
        }else{
          queryString += ',Name FROM '+objectname+' WHERE Name LIKE  '+searchString+' Limit 50'
        }
        console.log('queryString::',queryString);

        _this.forceapi.query(queryString).then(function(Userrecord){
        console.log('Userrecord::',Userrecord);
        _this.listobj = Userrecord;
          resolve(Userrecord);
        },function(error){
          console.log('error::',error);

        });
      }
    // setTimeout( () => {
        
      //}, 100);
    }else{
      _this.loader.hideLoader();
      console.log('else:::');
    }
  });
}


  checkBlur(){

  }
  checkFocus(){

  }
  async iseditedmethod()
    {
      this.isedited=true;
  }
  async selecteditem(isfromCancel,index) {
    console.log('isfromCancel,index::',isfromCancel,index,this.listobj[index]);
    if(!isfromCancel){
      this.isselected=true;
      this.temprowdetail[this.labelwithfield[this.field]['referenceTo'][0]]= this.listobj[index];
      this.temprowdetail[this.field] = this.listobj[index]['Id'];
      console.log('this.isselected',this.isselected);

      console.log('this.temprowdetail:::',this.temprowdetail);
      console.log("this.listobj[index][Id",this.listobj[index]['Id'])
      console.log("this.listobj[index][Id",this.listobj[index]['Name'])
      this.searchtext=this.labelwithfield[this.field]['referenceTo'][0] !='Case' ?  this.listobj[index]['Name']:this.listobj[index]['CaseNumber'];
      console.log("this.searchtext",this.searchtext)

    }else{

    }
  }
}
