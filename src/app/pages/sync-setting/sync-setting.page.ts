import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, PopoverController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import {LookupPage} from '../lookup/lookup.page';

@Component({
  selector: 'app-sync-setting',
  templateUrl: './sync-setting.page.html',
  styleUrls: ['./sync-setting.page.scss'],
})
export class SyncSettingPage implements OnInit {

  public ischecked:any;
  public copyrecords:any;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,

  ) { }

  ngOnInit() {
    this.ischecked = this.navParams.data.settingData;
    this.copyrecords = this.navParams.data.settingData;


  }
  async closeModal(isfromCancel) {

    if(!isfromCancel){
      await this.modalController.dismiss({ischecked:this.ischecked});
       
    }else{
      console.log('inside else',this.copyrecords);
      await this.modalController.dismiss({ischecked:this.copyrecords});
    }
  }
}
