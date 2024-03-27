(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-objects-list-all-related-record-render-all-related-record-render-module~pages-objects-~439d3166"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/svcomponents/each-ambutton-render/each-ambutton-render.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/svcomponents/each-ambutton-render/each-ambutton-render.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-row>\n  <div\n  \n  *ngIf=\"\n  schemaViewData &&\n  schemaViewData[currentIndex] &&\n  schemaViewData[currentIndex].amWithAssessableIdMap &&\n  schemaViewData[currentIndex].amWithAssessableIdMap[\n  eachassessableObject.Id\n  ] &&\n  schemaViewData[currentIndex].amWithAssessableIdMap[\n  eachassessableObject.Id\n  ].length > 0\n\"\n  >\n    <ion-col\n      *ngFor=\"\n        let am of schemaViewData[currentIndex].amWithAssessableIdMap[\n          eachassessableObject.Id]\n      \"\n      (click)=$event.stopPropagation();openRelatedAMsDetailPage(am)\n    >\n      <ion-button\n       *ngIf=\"\n              am &&\n              am.Name\n            \">{{ am.Name }}</ion-button>\n    </ion-col>\n  </div>\n</ion-row> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/svcomponents/each-object-render/each-object-render.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/svcomponents/each-object-render/each-object-render.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"schemaViewData && schemaViewData[currentIndex] && schemaViewData[currentIndex].optionConfigDetailsMap && (!schemaViewData[currentIndex].optionConfigDetailsMap.disableTreeView || schemaViewData[currentIndex].optionConfigDetailsMap.disableTreeView == 'false')\">\n  <ion-card>\n    \n    <ion-card-header>\n        <ion-item lines=\"none\">\n          <div *ngIf=\"\n          (!schemaViewData[currentIndex].optionConfigDetailsMap.disableTreeView || schemaViewData[currentIndex].optionConfigDetailsMap.disableTreeView == 'false')  && ishaveChild(schemaViewData,currentIndex,eachassessableObject)\" (click)=\"RelatedChildRendercall()\">\n        \n              <div>\n                <ion-icon *ngIf=\"!isHaveChild\" name=\"caret-forward-outline\"></ion-icon>\n                <ion-icon *ngIf=\"isHaveChild\" name=\"caret-down-outline\"></ion-icon>\n              </div>\n          </div>\n        <ion-card-title >{{\n          eachassessableObject.Name\n        }}</ion-card-title>\n      </ion-item>\n    </ion-card-header>\n    <ion-row>\n      <ion-col\n        *ngFor=\"\n          let ObjectField of schemaViewData[currentIndex].ViewObjectFieldSet\n        \"\n      >\n        <p *ngIf=\"eachassessableObject && eachassessableObject[ObjectField.fieldPath]\">\n          {{ ObjectField.label }}<br />{{\n            eachassessableObject[ObjectField.fieldPath]\n          }}\n        </p>\n      </ion-col>\n    </ion-row>\n    <app-each-related-obj-button-render [eachassessableObject]=\"eachassessableObject\" [schemaViewData]=\"schemaViewData\" [currentIndex]=\"currentIndex\"></app-each-related-obj-button-render>\n    <app-each-ambutton-render [eachassessableObject]=\"eachassessableObject\" [schemaViewData]=\"schemaViewData\" [currentIndex]=\"currentIndex\"></app-each-ambutton-render>\n    <div *ngIf=\"schemaViewData && schemaViewData[currentIndex] && schemaViewData[currentIndex].optionConfigDetailsMap && (schemaViewData[currentIndex].optionConfigDetailsMap.disableTreeView && (schemaViewData[currentIndex].optionConfigDetailsMap.disableRelatedAM == 'false' || !schemaViewData[currentIndex].optionConfigDetailsMap.disableRelatedAM))\">\n      <div\n      \n      *ngIf=\"\n      schemaViewData &&\n      schemaViewData[currentIndex] &&\n      schemaViewData[currentIndex].amWithAssessableIdMap &&\n      schemaViewData[currentIndex].amWithAssessableIdMap[\n      eachassessableObject.Id\n      ] &&\n      schemaViewData[currentIndex].amWithAssessableIdMap[\n      eachassessableObject.Id\n      ].length > 0\n    \"\n      >\n      <div\n      *ngFor=\"\n      let am of schemaViewData[currentIndex].amWithAssessableIdMap[\n        eachassessableObject.Id]\n    \"\n      >\n      <app-each-amrender [eachamdetail]=\"am\" [eachassessableObject]=\"eachassessableObject\" [schemaViewData]=\"schemaViewData\" [currentIndex]=\"currentIndex\"></app-each-amrender>\n    </div>\n    </div>\n    </div>\n    </ion-card>\n  \n    <div  *ngIf=\"isHaveChild\">\n      <div\n        *ngIf=\"\n          schemaViewData &&\n          schemaViewData[currentIndex] &&\n          schemaViewData[currentIndex].relatedObjectsIndex &&\n          schemaViewData[currentIndex].relatedObjectsIndex.length > 0\n        \"\n      >\n        <ion-col\n          *ngFor=\"\n            let relatedObjectsIndex of schemaViewData[currentIndex]\n              .relatedObjectsIndex\n          \"\n        >\n        <div *ngIf=\"relatedObjectsIndex != 0 && eachassessableObject && eachassessableObject.Id && schemaViewData[relatedObjectsIndex] && schemaViewData[relatedObjectsIndex].childAssessableObjs && schemaViewData[relatedObjectsIndex].childAssessableObjs[eachassessableObject.Id]\">\n          <div *ngFor=\"let parentassObject of schemaViewData[relatedObjectsIndex].childAssessableObjs[eachassessableObject.Id]\">\n         \n          <app-each-object-render [eachassessableObject]=\"parentassObject\" [schemaViewData]=\"schemaViewData\" [currentIndex]=\"relatedObjectsIndex\" [isfromTreeView]=\"schemaViewData[relatedObjectsIndex].optionConfigDetailsMap.disableTreeView\"></app-each-object-render>\n        </div>\n      </div>\n        </ion-col>\n      </div>\n    </div>\n</div>\n<div *ngIf=\"schemaViewData && schemaViewData[currentIndex] && schemaViewData[currentIndex].optionConfigDetailsMap && (schemaViewData[currentIndex].optionConfigDetailsMap.disableTreeView && schemaViewData[currentIndex].optionConfigDetailsMap.disableTreeView == 'true')\">\n<ion-card>\n<ion-card-header>\n  <ion-item lines=\"none\">\n    <ion-card-title slot=\"start\">{{\n      eachassessableObject.Name\n    }}</ion-card-title>\n  </ion-item>\n</ion-card-header>\n<ion-row>\n  <ion-col\n    *ngFor=\"\n      let ObjectField of schemaViewData[currentIndex].ViewObjectFieldSet\n    \"\n  >\n    <p *ngIf=\"eachassessableObject && eachassessableObject[ObjectField.fieldPath]\">\n      {{ ObjectField.label }}<br />{{\n        eachassessableObject[ObjectField.fieldPath]\n      }}\n    </p>\n  </ion-col>\n</ion-row>\n<app-each-related-obj-button-render [eachassessableObject]=\"eachassessableObject\" [schemaViewData]=\"schemaViewData\" [currentIndex]=\"currentIndex\"></app-each-related-obj-button-render>\n<app-each-ambutton-render [eachassessableObject]=\"eachassessableObject\" [schemaViewData]=\"schemaViewData\" [currentIndex]=\"currentIndex\"></app-each-ambutton-render>\n<div *ngIf=\"schemaViewData && schemaViewData[currentIndex] && schemaViewData[currentIndex].optionConfigDetailsMap && (schemaViewData[currentIndex].optionConfigDetailsMap.disableTreeView && (schemaViewData[currentIndex].optionConfigDetailsMap.disableRelatedAM == 'false' || !schemaViewData[currentIndex].optionConfigDetailsMap.disableRelatedAM))\">\n  disable Am  false--- {{schemaViewData[currentIndex].optionConfigDetailsMap.disableRelatedAM}}\n  <div\n  \n  *ngIf=\"\n  schemaViewData &&\n  schemaViewData[currentIndex] &&\n  schemaViewData[currentIndex].amWithAssessableIdMap &&\n  schemaViewData[currentIndex].amWithAssessableIdMap[\n  eachassessableObject.Id\n  ] &&\n  schemaViewData[currentIndex].amWithAssessableIdMap[\n  eachassessableObject.Id\n  ].length > 0\n\"\n  >\n  <div\n  *ngFor=\"\n  let am of schemaViewData[currentIndex].amWithAssessableIdMap[\n    eachassessableObject.Id]\n\"\n  >\n  <app-each-amrender [eachamdetail]=\"am\" [eachassessableObject]=\"eachassessableObject\" [schemaViewData]=\"schemaViewData\" [currentIndex]=\"currentIndex\"></app-each-amrender>\n</div>\n</div>\n</div>\n</ion-card>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/svcomponents/each-related-obj-button-render/each-related-obj-button-render.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/svcomponents/each-related-obj-button-render/each-related-obj-button-render.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n        *ngIf=\"\n          schemaViewData &&\n          schemaViewData[currentIndex] &&\n          schemaViewData[currentIndex].relatedObjectsIndex &&\n          schemaViewData[currentIndex].relatedObjectsIndex.length > 0\n        \"\n      >\n        <ion-col\n          *ngFor=\"\n            let relatedObjectsIndex of schemaViewData[currentIndex]\n              .relatedObjectsIndex\n          \"\n        >\n          <ion-button\n            *ngIf=\"\n              schemaViewData &&\n              schemaViewData[relatedObjectsIndex] &&\n              schemaViewData[relatedObjectsIndex].childAssessableObjs &&\n              schemaViewData[relatedObjectsIndex].childAssessableObjs[\n                eachassessableObject.Id\n              ] &&\n              schemaViewData[relatedObjectsIndex].childAssessableObjs[\n                eachassessableObject.Id\n              ].length > 0\n            \"\n            (click)=\"$event.stopPropagation();relatedObject(schemaViewData,relatedObjectsIndex,eachassessableObject.Id,eachassessableObject,false,$event)\"\n          >\n            {{\n              schemaViewData[relatedObjectsIndex].childAssessableObjs[\n                eachassessableObject.Id\n              ].length\n            }}\n            {{\n              schemaViewData[relatedObjectsIndex].schemaTemplatepluralLabel\n            }}</ion-button\n          >\n        </ion-col>\n      </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/svcomponents/tree-view-enabled/tree-view-enabled.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/svcomponents/tree-view-enabled/tree-view-enabled.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"currentIndex == 0\">\n  <div *ngFor=\"let parentassObject of schemaViewData[currentIndex].assessableObjs\" (click)=\"allrelatedObject(schemaViewData,currentIndex,parentassObject.Id,parentassObject,false)\">\n  <app-each-object-render [eachassessableObject]=\"parentassObject\" [schemaViewData]=\"schemaViewData\" [currentIndex]=\"currentIndex\" [isfromTreeView]=\"true\"></app-each-object-render>\n\n</div>\n</div>\n<div *ngIf=\"currentIndex != 0 && parentId && schemaViewData[currentIndex] && schemaViewData[currentIndex].childAssessableObjs && schemaViewData[currentIndex].childAssessableObjs[parentId]\">\n  <div *ngFor=\"let parentassObject of schemaViewData[currentIndex].childAssessableObjs[parentId]\" (click)=\"allrelatedObject(schemaViewData,currentIndex,parentassObject.Id,parentassObject,false)\">\n    <app-each-object-render [eachassessableObject]=\"parentassObject\" [schemaViewData]=\"schemaViewData\" [currentIndex]=\"currentIndex\" [isfromTreeView]=\"true\"></app-each-object-render>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/svcomponents/tree-view-not-enabled/tree-view-not-enabled.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/svcomponents/tree-view-not-enabled/tree-view-not-enabled.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"currentIndex == 0\">\n  <div *ngFor=\"let parentassObject of schemaViewData[currentIndex].assessableObjs\" (click)=\"allrelatedObject(schemaViewData,currentIndex,parentassObject.Id,parentassObject,false)\">\n  <app-each-object-render [eachassessableObject]=\"parentassObject\" [schemaViewData]=\"schemaViewData\" [currentIndex]=\"currentIndex\" [isfromTreeView]=\"false\"></app-each-object-render>\n\n</div>\n</div>\n<div *ngIf=\"currentIndex != 0 && parentId && schemaViewData[currentIndex] && schemaViewData[currentIndex].childAssessableObjs && schemaViewData[currentIndex].childAssessableObjs[parentId]\">\n  <div *ngFor=\"let parentassObject of schemaViewData[currentIndex].childAssessableObjs[parentId]\"             (click)=\"allrelatedObject(schemaViewData,currentIndex,parentassObject.Id,parentassObject,false)\"\n  >\n    <app-each-object-render [eachassessableObject]=\"parentassObject\" [schemaViewData]=\"schemaViewData\" [currentIndex]=\"currentIndex\" [isfromTreeView]=\"false\"></app-each-object-render>\n  </div>\n  \n</div>");

