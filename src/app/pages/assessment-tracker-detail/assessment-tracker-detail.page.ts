import { Component, OnInit,NgZone } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { any, object } from 'underscore';
import * as _ from 'underscore';
import { LoaderService } from '../../service/loader.service';
import { ModalController, PopoverController,AlertController,MenuController} from '@ionic/angular';
import {ModelpagePage} from '../modelpage/modelpage.page';
import {PopoverpagePage} from '../popoverpage/popoverpage.page';
import { Network } from '@ionic-native/network/ngx';
import {ForceApiService} from '../../service/force-api.service';
import {FlscheckService} from '../../service/flscheck.service';
import {LaunchServiceService} from '../../service/launch-service.service';
import { Subscription } from 'rxjs';
import {EditpopoverPage} from '../editpopover/editpopover.page';
import { Keyboard } from '@ionic-native/keyboard/ngx';

declare var window:any;
@Component({
  selector: 'app-assessment-tracker-detail',
  templateUrl: './assessment-tracker-detail.page.html',
  styleUrls: ['./assessment-tracker-detail.page.scss'],
})
export class AssessmentTrackerDetailPage implements OnInit {
  data:any; 
  tablestyle = 'bootstrap';
  public columns: any;
  public columnsfieldlist: any;
  public rows: any;
  public iconWithObj: any;
  public iconWithclass: any;
  public iconWithsvgclass: any;
  public labelwithFieldDetail: any;
  public fieldwithlabelDetail: any;
  public temprows: any;
  public editing = {};
  public sortingobj:any;
  public selectedsortingobj:any;
  public columnlabel:any;
  public orderbyfield:any;
  public tempAssessmentTrackerData:any; 
  public objandFieldFlsDetail:any; 
  public objanddescribeDetail:any; 
  public lookupdetailobj:any;
  public lookupRelationshipNameDetailObj:any;
  public testlabel:any; 
  public uparrow:any;
  public downarrow:any;
  public searchtext:any;
  public HassyncOption:any;
  subscription: Subscription;
  public hasNetwork: any;
  constructor(
    public modalController: ModalController,
    private loader:LoaderService,
    private route: ActivatedRoute,
    private popover: PopoverController,
    private network: Network,
    private forceapi:ForceApiService,
    private zone:NgZone,
    private flsservice:FlscheckService,
    private launchservice:LaunchServiceService,
    private alertController: AlertController,
    private menu: MenuController,
    private keyboard:Keyboard,
    private router: Router) { 
    this.testlabel = 'headerhb';
    this.uparrow = '../../../assets/utility/arrowup_60.png';
    this.downarrow = '../../../assets/utility/arrowdown_60.png';  
    this.loader.showLoader('');
    var _this = this;

    
    this.route.queryParams.subscribe(params => {

      if (this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.ATObj) {
        
        this.data = this.router.getCurrentNavigation().extras.state.ATObj;
         
        console.log('this.data:::',this.data);
        var ATQuerySpec = window.navigator.smartstore.buildExactQuerySpec('ATcongId', this.data.Id, 1);
        window.navigator.smartstore.querySoup("AssessmentTrackerData", ATQuerySpec, function(ATobjlist) {
          _this.launchservice.getSyncOptionSetting().then(function(syncsetting){
            console.log('syncsetting:::',syncsetting);
            
            _this.HassyncOption = syncsetting;
            _this.tempAssessmentTrackerData = ATobjlist;

            if(ATobjlist.totalEntries){
              console.log('ATobjlist::',ATobjlist);
              if(ATobjlist.currentPageOrderedEntries &&ATobjlist.currentPageOrderedEntries[0] &&  ATobjlist.currentPageOrderedEntries[0].valueDetail ){
                
                _this.flsservice.getFlsForObjectFields(0,ATobjlist.currentPageOrderedEntries[0]['valueDetail']['ObjectNameList'],{},{}).then(function(data) {

                  console.log('data:::-------------',data);
                  _this.objandFieldFlsDetail = data['fieldwithDetail'];
                  _this.objanddescribeDetail = data['objectwithlabel'];

                  var allDetails = ATobjlist['currentPageOrderedEntries'][0]['valueDetail'];
                  var objlist = ATobjlist['currentPageOrderedEntries'][0]['valueDetail']['ATData'];
                  var lookupdetailobj = ATobjlist['currentPageOrderedEntries'][0]['valueDetail']['refobjnamewithfieldmap'];
                  var createcolumnlist = [], sortobj =[], iconWithObj = {}, iconWithclass ={}, iconWithsvgclass = {}, templabelwithFieldDetail = {},tempfieldwithlabelDetail={}, templookupRelationshipNameDetailObj={};
                //  createcolumnlist.push({ name: '', prop: 'S.No' , sortable:false});
                 // createcolumnlist.push({ name: '', prop: 'Type' , sortable:false});
                  
                  //Create column label mapping
                  _.each(allDetails['colIdwithdetails'], function (data, key) {
                    var tempobj= {};

                    tempobj['sortable'] = true;
                    tempobj['selected'] = false;
                    tempobj['asc'] = false;
                    tempobj['desc'] = false;

                    if(data && data['ExAM_Tracker__Behavior__c']){
                      tempobj['behaviour'] = data['ExAM_Tracker__Behavior__c'];
                    }
                    if(data && data['ExAM_Tracker__Label__c']){
                      tempobj['name'] = data['ExAM_Tracker__Label__c'];
                      tempobj['prop'] = data['ExAM_Tracker__Label__c'];

                      if(data['ExAM_Tracker__Label__c'] == 'Object'){
                        tempobj['sortable'] = false;
                      }
                    }
                    if(data && data['ExAM_Tracker__Column_Type__c']){
                      tempobj['columntype'] = data['ExAM_Tracker__Column_Type__c'];

                    }
                   
                    if(data && data['ExAM_Tracker__Data_Type__c']){
                      tempobj['fldtype'] = data['ExAM_Tracker__Data_Type__c'].toLowerCase();

                    }
                    tempobj['fieldsetdetail']=allDetails['objFieldSetMap'];
                    sortobj.push(tempobj);
                    createcolumnlist.push(tempobj);
                  });
                 
                  _this.columns = createcolumnlist;
                  console.log('_this.columns::',_this.columns);
                  _this.sortingobj = sortobj;
                  //End
                  _this.columnlabel = [];
                  _.each(allDetails['ObjectRecordList'], function (data, key) {
                    var fieldsetname='';
                    var fiedsetiseditable=';'
                    var objapi = data['ExAM_Tracker__Object_Type__c'];
                    console.log('ExAM_Tracker__Mobile_Link_To_Root_Object_Field_Set__c',data['ExAM_Tracker__Mobile_Link_To_Root_Object_Field_Set__c']);
                    console.log('ExAM_Tracker__Enable_Mobile_Fieldsetdata_Edit__c', data['ExAM_Tracker__Enable_Mobile_Fieldsetdata_Edit__c']);
                     fieldsetname=data['ExAM_Tracker__Mobile_Link_To_Root_Object_Field_Set__c'];
                     fiedsetiseditable=data['ExAM_Tracker__Enable_Mobile_Fieldsetdata_Edit__c']
                     var objfielset=allDetails['objFieldSetMap'];
                     var objnamefielsetname=allDetails['objNamewithfieldsetName'];
                    console.log('objFieldSetMap',objfielset);
                    console.log('fieldsetname',fieldsetname);
                    console.log('fiedsetiseditable',fiedsetiseditable);

                    var objapi = data['ExAM_Tracker__Object_Type__c'];

                    if(data && data['ExAM_Tracker__Column_Mapping__c'] && _this.IsJSONString(data['ExAM_Tracker__Column_Mapping__c'])){
                      
                      var fldmapobj = JSON.parse(data['ExAM_Tracker__Column_Mapping__c']);

                      _.each(fldmapobj, function (coldata, colkey) {

                        _this.columnlabel.push(colkey);
                        console.log('_this.columnlabel:::::',_this.columnlabel);
                        if(templabelwithFieldDetail && templabelwithFieldDetail.hasOwnProperty(colkey)){
                          templabelwithFieldDetail[colkey][objapi] = coldata ;

                        }else{
                          templabelwithFieldDetail[colkey] = {[objapi]:coldata};
                        }
                        if(fieldsetname != null && fieldsetname !='undefined'){
                          console.log('if:::fieldsetname',fieldsetname);
                          templabelwithFieldDetail[colkey]['fiedsetiseditable']=fiedsetiseditable;
                          templabelwithFieldDetail[colkey]['fieldsetname']=fieldsetname;
                          templabelwithFieldDetail[colkey]['objnamefielsetname']=objnamefielsetname;
                        }

                        if(tempfieldwithlabelDetail && tempfieldwithlabelDetail.hasOwnProperty(objapi)){
                          tempfieldwithlabelDetail[objapi][coldata] = colkey ;

                        }else{
                          tempfieldwithlabelDetail[objapi] = {[coldata]:colkey};
                        }
                      });
                    }
                    
                    if(data && data['ExAM_Tracker__Icon__c']){
                      iconWithObj[objapi] = data['ExAM_Tracker__Icon__c'];
                    }
                  });
                  _this.labelwithFieldDetail = templabelwithFieldDetail;
                  _this.fieldwithlabelDetail = tempfieldwithlabelDetail;
                  _this.lookupdetailobj = lookupdetailobj;
                  console.log('_this.lookupdetailobj::::',_this.lookupdetailobj, JSON.stringify(_this.lookupdetailobj));

                  _this.iconWithObj = iconWithObj;
                  var temprecordObj = {}, temprecordObjList=[];
                  _.each(objlist, function (row,key) {
                      
                    console.log('row:::::::::::::::::',JSON.stringify(row));
                      temprecordObj = {};
                      var objName = row['attributes']['type'];
                      temprecordObj['S.No'] = key+1;
                      console.log('_this.objandFieldFlsDetail[objName]::',JSON.stringify(_this.objandFieldFlsDetail[objName]));

                      
                      console.log('tempfieldwithlabelDetail[objName]::',JSON.stringify(tempfieldwithlabelDetail[objName]));
                      _.each(row, function (coldata, colkey) {
                        console.log('coldata::::',coldata,colkey);
                        //It is added for find lookup field name with releationshipname
                        if(_this.objandFieldFlsDetail[objName] && _this.objandFieldFlsDetail[objName][colkey] && _this.objandFieldFlsDetail[objName][colkey].type =='reference'){
                         
                          if(templookupRelationshipNameDetailObj && templookupRelationshipNameDetailObj.hasOwnProperty(objName)){
                            templookupRelationshipNameDetailObj[objName][colkey] = _this.objandFieldFlsDetail[objName][colkey].relationshipName;
                          }else{
                            templookupRelationshipNameDetailObj[objName] = {[colkey]:_this.objandFieldFlsDetail[objName][colkey].relationshipName};
                          }

                        }
                        if(tempfieldwithlabelDetail[objName][colkey]){
                          
                          temprecordObj[tempfieldwithlabelDetail[objName][colkey]] = coldata;

                        }else{

                          console.log('11111111coldata::::',coldata,colkey);

                          if(row.hasOwnProperty('isEdited')){
                            temprecordObj[colkey] = coldata;
                          }else{
                         
                            if(!temprecordObj.hasOwnProperty('isEdited')){
                              temprecordObj['isEdited'] = false;
                            }
                            temprecordObj[colkey] = coldata;
                          }
                        
                        }
                      });
                      //Added for, if some of the field values are empty, field not return in query. So We get the fle from column mapping.
                      _.each(tempfieldwithlabelDetail[objName], function (coldata, colkey) {
                        console.log('coldata::::',coldata,colkey);
                        
                        if(colkey && !temprecordObj.hasOwnProperty(colkey)){
                          temprecordObj[coldata] = row[colkey] ? row[colkey] : null;
                        }
                      });
                      //end
                      if(_this.iconWithObj && _this.iconWithObj[objName]){

                        var iconfolderarry =[];
                        iconfolderarry = _this.iconWithObj[objName].split(':');

                        console.log('iconfolderarry:::',iconfolderarry);
                        if(iconfolderarry && iconfolderarry.length > 0 && iconfolderarry[1]){
                          iconWithclass[objName] = 'slds-icon-'+iconfolderarry[0]+'-'+iconfolderarry[1];
                          temprecordObj['Object'] = '../../../assets/'+iconfolderarry[0]+'-sprite/svg/symbols.svg#'+iconfolderarry[1];

                        }else{
                          iconWithclass[objName] = 'slds-icon-utility-'+_this.iconWithObj[objName];
                          iconWithsvgclass[objName]='slds-icon-text-default';

                          temprecordObj['Object'] = '../../../assets/utility-sprite/svg/symbols.svg#'+_this.iconWithObj[objName];
                        }
                      }
                      console.log('temprecordObj[objName][colkey]::::',temprecordObj);
                      temprecordObjList.push(temprecordObj);
                  // return _.pick(row, _this.columnsfieldlist);
                  });
                  console.log('temprecordObjList::::',temprecordObjList,JSON.stringify(temprecordObjList));
                  console.log('_this.rows::::',_this.rows);
                  _this.temprows = temprecordObjList;
                  _this.lookupRelationshipNameDetailObj = templookupRelationshipNameDetailObj;
                  _this.iconWithclass = iconWithclass;
                  _this.iconWithsvgclass = iconWithsvgclass;
                  _this.rows = [];
                  _this.getRowsData(false, "");
                  _this.initialSortingSetting();
                  _this.loader.hideLoader();
                
                }).catch(function(error){
            
                }); 
              }
            }
          });
        });

      }
    });

  }
 
