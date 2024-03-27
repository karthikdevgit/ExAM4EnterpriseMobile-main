(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-relate-amdetail-page-relate-amdetail-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/accordion-component/accordion-component.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/accordion-component/accordion-component.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div style=\"padding:10px;border:1px;\" >\n  <ion-card (click)=\"toggleAccordion()\" >  \n      <ion-card-header >\n        <ion-card-subtitle>\n          {{sectionDetail.ExAM__Section_label__c}}\n          </ion-card-subtitle>\n       \n       \n      \n          <ion-icon slot=\"end\" *ngIf=\"isMenuOpen\" name=\"chevron-up-outline\"></ion-icon>\n          <ion-icon slot=\"end\" *ngIf=\"!isMenuOpen\" name=\"chevron-down-outline\"></ion-icon>\n    \n         \n       \n    </ion-card-header>\n   \n   \n  </ion-card>   \n <div  *ngIf=\"isMenuOpen\" class=\"slds-card\">\n   <app-section-template \n   [sectionDetail]=\"sectionDetail\" \n   [sectionaIdWithquestionTemplateRecords]=\"sectionaIdWithquestionTemplateRecords\"\n   [amIdWithresponse]=\"amIdWithresponse\"\n   [amresponseformGroup]=\"amresponseformGroup\"\n   [amId]=\"amId\"\n   ></app-section-template>\n \n </div>\n   \n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/button-question/button-question.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/button-question/button-question.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  button-question works!\n</p>\n<ion-input [hidden]=\"true\" type=\"text\" [formControlName]=\"eachQuestionDetail.Name\" [(ngModel)]=\" amIdWithresponse[amId][eachQuestionDetail.Id]\"></ion-input>\n<div *ngFor=\"let  selOption of optionsArr ;let i=index \">\n  <ion-button slot=\"start\" color=\"primary\"  (click)=\"setSelectedOption(i,selOption,eachQuestionDetail)\" >{{ selOption }}</ion-button>\n\n</div>\n<!--[(ngModel)]=\" amIdWithresponse[amId][eachQuestionDetail.Id]\"-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkbox-question/checkbox-question.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkbox-question/checkbox-question.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  checkbox-question works!\n</p>\n<div>\n<ion-checkbox  [formControlName]=\"eachQuestionDetail.Name\" [(ngModel)]=\" amIdWithresponse[amId][eachQuestionDetail.Id]\"></ion-checkbox>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/date-question/date-question.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/date-question/date-question.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  date-question works!\n</p>\n<ion-datetime [formControlName]=\"eachQuestionDetail.Name\" displayFormat=\"MMM DD, YYYY\"  [(ngModel)]=\" amIdWithresponse[amId][eachQuestionDetail.Id]\" ></ion-datetime>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/date-time-question/date-time-question.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/date-time-question/date-time-question.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  date-time-question works!\n</p>\n<ion-datetime [formControlName]=\"eachQuestionDetail.Name\" displayFormat=\"YYYY-MM-DDTHH:mm:ssZ\"  [(ngModel)]=\" amIdWithresponse[amId][eachQuestionDetail.Id]\" ></ion-datetime>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/drop-down-picklist-question/drop-down-picklist-question.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/drop-down-picklist-question/drop-down-picklist-question.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  drop-down-picklist-question works!\n</p>\n<ion-input [hidden]=\"true\" type=\"text\" [formControlName]=\"eachQuestionDetail.Name\" [(ngModel)]=\" amIdWithresponse[amId][eachQuestionDetail.Id]\"></ion-input>\n\n<ion-list >\n  \n  <ion-select  (ionChange)=\"checkValue($event, eachQuestionDetail)\">\n    <ion-select-option  *ngFor=\"let selOption of optionsArr\" >{{ selOption }}</ion-select-option>\n  </ion-select>\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/email-question/email-question.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/email-question/email-question.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  email-question works!\n</p>\n<div  >\n  <ion-input type=\"email\" [formControlName]=\"eachQuestionDetail.Name\" [(ngModel)]=\" amIdWithresponse[amId][eachQuestionDetail.Id]\"></ion-input>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/horizontal-picklist-question/horizontal-picklist-question.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/horizontal-picklist-question/horizontal-picklist-question.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  horizontal-picklist-question works!\n</p>\n<ion-input [hidden]=\"true\" type=\"text\" [formControlName]=\"eachQuestionDetail.Name\" [(ngModel)]=\" amIdWithresponse[amId][eachQuestionDetail.Id]\"></ion-input>\n\n<ion-list >\n  \n  <ion-select  (ionChange)=\"checkValue($event, eachQuestionDetail)\" >\n    <ion-select-option  *ngFor=\"let selOption of optionsArr\" >{{ selOption }}</ion-select-option>\n  </ion-select>\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/likert-question/likert-question.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/likert-question/likert-question.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  likert-question works!\n</p>\n<ion-input [hidden]=\"true\" type=\"text\" [formControlName]=\"eachQuestionDetail.Name\" [(ngModel)]=\" amIdWithresponse[amId][eachQuestionDetail.Id]\"></ion-input>\n\n<ion-list >\n  \n  <ion-select  (ionChange)=\"checkValue($event, eachQuestionDetail)\" >\n    <ion-select-option  *ngFor=\"let selOption of optionsArr\" >{{ selOption }}</ion-select-option>\n  </ion-select>\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-question/list-question.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-question/list-question.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  list-question works!\n</p>\n <!-- <ion-list >\n  <ng-container formControlName=\"{{ eachQuestionDetail.Name }}\" *ngFor=\"let selOption of optionsArr\">\n    <ion-item [class.selected]=\"isSelected(selOption)\" (click)=\"checkValue($event,selOption, eachQuestionDetail)\">\n      <ion-label>{{ selOption }}</ion-label> \n    </ion-item>\n  </ng-container>\n</ion-list>  -->\n\n<ion-list >\n  <ion-item *ngFor=\"let selOption of optionsArr\" >\n    <ion-label>{{ selOption }}</ion-label>\n    <ion-radio [class.selected]=\"isSelected(selOption)\"[value]=\"selOption\" formControlName=\"{{ eachQuestionDetail.Name }}\"  (click)=\"checkValue($event,selOption, eachQuestionDetail)\"></ion-radio>\n  </ion-item>\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/location-question/location-question.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/location-question/location-question.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  location-question works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/multi-select-question/multi-select-question.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/multi-select-question/multi-select-question.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  multi-select-question works!\n</p>\n<ion-input [hidden]=\"true\" type=\"text\" [formControlName]=\"eachQuestionDetail.Name\" [(ngModel)]=\" amIdWithresponse[amId][eachQuestionDetail.Id]\"></ion-input>\n\n<ion-list >\n  \n  <ion-select  (ionChange)=\"checkValue($event, eachQuestionDetail)\" [multiple]=\"true\">\n    <ion-select-option  *ngFor=\"let selOption of optionsArr\" >{{ selOption }}</ion-select-option>\n  </ion-select>\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/multimedia-question/multimedia-question.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/multimedia-question/multimedia-question.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  multimedia-question works!\n</p>\n<div height=\"360px\"  >\n  <iframe title=\"video-url\" [src]=\"urlConverter(eachQuestionDetail.ExAM__Video_URL__c)\" style=\"padding-top:10px;padding-bottom:10px;border:0px;\" controls=\"controls\" allowfullscreen=\"false\" frameborder=\"0\"></iframe>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/number-question/number-question.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/number-question/number-question.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div  >\n  <ion-input type=\"number\" [formControlName]=\"eachQuestionDetail.Name\" [(ngModel)]=\" amIdWithresponse[amId][eachQuestionDetail.Id]\"></ion-input>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phone-number-question/phone-number-question.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phone-number-question/phone-number-question.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div  >\n  <ion-input type=\"number\" [formControlName]=\"eachQuestionDetail.Name\" [(ngModel)]=\" amIdWithresponse[amId][eachQuestionDetail.Id]\"></ion-input>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/question-template/question-template.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/question-template/question-template.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  {{questiondetail.ExAM__Question_Label__c}}----- {{questiondetail.ExAM__Question_Type__c}}\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/radio-picklist-question/radio-picklist-question.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/radio-picklist-question/radio-picklist-question.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-radio-group [formControlName]=\"eachQuestionDetail.Name\">\n  <ng-container *ngFor=\"let selOption of optionsArr\">\n    <ion-radio [value]=\"selOption\" (click)=\"checkValue($event,selOption,eachQuestionDetail)\">\n    </ion-radio>\n    {{ selOption }}\n  </ng-container>\n</ion-radio-group>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/rich-text-question/rich-text-question.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/rich-text-question/rich-text-question.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div [innerHTML]=\"eachQuestionDetail.ExAM__Rich_Text_Content__c\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/text-question/text-question.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/text-question/text-question.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div  >\n  <ion-input type=\"text\" [formControlName]=\"eachQuestionDetail.Name\" [(ngModel)]=\" amIdWithresponse[amId][eachQuestionDetail.Id]\"></ion-input>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/textarea-question/textarea-question.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/textarea-question/textarea-question.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  textarea-question works!\n</p>\n\n<ion-textarea [formControlName]=\"eachQuestionDetail.Name\"  [(ngModel)]=\" amIdWithresponse[amId][eachQuestionDetail.Id]\" placeholder=\"Enter your text...\"></ion-textarea>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/relate-amdetail-page/relate-amdetail-page.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/relate-amdetail-page/relate-amdetail-page.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background:rgb(17, 140, 200)\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"previousScreen()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>relateAMDetailPage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"amresponseformGroup\" (ngSubmit)=\"submitam()\" novalidate>\n\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" style=\"height:100%\">\n        <ion-slide *ngFor=\"let sectionDetail of sectionTemplateList\" >\n          <app-accordion-component style=\"width: 100%;height:100%\"\n          [sectionDetail]=\"sectionDetail\" \n          [sectionaIdWithquestionTemplateRecords]=\"sectionaIdWithquestionTemplateRecords\"\n          [amIdWithresponse]=\"amresponse\"\n          [amresponseformGroup]=\"amresponseformGroup\"\n          [amId]=\"amData.Id\">\n          </app-accordion-component>\n          <ion-row>\n            <ion-col>\n              <ion-button type=\"submit\" color=\"danger\" expand=\"block\"\n                >Submit</ion-button\n              >\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n    </ion-slides>\n  </form>\n</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/components/accordion-component/accordion-component.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/accordion-component/accordion-component.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uLWNvbXBvbmVudC9hY2NvcmRpb24tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/accordion-component/accordion-component.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/accordion-component/accordion-component.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AccordionComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponentComponent", function() { return AccordionComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AccordionComponentComponent = class AccordionComponentComponent {
    constructor() {
        this.isMenuOpen = false;
    }
    ngOnInit() {
        var _this = this;
        console.log('ngOnInit this.sectionDetail', _this.sectionDetail);
        console.log('ngOnInit this.eachQuestionTemplate', _this.sectionaIdWithquestionTemplateRecords);
        console.log('amId', _this.amIdWithresponse);
    }
    toggleAccordion() {
        this.isMenuOpen = !this.isMenuOpen;
    }
};
AccordionComponentComponent.ctorParameters = () => [];
AccordionComponentComponent.propDecorators = {
    sectionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    sectionaIdWithquestionTemplateRecords: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
AccordionComponentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accordion-component',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./accordion-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/accordion-component/accordion-component.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./accordion-component.component.scss */ "./src/app/components/accordion-component/accordion-component.component.scss")).default]
    })
], AccordionComponentComponent);