/***/ }),

/***/ "./src/app/svcomponents/each-ambutton-render/each-ambutton-render.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/svcomponents/each-ambutton-render/each-ambutton-render.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N2Y29tcG9uZW50cy9lYWNoLWFtYnV0dG9uLXJlbmRlci9lYWNoLWFtYnV0dG9uLXJlbmRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/svcomponents/each-ambutton-render/each-ambutton-render.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/svcomponents/each-ambutton-render/each-ambutton-render.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EachAMButtonRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EachAMButtonRenderComponent", function() { return EachAMButtonRenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let EachAMButtonRenderComponent = class EachAMButtonRenderComponent {
    constructor(router) {
        this.router = router;
        var _this = this;
        console.log('EachAMButtonRenderComponent constructor', _this.eachassessableObject);
        console.log('EachAMButtonRenderComponentconstructor schemaViewData', _this.schemaViewData);
        console.log('EachAMButtonRenderComponent constructor currentIndex', _this.currentIndex);
    }
    ngOnInit() {
        var _this = this;
        console.log('EachAMButtonRenderComponent eachassessableObject', _this.eachassessableObject);
        console.log('EachAMButtonRenderComponent schemaViewData', _this.schemaViewData);
        console.log('EachAMButtonRenderComponent currentIndex', _this.currentIndex);
    }
    openRelatedAMsDetailPage(am) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('openRelatedAMsDetailPage', am);
            this.router.navigate(['/relate-amdetail-page', {
                    amData: JSON.stringify(am)
                }]);
        });
    }
};
EachAMButtonRenderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EachAMButtonRenderComponent.propDecorators = {
    eachassessableObject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    schemaViewData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currentIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
EachAMButtonRenderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-each-ambutton-render',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./each-ambutton-render.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/svcomponents/each-ambutton-render/each-ambutton-render.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./each-ambutton-render.component.scss */ "./src/app/svcomponents/each-ambutton-render/each-ambutton-render.component.scss")).default]
    })
], EachAMButtonRenderComponent);



