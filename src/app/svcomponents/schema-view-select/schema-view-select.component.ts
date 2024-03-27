import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-schema-view-select',
  templateUrl: './schema-view-select.component.html',
  styleUrls: ['./schema-view-select.component.scss'],
})
export class SchemaViewSelectComponent implements OnInit {
  selectedItem:any;
  @Input() currentselectedview:any;
@Input() availableSchemaViews:any;
  constructor(private modalController: ModalController) {
    var _this=this;
    console.log('this.availableSchemaViews',_this.availableSchemaViews);
   }

  ngOnInit() {
    var _this=this;
    console.log('ngOnInit this.availableSchemaViews',_this.availableSchemaViews);
    _this.selectedItem=_this.currentselectedview;

  }
  selectItem(slecteditem, index) {
    var _this=this;
    _this.selectedItem=slecteditem;
   
  }

  isSelected(option: any): boolean {
    console.log('isSelected option',option)
  
    return  this.selectedItem === option;
  }
  checkValue(event: any,selOption) {
    var _this=this;
    console.log('slect SV selOption',selOption);
      
       _this.selectedItem=selOption;
      
      console.log('_this._this.selectedItem',_this.selectedItem);

  }
  async closeModal(isfromCancel) {
    if(!isfromCancel){
      //is save dismiss
      await this.modalController.dismiss({selectedItem:this.selectedItem});

    }else{
      await this.modalController.dismiss(null);

    }
  }
}