/***/ }),

/***/ "./src/app/components/button-question/button-question.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/button-question/button-question.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uLXF1ZXN0aW9uL2J1dHRvbi1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/button-question/button-question.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/button-question/button-question.component.ts ***!
  \*************************************************************************/
/*! exports provided: ButtonQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonQuestionComponent", function() { return ButtonQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let ButtonQuestionComponent = class ButtonQuestionComponent {
    constructor(formBuilder, parentForm) {
        this.formBuilder = formBuilder;
        this.parentForm = parentForm;
        console.log('button questionconstructor call::::child called');
    }
    ngOnInit() {
        var _this = this;
        console.log('button this.QuestionDetail', _this.eachQuestionDetail);
        console.log('button this.amIdWithresponse', _this.amIdWithresponse);
        console.log('button textthis.amresponseformGroup', _this.amresponseformGroup);
        console.log('button _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
        _this.amresponseformGroup.addControl([_this.eachQuestionDetail.Name], new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([
            '',
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]
        ]));
        console.log('button form this.amresponseformGroup', _this.amresponseformGroup);
        //   console.log('ngOnInit this.QuestionDetail',_this.eachQuestionDetail);
        //   console.log('ngOnInit this.amIdWithresponse',_this.amIdWithresponse);
        //   console.log('ngOnInit this.amresponseformGroup',_this.amresponseformGroup);
        //  console.log(' _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]',
        //  _this.eachQuestionDetail.ExAM__Subquestion_Label__c);
        //  // splitOptions(eachQuestionDetail.ExAM__Subquestion_Label__c) track by $index
        //  _this.amresponseformGroup = _this.formBuilder.group({
        //   [_this.eachQuestionDetail.Name]: [
        //     '',
        //     [
        //       Validators.required,
        //     ]
        //   ]
        //   })
        _this.splitOptions(_this.eachQuestionDetail.ExAM__Subquestion_Label__c);
        console.log('after form this.amresponseformGroup', _this.amresponseformGroup);
    }
    setSelectedOption(index, selOption, QuestionDetail) {
        var _this = this;
        console.log('selOption', index, selOption);
        console.log('selOption', selOption, QuestionDetail);
        //amIdWithresponse[amId][eachQuestionDetail.Id]
        _this.amIdWithresponse[_this.amId][QuestionDetail.Id] = selOption;
        console.log('_this.amIdWithresponse', _this.amIdWithresponse);
    }
    splitOptions(strOption) {
        console.log('strOption', strOption);
        var _this = this;
        var options = [];
        if (strOption && strOption.indexOf('null') == -1) {
            _this.optionsArr = strOption.split('~');
        }
        console.log('optionsArr', _this.optionsArr);
        //return options;
    }
};
ButtonQuestionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }
];
ButtonQuestionComponent.propDecorators = {
    eachQuestionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
ButtonQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button-question',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./button-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/button-question/button-question.component.html")).default,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./button-question.component.scss */ "./src/app/components/button-question/button-question.component.scss")).default]
    })
], ButtonQuestionComponent);



/***/ }),

/***/ "./src/app/components/checkbox-question/checkbox-question.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/checkbox-question/checkbox-question.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tib3gtcXVlc3Rpb24vY2hlY2tib3gtcXVlc3Rpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/checkbox-question/checkbox-question.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/checkbox-question/checkbox-question.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CheckboxQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxQuestionComponent", function() { return CheckboxQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let CheckboxQuestionComponent = class CheckboxQuestionComponent {
    constructor(formBuilder, parentForm) {
        this.formBuilder = formBuilder;
        this.parentForm = parentForm;
        console.log('checkbox  call::::child called');
    }
    ngOnInit() {
        var _this = this;
        console.log('checkbox this.QuestionDetail', _this.eachQuestionDetail);
        console.log('checkbox this.amIdWithresponse', _this.amIdWithresponse);
        console.log('checkbox textthis.amresponseformGroup', _this.amresponseformGroup);
        console.log('checkbox.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
        _this.amresponseformGroup.addControl([_this.eachQuestionDetail.Name], new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([
            '',
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]
        ]));
        console.log('checkbox form this.amresponseformGroup', _this.amresponseformGroup);
    }
};
CheckboxQuestionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }
];
CheckboxQuestionComponent.propDecorators = {
    eachQuestionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
CheckboxQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkbox-question',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./checkbox-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkbox-question/checkbox-question.component.html")).default,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./checkbox-question.component.scss */ "./src/app/components/checkbox-question/checkbox-question.component.scss")).default]
    })
], CheckboxQuestionComponent);



/***/ }),

/***/ "./src/app/components/date-question/date-question.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/date-question/date-question.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGF0ZS1xdWVzdGlvbi9kYXRlLXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/date-question/date-question.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/date-question/date-question.component.ts ***!
  \*********************************************************************/
