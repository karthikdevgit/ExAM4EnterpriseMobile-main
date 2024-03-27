import { Component ,NgZone} from '@angular/core';

import { Router,NavigationExtras } from '@angular/router';
import { ForceApiService } from 'src/app/service/force-api.service';
import { LaunchServiceService } from 'src/app/service/launch-service.service';
import { Platform, AlertController,MenuController, ModalController,PopoverController } from '@ionic/angular';

//import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';
import {GlobalParamService} from 'src/app/service/global-param.service';
import { SchemaViewSelectComponent } from './svcomponents/schema-view-select/schema-view-select.component';
declare var window: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  public hasNetwork: any;
  public UserName = '';

  constructor(
    private network: Network,
   // private statusBar: StatusBar,
   private zone: NgZone,
    private platform: Platform, 
    private router: Router, 
    private forceapi: ForceApiService, 
    private launchService: LaunchServiceService,
    public GlobalParamService: GlobalParamService,
    public modalController:ModalController) {
    var _this = this;
 
   this.initializeApp();
    
    console.log('called');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      var _this = this;
     // this.statusBar.styleDefault();
      this.hasNetwork = this.network.type != 'none' ? true: false;
      this.launchService.launchservice();
      
    });
  }

  async openAvailableSchemaViews() {
    console.log('header method call')
    let buttons = [];
    var _this = this;
                     for(var schemaIndex=0;schemaIndex< _this.GlobalParamService.availableSchemaViews.length;schemaIndex++){

   // _this.availableSchemaViews.forEach((schemaIndex) => {
      console.log('schemaIndex',schemaIndex);
      console.log('_this.availableSchemaViews[schemaIndex]',_this.GlobalParamService.availableSchemaViews[schemaIndex]);
      var schemaviewName= _this.GlobalParamService.availableSchemaViews[schemaIndex].schemaviewName;
      console.log('schemaviewName',schemaviewName);
     
    }
    

    const modal = await this.modalController.create({
      component:SchemaViewSelectComponent,
      componentProps: {
        availableSchemaViews: _this.GlobalParamService.availableSchemaViews,
        currentselectedview:_this.GlobalParamService.currentSchemaViewDetail
      },
    });
    modal.onDidDismiss().then((dataReturned) => {
      console.log('dataReturned',dataReturned);
      if (dataReturned.data !== null && dataReturned.data != 'undefined') {
        _this.zone.run(() =>{
        console.log('Modal data:', dataReturned['selectedItem']);
        var objectData=dataReturned.data['selectedItem'];
        console.log('objectData',objectData);
        _this.GlobalParamService.currentSchemaViewDetail=objectData;
        console.log('_this.currentSchemaViewDetail[index]',_this.GlobalParamService.currentSchemaViewDetail);
    
        _this.GlobalParamService.schemaViewData = objectData.value.schemaViewData
        console.log('current schama_this.schemaViewData',_this.GlobalParamService.schemaViewData);
      
          let navigationExtras:NavigationExtras = {
            state: {
              schemaViewData:_this.GlobalParamService.schemaViewData,
              currentSchemaViewDetail: _this.GlobalParamService.currentSchemaViewDetail,


            }
          
          };
  
          console.log('navigationExtras',navigationExtras);

          _this.router.navigate(['/sv-redirectpage'],navigationExtras);
    
        })
      }
    });
    await modal.present();
  }
}