/***/ }),

/***/ "./src/app/svcomponents/each-object-render/each-object-render.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/svcomponents/each-object-render/each-object-render.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N2Y29tcG9uZW50cy9lYWNoLW9iamVjdC1yZW5kZXIvZWFjaC1vYmplY3QtcmVuZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/svcomponents/each-object-render/each-object-render.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/svcomponents/each-object-render/each-object-render.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EachObjectRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EachObjectRenderComponent", function() { return EachObjectRenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_service_global_param_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/global-param.service */ "./src/app/service/global-param.service.ts");







let EachObjectRenderComponent = class EachObjectRenderComponent {
    constructor(zone, router, GlobalParamService, gestureCtrl, actionSheetCtrl) {
        this.zone = zone;
        this.router = router;
        this.GlobalParamService = GlobalParamService;
        this.gestureCtrl = gestureCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.isHaveChild = false;
        this.componentRenderSuccess = false;
        this.longPressActive = true;
    }
    ngOnInit() {
        var _this = this;
        console.log('EachObjectRenderComponent ngOnInit textthis.assessableObject', _this.eachassessableObject);
        console.log('EachObjectRenderComponent this.schemaViewData', _this.schemaViewData);
        console.log('EachObjectRenderComponent this.currentIndex', _this.currentIndex);
    }
    RelatedChildRendercall() {
        console.log('RelatedChildRendercall');
        var _this = this;
        if (this.isHaveChild) {
            this.isHaveChild = false;
        }
        else {
            this.isHaveChild = true;
        }
    }
    ishaveChild(schemaViewData, currentIndex, eachassessableObject) {
        // return new Promise((resolve, reject) => {
        var ishaveChild = false;
        if (schemaViewData &&
            schemaViewData[currentIndex] &&
            schemaViewData[currentIndex].relatedObjectsIndex &&
            schemaViewData[currentIndex].relatedObjectsIndex.length > 0) {
            Object.keys(schemaViewData[currentIndex]
                .relatedObjectsIndex).forEach(function (relatedObjectsIndex) {
                // console.log('relatedObjectsIndex',relatedObjectsIndex);
                var relatedIndex = schemaViewData[currentIndex]
                    .relatedObjectsIndex[relatedObjectsIndex];
                //console.log('relatedIndex',relatedIndex);
                if (schemaViewData &&
                    schemaViewData[relatedIndex] &&
                    schemaViewData[relatedIndex].childAssessableObjs &&
                    schemaViewData[relatedIndex].childAssessableObjs[eachassessableObject.Id] &&
                    schemaViewData[relatedIndex].childAssessableObjs[eachassessableObject.Id].length > 0) {
                    // console.log('ishaveChild',ishaveChild);
                    ishaveChild = true;
                    return ishaveChild;
                }
            });
            //console.log('outside loop ishaveChild',ishaveChild);
            return ishaveChild;
        }
        else {
            return ishaveChild;
        }
        //});
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit', this.cards);
        var cardArray = this.cards.toArray();
        for (let i = 0; i < cardArray.length; i++) {
            //this.cards.changes.subscribe(c => { c.toArray().forEach(card => { 
            const card = cardArray[i];
            console.log(":::::: THIS CARD HAS USE LONG PRESS: " + card);
            //let i = c.toArray().indexOf(card)
            let startTime = Date.now();
            const gesture = this.gestureCtrl.create({
                el: card.nativeElement,
                threshold: 0,
                gestureName: 'long-press',
                onStart: ev => {
                    this.longPressActive = true;
                    startTime = Date.now();
                    setTimeout(() => {
                        if (this.longPressActive === true) {
                            console.log('inside true');
                            this.actionSheetopen();
                            this.longPressActive = false;
                        }
                    }, 1000);
                },
                onEnd: ev => {
                    const duration = Date.now() - startTime;
                    if (duration < 1000) {
                        console.log('less than 100');
                        // this.navigate(this.assessableObjs[i], this.schemaViewData)
                        this.longPressActive = false;
                    }
                    else {
                        console.log('else than 100');
                        this.longPressActive = true;
                    }
                }
            });
            gesture.enable(true);
        }
        //}) 
    }
    actionSheetopen() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('actionSheetopen');
            let buttonArray = [];
            if (this.schemaViewData[0].optionConfigDetailsMap['disableRelatedObj'] !== 'false') {
                buttonArray.push({ text: 'Related Records',
                    handler: () => {
                        console.log('call here action sheet method all related obj');
                        this.allrelatedObject(this.schemaViewData, this.currentIndex, this.eachassessableObject.Id, this.eachassessableObject, false);
                    } });
            }
            if (this.schemaViewData[0].optionConfigDetailsMap['disableObjectAdd'] !== 'false') {
                buttonArray.push({ text: 'Add object',
                    handler: () => {
                        console.log('disableObjectAdd obj');
                    } });
            }
            if (true) {
                buttonArray.push({ text: 'Submit Feedback',
                    handler: () => {
                        console.log('obj');
                    } });
            }
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Actions',
                buttons: buttonArray,
            });
            yield actionSheet.present();
        });
    }
    allrelatedObject(schemaViewData1, relatedIndex1, parentId1, eachassessableObject1, isfrom1) {
        var _this = this;
        //here call common page 
        console.log('call from EachRelatedObjButtonRenderComponent schemaViewData', schemaViewData1);
        console.log('call from EachRelatedObjButtonRenderComponent currentIndex', relatedIndex1);
        console.log('call from EachRelatedObjButtonRenderComponent eachassessableObject', eachassessableObject1);
        console.log('call from EachRelatedObjButtonRenderComponent parentId', parentId1);
        console.log('isfrom from button', isfrom1);
        //  let parentnavigationExtras = {
        //   state: {
        //     schemaViewData:_this.schemaViewData,
        //     currentIndex:_this.currentIndex,
        //     parentId:_this.eachassessableObject.Id,
        //     eachassessableObject:_this.eachassessableObject,
        //     isFromback:false
        //   }
        // };
        // _this.index++;
        let navigationExtras = {
            state: {
                schemaViewData: schemaViewData1,
                currentIndex: relatedIndex1,
                parentId: eachassessableObject1.Id,
                eachassessableObject: eachassessableObject1,
                isFromback: isfrom1,
                isFrom: 'allRelatedcall'
            }
        };
        console.log('isfrom1', isfrom1);
        console.log('call from EachRelatedObjButtonRenderComponent navigationExtras', navigationExtras);
        //_this.zone.run(() => {
        // _this.router.navigate(['/related-object'], {
        //   relativeTo: _this.activatedRoute,
        //   queryParams: { index: _this.index, schemaViewData:JSON.stringify(schemaViewData),
        //     relatedIndex:relatedIndex,
        //     parentId:parentId, },
        //   queryParamsHandling: 'merge'
        // });
        if (!isfrom1) {
            _this.GlobalParamService.trackparamFormObjRedirect.push(navigationExtras);
        }
        _this.router.navigate(['/redirectpageforrelatedlevel-obj'], navigationExtras);
        //});
    }
};
EachObjectRenderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_global_param_service__WEBPACK_IMPORTED_MODULE_4__["GlobalParamService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["GestureController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }
];
EachObjectRenderComponent.propDecorators = {
    eachassessableObject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    schemaViewData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currentIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isfromTreeView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    cards: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] }]
};
EachObjectRenderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-each-object-render',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./each-object-render.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/svcomponents/each-object-render/each-object-render.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./each-object-render.component.scss */ "./src/app/svcomponents/each-object-render/each-object-render.component.scss")).default]
    })
], EachObjectRenderComponent);