/*! exports provided: DateQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateQuestionComponent", function() { return DateQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let DateQuestionComponent = class DateQuestionComponent {
    constructor(formBuilder, parentForm) {
        this.formBuilder = formBuilder;
        this.parentForm = parentForm;
        console.log('Date  call::::child called');
    }
    ngOnInit() {
        var _this = this;
        console.log('Date this.QuestionDetail', _this.eachQuestionDetail);
        console.log('Date this.amIdWithresponse', _this.amIdWithresponse);
        console.log('Date textthis.amresponseformGroup', _this.amresponseformGroup);
        console.log('Date.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
        _this.amresponseformGroup.addControl([_this.eachQuestionDetail.Name], new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([
            '',
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]
        ]));
        console.log('Date form this.amresponseformGroup', _this.amresponseformGroup);
    }
};
DateQuestionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }
];
DateQuestionComponent.propDecorators = {
    eachQuestionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
DateQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-date-question',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./date-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/date-question/date-question.component.html")).default,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./date-question.component.scss */ "./src/app/components/date-question/date-question.component.scss")).default]
    })
], DateQuestionComponent);



/***/ }),

/***/ "./src/app/components/date-time-question/date-time-question.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/date-time-question/date-time-question.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGF0ZS10aW1lLXF1ZXN0aW9uL2RhdGUtdGltZS1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/date-time-question/date-time-question.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/date-time-question/date-time-question.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DateTimeQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeQuestionComponent", function() { return DateTimeQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let DateTimeQuestionComponent = class DateTimeQuestionComponent {
    constructor(formBuilder, parentForm) {
        this.formBuilder = formBuilder;
        this.parentForm = parentForm;
        console.log('Datetime  call::::child called');
    }
    ngOnInit() {
        var _this = this;
        console.log('Date time this.QuestionDetail', _this.eachQuestionDetail);
        console.log('Date timethis.amIdWithresponse', _this.amIdWithresponse);
        console.log('Date timetextthis.amresponseformGroup', _this.amresponseformGroup);
        console.log('Date.timeamresponseformGroup[_this.amId][_this.eachQuestionDetail]');
        _this.amresponseformGroup.addControl([_this.eachQuestionDetail.Name], new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([
            '',
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]
        ]));
        console.log('Datetime  form this.amresponseformGroup', _this.amresponseformGroup);
    }
};
DateTimeQuestionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }
];
DateTimeQuestionComponent.propDecorators = {
    eachQuestionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
DateTimeQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-date-time-question',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./date-time-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/date-time-question/date-time-question.component.html")).default,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./date-time-question.component.scss */ "./src/app/components/date-time-question/date-time-question.component.scss")).default]
    })
], DateTimeQuestionComponent);



/***/ }),

/***/ "./src/app/components/drop-down-picklist-question/drop-down-picklist-question.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/drop-down-picklist-question/drop-down-picklist-question.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHJvcC1kb3duLXBpY2tsaXN0LXF1ZXN0aW9uL2Ryb3AtZG93bi1waWNrbGlzdC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/drop-down-picklist-question/drop-down-picklist-question.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/drop-down-picklist-question/drop-down-picklist-question.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DropDownPicklistQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownPicklistQuestionComponent", function() { return DropDownPicklistQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let DropDownPicklistQuestionComponent = class DropDownPicklistQuestionComponent {
    constructor(formBuilder, parentForm) {
        this.formBuilder = formBuilder;
        this.parentForm = parentForm;
        console.log('dropdown picklist questionconstructor call::::child called');
    }
    ngOnInit() {
        var _this = this;
        console.log('dropdown picklist this.QuestionDetail', _this.eachQuestionDetail);
        console.log('dropdown picklist this.amIdWithresponse', _this.amIdWithresponse);
        console.log('dropdown picklist textthis.amresponseformGroup', _this.amresponseformGroup);
        console.log('dropdown picklist _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
        _this.amresponseformGroup.addControl([_this.eachQuestionDetail.Name], new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([
            '',
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]
        ]));
        console.log('dropdown picklist form this.amresponseformGroup', _this.amresponseformGroup);
        _this.splitOptions(_this.eachQuestionDetail.ExAM__Subquestion_Label__c);
        console.log('dropdown picklist after form this.amresponseformGroup', _this.amresponseformGroup);
    }
    splitOptions(strOption) {
        console.log('dropdown picklist strOption', strOption);
        var _this = this;
        var options = [];
        if (strOption && strOption.indexOf('null') == -1) {
            _this.optionsArr = strOption.split('~');
        }
        console.log('dropdown picklist', _this.optionsArr);
        //return options;
    }
    checkValue(selectedOption, questionDetail) {
        // Your logic for handling the change event here
        var _this = this;
        console.log('dropdown selOption', selectedOption.detail.value);
        console.log('selOption', selectedOption.detail.value, questionDetail);
        //amIdWithresponse[amId][eachQuestionDetail.Id]
        _this.amIdWithresponse[_this.amId][questionDetail.Id] = selectedOption.detail.value;
        console.log('dropdown _this.amIdWithresponse', _this.amIdWithresponse);
    }
};
DropDownPicklistQuestionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }
];
DropDownPicklistQuestionComponent.propDecorators = {
    eachQuestionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
DropDownPicklistQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-drop-down-picklist-question',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./drop-down-picklist-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/drop-down-picklist-question/drop-down-picklist-question.component.html")).default,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./drop-down-picklist-question.component.scss */ "./src/app/components/drop-down-picklist-question/drop-down-picklist-question.component.scss")).default]
    })
], DropDownPicklistQuestionComponent);



/***/ }),

/***/ "./src/app/components/email-question/email-question.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/email-question/email-question.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1haWwtcXVlc3Rpb24vZW1haWwtcXVlc3Rpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/email-question/email-question.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/email-question/email-question.component.ts ***!
  \***********************************************************************/
/*! exports provided: EmailQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailQuestionComponent", function() { return EmailQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let EmailQuestionComponent = class EmailQuestionComponent {
    constructor(formBuilder, parentForm) {
        this.formBuilder = formBuilder;
        this.parentForm = parentForm;
        console.log('checkbox  call::::child called');
    }
    ngOnInit() {
        var _this = this;
        console.log('email this.QuestionDetail', _this.eachQuestionDetail);
        console.log('email this.amIdWithresponse', _this.amIdWithresponse);
        console.log('email textthis.amresponseformGroup', _this.amresponseformGroup);
        console.log('email.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
        _this.amresponseformGroup.addControl([_this.eachQuestionDetail.Name], new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([
            '',
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]
        ]));
        console.log('email form this.amresponseformGroup', _this.amresponseformGroup);
    }
};
EmailQuestionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }
];
EmailQuestionComponent.propDecorators = {
    eachQuestionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
EmailQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-question',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./email-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/email-question/email-question.component.html")).default,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./email-question.component.scss */ "./src/app/components/email-question/email-question.component.scss")).default]
    })
], EmailQuestionComponent);



/***/ }),

/***/ "./src/app/components/horizontal-picklist-question/horizontal-picklist-question.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/horizontal-picklist-question/horizontal-picklist-question.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9yaXpvbnRhbC1waWNrbGlzdC1xdWVzdGlvbi9ob3Jpem9udGFsLXBpY2tsaXN0LXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/horizontal-picklist-question/horizontal-picklist-question.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/horizontal-picklist-question/horizontal-picklist-question.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: HorizontalPicklistQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalPicklistQuestionComponent", function() { return HorizontalPicklistQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let HorizontalPicklistQuestionComponent = class HorizontalPicklistQuestionComponent {
    constructor(formBuilder, parentForm) {
        this.formBuilder = formBuilder;
        this.parentForm = parentForm;
        console.log('horizontal picklist questionconstructor call::::child called');
    }
    ngOnInit() {
        var _this = this;
        console.log('horizontal picklist.QuestionDetail', _this.eachQuestionDetail);
        console.log('horizontal picklist.amIdWithresponse', _this.amIdWithresponse);
        console.log('horizontal picklist textthis.amresponseformGroup', _this.amresponseformGroup);
        console.log('horizontal picklist_this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
        _this.amresponseformGroup.addControl([_this.eachQuestionDetail.Name], new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([
            '',
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]
        ]));
        console.log('horizontal picklist form this.amresponseformGroup', _this.amresponseformGroup);
        _this.splitOptions(_this.eachQuestionDetail.ExAM__Subquestion_Label__c);
        console.log('horizontal picklist after form this.amresponseformGroup', _this.amresponseformGroup);
    }
    splitOptions(strOption) {
        console.log('horizontal picklist strOption', strOption);
        var _this = this;
        var options = [];
        if (strOption && strOption.indexOf('null') == -1) {
            _this.optionsArr = strOption.split('~');
        }
        console.log('horizontal picklist', _this.optionsArr);
        //return options;
    }
    checkValue(selectedOption, questionDetail) {
        // Your logic for handling the change event here
        var _this = this;
        console.log('multi selOption', selectedOption.detail.value);
        console.log('selOption', selectedOption.detail.value, questionDetail);
        //amIdWithresponse[amId][eachQuestionDetail.Id]
        _this.amIdWithresponse[_this.amId][questionDetail.Id] = selectedOption.detail.value;
        console.log('multi _this.amIdWithresponse', _this.amIdWithresponse);
    }
};
HorizontalPicklistQuestionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }
];
HorizontalPicklistQuestionComponent.propDecorators = {
    eachQuestionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
HorizontalPicklistQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-horizontal-picklist-question',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./horizontal-picklist-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/horizontal-picklist-question/horizontal-picklist-question.component.html")).default,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./horizontal-picklist-question.component.scss */ "./src/app/components/horizontal-picklist-question/horizontal-picklist-question.component.scss")).default]
    })
], HorizontalPicklistQuestionComponent);



