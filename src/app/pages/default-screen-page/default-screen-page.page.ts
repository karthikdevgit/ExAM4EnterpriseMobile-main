import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, PopoverController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-default-screen-page',
  templateUrl: './default-screen-page.page.html',
  styleUrls: ['./default-screen-page.page.scss'],
})
export class DefaultScreenPagePage implements OnInit {

  public AssessmentTrackerListDefault: any;
  public assTrackers: any;
  public rSelected: any;
  public getItem: any;

  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private alertController: AlertController) {

              }

  ngOnInit() {
    console.log(':: AssessmentTrackerListDefault ::', this.AssessmentTrackerListDefault);
    this.assTrackers = this.navParams.data.selecteditem;
    this.rSelected = this.navParams.data.previousvalue;
  }

  async closeModal(isfromCancel) {

    var defaultObj = {};
    if(this.getItem){
      defaultObj['Id'] = this.getItem.Id;
      defaultObj['Value'] = this.getItem.ExAM_Tracker__Label__c; 
      defaultObj['isMyTracker'] = false;
    } else if(this.rSelected){
      defaultObj['Id'] = 'mytrackerid';
      defaultObj['Value'] = 'My Trackers';
      defaultObj['isMyTracker'] = true; 
    }
    if(!isfromCancel){
      await this.modalController.dismiss(defaultObj);
    }else{
      await this.modalController.dismiss();
    }
  }
}