  IsJSONString(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (ex) {
        return false;
    }
  }
  ngOnInit() {
    var _this = this;
    this.subscription = this.launchservice.getObservable().subscribe((data) => {
      console.log('Data received', data);
      if(data && Object.keys(data).length > 0 && data['isFrom'] && data['isFrom'] == 'openDetailpageSort'){
        _this.menu.close();
      //  setTimeout( () => {
          _this.opensort(data);
       // }, 0);
       
      }
      if(data && Object.keys(data).length > 0 && data['isFrom'] && data['isFrom'] == 'updateSyncSetting'){
        _this.updateSyncOption();
       
      }
      
    });
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  EditRecord(index,item){

    this.loader.showLoader('');
    var _this = this,objName = item['attributes']['type'],fieldwithDetail = {}, temprecordObj={}, objectlabel;
    console.log('objName::',objName);
    var DescribeQuerySpec = window.navigator.smartstore.buildExactQuerySpec('objectName',objName, 1);
    window.navigator.smartstore.querySoup("ObjectDescribe", DescribeQuerySpec, function(describedata) {

      console.log('describedata::::',describedata);

      if(describedata.totalEntries){
        if(describedata.currentPageOrderedEntries
           && describedata.currentPageOrderedEntries[0]
           && describedata.currentPageOrderedEntries[0].valueDetail){

            objectlabel = describedata.currentPageOrderedEntries[0].valueDetail.label;
            _.each(describedata.currentPageOrderedEntries[0].valueDetail.fields, function (coldata, colkey) {
              console.log('coldata::::',coldata,colkey);
                fieldwithDetail[coldata['name']] = coldata;
              
            });
        }else{
        }
      }
      console.log('fieldwithDetail11111::::',fieldwithDetail);
      console.log('_this.columnlabel:::::',_this.columnlabel,'item::',item);

      _.each(item, function (coldata, colkey) {
        console.log('coldata, colkey::::',coldata, colkey,_this.labelwithFieldDetail);
        if(_this.columnlabel.includes(colkey)){
          console.log('111111temprecordObj[colkey]:::::',_this.labelwithFieldDetail[colkey][objName],fieldwithDetail[_this.labelwithFieldDetail[colkey][objName]]);

          temprecordObj[colkey] = fieldwithDetail[_this.labelwithFieldDetail[colkey][objName]];
          console.log('temprecordObj[colkey]:::',temprecordObj[colkey]);
        }else{
          temprecordObj[colkey] = coldata;
        }
      });
      _this.loader.hideLoader();
      console.log('temprecordObjl11111::::',temprecordObj);

      _this.openModal(index,item,fieldwithDetail,temprecordObj,objectlabel);
    });
  }
  async openModal(index,item,fieldwithDetail,labelwithfield,objectlabel) {

    var  _this = this, tempitem = item;
    const modal = await this.modalController.create({
      component: ModelpagePage,
      componentProps: {
        "columnlabel": _this.columns,
        "selecteditem": _this.rows[index],
        "fieldwithDetail":fieldwithDetail,
        "labelwithfield":labelwithfield,
        "lookupdetailobj":_this.lookupdetailobj,
        "objectlabel":objectlabel
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      console.log('outerinside:::',dataReturned);
      if (dataReturned != null && dataReturned.data) {
        console.log('inside:::',dataReturned.data);
        var itemindex =  _.findLastIndex(_this.rows, {
          'S.No': item['S.No']
        });
        console.log('itemindex:::',itemindex);
        _this.rows[itemindex] = dataReturned.data;
      }
    });

    return await modal.present();
  }

  async presentPopover(ev: any) {
    var _this = this;
    var ColQuerySpec = window.navigator.smartstore.buildExactQuerySpec('columnsort',this.data.Id, 1);
    window.navigator.smartstore.querySoup("ColumnSorting", ColQuerySpec, function(colbjlist) {
     
      if(colbjlist.totalEntries){
        if(colbjlist.currentPageOrderedEntries && colbjlist.currentPageOrderedEntries[0]){
          _.each(colbjlist.currentPageOrderedEntries[0], function (coldata, colkey) {
            console.log('coldata::::',coldata,colkey);
            if(coldata && coldata['selected']){
              _this.selectedsortingobj ={};
              _this.selectedsortingobj = coldata;
            }
          });
        }else{
          _this.selectedsortingobj ={};
        }
      }
      _this.opensort(ev);
      
    });

  }

  initialSortingSetting(){
    var _this = this;
    var ColQuerySpec = window.navigator.smartstore.buildExactQuerySpec('columnsort',this.data.Id, 1);
    window.navigator.smartstore.querySoup("ColumnSorting", ColQuerySpec, function(colbjlist) {
     
      if(colbjlist.totalEntries){
        if(colbjlist.currentPageOrderedEntries && colbjlist.currentPageOrderedEntries[0]){
          _.each(colbjlist.currentPageOrderedEntries[0], function (coldata, colkey) {
            console.log('coldata::::',coldata,colkey);
            if(coldata && coldata['selected']){
              _this.selectedsortingobj ={};
              _this.selectedsortingobj = coldata;
            }
          });
        }else{
          _this.selectedsortingobj ={};
        }
      }      
    });
  }
  clicktosort(slecteditem){
    var _this = this;
    var ColQuerySpec = window.navigator.smartstore.buildExactQuerySpec('columnsort',this.data.Id, 1);
    window.navigator.smartstore.querySoup("ColumnSorting", ColQuerySpec, function(colbjlist) {
     
      if(colbjlist.totalEntries){
        if(colbjlist.currentPageOrderedEntries && colbjlist.currentPageOrderedEntries[0]){
          _.each(colbjlist.currentPageOrderedEntries[0], function (coldata, colkey) {
            console.log('coldata::::',coldata,colkey);
            if(coldata && coldata['selected']){
            //  _this.selectedsortingobj ={};
            //  _this.selectedsortingobj = coldata;
            }
          });
        }else{
         // _this.selectedsortingobj ={};
        }
      }      
    });

  
      _.each(this.sortingobj, function (coldata, colkey) {
        console.log('coldata::::',coldata,colkey,slecteditem,(coldata.prop === slecteditem));
  
        if(coldata && coldata.prop == slecteditem){
          coldata['selected'] = true;
          if(coldata['asc']){
            coldata['desc'] = true;
            coldata['asc'] = false;


          }else{
            coldata['desc'] = false;
            coldata['asc'] = true;
          }
          _this.orderbyfield = coldata['asc']?'+'+slecteditem:'-'+slecteditem;
          _this.selectedsortingobj = coldata;
          console.log('_this.selectedsortingobj::::',_this.selectedsortingobj);


        }
        if(coldata && coldata.prop != slecteditem){
          coldata['selected'] = false;
          coldata['asc'] = false;
        }
        
      });
    
    window.navigator.smartstore.upsertSoupEntries("ColumnSorting", [{"ATcongId":this.data.Id,"valueDetail":this.sortingobj}], function(response) {
      console.log('response::::',response);

    },function(error){
      console.log('error::::',error);
     
    });

  }

  async opensort(ev: any){

    if(this.data && (this.data.Id == this.data.Id)){

      const popover = await this.popover.create({
        component: PopoverpagePage,
        cssClass: 'my-custom-class',
        translucent: true,
        backdropDismiss:false,
        componentProps: {
          "listobj": this.sortingobj
        }
        
      });
      
      popover.onDidDismiss().then((dataReturned) => {
        console.log('dataReturned:::',dataReturned);
        if (dataReturned != null && dataReturned.data) {
          this.orderbyfield = dataReturned.data.orderfield;
          window.navigator.smartstore.upsertSoupEntries("ColumnSorting", [{"ATcongId":this.data.Id,"valueDetail":dataReturned.data.list}], function(response) {
            console.log('response::::',response);

          },function(error){
            console.log('error::::',error);
          });
        }
      });
      return await popover.present();
    }
  }
 
  async saveRecords(){
    
    var _this =this, saveRecordList = [], objNameWithfields={};
    var copyrows = JSON.parse(JSON.stringify(this.rows)); //Object.assign({}, this.rows);

    //if(this.network.type != 'none'){

      _.each(copyrows, function (row,key) {
                  
        var temprecordObj = {},fieldlist=[];
        var objName = row['attributes']['type'];
        delete row['S.No'];
        delete row['Object'];
  
        if(row['isEdited']){
          delete row['isEdited'];
          _.each(row, function (coldata, colkey) {
            console.log('coldata::::',coldata,colkey,_this.columnlabel.includes(colkey));
            if(_this.columnlabel.includes(colkey) && _this.labelwithFieldDetail[colkey][objName]){
               
              if(_this.objandFieldFlsDetail[objName] 
                && _this.objandFieldFlsDetail[objName][_this.labelwithFieldDetail[colkey][objName]]
                && _this.objandFieldFlsDetail[objName][_this.labelwithFieldDetail[colkey][objName]].updateable){
                  temprecordObj[_this.labelwithFieldDetail[colkey][objName]] = coldata;
                  temprecordObj['attributes'] = row['attributes'];
                  fieldlist.push(_this.labelwithFieldDetail[colkey][objName]);
              }
              if(_this.labelwithFieldDetail[colkey][objName].toLowerCase() == 'id'){
                temprecordObj[_this.labelwithFieldDetail[colkey][objName]] = coldata;
              }
             
              console.log('temprecordObj[objName][colkey]::::',temprecordObj);
    
            }else{
              //added logic to add id for update record
              if(colkey.toLowerCase() == 'id'){
                temprecordObj[colkey] = coldata;
              }

              if(_this.objandFieldFlsDetail[objName] 
                && _this.objandFieldFlsDetail[objName][colkey]
                && _this.objandFieldFlsDetail[objName][colkey].updateable){
                  temprecordObj[colkey] = coldata;
                  temprecordObj['attributes'] = row['attributes'];  
              }
              
            }
          });
          if(Object.keys(temprecordObj).length > 0){
            saveRecordList.push(temprecordObj);
          }
          objNameWithfields[objName] = fieldlist;
        }
      });
      if(saveRecordList && saveRecordList.length > 0){

        const alert = await this.alertController.create({
          header: 'Confirm to save',
          message: '',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'Save',
              handler: () => {
                console.log('Confirm Okay');
                this.loader.showLoader('');

                this.confomrsaveRecords();
              }
            }
          ]
        });
        await alert.present();

      }else{
        _this.loader.hideLoader();
        alert('No edited record found');
      }
   /* }else{
      const alert = await this.alertController.create({
        header: 'Confirm to save',
        message: '',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Save',
            handler: () => {
              console.log('Confirm Okay');
              this.confomrsaveRecords();
            }
          }
        ]
      });
      await alert.present();
    }*/
  }