/***/ }),

/***/ "./src/app/components/likert-question/likert-question.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/likert-question/likert-question.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlrZXJ0LXF1ZXN0aW9uL2xpa2VydC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/likert-question/likert-question.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/likert-question/likert-question.component.ts ***!
  \*************************************************************************/
/*! exports provided: LikertQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikertQuestionComponent", function() { return LikertQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let LikertQuestionComponent = class LikertQuestionComponent {
    constructor(formBuilder, parentForm) {
        this.formBuilder = formBuilder;
        this.parentForm = parentForm;
        console.log('Likrt questionconstructor call::::child called');
    }
    ngOnInit() {
        var _this = this;
        console.log('Likrt.QuestionDetail', _this.eachQuestionDetail);
        console.log('Likrt.amIdWithresponse', _this.amIdWithresponse);
        console.log('Likrt textthis.amresponseformGroup', _this.amresponseformGroup);
        console.log('Likrt_this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
        _this.amresponseformGroup.addControl([_this.eachQuestionDetail.Name], new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([
            '',
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]
        ]));
        console.log('Likrt form this.amresponseformGroup', _this.amresponseformGroup);
        _this.splitOptions(_this.eachQuestionDetail.ExAM__Subquestion_Label__c);
        console.log('Likrt after form this.amresponseformGroup', _this.amresponseformGroup);
    }
    splitOptions(strOption) {
        console.log('Likrt strOption', strOption);
        var _this = this;
        var options = [];
        if (strOption && strOption.indexOf('null') == -1) {
            _this.optionsArr = strOption.split('~');
        }
        console.log('Likrt', _this.optionsArr);
        //return options;
    }
    checkValue(selectedOption, questionDetail) {
        // Your logic for handling the change event here
        var _this = this;
        console.log('multi selOption', selectedOption.detail.value);
        console.log('selOption', selectedOption.detail.value, questionDetail);
        //amIdWithresponse[amId][eachQuestionDetail.Id]
        _this.amIdWithresponse[_this.amId][questionDetail.Id] = selectedOption.detail.value;
        console.log('multi _this.amIdWithresponse', _this.amIdWithresponse);
    }
};
LikertQuestionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }
];
LikertQuestionComponent.propDecorators = {
    eachQuestionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
LikertQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-likert-question',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./likert-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/likert-question/likert-question.component.html")).default,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./likert-question.component.scss */ "./src/app/components/likert-question/likert-question.component.scss")).default]
    })
], LikertQuestionComponent);



/***/ }),

/***/ "./src/app/components/list-question/list-question.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/list-question/list-question.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selected {\n  --background-color: #ccb0b0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LXF1ZXN0aW9uL2xpc3QtcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXN0LXF1ZXN0aW9uL2xpc3QtcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQge1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2NjYjBiMDsgXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/list-question/list-question.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/list-question/list-question.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListQuestionComponent", function() { return ListQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let ListQuestionComponent = class ListQuestionComponent {
    constructor(formBuilder, parentForm) {
        this.formBuilder = formBuilder;
        this.parentForm = parentForm;
        console.log('list questionconstructor call::::child called');
    }
    ngOnInit() {
        var _this = this;
        console.log('list this.QuestionDetail', _this.eachQuestionDetail);
        console.log('list this.amIdWithresponse', _this.amIdWithresponse);
        console.log('list textthis.amresponseformGroup', _this.amresponseformGroup);
        console.log('list _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
        _this.amresponseformGroup.addControl([_this.eachQuestionDetail.Name], new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([
            '',
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]
        ]));
        console.log('list form this.amresponseformGroup', _this.amresponseformGroup);
        _this.splitOptions(_this.eachQuestionDetail.ExAM__Subquestion_Label__c);
        console.log('list after form this.amresponseformGroup', _this.amresponseformGroup);
    }
    splitOptions(strOption) {
        console.log('list strOption', strOption);
        var _this = this;
        var options = [];
        if (strOption && strOption.indexOf('null') == -1) {
            _this.optionsArr = strOption.split('~');
        }
        console.log('optionsArr', _this.optionsArr);
        //return options;
    }
    checkValue(event, selOption, QuestionDetail) {
        // Your logic for handling the change event here
        var _this = this;
        console.log('list selOption', selOption);
        console.log('selOption', selOption, QuestionDetail);
        //amIdWithresponse[amId][eachQuestionDetail.Id]
        _this.amIdWithresponse[_this.amId][QuestionDetail.Id] = selOption;
        console.log('_this.amIdWithresponse', _this.amIdWithresponse);
    }
    isSelected(option) {
        console.log('isSelected option', option);
        console.log('isSelected this.amIdWithresponse[this.amId][this.eachQuestionDetail.Id]', this.amIdWithresponse[this.amId][this.eachQuestionDetail.Id]);
        return this.amIdWithresponse[this.amId][this.eachQuestionDetail.Id] === option;
    }
};
ListQuestionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }
];
ListQuestionComponent.propDecorators = {
    eachQuestionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
ListQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-question',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-question/list-question.component.html")).default,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-question.component.scss */ "./src/app/components/list-question/list-question.component.scss")).default]
    })
], ListQuestionComponent);



/***/ }),

/***/ "./src/app/components/location-question/location-question.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/location-question/location-question.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9jYXRpb24tcXVlc3Rpb24vbG9jYXRpb24tcXVlc3Rpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/location-question/location-question.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/location-question/location-question.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LocationQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationQuestionComponent", function() { return LocationQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");




let LocationQuestionComponent = class LocationQuestionComponent {
    constructor(formBuilder, parentForm, geolocation) {
        this.formBuilder = formBuilder;
        this.parentForm = parentForm;
        this.geolocation = geolocation;
        console.log('Location questionconstructor call::::child called');
        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            console.log('resp.coords.latitude', resp);
            // resp.coords.longitude
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    ngOnInit() {
        var _this = this;
        console.log('Location.QuestionDetail', _this.eachQuestionDetail);
        console.log('Location.amIdWithresponse', _this.amIdWithresponse);
        console.log('Location textthis.amresponseformGroup', _this.amresponseformGroup);
        console.log('Location _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
        _this.amresponseformGroup.addControl([_this.eachQuestionDetail.Name], new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([
            '',
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]
        ]));
    }
};
LocationQuestionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] }
];
LocationQuestionComponent.propDecorators = {
    eachQuestionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
LocationQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location-question',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./location-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/location-question/location-question.component.html")).default,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./location-question.component.scss */ "./src/app/components/location-question/location-question.component.scss")).default]
    })
], LocationQuestionComponent);



/***/ }),

