import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG,HammerModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Network } from '@ionic-native/network/ngx';
import { LoadingPage } from './pages/loading/loading.page';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Device } from '@ionic-native/device/ngx';
// import { LongPressDirective } from './directives/long-press.directive';
import { IonicGestureConfig } from './utils/IonicGestureConfig';
import { ObjectsListPage } from './pages/objects-list/objects-list.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionTemplateComponent } from './components/section-template/section-template.component';
import { TextQuestionComponent } from './components/text-question/text-question.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SchemaViewSelectComponent } from './svcomponents/schema-view-select/schema-view-select.component';
@NgModule({
  declarations: [AppComponent,SectionTemplateComponent ,ObjectsListPage,SchemaViewSelectComponent],
  imports: [BrowserModule,IonicModule.forRoot({swipeBackEnabled: false}),CommonModule,RouterModule, AppRoutingModule, HammerModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: IonicGestureConfig
  }, 
    Network, LoadingPage, ScreenOrientation, AppVersion, Device,Geolocation],
  bootstrap: [AppComponent],
})
export class AppModule {}