/***/ }),

/***/ "./src/app/svcomponents/each-related-obj-button-render/each-related-obj-button-render.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/svcomponents/each-related-obj-button-render/each-related-obj-button-render.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N2Y29tcG9uZW50cy9lYWNoLXJlbGF0ZWQtb2JqLWJ1dHRvbi1yZW5kZXIvZWFjaC1yZWxhdGVkLW9iai1idXR0b24tcmVuZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/svcomponents/each-related-obj-button-render/each-related-obj-button-render.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/svcomponents/each-related-obj-button-render/each-related-obj-button-render.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: EachRelatedObjButtonRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EachRelatedObjButtonRenderComponent", function() { return EachRelatedObjButtonRenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_global_param_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/global-param.service */ "./src/app/service/global-param.service.ts");




let EachRelatedObjButtonRenderComponent = class EachRelatedObjButtonRenderComponent {
    constructor(router, GlobalParamService) {
        this.router = router;
        this.GlobalParamService = GlobalParamService;
    }
    ngOnInit() {
        var _this = this;
        console.log('EachRelatedObjButtonRenderComponent eachassessableObject', _this.eachassessableObject);
        console.log('EachRelatedObjButtonRenderComponent schemaViewData', _this.schemaViewData);
        console.log('EachRelatedObjButtonRenderComponent currentIndex', _this.currentIndex);
    }
    relatedObject(schemaViewData1, relatedIndex1, parentId1, eachassessableObject1, isfrom1) {
        var _this = this;
        //here call common page 
        console.log('call from EachRelatedObjButtonRenderComponent schemaViewData', schemaViewData1);
        console.log('call from EachRelatedObjButtonRenderComponent currentIndex', relatedIndex1);
        console.log('call from EachRelatedObjButtonRenderComponent eachassessableObject', eachassessableObject1);
        console.log('call from EachRelatedObjButtonRenderComponent parentId', parentId1);
        console.log('isfrom from button', isfrom1);
        console.log('call from EachRelatedObjButtonRenderComponent _this.schemaViewData', _this.schemaViewData);
        console.log('call from EachRelatedObjButtonRenderComponent _this.currentIndex', _this.currentIndex);
        console.log('call from EachRelatedObjButtonRenderComponent _this.eachassessableObject', _this.eachassessableObject);
        console.log('isfrom from button', isfrom1);
        //  let parentnavigationExtras = {
        //   state: {
        //     schemaViewData:_this.schemaViewData,
        //     currentIndex:_this.currentIndex,
        //     parentId:_this.eachassessableObject.Id,
        //     eachassessableObject:_this.eachassessableObject,
        //     isFromback:false
        //   }
        // };
        // _this.index++;
        let navigationExtras = {
            state: {
                schemaViewData: schemaViewData1,
                currentIndex: relatedIndex1,
                parentId: eachassessableObject1.Id,
                eachassessableObject: eachassessableObject1,
                isFromback: isfrom1,
                isFrom: 'objectButtoncall'
            }
        };
        console.log('isfrom1', isfrom1);
        console.log('call from EachRelatedObjButtonRenderComponent navigationExtras', navigationExtras);
        //_this.zone.run(() => {
        // _this.router.navigate(['/related-object'], {
        //   relativeTo: _this.activatedRoute,
        //   queryParams: { index: _this.index, schemaViewData:JSON.stringify(schemaViewData),
        //     relatedIndex:relatedIndex,
        //     parentId:parentId, },
        //   queryParamsHandling: 'merge'
        // });
        if (!isfrom1) {
            _this.GlobalParamService.trackparamFormObjRedirect.push(navigationExtras);
        }
        _this.router.navigate(['/redirectpageforrelatedlevel-obj'], navigationExtras);
        //});
    }
};
EachRelatedObjButtonRenderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_global_param_service__WEBPACK_IMPORTED_MODULE_3__["GlobalParamService"] }
];
EachRelatedObjButtonRenderComponent.propDecorators = {
    eachassessableObject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    schemaViewData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currentIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    parentId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isFromback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
EachRelatedObjButtonRenderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-each-related-obj-button-render',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./each-related-obj-button-render.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/svcomponents/each-related-obj-button-render/each-related-obj-button-render.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./each-related-obj-button-render.component.scss */ "./src/app/svcomponents/each-related-obj-button-render/each-related-obj-button-render.component.scss")).default]
    })
], EachRelatedObjButtonRenderComponent);