/***/ "./src/app/components/multi-select-question/multi-select-question.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/multi-select-question/multi-select-question.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXVsdGktc2VsZWN0LXF1ZXN0aW9uL211bHRpLXNlbGVjdC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/multi-select-question/multi-select-question.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/multi-select-question/multi-select-question.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MultiSelectQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectQuestionComponent", function() { return MultiSelectQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let MultiSelectQuestionComponent = class MultiSelectQuestionComponent {
    constructor(formBuilder, parentForm) {
        this.formBuilder = formBuilder;
        this.parentForm = parentForm;
        console.log('multi picklist questionconstructor call::::child called');
    }
    ngOnInit() {
        var _this = this;
        console.log('multi picklist this.QuestionDetail', _this.eachQuestionDetail);
        console.log('multi picklist this.amIdWithresponse', _this.amIdWithresponse);
        console.log('multi picklist textthis.amresponseformGroup', _this.amresponseformGroup);
        console.log('multi picklist _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
        _this.amresponseformGroup.addControl([_this.eachQuestionDetail.Name], new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([
            '',
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]
        ]));
        console.log('multi picklist form this.amresponseformGroup', _this.amresponseformGroup);
        _this.splitOptions(_this.eachQuestionDetail.ExAM__Subquestion_Label__c);
        console.log('multi picklist after form this.amresponseformGroup', _this.amresponseformGroup);
    }
    splitOptions(strOption) {
        console.log('multi picklist strOption', strOption);
        var _this = this;
        var options = [];
        if (strOption && strOption.indexOf('null') == -1) {
            _this.optionsArr = strOption.split('~');
        }
        console.log('multi picklist', _this.optionsArr);
        //return options;
    }
    checkValue(selectedOption, questionDetail) {
        // Your logic for handling the change event here
        var _this = this;
        console.log('multi selOption', selectedOption.detail.value);
        console.log('selOption', selectedOption.detail.value, questionDetail);
        //amIdWithresponse[amId][eachQuestionDetail.Id]
        _this.amIdWithresponse[_this.amId][questionDetail.Id] = selectedOption.detail.value;
        console.log('multi _this.amIdWithresponse', _this.amIdWithresponse);
    }
};
MultiSelectQuestionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }
];
MultiSelectQuestionComponent.propDecorators = {
    eachQuestionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
MultiSelectQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-multi-select-question',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./multi-select-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/multi-select-question/multi-select-question.component.html")).default,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./multi-select-question.component.scss */ "./src/app/components/multi-select-question/multi-select-question.component.scss")).default]
    })
], MultiSelectQuestionComponent);



/***/ }),

/***/ "./src/app/components/multimedia-question/multimedia-question.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/multimedia-question/multimedia-question.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXVsdGltZWRpYS1xdWVzdGlvbi9tdWx0aW1lZGlhLXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/multimedia-question/multimedia-question.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/multimedia-question/multimedia-question.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MultimediaQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaQuestionComponent", function() { return MultimediaQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




let MultimediaQuestionComponent = class MultimediaQuestionComponent {
    constructor(formBuilder, parentForm, sanitizer) {
        this.formBuilder = formBuilder;
        this.parentForm = parentForm;
        this.sanitizer = sanitizer;
        console.log('multimedia  call::::child called');
    }
    ngOnInit() {
        var _this = this;
        console.log('multimedia this.QuestionDetail', _this.eachQuestionDetail);
        console.log('multimedia this.amIdWithresponse', _this.amIdWithresponse);
        console.log('multimedia textthis.amresponseformGroup', _this.amresponseformGroup);
        console.log('multimedia _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
        _this.amresponseformGroup.addControl([_this.eachQuestionDetail.Name], new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([
            '',
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]
        ]));
        console.log('number form this.amresponseformGroup', _this.amresponseformGroup);
    }
    urlConverter(ques) {
        if (ques && typeof ques == 'string' && ques.indexOf("watch?v=") > 0) {
            ques = ques.replace('watch?v=', 'embed/');
        }
        console.log('ques', ques);
        return this.sanitizer.bypassSecurityTrustResourceUrl(ques);
    }
};
MultimediaQuestionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
MultimediaQuestionComponent.propDecorators = {
    eachQuestionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
MultimediaQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-multimedia-question',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./multimedia-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/multimedia-question/multimedia-question.component.html")).default,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./multimedia-question.component.scss */ "./src/app/components/multimedia-question/multimedia-question.component.scss")).default]
    })
], MultimediaQuestionComponent);



/***/ }),

/***/ "./src/app/components/number-question/number-question.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/number-question/number-question.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVtYmVyLXF1ZXN0aW9uL251bWJlci1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/number-question/number-question.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/number-question/number-question.component.ts ***!
  \*************************************************************************/
/*! exports provided: NumberQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberQuestionComponent", function() { return NumberQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let NumberQuestionComponent = class NumberQuestionComponent {
    constructor(formBuilder, parentForm) {
        this.formBuilder = formBuilder;
        this.parentForm = parentForm;
        console.log('constructor number call::::child called');
    }
    ngOnInit() {
        var _this = this;
        console.log('number this.QuestionDetail', _this.eachQuestionDetail);
        console.log('number this.amIdWithresponse', _this.amIdWithresponse);
        console.log('number textthis.amresponseformGroup', _this.amresponseformGroup);
        console.log('number _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
        _this.amresponseformGroup.addControl([_this.eachQuestionDetail.Name], new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([
            '',
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]
        ]));
        console.log('number form this.amresponseformGroup', _this.amresponseformGroup);
    }
};
NumberQuestionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }
];
NumberQuestionComponent.propDecorators = {
    eachQuestionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
NumberQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-number-question',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./number-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/number-question/number-question.component.html")).default,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./number-question.component.scss */ "./src/app/components/number-question/number-question.component.scss")).default]
    })
], NumberQuestionComponent);



/***/ }),

/***/ "./src/app/components/phone-number-question/phone-number-question.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/phone-number-question/phone-number-question.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmUtbnVtYmVyLXF1ZXN0aW9uL3Bob25lLW51bWJlci1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/phone-number-question/phone-number-question.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/phone-number-question/phone-number-question.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PhoneNumberQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneNumberQuestionComponent", function() { return PhoneNumberQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let PhoneNumberQuestionComponent = class PhoneNumberQuestionComponent {
    constructor(formBuilder, parentForm) {
        this.formBuilder = formBuilder;
        this.parentForm = parentForm;
        console.log('constructor phone number call::::child called');
    }
    ngOnInit() {
        var _this = this;
        console.log('phonenumber this.QuestionDetail', _this.eachQuestionDetail);
        console.log('phonenumber this.amIdWithresponse', _this.amIdWithresponse);
        console.log('phonenumber textthis.amresponseformGroup', _this.amresponseformGroup);
        console.log('phonenumber _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
        _this.amresponseformGroup.addControl([_this.eachQuestionDetail.Name], new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([
            '',
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]
        ]));
        console.log('phonenumber form this.amresponseformGroup', _this.amresponseformGroup);
    }
};
PhoneNumberQuestionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }
];
PhoneNumberQuestionComponent.propDecorators = {
    eachQuestionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
PhoneNumberQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phone-number-question',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./phone-number-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phone-number-question/phone-number-question.component.html")).default,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./phone-number-question.component.scss */ "./src/app/components/phone-number-question/phone-number-question.component.scss")).default]
    })
], PhoneNumberQuestionComponent);



/***/ }),

/***/ "./src/app/components/question-template/question-template.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/question-template/question-template.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb24tdGVtcGxhdGUvcXVlc3Rpb24tdGVtcGxhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/question-template/question-template.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/question-template/question-template.component.ts ***!
  \*****************************************************************************/
/*! exports provided: QuestionTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionTemplateComponent", function() { return QuestionTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let QuestionTemplateComponent = class QuestionTemplateComponent {
    constructor() { }
    ngOnInit() {
        var _this = this;
        console.log('ngOnInit this.questiondetail', _this.questiondetail);
    }
};
QuestionTemplateComponent.ctorParameters = () => [];
QuestionTemplateComponent.propDecorators = {
    questiondetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
QuestionTemplateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-template',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./question-template.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/question-template/question-template.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./question-template.component.scss */ "./src/app/components/question-template/question-template.component.scss")).default]
    })
], QuestionTemplateComponent);



/***/ }),