  confomrsaveRecords(){

    var _this =this, saveRecordList = [], objNameWithfields={};
   // this.loader.showLoader('');
    if(this.network.type != 'none'){
      
      _.each(this.rows, function (row,key) {
                  
        var temprecordObj = {},fieldlist=[];
        var objName = row['attributes']['type'];
      //  delete row['S.No'];
       // delete row['Icon'];
  
        if(row['isEdited']){
          delete row['isEdited'];
          _.each(row, function (coldata, colkey) {

            if(colkey!='Object' && colkey!='S.No'){
              
              console.log('coldata::::',coldata,colkey,_this.columnlabel.includes(colkey));
              if(_this.columnlabel.includes(colkey) && _this.labelwithFieldDetail[colkey][objName]){
                
                if(_this.objandFieldFlsDetail[objName] 
                  && _this.objandFieldFlsDetail[objName][_this.labelwithFieldDetail[colkey][objName]]
                  && _this.objandFieldFlsDetail[objName][_this.labelwithFieldDetail[colkey][objName]].updateable){
                    temprecordObj[_this.labelwithFieldDetail[colkey][objName]] = coldata;
                    temprecordObj['attributes'] = row['attributes'];
                    fieldlist.push(_this.labelwithFieldDetail[colkey][objName]);
                }
                if(_this.labelwithFieldDetail[colkey][objName].toLowerCase() == 'id'){
                  temprecordObj[_this.labelwithFieldDetail[colkey][objName]] = coldata;
                }
              
                console.log('temprecordObj[objName][colkey]::::',temprecordObj);
      
              }else{
                //added logic to add id for update record
                if(colkey.toLowerCase() == 'id'){
                  temprecordObj[colkey] = coldata;
                }

                if(_this.objandFieldFlsDetail[objName] 
                  && _this.objandFieldFlsDetail[objName][colkey]
                  && _this.objandFieldFlsDetail[objName][colkey].updateable){
                    temprecordObj[colkey] = coldata;
                    temprecordObj['attributes'] = row['attributes'];  
                }
                
              }
            }

          });
          if(Object.keys(temprecordObj).length > 0){
            saveRecordList.push(temprecordObj);
          }
          objNameWithfields[objName] = fieldlist;
        }
      });
      console.log(':::saveRecordList::',saveRecordList,objNameWithfields);
      if(saveRecordList && saveRecordList.length > 0){

        this.forceapi.postRest('updateATrecord',{savewrapper:{"recordList":saveRecordList,"objNameWithfields":objNameWithfields}})
        .then(function(result){
          console.log('result:::',result);
          _this.forceapi.postRest('ExAMTrackerData',{ATwrapper:{"ATId":_this.data.Id}}).then(function(data) {
          
            var resultData  = {};
            resultData = JSON.parse(_.unescape(data));
            try{
              if(typeof resultData == 'string'){
                resultData = JSON.parse(resultData);
              } 
            } catch(er){
            }
            console.log('resultData::::',resultData);
            window.navigator.smartstore.upsertSoupEntries("AssessmentTrackerData", [{"ATcongId":_this.data.Id,"valueDetail":resultData}], function(response) {
              console.log('response::::',response);
              if(_this.tempAssessmentTrackerData && _this.tempAssessmentTrackerData.totalEntries){


                if(_this.tempAssessmentTrackerData.currentPageOrderedEntries && _this.tempAssessmentTrackerData.currentPageOrderedEntries[0] &&  _this.tempAssessmentTrackerData.currentPageOrderedEntries[0].valueDetail ){
          
                  _this.tempAssessmentTrackerData['currentPageOrderedEntries'][0]['valueDetail'] = resultData;
                 
                  window.navigator.smartstore.upsertSoupEntries("AssessmentTrackerData",_this.tempAssessmentTrackerData['currentPageOrderedEntries'], function(data) {
                    
                    _this.launchservice.updateOfflineDataInTrackerConfig(_this.data.Id, false).then(function(savedata){
                      console.log('savedata:::',savedata);
                      _this.loader.hideLoader();
                      setTimeout( () => {
                        alert('Record saved successfully');
                      }, 200);
                     },function(error){
                      console.log('error::::',error);
                     });
                
                  },function(errr){
                    console.log('errr:::',errr);
        
                  });
                }
              }
            },function(error){
            
            });
          }).catch(function(error){
            _this.loader.hideLoader();
            if(error && error.response && error.response.body && error.response.body[0].message)alert(error.response.body[0].message);
            
          }); 

        }).catch(function(error){
          _this.loader.hideLoader();
          if(error && error.response && error.response.body && error.response.body[0].message)alert(error.response.body[0].message);
          
        }); 
      }else{
        _this.loader.hideLoader();
        alert('No record found');
      }
    }else{

      this.loader.showLoader('');
      var tempcopyrows = JSON.parse(JSON.stringify(_this.rows)); //Object.assign({}, this.rows);
      var newArray1 = _this.temprows.splice(0, _this.temprows.length);
      var ids = new Set(tempcopyrows.map(d => d['S.No']));
      tempcopyrows = [...tempcopyrows, ...newArray1.filter(d => !ids.has(d['S.No']))];
      console.log('_this.rows:::',tempcopyrows);
      tempcopyrows = _.uniq(tempcopyrows, 'S.No');
      _.each(tempcopyrows, function (row,key) {
                  
        var temprecordObj = {},fieldlist=[];
        var objName = row['attributes']['type'];
      
          _.each(row, function (coldata, colkey) {

            if(_this.columnlabel.includes(colkey) && _this.labelwithFieldDetail[colkey][objName]){
              
              temprecordObj[_this.labelwithFieldDetail[colkey][objName]] = coldata;
    
            }else{
              temprecordObj[colkey] = coldata;
            }
          });
          saveRecordList.push(temprecordObj);       
      });

      if(_this.tempAssessmentTrackerData && _this.tempAssessmentTrackerData.totalEntries){

        if(_this.tempAssessmentTrackerData.currentPageOrderedEntries && _this.tempAssessmentTrackerData.currentPageOrderedEntries[0] &&  _this.tempAssessmentTrackerData.currentPageOrderedEntries[0].valueDetail ){
          
          _this.tempAssessmentTrackerData['currentPageOrderedEntries'][0]['valueDetail']['ATData'] = saveRecordList;
         
          window.navigator.smartstore.upsertSoupEntries("AssessmentTrackerData",_this.tempAssessmentTrackerData['currentPageOrderedEntries'], function(data) {
            
            _this.launchservice.updateOfflineDataInTrackerConfig(_this.data.Id, true).then(function(savedata){
              console.log('savedata:::',savedata);
              _this.loader.hideLoader();
              setTimeout( () => {
                alert('Records saved offline');
              }, 200);
             },function(error){
              console.log('error::::',error);
             });
        
          },function(errr){
            console.log('errr:::',errr);

          });
        }
      } 
    }

  }
  getRowsData(isFirstLoad, event) {

    var _this = this;
    console.log('getRowsData:::',isFirstLoad);

    if (isFirstLoad){
      // setTimeout( () => {
        event.target.complete();
      // }, 100);
      
    }
    console.log('_this.temprows::::::::::',_this.temprows);
    if(_this.temprows && _this.temprows.length && _this.temprows.length > 10 ){
      console.log('if getRowsData:::');

    // this.zone.run(() => {
        var newArray1 = _this.temprows.splice(0, 10);
        var concatarray = [..._this.rows, ...newArray1];
        for(let post of newArray1){
          console.log(post);
          _this.rows.push(post);
       }
       // _this.rows = concatarray;
        console.log('newArray1:::',newArray1);
        console.log('dddddd:::',_this.rows);
      //  _this.rows = _this.rows.concat(newArray1); 
        
       // _this.rows = _this.rows.concat(newArray1); 
       // console.log(newArray1,_this.rows);
      //  var ids = new Set(_this.rows.map(d => d['S.No']));
     //   _this.rows = [..._this.rows, ...newArray1.filter(d => !ids.has(d['S.No']))];
     //   _this.rows = _.uniq(_this.rows, 'S.No');
    // });
    }else if(_this.temprows.length && _this.temprows.length <=10){
      console.log('else if getRowsData:::');
      var newArray1 = _this.temprows.splice(0, _this.temprows.length);
      console.log('newArray11:::',newArray1);
      var concatarray = [..._this.rows, ...newArray1];
      for(let post of newArray1){
        console.log(post);
        _this.rows.push(post);
     }
     // _this.rows = concatarray;
      console.log('newArray1:::',newArray1);
      console.log('dddddd:::',_this.rows);
    //  _this.rows = _this.rows.concat(newArray1); 

    //  var ids = new Set(_this.rows.map(d => d['S.No']));
     // _this.rows = [..._this.rows, ...newArray1.filter(d => !ids.has(d['S.No']))];
     // _this.rows = _.uniq(_this.rows, 'S.No');
    }else{
      console.log('else getRowsData:::');

      //_this.rows = []; //_this.rows.concat(_this.temprows); 
    }
    console.log('this.rows:::::::::::::::::;',_this.rows);  
  }

