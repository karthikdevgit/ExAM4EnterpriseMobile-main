import { Component, OnInit,NgZone, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { LoaderService } from '../../service/loader.service';
import { Platform, AlertController,MenuController, ModalController,PopoverController } from '@ionic/angular';

declare var window: any;

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  public static loadingpercentange: any;
  public isshow:any;
  public classReference = LoadingPage;
  public deviceheight:any;
  public static imgwidth:any;
  public static imgHeight:any;
  public imgsrc:any;
  public imgsrcw:any;
  @ViewChild('slideItem', {read: ElementRef}) logoimage : ElementRef;

  constructor(private zone: NgZone,
    private screenOrientation: ScreenOrientation,
    private loader:LoaderService,
    private alertController: AlertController,
    ) {
    this.imgsrc = '../../../assets/ExAMTrackerLogo.png';
    this.isshow = false;
    this.deviceheight = window.innerHeight-70;
   
    var _this = this;
    this.screenOrientation.onChange().subscribe(
      () => {
        console.log("Orientation Changed------------------------"+this.screenOrientation.type);
        if(this.screenOrientation.type.includes("landscape")){
          if (window.innerWidth > window.innerHeight) {
            //landscape
            var aspectFitSize ={};
            mW = window.innerWidth/ 250;
            mH = (window.innerHeight/10)*6 / 250;
            if( mH < mW )
            LoadingPage.imgwidth = mH * 250;
            else if( mW < mH )
            LoadingPage.imgHeight = mW * 250;
  
        // return aspectFitSize;
        }else{
            var aspectFitSize ={};
            mW = (window.innerWidth/10)*6 / 250;
            mH = (window.innerHeight/10)*6 / 250;
            if( mH < mW )
            LoadingPage.imgwidth = mH * 250;
            else if( mW < mH )
            LoadingPage.imgHeight = mW * 250;
        // return aspectFitSize;
        }      
        }else{
            if (window.innerWidth > window.innerHeight) {
              //landscape
            var mW = (window.innerWidth/10)*6 / 250;
            var  mH = window.innerHeight-70 / 250;
    
              if( mH < mW )
              LoadingPage.imgwidth = mH * 250;
              else if( mW < mH )
              LoadingPage.imgHeight = mW * 250;
            
          }else{
            var mW = (window.innerWidth/10)*6 / 250;
            var mH = window.innerHeight / 250;
              if( mH < mW )
              LoadingPage.imgwidth = mH * 250;
              else if( mW < mH )
              LoadingPage.imgHeight = mW * 250;
            
          }
        }
      }
    );
    setTimeout( () => {

        if (window.innerWidth > window.innerHeight) {
          //landscape
          var aspectFitSize ={};
          mW = window.innerWidth/ 250;
          mH = (window.innerHeight/10)*6 / 250;
          if( mH < mW )
          LoadingPage.imgwidth = mH * 250;
          else if( mW < mH )
          LoadingPage.imgHeight = mW * 250;

      }else{
        var mW = (window.innerWidth/10)*6 / 250;
          var mH = window.innerHeight / 250;
            if( mH < mW )
            LoadingPage.imgwidth = mH * 250;
            else if( mW < mH )
            LoadingPage.imgHeight = mW * 250;
            console.log('timout else: else:');        
      }      
  
    },300);
      console.log('LoadingPage::::::--------',LoadingPage.imgHeight,LoadingPage.imgwidth);
   }

  ionViewDidLoad() {
   
  }
  ngOnInit() {
  }
  
  setloading(percentage){
    console.log('percentage:::',percentage);
    LoadingPage.loadingpercentange = percentage;
    this.zone.run(() => {
      this.isshow = true;
      LoadingPage.loadingpercentange = percentage;
      console.log('this.loadingpercentange:::',LoadingPage.loadingpercentange);

    });
   
  }
  async redirectLogin(){

      const alert = await this.alertController.create({
        header: 'Are you sure?',
        message: '',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
            }
          }, {
            text: 'Yes',
            handler: () => {
              this.loader.showLoader('');
              var sfOAuthPlugin  = window.cordova.require("com.salesforce.plugin.oauth");
              console.log('sfOAuthPlugin::',sfOAuthPlugin);

              sfOAuthPlugin.logout();
            }
          }
        ]
      });
  
      await alert.present();

  }

}
