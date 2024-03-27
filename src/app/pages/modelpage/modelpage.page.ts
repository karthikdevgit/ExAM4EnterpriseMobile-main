import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, PopoverController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import {LookupPage} from '../lookup/lookup.page';
import {ForceApiService} from '../../service/force-api.service';
import { LoaderService } from '../../service/loader.service';
import * as _ from 'underscore';
import { AlertController} from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl,FormsModule } from "@angular/forms";
@Component({
  selector: 'app-modelpage',
  templateUrl: './modelpage.page.html',
  styleUrls: ['./modelpage.page.scss'],
})
export class ModelpagePage implements OnInit {
  public columns: any;
  public rows: any;
  public copyrecords: any;
  public fieldwithDetail:any;
  public labelwithfield:any;
  public lookupdetailobj:any;
  public lookupsearchObj:any;
  public objectlabel:any;
  public hasNetwork: any;
  public recordetail: any;
  public objName: any;
  public recordId: any;
  public fieldtype:any;
  public editedfieldlist:any;
  public lookupfieldwithdetail:any;
  public editedrecorddetail:any;
  public rowdetail:any;
  public labelwithFieldDetail:any;
  public fieldsetdata:any;
  public fiedsetiseditable:any;
  public isSubmitted :any;
  public loginForm: FormGroup;
  