  doInfinite(event) {
    console.log('----called loading----',this.searchtext);
    if(!this.searchtext){
      setTimeout(() => {
      this.getRowsData(true, event);
      },500);

    }else{
      event.target.complete();
    }
  }


  backToList(){
    var _this = this, saveRecordList= [];
    this.loader.showLoader('');

   
    _.each(_this.rows, function (row,key) {
                  
      var temprecordObj = {},fieldlist=[];
      var objName = row['attributes']['type'];
      console.log('_this.labelwithFieldDetail:::',_this.labelwithFieldDetail);

        _.each(row, function (coldata, colkey) {

          console.log('coldata, colkey:::',coldata, colkey);
          if(_this.columnlabel.includes(colkey) && _this.labelwithFieldDetail[colkey][objName]){
            
            temprecordObj[_this.labelwithFieldDetail[colkey][objName]] = coldata;
  
          }else{
            temprecordObj[colkey] = coldata;
          }
        });
        saveRecordList.push(temprecordObj);       
    });
    console.log('saveRecordList:::',saveRecordList);

    if(_this.tempAssessmentTrackerData && _this.tempAssessmentTrackerData.totalEntries){

      if(_this.tempAssessmentTrackerData.currentPageOrderedEntries && _this.tempAssessmentTrackerData.currentPageOrderedEntries[0] &&  _this.tempAssessmentTrackerData.currentPageOrderedEntries[0].valueDetail ){
        
        
        _this.tempAssessmentTrackerData['currentPageOrderedEntries'][0]['valueDetail']['ATData'] = saveRecordList;
       
        window.navigator.smartstore.upsertSoupEntries("AssessmentTrackerData",_this.tempAssessmentTrackerData['currentPageOrderedEntries'], function(data) {
          console.log('data:::',data);
          _this.loader.hideLoader();
        //  _this.zone.run(() => {
            _this.router.navigate(['/folder/ATList']);
         // });
        },function(errr){
          console.log('errr:::',errr);

        });
      }
    } 

  }
  openMenu() {
    var _this = this;
    this.offlinesave('').then(function(result){
      _this.menu.open();
      _this.launchservice.publishSomeData({
        isFrom: 'trackerdetailpage'
      });
    });
    
   // this.appcomponent.detectIsFromWhatPage('detailpage');
  }
  checkofflineData() { 
    this.launchservice.publishSomeData({
      isFrom: 'checkOfflineData'
    });
  }

