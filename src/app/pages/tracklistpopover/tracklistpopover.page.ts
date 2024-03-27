import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import * as _ from 'underscore';
@Component({
  selector: 'app-tracklistpopover',
  templateUrl: './tracklistpopover.page.html',
  styleUrls: ['./tracklistpopover.page.scss'],
})
export class TracklistpopoverPage implements OnInit {

  listobj:any;
  selectaction:any;
  isfrom:any;
  constructor(private navparam:NavParams,private popover:PopoverController) { }

  ngOnInit() {
    this.listobj = this.navparam.data.listobj;
    this.isfrom = this.navparam.data.isfrom;

  }

  async closeModal(isfromCancel) {
    if(!isfromCancel){
      await this.popover.dismiss({list:this.listobj,orderfield:this.selectaction});

    }else{
      await this.popover.dismiss(null);

    }
  }
  checkboxselect(slecteditem, index) {
    
    this.listobj[index].asc = !this.listobj[index].asc;
    if(this.isfrom && this.isfrom=='list'){
      this.selectaction = slecteditem.asc?'+'+slecteditem.fieldpath:'-'+slecteditem.fieldpath;
    }else{
      this.selectaction = slecteditem.asc?'+'+slecteditem.prop:'-'+slecteditem.prop;
    }
  }
  selectItem(slecteditem, index) {

    if(this.isfrom && this.isfrom=='list'){
      this.selectaction = slecteditem.asc?'+'+slecteditem.fieldpath:'-'+slecteditem.fieldpath;
    }else{
      this.selectaction = slecteditem.asc?'+'+slecteditem.prop:'-'+slecteditem.prop;
    }
    this.listobj[index].selected = true;
    _.each(this.listobj, function (coldata, colkey) {

      if(colkey != index){
        coldata['selected'] = false;
        coldata['asc'] = false;
      }
      
    });
  }
}