/***/ "./src/app/components/radio-picklist-question/radio-picklist-question.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/radio-picklist-question/radio-picklist-question.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Style the radio button */\nion-radio {\n  /* Set width and height to 0 to hide the default radio button */\n  width: 0;\n  height: 0;\n}\n/* Style the custom radio button container */\nion-radio::part(container) {\n  /* Set the container to be a circle */\n  border-radius: 50%;\n  width: 20px;\n  /* Set the width of the circle */\n  height: 20px;\n  /* Set the height of the circle */\n  border: 2px solid #ddd;\n  /* Border color and width */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n  /* Add this to position the dot relative to the container */\n}\n/* Style the selected dot */\nion-radio.radio-checked::part(container)::after {\n  content: \"\";\n  /* Create a pseudo-element for the dot */\n  background-color: #656269;\n  /* Color of the selected dot */\n  border-radius: 50%;\n  /* Make the dot a circle */\n  width: 10px;\n  /* Set the width of the dot */\n  height: 10px;\n  /* Set the height of the dot */\n  position: absolute;\n  /* Position the dot relative to the container */\n  top: 50%;\n  /* Center the dot vertically */\n  left: 50%;\n  /* Center the dot horizontally */\n  transform: translate(-50%, -50%);\n  /* Move the dot back by half its size to center it */\n}\n/* Hide the default check mark */\nion-radio::part(mark) {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yYWRpby1waWNrbGlzdC1xdWVzdGlvbi9yYWRpby1waWNrbGlzdC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQywyQkFBQTtBQUNBO0VBQ0csK0RBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUFKO0FBR0UsNENBQUE7QUFDQTtFQUNFLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQWEsZ0NBQUE7RUFDYixZQUFBO0VBQWMsaUNBQUE7RUFDZCxzQkFBQTtFQUF3QiwyQkFBQTtFQUN4QixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUFvQiwyREFBQTtBQUl4QjtBQURFLDJCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQWEsd0NBQUE7RUFDYix5QkFBQTtFQUEyQiw4QkFBQTtFQUMzQixrQkFBQTtFQUFvQiwwQkFBQTtFQUNwQixXQUFBO0VBQWEsNkJBQUE7RUFDYixZQUFBO0VBQWMsOEJBQUE7RUFDZCxrQkFBQTtFQUFvQiwrQ0FBQTtFQUNwQixRQUFBO0VBQVUsOEJBQUE7RUFDVixTQUFBO0VBQVcsZ0NBQUE7RUFDWCxnQ0FBQTtFQUFrQyxvREFBQTtBQWF0QztBQVZFLGdDQUFBO0FBQ0E7RUFDRSxhQUFBO0FBYUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JhZGlvLXBpY2tsaXN0LXF1ZXN0aW9uL3JhZGlvLXBpY2tsaXN0LXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gLyogU3R5bGUgdGhlIHJhZGlvIGJ1dHRvbiAqL1xuIGlvbi1yYWRpbyB7XG4gICAgLyogU2V0IHdpZHRoIGFuZCBoZWlnaHQgdG8gMCB0byBoaWRlIHRoZSBkZWZhdWx0IHJhZGlvIGJ1dHRvbiAqL1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgfVxuICBcbiAgLyogU3R5bGUgdGhlIGN1c3RvbSByYWRpbyBidXR0b24gY29udGFpbmVyICovXG4gIGlvbi1yYWRpbzo6cGFydChjb250YWluZXIpIHtcbiAgICAvKiBTZXQgdGhlIGNvbnRhaW5lciB0byBiZSBhIGNpcmNsZSAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMjBweDsgLyogU2V0IHRoZSB3aWR0aCBvZiB0aGUgY2lyY2xlICovXG4gICAgaGVpZ2h0OiAyMHB4OyAvKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgY2lyY2xlICovXG4gICAgYm9yZGVyOiAycHggc29saWQgI2RkZDsgLyogQm9yZGVyIGNvbG9yIGFuZCB3aWR0aCAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBBZGQgdGhpcyB0byBwb3NpdGlvbiB0aGUgZG90IHJlbGF0aXZlIHRvIHRoZSBjb250YWluZXIgKi9cbiAgfVxuICBcbiAgLyogU3R5bGUgdGhlIHNlbGVjdGVkIGRvdCAqL1xuICBpb24tcmFkaW8ucmFkaW8tY2hlY2tlZDo6cGFydChjb250YWluZXIpOjphZnRlciB7XG4gICAgY29udGVudDogJyc7IC8qIENyZWF0ZSBhIHBzZXVkby1lbGVtZW50IGZvciB0aGUgZG90ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY1NjI2OTsgLyogQ29sb3Igb2YgdGhlIHNlbGVjdGVkIGRvdCAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgLyogTWFrZSB0aGUgZG90IGEgY2lyY2xlICovXG4gICAgd2lkdGg6IDEwcHg7IC8qIFNldCB0aGUgd2lkdGggb2YgdGhlIGRvdCAqL1xuICAgIGhlaWdodDogMTBweDsgLyogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIGRvdCAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogUG9zaXRpb24gdGhlIGRvdCByZWxhdGl2ZSB0byB0aGUgY29udGFpbmVyICovXG4gICAgdG9wOiA1MCU7IC8qIENlbnRlciB0aGUgZG90IHZlcnRpY2FsbHkgKi9cbiAgICBsZWZ0OiA1MCU7IC8qIENlbnRlciB0aGUgZG90IGhvcml6b250YWxseSAqL1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAvKiBNb3ZlIHRoZSBkb3QgYmFjayBieSBoYWxmIGl0cyBzaXplIHRvIGNlbnRlciBpdCAqL1xuICB9XG4gIFxuICAvKiBIaWRlIHRoZSBkZWZhdWx0IGNoZWNrIG1hcmsgKi9cbiAgaW9uLXJhZGlvOjpwYXJ0KG1hcmspIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/radio-picklist-question/radio-picklist-question.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/radio-picklist-question/radio-picklist-question.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RadioPicklistQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioPicklistQuestionComponent", function() { return RadioPicklistQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let RadioPicklistQuestionComponent = class RadioPicklistQuestionComponent {
    constructor(formBuilder, parentForm) {
        this.formBuilder = formBuilder;
        this.parentForm = parentForm;
        console.log('RadioPicklist questionconstructor call::::child called');
    }
    ngOnInit() {
        var _this = this;
        console.log('RadioPicklist this.QuestionDetail', _this.eachQuestionDetail);
        console.log('RadioPicklist this.amIdWithresponse', _this.amIdWithresponse);
        console.log('RadioPicklist textthis.amresponseformGroup', _this.amresponseformGroup);
        console.log('RadioPicklist _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
        _this.amresponseformGroup.addControl([_this.eachQuestionDetail.Name], new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([
            '',
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]
        ]));
        console.log('RadioPicklist form this.amresponseformGroup', _this.amresponseformGroup);
        _this.splitOptions(_this.eachQuestionDetail.ExAM__Subquestion_Label__c);
        console.log('RadioPicklist after form this.amresponseformGroup', _this.amresponseformGroup);
    }
    splitOptions(strOption) {
        console.log('RadioPicklist strOption', strOption);
        var _this = this;
        var options = [];
        if (strOption && strOption.indexOf('null') == -1) {
            _this.optionsArr = strOption.split('~');
        }
        console.log('optionsArr', _this.optionsArr);
        //return options;
    }
    checkValue(event, selOption, QuestionDetail) {
        // Your logic for handling the change event here
        var _this = this;
        console.log('selOption', selOption);
        console.log('selOption', selOption, QuestionDetail);
        //amIdWithresponse[amId][eachQuestionDetail.Id]
        _this.amIdWithresponse[_this.amId][QuestionDetail.Id] = selOption;
        console.log('_this.amIdWithresponse', _this.amIdWithresponse);
    }
};
RadioPicklistQuestionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }
];
RadioPicklistQuestionComponent.propDecorators = {
    eachQuestionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
RadioPicklistQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-radio-picklist-question',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./radio-picklist-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/radio-picklist-question/radio-picklist-question.component.html")).default,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./radio-picklist-question.component.scss */ "./src/app/components/radio-picklist-question/radio-picklist-question.component.scss")).default]
    })
], RadioPicklistQuestionComponent);



/***/ }),

