import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import {ForceApiService} from '../../service/force-api.service';
import {LookupPage} from '../lookup/lookup.page';

import { LoaderService } from '../../service/loader.service';
@Component({
  selector: 'app-modelpopover',
  templateUrl: './modelpopover.page.html',
  styleUrls: ['./modelpopover.page.scss'],
})
export class ModelpopoverPage implements OnInit {
  recordId:any;
  recordetail:any;
  modelobjName:any;
  fieldtype:any;
  temrecorddetail:any;
  field:any;
  fieldwithDetail:any;
  public lookupsearchObj:any;
  public hasNetwork: any; rowdetail:any;
  
  constructor(private navparam:NavParams,
    private popover:PopoverController,
    private loader:LoaderService,
    private forceapi:ForceApiService,
    private lookuppage:LookupPage,
    private network: Network) { 
    this.hasNetwork = this.network.type != 'none' ? true: false;
  }
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
    this.recordId=this.navparam.data.recordId;
    this.recordetail=this.navparam.data.recordetail;
    this.modelobjName=this.navparam.data.modelobjName;
    this.fieldtype=this.navparam.data.fieldtype;
    this.temrecorddetail=Object.assign({}, this.navparam.data.recordetail);
    this.field=this.navparam.data.field;
    this.fieldwithDetail=this.navparam.data.fieldwithDetail;
    console.log('modelpopover ', this.fieldwithDetail, this.recordetail);

    this.lookupsearchObj = {};
  }
  async saverecord(save,field) {
    console.log('modelpopover console log');
   
  if(save){
        if(this.hasNetwork ){
          //this.rowdetail=temprowdetail;
            var objNameWithfields={};
            //var temrecorddetail={};
            var fieldlist=[];
          
           // temrecorddetail= this.recordId;
          var saveRecordList=[];
          console.log('modelpopover console log',this.temrecorddetail, this.temrecorddetail[this.field] );

         this.recordetail[this.field]=this.temrecorddetail[this.field];
         console.log('modelpopover console log', this.recordetail );
            await this.popover.dismiss(field);
      }else{
       
      this.loader.hideLoader();
        await this.popover.dismiss(null);
      }
  }else{
   // this.rowdetail= this.rowdetail;
    await this.popover.dismiss(null);

  }

}
enablelookup(ev: any,label, searchtext,objectname){
  this.lookupsearchObj = {};
  this.lookupsearchObj[label] = true;
  this.lookupsearchObj['search'] = searchtext;
  console.log('this.lookupsearchObj::',this.lookupsearchObj);
}
getRecordlist(ev: any, objectname , searchtext): Promise<any> {
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
getrecord(ev: any,label, searchtext,objectname){
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
        "rows":this.recordetail,
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
}
checkBlur(){

}
checkFocus(){

}

}
