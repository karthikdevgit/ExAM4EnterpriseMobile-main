import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import {ForceApiService} from '../../service/force-api.service';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.page.html',
  styleUrls: ['./lookup.page.scss'],
})
export class LookupPage implements OnInit {

  public listobj:any;
  public selectaction:any;
  public searchtext:any;
  public objectname:any;
  public lookupsearchObj:any;
  public rows:any;
  public columnlabel:any;
  public relationshipname:any;
  constructor(
    private navparam:NavParams,
    private popover:PopoverController,
    private network: Network,
    private forceapi:ForceApiService
    ) { }

  ngOnInit() {
    this.listobj = this.navparam.data.listobj;
    this.searchtext = this.navparam.data.searchtext;
    this.objectname = this.navparam.data.objectname;
    this.rows = this.navparam.data.rows;
    this.columnlabel = this.navparam.data.columnlabel;
    this.relationshipname=this.navparam.data.relationshipname;
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
        console.log('else:::');
      }
    });
  }

  async closeModal(isfromCancel,index) {
    console.log('isfromCancel,index::',isfromCancel,index,this.listobj[index]);
    if(!isfromCancel){
      this.rows[this.relationshipname] = this.listobj[index];
      this.rows[this.columnlabel] = this.listobj[index]['Id'];
      console.log('this.rows:::',this.rows);
      await this.popover.dismiss();

    }else{
      await this.popover.dismiss(null);

    }
  }
  checkBlur(){

  }
  checkFocus(){

  }

}