/***/ "./src/app/components/rich-text-question/rich-text-question.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/rich-text-question/rich-text-question.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmljaC10ZXh0LXF1ZXN0aW9uL3JpY2gtdGV4dC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/rich-text-question/rich-text-question.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/rich-text-question/rich-text-question.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RichTextQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichTextQuestionComponent", function() { return RichTextQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let RichTextQuestionComponent = class RichTextQuestionComponent {
    constructor(formBuilder, parentForm) {
        this.formBuilder = formBuilder;
        this.parentForm = parentForm;
        console.log('richText text call::::child called');
    }
    ngOnInit() {
        var _this = this;
        console.log('richText this.QuestionDetail', _this.eachQuestionDetail);
        console.log('richText this.amIdWithresponse', _this.amIdWithresponse);
        console.log('richText textthis.amresponseformGroup', _this.amresponseformGroup);
        console.log('richText _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
        _this.amresponseformGroup.addControl([_this.eachQuestionDetail.Name], new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([
            '',
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]
        ]));
        console.log('richText form this.amresponseformGroup', _this.amresponseformGroup);
    }
};
RichTextQuestionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }
];
RichTextQuestionComponent.propDecorators = {
    eachQuestionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
RichTextQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rich-text-question',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./rich-text-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/rich-text-question/rich-text-question.component.html")).default,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rich-text-question.component.scss */ "./src/app/components/rich-text-question/rich-text-question.component.scss")).default]
    })
], RichTextQuestionComponent);



/***/ }),

/***/ "./src/app/components/text-question/text-question.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/text-question/text-question.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGV4dC1xdWVzdGlvbi90ZXh0LXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/text-question/text-question.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/text-question/text-question.component.ts ***!
  \*********************************************************************/
/*! exports provided: TextQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextQuestionComponent", function() { return TextQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let TextQuestionComponent = class TextQuestionComponent {
    constructor(formBuilder, parentForm) {
        this.formBuilder = formBuilder;
        this.parentForm = parentForm;
        console.log('constructor text call::::child called');
    }
    ngOnInit() {
        var _this = this;
        console.log('ngOnInittext this.QuestionDetail', _this.eachQuestionDetail);
        console.log('ngOnInittext this.amIdWithresponse', _this.amIdWithresponse);
        console.log('ngOnInit textthis.amresponseformGroup', _this.amresponseformGroup);
        console.log('text _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
        _this.amresponseformGroup.addControl([_this.eachQuestionDetail.Name], new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([
            '',
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
            ]
        ]));
        console.log('textafter form this.amresponseformGroup', _this.amresponseformGroup);
    }
};
TextQuestionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }
];
TextQuestionComponent.propDecorators = {
    eachQuestionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
TextQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-text-question',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./text-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/text-question/text-question.component.html")).default,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./text-question.component.scss */ "./src/app/components/text-question/text-question.component.scss")).default]
    })
], TextQuestionComponent);



/***/ }),

/***/ "./src/app/components/textarea-question/textarea-question.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/textarea-question/textarea-question.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGV4dGFyZWEtcXVlc3Rpb24vdGV4dGFyZWEtcXVlc3Rpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/textarea-question/textarea-question.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/textarea-question/textarea-question.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TextareaQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaQuestionComponent", function() { return TextareaQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let TextareaQuestionComponent = class TextareaQuestionComponent {
    constructor(formBuilder, parentForm) {
        this.formBuilder = formBuilder;
        this.parentForm = parentForm;
        console.log('texteare text call::::child called');
    }
    ngOnInit() {
        var _this = this;
        console.log('texteare this.QuestionDetail', _this.eachQuestionDetail);
        console.log('texteare this.amIdWithresponse', _this.amIdWithresponse);
        console.log('texteare textthis.amresponseformGroup', _this.amresponseformGroup);
        console.log('texteare _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
        _this.amresponseformGroup.addControl([_this.eachQuestionDetail.Name], new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([
            '',
            [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]
        ]));
        console.log('texteare form this.amresponseformGroup', _this.amresponseformGroup);
    }
};
TextareaQuestionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }
];
TextareaQuestionComponent.propDecorators = {
    eachQuestionDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amIdWithresponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amresponseformGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
TextareaQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-textarea-question',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./textarea-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/textarea-question/textarea-question.component.html")).default,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./textarea-question.component.scss */ "./src/app/components/textarea-question/textarea-question.component.scss")).default]
    })
], TextareaQuestionComponent);



/***/ }),

/***/ "./src/app/pages/relate-amdetail-page/relate-amdetail-page-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/relate-amdetail-page/relate-amdetail-page-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: RelateAMDetailPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelateAMDetailPagePageRoutingModule", function() { return RelateAMDetailPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _relate_amdetail_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./relate-amdetail-page.page */ "./src/app/pages/relate-amdetail-page/relate-amdetail-page.page.ts");




const routes = [
    {
        path: '',
        component: _relate_amdetail_page_page__WEBPACK_IMPORTED_MODULE_3__["RelateAMDetailPagePage"]
    }
];
let RelateAMDetailPagePageRoutingModule = class RelateAMDetailPagePageRoutingModule {
};
RelateAMDetailPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RelateAMDetailPagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/relate-amdetail-page/relate-amdetail-page.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/relate-amdetail-page/relate-amdetail-page.module.ts ***!
  \***************************************************************************/
/*! exports provided: RelateAMDetailPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelateAMDetailPagePageModule", function() { return RelateAMDetailPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _relate_amdetail_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./relate-amdetail-page-routing.module */ "./src/app/pages/relate-amdetail-page/relate-amdetail-page-routing.module.ts");
/* harmony import */ var _relate_amdetail_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relate-amdetail-page.page */ "./src/app/pages/relate-amdetail-page/relate-amdetail-page.page.ts");
/* harmony import */ var src_app_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/section-template/section-template.component */ "./src/app/components/section-template/section-template.component.ts");
/* harmony import */ var src_app_components_text_question_text_question_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/text-question/text-question.component */ "./src/app/components/text-question/text-question.component.ts");
/* harmony import */ var src_app_components_question_template_question_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/question-template/question-template.component */ "./src/app/components/question-template/question-template.component.ts");
/* harmony import */ var src_app_components_accordion_component_accordion_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/accordion-component/accordion-component.component */ "./src/app/components/accordion-component/accordion-component.component.ts");
/* harmony import */ var src_app_components_button_question_button_question_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/button-question/button-question.component */ "./src/app/components/button-question/button-question.component.ts");
/* harmony import */ var src_app_components_checkbox_question_checkbox_question_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/checkbox-question/checkbox-question.component */ "./src/app/components/checkbox-question/checkbox-question.component.ts");
/* harmony import */ var src_app_components_email_question_email_question_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/email-question/email-question.component */ "./src/app/components/email-question/email-question.component.ts");
/* harmony import */ var src_app_components_radio_picklist_question_radio_picklist_question_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/radio-picklist-question/radio-picklist-question.component */ "./src/app/components/radio-picklist-question/radio-picklist-question.component.ts");
/* harmony import */ var src_app_components_list_question_list_question_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/components/list-question/list-question.component */ "./src/app/components/list-question/list-question.component.ts");
/* harmony import */ var src_app_components_drop_down_picklist_question_drop_down_picklist_question_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/components/drop-down-picklist-question/drop-down-picklist-question.component */ "./src/app/components/drop-down-picklist-question/drop-down-picklist-question.component.ts");
/* harmony import */ var src_app_components_textarea_question_textarea_question_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/components/textarea-question/textarea-question.component */ "./src/app/components/textarea-question/textarea-question.component.ts");
/* harmony import */ var src_app_components_rich_text_question_rich_text_question_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/components/rich-text-question/rich-text-question.component */ "./src/app/components/rich-text-question/rich-text-question.component.ts");
/* harmony import */ var src_app_components_number_question_number_question_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/components/number-question/number-question.component */ "./src/app/components/number-question/number-question.component.ts");
/* harmony import */ var src_app_components_phone_number_question_phone_number_question_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/components/phone-number-question/phone-number-question.component */ "./src/app/components/phone-number-question/phone-number-question.component.ts");
/* harmony import */ var src_app_components_date_question_date_question_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/components/date-question/date-question.component */ "./src/app/components/date-question/date-question.component.ts");
/* harmony import */ var src_app_components_date_time_question_date_time_question_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/components/date-time-question/date-time-question.component */ "./src/app/components/date-time-question/date-time-question.component.ts");
/* harmony import */ var src_app_components_multimedia_question_multimedia_question_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/components/multimedia-question/multimedia-question.component */ "./src/app/components/multimedia-question/multimedia-question.component.ts");
/* harmony import */ var src_app_components_multi_select_question_multi_select_question_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/components/multi-select-question/multi-select-question.component */ "./src/app/components/multi-select-question/multi-select-question.component.ts");
/* harmony import */ var src_app_components_likert_question_likert_question_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/components/likert-question/likert-question.component */ "./src/app/components/likert-question/likert-question.component.ts");
/* harmony import */ var src_app_components_horizontal_picklist_question_horizontal_picklist_question_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/components/horizontal-picklist-question/horizontal-picklist-question.component */ "./src/app/components/horizontal-picklist-question/horizontal-picklist-question.component.ts");
/* harmony import */ var src_app_components_location_question_location_question_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/components/location-question/location-question.component */ "./src/app/components/location-question/location-question.component.ts");
/* harmony import */ var src_app_svcomponents_each_amrender_each_amrender_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/svcomponents/each-amrender/each-amrender.component */ "./src/app/svcomponents/each-amrender/each-amrender.component.ts");






