  constructor(
    private modalController: ModalController,
    private popover: PopoverController,
    private network: Network,
    private lookuppage:LookupPage,
    private loader:LoaderService,
    private forceapi:ForceApiService,
    private navParams: NavParams,
    private alertController: AlertController,
    private formBuilder: FormBuilder,) {
      this.isSubmitted = false;
      this.loginForm = this.formBuilder.group({});
      this.hasNetwork = this.network.type != 'none' ? true: false;
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
    this.columns = this.navParams.data.columnlabel;
    this.rows = this.navParams.data.recordetail;
    this.objName= this.navParams.data.objName;
    this.fieldwithDetail = this.navParams.data.fieldwithDetail;
    this.objectlabel= this.navParams.data.objectlabel;
    this.recordId= this.navParams.data.recordId;
    this.rowdetail = this.navParams.data.rowdetail;
    this.labelwithFieldDetail=Object.assign({},this.navParams.data.labelwithFieldDetail);
    this.lookupdetailobj=this.navParams.data.lookupdetailobj;
    this.fieldsetdata=this.navParams.data.fieldsetdata;
    this.fiedsetiseditable=this.navParams.data.fiedsetiseditable;

    
    this.lookupsearchObj = {};
    this.editedfieldlist=[];
   // this.copyrecords = Object.assign({}, this.navParams.data.selecteditem);
    console.log(' this.fieldwithDetail iseditable',  _this.fieldwithDetail,this.rowdetail,this.labelwithFieldDetail);
    var fieldwithDetail={};
    fieldwithDetail= this.fieldwithDetail;
 // added for form validation
 _.each(this.fieldsetdata, function (col, colkey) {
  console.log(' fieldsetvalidate',col,colkey);
  
  console.log(' this.fieldwithDetai l col.fieldpath',col.fieldpath,fieldwithDetail[col.fieldpath]);

  if(fieldwithDetail[col.fieldpath] && fieldwithDetail[col.fieldpath].updateable){
    console.log(' updateable');

    if(!fieldwithDetail[col.fieldpath].nillable){
      console.log(' required');

      _this.loginForm.addControl(col.fieldpath, new FormControl(_this.rows[col.fieldpath], Validators.required));
      console.log(' required',   _this.loginForm);

    }else{

      if(fieldwithDetail[col.fieldpath].type == 'email'){
        _this.loginForm.addControl(col.fieldpath, new FormControl(_this.rows[col.fieldpath],[
          Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
        ]));
        console.log(' email',   _this.loginForm);

      }else if(fieldwithDetail[col.fieldpath].type == 'double'
               || fieldwithDetail[col.fieldpath].type == 'number' 
               || fieldwithDetail[col.fieldpath].type == 'phone' 
               || fieldwithDetail[col.fieldpath].type == 'double' 
               || fieldwithDetail[col.fieldpath].type == 'int' 
               || fieldwithDetail[col.fieldpath].type == 'currency'
        ){
        _this.loginForm.addControl(col.fieldpath, new FormControl(_this.rows[col.fieldpath],[
          Validators.pattern('^[0-9]+$')
        ]));
        console.log(' number',   _this.loginForm);

      }else if(fieldwithDetail[col.fieldpath].type == 'currency'){
        _this.loginForm.addControl(col.fieldpath, new FormControl(_this.rows[col.fieldpath],[
          Validators.pattern('^\\$?(([1-9](\\d*|\\d{0,2}(,\\d{3})*))|0)(\\.\\d{1,2})?$')
        ]));
        console.log(' currency',   _this.loginForm);

      }
      else{
        if(fieldwithDetail && fieldwithDetail[col.fieldpath] && fieldwithDetail[col.fieldpath].type =='multipicklist'){
          if(_this.rows[col.fieldpath]){
            _this.rows[col.fieldpath] = _this.rows[col.fieldpath].split(';');
          }
        }
        _this.loginForm.addControl(col.fieldpath, new FormControl(_this.rows[col.fieldpath], Validators.nullValidator));
        console.log(' other required',   _this.loginForm);

      }
      

    }

  }
});
console.log(' _this.loginForm:::', this.loginForm);

this.loader.hideLoader();
  }
  async closeModal(isfromCancel) {
    var _this = this;
    _this.loader.showLoader('');
      if(this.hasNetwork){
        if(!isfromCancel){
          console.log('this.loginForm.valid',this.loginForm.valid);
          if(this.loginForm.valid){
            this.isSubmitted = false;
          var objName= this.rows['attributes']['type'];
          console.log('inside if',this.rows,objName,this.fieldwithDetail,this.labelwithFieldDetail);
        var objNameWithfields={};
      var labelwithFieldDetail={};
      labelwithFieldDetail  =this.labelwithFieldDetail;
        var editedrecorddetail={};
        var fieldlist=[];
        editedrecorddetail=this.rows;
        var saveRecordList=[];
          var obj = {};
          obj['Id']=this.recordId;
          editedrecorddetail['Id']=this.recordId;
          editedrecorddetail['attributes']=this.rows['attributes'];
          obj['attributes']=this.rows['attributes'];
          console.log('editedrecorddetail', editedrecorddetail);
          console.log(' this.editedfieldlist', this.editedfieldlist);
var editedfieldlist=[];
editedfieldlist=this.editedfieldlist;
        if(this.editedfieldlist != null && this.editedfieldlist !='undefined'){
            _.each( this.editedfieldlist ,function (coldata, colkey) {
              console.log('coldata, colkey _this.rows[coldata]', _this.fieldwithDetail[coldata], _this.fieldwithDetail[coldata]['type']);


              if(_this.fieldwithDetail && _this.fieldwithDetail[coldata] && _this.fieldwithDetail[coldata]['type'] =='multipicklist'){
                console.log('this.fieldwithDetai',_this.fieldwithDetail);

                if(_this.rowdetail[coldata]){
                  console.log('coldata, colkey _this.rows[coldata]',_this.rowdetail[coldata]);
                  _this.rowdetail[coldata] =_this.rowdetail[coldata].join('; ');
                  console.log('coldata, colkey modelpage',coldata, colkey);
                  obj[coldata]= editedrecorddetail[coldata].join('; ');
                  editedrecorddetail[coldata]= editedrecorddetail[coldata].join('; ');

                }else{
                  obj[coldata]= editedrecorddetail[coldata].join('; ');
                  editedrecorddetail[coldata]= editedrecorddetail[coldata].join('; ');
                }
              }else if(_this.fieldwithDetail && _this.fieldwithDetail[coldata] && _this.fieldwithDetail[coldata]['type'] =='time'){
                //var temptime=editedrecorddetail[coldata].split('T')[1];
               // console.log('editedrecorddetail[coldata]',temptime);
                obj[coldata]=editedrecorddetail[coldata]+'Z';
                console.log('editedrecorddetail[coldata] obj',obj);

              }else{

                console.log('coldata, colkey modelpage',coldata, colkey);
                obj[coldata]= editedrecorddetail[coldata];
              }
             
              console.log('obj[coldata]',obj[coldata],editedrecorddetail);
              fieldlist.push(coldata);
            });
            console.log('obj obj::',obj);
            saveRecordList.push(obj);
            console.log('inside if this.labelwithFieldDetail',labelwithFieldDetail);
            console.log('saveRecordList',saveRecordList);
            objNameWithfields[objName]=fieldlist;
            console.log('rowdata, this.rowdetail',this.rowdetail);
            console.log('objNameWithfields',objNameWithfields);
            console.log('inside if labelwithFieldDetail',labelwithFieldDetail);
 var copyobj={};
 copyobj= Object.assign({},this.rowdetail);
            _.each( copyobj ,function (data, key) {
              console.log('coldata, seoncdcolkey modelpage',data, key,labelwithFieldDetail);
              if(labelwithFieldDetail[key] != null && labelwithFieldDetail[key] !='undefined' ){
                console.log('coldata',labelwithFieldDetail[key]);
                if(labelwithFieldDetail[key][objName] != null && labelwithFieldDetail[key][objName] !='undefined' ){
                  console.log('coldata [objName]',labelwithFieldDetail[key][objName]);

                  if(editedfieldlist.includes(labelwithFieldDetail[key][objName])){

                    copyobj[key]= editedrecorddetail[labelwithFieldDetail[key][objName]];
                  
                  }
                }
              }
             
            });
            this.rowdetail=Object.assign({},copyobj);

            this.forceapi.postRest('updateATrecord',{savewrapper:{"recordList":saveRecordList,"objNameWithfields":objNameWithfields}})
            .then(function(result){
              _this.loader.hideLoader();
              alert('Record saved successfully');
              

              console.log('result',result);
            },function(error){
              console.log('error::',error);
              _this.loader.hideLoader();

            });
            await this.modalController.dismiss(this.rowdetail);
        }else{
          _this.loader.hideLoader();
            console.log('edidt list inside else',);
            await this.modalController.dismiss(this.rowdetail);
        }
      }
      else{
        _this.loader.hideLoader();
        console.log('Not valid else',);
       // await this.modalController.dismiss(this.rowdetail);
    }
        }else{
          _this.loader.hideLoader();
          console.log('inside cancel else',);
          await this.modalController.dismiss(this.rowdetail);
        }
    }else{
      _this.loader.hideLoader();
      console.log('inside else',);
      await this.modalController.dismiss(this.rowdetail);
    }
  }
  async editedfieldmethod(field)
  {
    console.log('editedfieldmethod method call field',this.editedfieldlist)

    if(!this.editedfieldlist.includes(field)){
      this.editedfieldlist.push(field);
    }
    console.log('field',this.editedfieldlist)
  }
  lookupgetdata(ev: any, objectname , searchtext){

  }
    getRecordlist(ev: any, objectname , searchtext): Promise<any> {
      console.log('open:::',objectname , searchtext);

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
  getrecord(ev: any,label, searchtext,objectname,relationshipname){
    console.log('label, searchtext,objectname::',label, searchtext,objectname);
    var _this = this;
    _this.loader.showLoader('');
    _this.getRecordlist(ev,objectname,searchtext).then(function(result){
      _this.loader.hideLoader();
      console.log('result::',result);
      _this.opensort(ev,label, searchtext,objectname,result,relationshipname);
    });
  }
  async opensort(ev: any,label, searchtext,objectname,result,relationshipname){
    
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
          "rows":this.rows,
          "columnlabel":label,
          "relationshipname":relationshipname
        }
        
      });
      popover.onDidDismiss().then((dataReturned) => {
        console.log('dataReturned:::',dataReturned);
        if (dataReturned != null && dataReturned.data) {
        
        }
      });
      return await popover.present();
    }
  }
  checkBlur(){

  }
  checkFocus(){

  }

}
