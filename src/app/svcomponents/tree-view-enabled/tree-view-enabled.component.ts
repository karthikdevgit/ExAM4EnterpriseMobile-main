import { Component, Input,ElementRef, OnInit,QueryList,ViewChildren } from "@angular/core";
import { Injectable, NgZone } from '@angular/core';
import { ActivatedRoute,Router, NavigationExtras } from '@angular/router';
import { ActionSheetController, AlertController, IonCard, ModalController } from '@ionic/angular';
import { Gesture, GestureController } from '@ionic/angular';

import { GlobalParamService } from "src/app/service/global-param.service";
@Component({
  selector: 'app-tree-view-enabled',
  templateUrl: './tree-view-enabled.component.html',
  styleUrls: ['./tree-view-enabled.component.scss'],
})
export class TreeViewEnabledComponent implements OnInit {
  @Input() schemaViewData: any;
  @Input() currentIndex: any;
  
  @Input() parentId: any;


  constructor(private zone: NgZone,private router: Router,public GlobalParamService:GlobalParamService ,private gestureCtrl: GestureController, private actionSheetCtrl: ActionSheetController) {
    var _this = this;
    console.log(
      "Date tree-view-not-enabled  comp[onent].schemaViewData",
      _this.schemaViewData
    );
   }

  ngOnInit() {
    var _this = this;
    console.log(
      "Date tree-view-not-enabled ngOnInit comp[onent].schemaViewData",
      _this.schemaViewData
    );
    console.log("currentIndex", _this.currentIndex);
  }
}