let RelateAMDetailPagePageModule = class RelateAMDetailPagePageModule {
};
RelateAMDetailPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _relate_amdetail_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["RelateAMDetailPagePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_relate_amdetail_page_page__WEBPACK_IMPORTED_MODULE_6__["RelateAMDetailPagePage"],
            src_app_components_section_template_section_template_component__WEBPACK_IMPORTED_MODULE_7__["SectionTemplateComponent"],
            src_app_components_text_question_text_question_component__WEBPACK_IMPORTED_MODULE_8__["TextQuestionComponent"],
            src_app_components_button_question_button_question_component__WEBPACK_IMPORTED_MODULE_11__["ButtonQuestionComponent"],
            src_app_components_question_template_question_template_component__WEBPACK_IMPORTED_MODULE_9__["QuestionTemplateComponent"],
            src_app_components_accordion_component_accordion_component_component__WEBPACK_IMPORTED_MODULE_10__["AccordionComponentComponent"],
            src_app_components_checkbox_question_checkbox_question_component__WEBPACK_IMPORTED_MODULE_12__["CheckboxQuestionComponent"],
            src_app_components_email_question_email_question_component__WEBPACK_IMPORTED_MODULE_13__["EmailQuestionComponent"],
            src_app_components_radio_picklist_question_radio_picklist_question_component__WEBPACK_IMPORTED_MODULE_14__["RadioPicklistQuestionComponent"],
            src_app_components_list_question_list_question_component__WEBPACK_IMPORTED_MODULE_15__["ListQuestionComponent"],
            src_app_components_drop_down_picklist_question_drop_down_picklist_question_component__WEBPACK_IMPORTED_MODULE_16__["DropDownPicklistQuestionComponent"],
            src_app_components_textarea_question_textarea_question_component__WEBPACK_IMPORTED_MODULE_17__["TextareaQuestionComponent"],
            src_app_components_rich_text_question_rich_text_question_component__WEBPACK_IMPORTED_MODULE_18__["RichTextQuestionComponent"],
            src_app_components_number_question_number_question_component__WEBPACK_IMPORTED_MODULE_19__["NumberQuestionComponent"],
            src_app_components_phone_number_question_phone_number_question_component__WEBPACK_IMPORTED_MODULE_20__["PhoneNumberQuestionComponent"],
            src_app_components_date_question_date_question_component__WEBPACK_IMPORTED_MODULE_21__["DateQuestionComponent"],
            src_app_components_date_time_question_date_time_question_component__WEBPACK_IMPORTED_MODULE_22__["DateTimeQuestionComponent"],
            src_app_components_multimedia_question_multimedia_question_component__WEBPACK_IMPORTED_MODULE_23__["MultimediaQuestionComponent"],
            src_app_components_multi_select_question_multi_select_question_component__WEBPACK_IMPORTED_MODULE_24__["MultiSelectQuestionComponent"],
            src_app_components_likert_question_likert_question_component__WEBPACK_IMPORTED_MODULE_25__["LikertQuestionComponent"],
            src_app_components_horizontal_picklist_question_horizontal_picklist_question_component__WEBPACK_IMPORTED_MODULE_26__["HorizontalPicklistQuestionComponent"],
            src_app_components_location_question_location_question_component__WEBPACK_IMPORTED_MODULE_27__["LocationQuestionComponent"],
            src_app_svcomponents_each_amrender_each_amrender_component__WEBPACK_IMPORTED_MODULE_28__["EachAMRenderComponent"]]
    })
], RelateAMDetailPagePageModule);



/***/ }),

/***/ "./src/app/pages/relate-amdetail-page/relate-amdetail-page.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/relate-amdetail-page/relate-amdetail-page.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlbGF0ZS1hbWRldGFpbC1wYWdlL3JlbGF0ZS1hbWRldGFpbC1wYWdlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/relate-amdetail-page/relate-amdetail-page.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/relate-amdetail-page/relate-amdetail-page.page.ts ***!
  \*************************************************************************/
/*! exports provided: RelateAMDetailPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelateAMDetailPagePage", function() { return RelateAMDetailPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




let RelateAMDetailPagePage = class RelateAMDetailPagePage {
    constructor(router, activatedRoute, formBuilder) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
        };
        this.submitForm = () => {
            if (this.ionicForm.valid) {
                console.log(this.ionicForm.value);
                return false;
            }
            else {
                return console.log('Please provide all the required values!');
            }
        };
        this.submitam = () => {
            if (this.amresponseformGroup.valid) {
                console.log('succes', this.amresponseformGroup.value);
                console.log(',this.amresponse', this.amresponse);
                return false;
            }
            else {
                console.log('erreo');
                return console.log('Please provide all the required values!');
            }
        };
        console.log(' this.activatedRoute', this.activatedRoute);
        this.amData = JSON.parse(this.activatedRoute.snapshot.paramMap.get('amData'));
    }
    ngOnInit() {
        console.log('Am detail page render');
        var _this = this;
        console.log('this.response', _this.amresponse);
        console.log('this.amresponseformGroup', _this.amresponseformGroup);
        _this.amresponse = {};
        _this.amresponse[_this.amData.Id] = {};
        _this.amresponseformGroup = _this.formBuilder.group({});
        console.log('this.amresponse', _this.amresponse);
        _this.getQusetionDetail().then(function (QuestionData) {
            console.log('QuestionData', QuestionData);
        });
    }
    getQusetionDetail() {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var _this = this;
            console.log('gettemplateDetail', _this.amData);
            console.log('_this.amData', _this.amData.ExAM__InvestigationType__c);
            var QuestionTemplateQuerySpec = window.navigator.smartstore.buildExactQuerySpec("templateId", _this.amData.ExAM__InvestigationType__c, 1000);
            window.navigator.smartstore.querySoup("QuestionTemplate", QuestionTemplateQuerySpec, function (QuestionTemplateQuerydata) {
                console.log('QuestionTemplateQuerydata', QuestionTemplateQuerydata);
                var newobj = {};
                var ObjectDataDetails = [];
                newobj[_this.amData.Id] = QuestionTemplateQuerydata.currentPageOrderedEntries[0].QuestionTemplate['sectionTemplateRecord'];
                console.log('newobj', newobj);
                _this.sectionTemplateList = QuestionTemplateQuerydata.currentPageOrderedEntries[0].QuestionTemplate['sectionTemplateRecord'];
                console.log('_this.sectionTemplateList', _this.sectionTemplateList);
                _this.sectionaIdWithquestionTemplateRecords = QuestionTemplateQuerydata.currentPageOrderedEntries[0].QuestionTemplate['questionTemplateRecords'];
                resolve(newobj);
            });
        }));
    }
    get errorControl() {
        console.log('this.amresponseformGroup.controls', this.amresponseformGroup.controls);
        return this.amresponseformGroup.controls;
    }
    previousRleatedScreen() {
        var _this = this;
        _this.router.navigate(['/']);
    }
};
RelateAMDetailPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
RelateAMDetailPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-relate-amdetail-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./relate-amdetail-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/relate-amdetail-page/relate-amdetail-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./relate-amdetail-page.page.scss */ "./src/app/pages/relate-amdetail-page/relate-amdetail-page.page.scss")).default]
    })
], RelateAMDetailPagePage);



/***/ })

}]);
//# sourceMappingURL=pages-relate-amdetail-page-relate-amdetail-page-module-es2015.js.map