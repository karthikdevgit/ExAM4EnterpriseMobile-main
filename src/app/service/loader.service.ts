import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = false;
  load:any;
  constructor(public loadingController: LoadingController) { 

  }
  // Show the loader for infinite time
  showLoader(messagetext) {
    this.isLoading = true;
    this.loadingController.create({
      message: messagetext ? messagetext:''
    }).then((load: HTMLIonLoadingElement) => {
      this.load = load;
      load.present().then(() => {
        if (!this.isLoading) {
          load.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });

  }
  updateMessage(message){
    if(this.load && this.load['message']){
      this.load['message'] = message;
    }
  }
  // Hide the loader if already created otherwise return error
  hideLoader() {
    this.isLoading = false;
    this.loadingController.dismiss().then((res) => {
    }).catch((error) => {
    });

  }
  
}