/***/ }),

/***/ "./src/app/svcomponents/tree-view-enabled/tree-view-enabled.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/svcomponents/tree-view-enabled/tree-view-enabled.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N2Y29tcG9uZW50cy90cmVlLXZpZXctZW5hYmxlZC90cmVlLXZpZXctZW5hYmxlZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/svcomponents/tree-view-enabled/tree-view-enabled.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/svcomponents/tree-view-enabled/tree-view-enabled.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TreeViewEnabledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeViewEnabledComponent", function() { return TreeViewEnabledComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_service_global_param_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/global-param.service */ "./src/app/service/global-param.service.ts");







let TreeViewEnabledComponent = class TreeViewEnabledComponent {
    constructor(zone, router, GlobalParamService, gestureCtrl, actionSheetCtrl) {
        this.zone = zone;
        this.router = router;
        this.GlobalParamService = GlobalParamService;
        this.gestureCtrl = gestureCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        var _this = this;
        console.log("Date tree-view-not-enabled  comp[onent].schemaViewData", _this.schemaViewData);
    }
    ngOnInit() {
        var _this = this;
        console.log("Date tree-view-not-enabled ngOnInit comp[onent].schemaViewData", _this.schemaViewData);
        console.log("currentIndex", _this.currentIndex);
    }
};
TreeViewEnabledComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_global_param_service__WEBPACK_IMPORTED_MODULE_4__["GlobalParamService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["GestureController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }
];
TreeViewEnabledComponent.propDecorators = {
    schemaViewData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currentIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    parentId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
TreeViewEnabledComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tree-view-enabled',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tree-view-enabled.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/svcomponents/tree-view-enabled/tree-view-enabled.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tree-view-enabled.component.scss */ "./src/app/svcomponents/tree-view-enabled/tree-view-enabled.component.scss")).default]
    })
], TreeViewEnabledComponent);