  updateSyncOption(){
    var _this = this;
    _this.launchservice.getSyncOptionSetting().then(function(syncsetting){
      console.log('syncsetting:::',syncsetting);
      _this.zone.run(() => {
        _this.HassyncOption = syncsetting;
      });
       
    });
  }

  Linktorootmethodcall(index,item,coloumn,labeldetail,labelwithFieldDetail,value){
    console.log('value');
if(value != null && value!='undefined'){
    if(this.network.type != 'none'){
      
        var _this = this,objName = item['attributes']['type'],fieldwithDetail = {},allfieldwithDetail={}, temprecordObj={}, objectlabel;
        console.log('EditRecord labelwithFieldDetail::',item,labelwithFieldDetail);
        console.log('labeldetail',labeldetail,labeldetail.objectname,labeldetail.fieldsetname,labeldetail.fiedsetiseditable)
        console.log('EditRecord item::',index,item,item.Id,coloumn,coloumn.behaviour,coloumn.fieldsetname);
        this.loader.showLoader('');
        console.log('objnamewithdetail',labeldetail.objnamefielsetname)
        console.log('coloumn.fieldsetdetail :::::',coloumn.fieldsetdetail);
        var fieldsetdetail=coloumn.fieldsetdetail;
        console.log('fieldsetdetail:::::',fieldsetdetail);
        var fieldlist=[];
        var objnamefielsetname=labeldetail.objnamefielsetname;
        var fieldsetname=objnamefielsetname[objName];
        console.log('fieldsetname :::::',fieldsetname);
        var fieldsetdata=fieldsetdetail[fieldsetname];
        console.log('fieldsetdata11 :::::',fieldsetdata);
        if(fieldsetdata != null && fieldsetdata !='undefined'){
            console.log('fieldsetdata :::::',fieldsetdata);
            var queryString = '';
            var lokupdetail={};
            var lookupdetailobj={};
            _.each(fieldsetdata, function (data2, key2) {
                console.log('data2, key2,key:::::',data2, key2);
                if(key2 ==0 ){
                    queryString += 'SELECT '+data2['fieldpath'];
                    console.log('queryString if:::::',queryString);
                    if(data2['type']=='REFERENCE'){
                      console.log('reference field::',data2['fieldpath']);
                      if(data2['RelationshipName']!='Case'){
                        queryString +=','+data2['RelationshipName']+'.Name';

                      }else{
                        queryString +=','+data2['RelationshipName']+'.CaseNumber';

                      }
                      fieldlist.push(data2['fieldpath']);
                      var obj={};

                      obj[data2['fieldpath']]=objName;
                      lookupdetailobj[objName]=obj;
                      console.log('REFERENCE if:::::',queryString);
                    }else{
                      fieldlist.push(data2['fieldpath']);
                    }
                  }else{
                    queryString += ','+data2['fieldpath']
                    console.log('queryString elsef:::::',queryString);
                    if(data2['type']=='REFERENCE'){
                      console.log('reference field::',data2['fieldpath']);
                      if(data2['RelationshipName']!='Case'){
                        queryString +=','+data2['RelationshipName']+'.Name';

                      }else{
                        queryString +=','+data2['RelationshipName']+'.CaseNumber';

                      }                  
                        fieldlist.push(data2['fieldpath']);
                        var obj={};

                      obj[data2['fieldpath']]=objName;
                      lookupdetailobj[objName]=obj;
                      console.log('REFERENCE if:::::',queryString);
                    }else{
                      fieldlist.push(data2['fieldpath']);
                    }
                }
              console.log('queryString::',queryString);
            });
            console.log('lookupdetailob:::::',lookupdetailobj);

              queryString +=" FROM "+objName+" WHERE Id IN ('"+item.Id+"')";
              console.log('queryString::',queryString);
              console.log('fieldlist :::::',fieldlist);
           
            _this.forceapi.describe(objName).then(function(data) {
         //var allfieldwithDetail={};
              if(data != null){
                console.log('data:::: deccribe quer',data);
                _.each(data.fields, function (coldata, colkey) {
                  console.log('coldata::::',coldata,colkey);
                  allfieldwithDetail[coldata['name']] = coldata;
                    console.log('temallfieldwithDetail::::',allfieldwithDetail);
                  });
            _this.forceapi.query(queryString).then(function(record){
              console.log('Userrecord::::',record[0]);
            
              _.each(fieldlist, function (coldata, colkey) {
                console.log('coldata::::',coldata,colkey);
                fieldwithDetail[coldata]=allfieldwithDetail[coldata];
              _this.loader.hideLoader();
              });
            
              console.log('fieldwithDetail test::::',fieldwithDetail);
        _this.linktorootModal(index,item,record[0],fieldlist,objName,fieldwithDetail,objectlabel,item.Id,item,labelwithFieldDetail,lookupdetailobj,fieldsetdata,labeldetail.fiedsetiseditable);
        console.log('Userrecord::',record);
        },function(error){
          console.log('error::',error);
        });
     
    }
    });
      }else{
        _this.loader.hideLoader();
        alert('Please configure fieldset');
      }
    }else{
      _this.loader.hideLoader();
      alert('Turn on internet connection');
    }
  }
  }
  async linktorootModal(index,item,record,fieldnames,objName,fieldwithDetail,objectlabel,recordId,row,labelwithFieldDetail,lookupdetailobj,fieldsetdata,fiedsetiseditable) {
    console.log('index:::',index);
    var  _this = this,temprow=row;
    const modal = await this.modalController.create({
      component: ModelpagePage,
      componentProps: {
        "columnlabel": fieldnames,
        "recordetail": record,
        "objName":objName,
        "fieldwithDetail":fieldwithDetail,
        "objectlabel":objectlabel,
        "recordId":recordId,
         "rowdetail": _this.rows[index],
         "labelwithFieldDetail":labelwithFieldDetail,
         "lookupdetailobj":lookupdetailobj,
         "fieldsetdata":fieldsetdata,
         "fiedsetiseditable":fiedsetiseditable

      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      console.log('outerinside:::',dataReturned);
      if (dataReturned != null && dataReturned.data) {
       console.log('inside:::',dataReturned.data);
       // var itemindex =  _.findLastIndex(_this.rows, {
       //   'S.No': item['S.No']
       // });
        console.log('itemindex:::',index);
        _this.rows[index] = dataReturned.data;
        console.log('itemindex:::',_this.rows);
      }
    });
    return await modal.present();
  }
  async editsaverecord(ev: any,index,row,filedtype,field,labelwithFieldDetail){
    var _this = this
    var objName = row['attributes']['type'], fielddetail={};
    var tabelobjectlabel;
    var tablefieldwithDetail={};
    console.log(' this.rows[index],index,',index, this.rows[index].field,field,objName,labelwithFieldDetail);
   /* var DescribeQuerySpec = window.navigator.smartstore.buildExactQuerySpec('objectName',objName, 1);
    window.navigator.smartstore.querySoup("ObjectDescribe", DescribeQuerySpec, function(describedata) {

      console.log('temp describedata::::',describedata);

      if(describedata.totalEntries){
        if(describedata.currentPageOrderedEntries
           && describedata.currentPageOrderedEntries[0]
           && describedata.currentPageOrderedEntries[0].valueDetail){

            tabelobjectlabel = describedata.currentPageOrderedEntries[0].valueDetail.label;
            _.each(describedata.currentPageOrderedEntries[0].valueDetail.fields, function (coldata, colkey) {
              console.log(' tempcoldata::::',coldata,colkey);
              tablefieldwithDetail[coldata['name']] = coldata;
              console.log('tablefieldwithDetail::::',tablefieldwithDetail);

            });
        }
      }
                     
     console.log('_this.objandFieldFlsDetail[objName] ',_this.objandFieldFlsDetail[objName],_this.objandFieldFlsDetail[objName][_this.labelwithFieldDetail[field][objName]]);
   
   
      
      console.log('tablefieldwithDetail::::',tablefieldwithDetail);
      console.log('_this.columnlabel:::::',_this.columnlabel,'row::',row);
var labelwithfield={};
   _.each(_this.labelwithFieldDetail, function (data, key) {
    console.log('data, key',data, key);
    labelwithfield[key]=_this.labelwithFieldDetail[key][objName];
    console.log('labelwithfield',labelwithfield);
   });
      _.each(labelwithfield, function (coldata, colkey) {
        console.log('coldata, colkey::::',coldata, colkey,_this.labelwithFieldDetail);
        if(_this.columnlabel.includes(colkey)){
          console.log('111111temprecordObj[colkey]:::::',_this.labelwithFieldDetail[colkey][objName],tablefieldwithDetail[_this.labelwithFieldDetail[colkey][objName]]);
          if(tablefieldwithDetail[_this.labelwithFieldDetail[colkey][objName]] !=null && tablefieldwithDetail[_this.labelwithFieldDetail[colkey][objName]] !='undefined'){
            temprecordObj[colkey] = tablefieldwithDetail[_this.labelwithFieldDetail[colkey][objName]];

          }
          console.log('temprecordObj[colkey]::: objandFieldFlsDetail',temprecordObj[colkey]);
        }else{
         // temprecordObj[colkey] = coldata;
        }
      });
     
    });*/
    
    if(_this.objandFieldFlsDetail[objName] && _this.objandFieldFlsDetail[objName][_this.labelwithFieldDetail[field][objName]]){
      fielddetail[field]=_this.objandFieldFlsDetail[objName][_this.labelwithFieldDetail[field][objName]];

    }
      _this.loader.hideLoader();
      console.log('temprecordObjl11111::::',fielddetail);
    if(filedtype == 'reference'){
      if(this.network.type != 'none'){
        _this.openeditpopover(ev,index,row,filedtype,field,objName,_this.labelwithFieldDetail,fielddetail);

      }else{
        alert('Reference type field edit not supported in offline mode');
      }
    }else{
      _this.openeditpopover(ev,index,row,filedtype,field,objName,_this.labelwithFieldDetail,fielddetail);
    }
  
  }

  async openeditpopover(ev: any,index,row,filedtype,field,objName,labelwithFieldDetail,fielddetail) {

    const popover = await this.popover.create({
      component: EditpopoverPage,
      cssClass: 'my-custom-class',
      translucent: true,
      event: ev,
      backdropDismiss:false,
      componentProps: {
        "rowdetail": row,
        "filedtype":filedtype,
        "field":field,
        "objName":objName,
        "labelwithFieldDetail":labelwithFieldDetail,
        "labelwithField":fielddetail,
        "lookupdetailobj":this.lookupdetailobj,
      }
      
    });
    popover.onDidDismiss().then((dataReturned) => {
      console.log('dataReturned:::',dataReturned);
      if (dataReturned != null && dataReturned.data && dataReturned.data != null && dataReturned.data == 'offline') {
       
     this.offlinesave('true');
     alert('Records saved offline')
      }else{
        this.offlinesave('false');
      }
      
    });
   return await popover.present();
 
}

  offlinesave(isfromoffline):Promise<any> {
    
    return new Promise((resolve, reject) => {

      var _this =this, saveRecordList = [], objNameWithfields={};
      this.loader.showLoader('');
      var tempcopyrows = JSON.parse(JSON.stringify(_this.rows)); //Object.assign({}, this.rows);
      var newArray1 = _this.temprows.splice(0, _this.temprows.length);
      var ids = new Set(tempcopyrows.map(d => d['S.No']));
      tempcopyrows = [...tempcopyrows, ...newArray1.filter(d => !ids.has(d['S.No']))];
      console.log('_this.rows:::',tempcopyrows);
      tempcopyrows = _.uniq(tempcopyrows, 'S.No');
      _.each(tempcopyrows, function (row,key) {
                  
        var temprecordObj = {},fieldlist=[];
        var objName = row['attributes']['type'];
      
          _.each(row, function (coldata, colkey) {

            if(_this.columnlabel.includes(colkey) && _this.labelwithFieldDetail[colkey][objName]){
              
              temprecordObj[_this.labelwithFieldDetail[colkey][objName]] = coldata;

            }else{
              temprecordObj[colkey] = coldata;
            }
          });
          saveRecordList.push(temprecordObj);       
      });

      if(_this.tempAssessmentTrackerData && _this.tempAssessmentTrackerData.totalEntries){

        if(_this.tempAssessmentTrackerData.currentPageOrderedEntries && _this.tempAssessmentTrackerData.currentPageOrderedEntries[0] &&  _this.tempAssessmentTrackerData.currentPageOrderedEntries[0].valueDetail ){
          
          _this.tempAssessmentTrackerData['currentPageOrderedEntries'][0]['valueDetail']['ATData'] = saveRecordList;
        
          window.navigator.smartstore.upsertSoupEntries("AssessmentTrackerData",_this.tempAssessmentTrackerData['currentPageOrderedEntries'], function(data) {
            if(isfromoffline){
            _this.launchservice.updateOfflineDataInTrackerConfig(_this.data.Id, true).then(function(savedata){
              console.log('savedata:::',savedata);
              _this.loader.hideLoader();
              resolve('');
              //setTimeout( () => {
               // alert('Records saved offline');
              //}, 200);
            },function(error){
              console.log('error::::',error);
            });
          }else{
            _this.loader.hideLoader();
            resolve('');
            
          }
        
          },function(errr){
            console.log('errr:::',errr);

          });
        }
      } 
    });
  }

}