/***/ }),

/***/ "./src/app/svcomponents/tree-view-not-enabled/tree-view-not-enabled.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/svcomponents/tree-view-not-enabled/tree-view-not-enabled.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N2Y29tcG9uZW50cy90cmVlLXZpZXctbm90LWVuYWJsZWQvdHJlZS12aWV3LW5vdC1lbmFibGVkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/svcomponents/tree-view-not-enabled/tree-view-not-enabled.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/svcomponents/tree-view-not-enabled/tree-view-not-enabled.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TreeViewNotEnabledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeViewNotEnabledComponent", function() { return TreeViewNotEnabledComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_global_param_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/global-param.service */ "./src/app/service/global-param.service.ts");





let TreeViewNotEnabledComponent = class TreeViewNotEnabledComponent {
    constructor(zone, router, activatedRoute, GlobalParamService) {
        this.zone = zone;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.GlobalParamService = GlobalParamService;
        var _this = this;
        console.log("Date tree-view-not-enabled  comp[onent].schemaViewData", _this.schemaViewData);
        _this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        _this.router.onSameUrlNavigation = 'reload';
        console.log("currentIndex", _this.currentIndex);
    }
    ngOnInit() {
        var _this = this;
        console.log("Date tree-view-not-enabled ngOnInit comp[onent].schemaViewData", _this.schemaViewData);
        console.log("currentIndex", _this.currentIndex);
    }
    toNumber(value) {
        return parseInt(value);
    }
    allrelatedObject(schemaViewData1, relatedIndex1, parentId1, eachassessableObject1, isfrom1) {
        var _this = this;
        //here call common page 
        console.log('call from EachRelatedObjButtonRenderComponent schemaViewData', schemaViewData1);
        console.log('call from EachRelatedObjButtonRenderComponent currentIndex', relatedIndex1);
        console.log('call from EachRelatedObjButtonRenderComponent eachassessableObject', eachassessableObject1);
        console.log('call from EachRelatedObjButtonRenderComponent parentId', parentId1);
        console.log('isfrom from button', isfrom1);
        //  let parentnavigationExtras = {
        //   state: {
        //     schemaViewData:_this.schemaViewData,
        //     currentIndex:_this.currentIndex,
        //     parentId:_this.eachassessableObject.Id,
        //     eachassessableObject:_this.eachassessableObject,
        //     isFromback:false
        //   }
        // };
        // _this.index++;
        let navigationExtras = {
            state: {
                schemaViewData: schemaViewData1,
                currentIndex: relatedIndex1,
                parentId: eachassessableObject1.Id,
                eachassessableObject: eachassessableObject1,
                isFromback: isfrom1,
                isFrom: 'allRelatedcall'
            }
        };
        console.log('isfrom1', isfrom1);
        console.log('call from EachRelatedObjButtonRenderComponent navigationExtras', navigationExtras);
        //_this.zone.run(() => {
        // _this.router.navigate(['/related-object'], {
        //   relativeTo: _this.activatedRoute,
        //   queryParams: { index: _this.index, schemaViewData:JSON.stringify(schemaViewData),
        //     relatedIndex:relatedIndex,
        //     parentId:parentId, },
        //   queryParamsHandling: 'merge'
        // });
        if (!isfrom1) {
            _this.GlobalParamService.trackparamFormObjRedirect.push(navigationExtras);
        }
        _this.router.navigate(['/redirectpageforrelatedlevel-obj'], navigationExtras);
        //});
    }
};
TreeViewNotEnabledComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_global_param_service__WEBPACK_IMPORTED_MODULE_3__["GlobalParamService"] }
];
TreeViewNotEnabledComponent.propDecorators = {
    schemaViewData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currentIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    parentId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
TreeViewNotEnabledComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-tree-view-not-enabled",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tree-view-not-enabled.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/svcomponents/tree-view-not-enabled/tree-view-not-enabled.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tree-view-not-enabled.component.scss */ "./src/app/svcomponents/tree-view-not-enabled/tree-view-not-enabled.component.scss")).default]
    })
], TreeViewNotEnabledComponent);



/***/ })

}]);
//# sourceMappingURL=default~pages-objects-list-all-related-record-render-all-related-record-render-module~pages-objects-~439d3166-es2015.js.map