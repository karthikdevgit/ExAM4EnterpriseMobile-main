(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-objects-details-objects-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/objects-details/objects-details.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/objects-details/objects-details.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>{{name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let a of assessableObjs\">\n    <ion-card-header>\n      <ion-item lines=\"none\">\n        <ion-card-title slot=\"start\">{{a.ExAM_AIM__Alias__c === undefined ? '': a.ExAM_AIM__Alias__c}}</ion-card-title>\n        <ion-card-subtitle slot=\"start\">{{a.Name}}</ion-card-subtitle>\n      </ion-item>\n      <ion-row>\n        <div *ngIf = \"childObjs[a.Id] !== undefined\">\n          <ion-button *ngIf=\"childObjs[a.Id].length > 1\" expand=\"block\">{{childObjs[a.Id].length}} {{childLabelPlural}}</ion-button>\n          <ion-button *ngIf=\"childObjs[a.Id].length === 1\" expand=\"block\">1 {{childLabel}}</ion-button>\n  \n          <ion-button *ngFor=\"let a of amWithassessableIDMap\" expand=\"block\">{{a.ExAM__Assessment_Template_Type__c}}</ion-button>\n  \n        </div>\n        <ion-col>\n          <p>{{schemaViewData[level+1].ViewObjectFieldSet[1].label}}<br></p>\n        </ion-col>\n        <ion-col>\n          <p>{{schemaViewData[level+1].ViewObjectFieldSet[2].label}}<br></p>\n        </ion-col>\n        <ion-col>\n          <p>{{schemaViewData[level+1].ViewObjectFieldSet[3].label}}<br>{{a.RecordType.Name}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/objects-details/objects-details-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/objects-details/objects-details-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ObjectsDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectsDetailsPageRoutingModule", function() { return ObjectsDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _objects_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects-details.page */ "./src/app/pages/objects-details/objects-details.page.ts");




const routes = [
    {
        path: '',
        component: _objects_details_page__WEBPACK_IMPORTED_MODULE_3__["ObjectsDetailsPage"]
    }
];
let ObjectsDetailsPageRoutingModule = class ObjectsDetailsPageRoutingModule {
};
ObjectsDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ObjectsDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/objects-details/objects-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/objects-details/objects-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: ObjectsDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectsDetailsPageModule", function() { return ObjectsDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _objects_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objects-details-routing.module */ "./src/app/pages/objects-details/objects-details-routing.module.ts");
/* harmony import */ var _objects_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./objects-details.page */ "./src/app/pages/objects-details/objects-details.page.ts");







let ObjectsDetailsPageModule = class ObjectsDetailsPageModule {
};
ObjectsDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _objects_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ObjectsDetailsPageRoutingModule"]
        ],
        declarations: [_objects_details_page__WEBPACK_IMPORTED_MODULE_6__["ObjectsDetailsPage"]]
    })
], ObjectsDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/objects-details/objects-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/objects-details/objects-details.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29iamVjdHMtZGV0YWlscy9vYmplY3RzLWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/objects-details/objects-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/objects-details/objects-details.page.ts ***!
  \***************************************************************/
/*! exports provided: ObjectsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectsDetailsPage", function() { return ObjectsDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _objects_list_view_details_view_details_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../objects-list/view-details/view-details.page */ "./src/app/pages/objects-list/view-details/view-details.page.ts");
/* harmony import */ var _objects_list_edit_details_edit_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../objects-list/edit-details/edit-details.page */ "./src/app/pages/objects-list/edit-details/edit-details.page.ts");






let ObjectsDetailsPage = class ObjectsDetailsPage {
    constructor(router, activatedRoute, gestureCtrl, actionSheetCtrl, modalController) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.gestureCtrl = gestureCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalController = modalController;
        this.assessableObjs = [];
        this.amWithassessableIDMap = [];
        this.longPressActive = true;
        this.assessableObject = JSON.parse(this.activatedRoute.snapshot.paramMap.get('assessableObject'));
        this.schemaViewData = JSON.parse(this.activatedRoute.snapshot.paramMap.get('schemaViewData'));
        this.feedback = JSON.parse(this.activatedRoute.snapshot.paramMap.get('feedback'));
        this.level = JSON.parse(this.activatedRoute.snapshot.paramMap.get('level'));
        this.name = this.assessableObject.Name;
        this.assessableObjs = this.schemaViewData[this.level + 1].childAssessableObjs[this.assessableObject.Id];
        this.amWithassessableIDMap = this.schemaViewData[this.level + 1].amWithAssessableIdMap[this.assessableObject.AIM_Property__c];
        this.childObjs = this.schemaViewData[this.level + 2].childAssessableObjs;
        this.childLabel = this.schemaViewData[this.level + 2].schemaTemplateobjectLabel;
        this.childLabelPlural = this.schemaViewData[this.level + 2].schemaTemplatepluralLabel;
    }
    navigate(assessableObjs, schemaViewData, level) {
        if (level + 3 < this.schemaViewData.length) {
            this.router.navigate(['/objects-details', {
                    assessableObject: JSON.stringify(assessableObjs),
                    schemaViewData: JSON.stringify(schemaViewData),
                    level: JSON.stringify(++level)
                }]);
        }
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.cards.forEach((card, index) => {
            console.log(":::::: DETAILS CARD HAS USE LONG PRESS: " + card);
            let startTime = Date.now();
            const gesture = this.gestureCtrl.create({
                el: card['el'],
                threshold: 0,
                gestureName: 'long-press',
                onStart: ev => {
                    startTime = Date.now();
                    setTimeout(() => {
                        if (this.longPressActive === true) {
                            this.presentActions(this.schemaViewData, this.assessableObjs[index]);
                            this.longPressActive = false;
                        }
                    }, 1000);
                },
                onEnd: ev => {
                    const duration = Date.now() - startTime;
                    if (duration < 1000) {
                        this.navigate(this.assessableObjs[index], this.schemaViewData, this.level);
                        this.longPressActive = false;
                    }
                    else {
                        this.longPressActive = true;
                    }
                }
            });
            gesture.enable(true);
        });
    }
    presentActions(schemaViewData, assessableObject) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let optionConfigDetailsMap = schemaViewData[0].optionConfigDetailsMap;
            let buttonArray = [];
            buttonArray.push({ text: 'View Details',
                handler: () => {
                    this.openViewDetails(assessableObject, schemaViewData);
                } });
            if (optionConfigDetailsMap['disableAddAM'] !== 'false') {
            }
            if (optionConfigDetailsMap['disableEditAM'] !== 'false') {
                buttonArray.push({ text: 'Edit ' + schemaViewData[0].schemaTemplateobjectLabel,
                    handler: () => {
                    } });
            }
            if (optionConfigDetailsMap['disableObjectAdd'] !== 'false') {
                buttonArray.push({ text: 'Create ' + this.childLabel,
                    handler: () => {
                    } });
            }
            if (optionConfigDetailsMap['disableObjectEdit'] !== 'false') {
                buttonArray.push({ text: 'Edit ' + this.childLabel,
                    handler: () => {
                        this.openEditDetails(assessableObject, schemaViewData);
                    } });
            }
            if (optionConfigDetailsMap['disableRelatedObj'] !== 'false') {
                buttonArray.push({ text: 'Related Records',
                    handler: () => {
                    } });
            }
            if (optionConfigDetailsMap['disableRelatedAM'] !== 'false') {
                buttonArray.push({ text: 'Related Assignment Managers',
                    handler: () => {
                        this.openRelatedAMs(assessableObject, schemaViewData);
                    } });
            }
            if (this.feedback === false) {
                buttonArray.push({ text: 'Submit Feedback',
                    handler: () => {
                    } });
            }
            // for(let i=0;i < Object.keys(wrapperArrayButton).length;i++){
            //     let tempval = Object.values(wrapperArrayButton)[i].wrappervalue;
            //     if(isSupportSchemaViewOptionsChange && $scope.optionConfigDetailsMap[tempval] === "true"){
            //         buttonArray.push(Object.values(wrapperArrayButton)[i]);
            //     }
            //     else if(!isSupportSchemaViewOptionsChange && $scope.optionConfigDetailsMap[tempval] === "false"){
            //         buttonArray.push(Object.values(wrapperArrayButton)[i]);
            //     }
            // }
            // $scope.AMTreeViewMenu = buttonArray;
            // $scope.AMDetail = angular.copy(am);
            // $scope.schemadetailAM = angular.copy(schemadetail);
            // $scope.currentInd = angular.copy(currentIndex);
            // const actionSheet = await this.actionSheetCtrl.create({
            //      buttons:buttonArray,
            //      header: 'Actions for '+ assesableObject.Inspector_Logged_In__c,
            //      buttonClicked:function(index) {
            //          if(index === 0){
            //             var SchemaSortQuerySpec = navigator.smartstore.buildExactQuerySpec("valueName","schemaViewObjectAndAMSorting",1);
            //             navigator.smartstore.querySoup("LocalConfigurationData", SchemaSortQuerySpec, function(LocalConfigData) {
            //                 if(LocalConfigData.totalEntries){
            //                     if(LocalConfigData.currentPageOrderedEntries && LocalConfigData.currentPageOrderedEntries[0]){
            //                         if(LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[$scope.currentschemaviewId]){
            //                             if(LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[$scope.currentschemaviewId][$scope.currentschemaIndexposition] &&  LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[$scope.currentschemaviewId][$scope.currentschemaIndexposition]['AMFieldSet']){
            //                                 $scope.AMFieldsets = LocalConfigData.currentPageOrderedEntries[0].schemaSortObj[$scope.currentschemaviewId][$scope.currentschemaIndexposition]['AMFieldSet'];
            //                             }
            //                         }
            //                     }
            //                 }
            //                 $scope.viewDetailForAM($scope.AMFieldsets,am,$scope.sortObjName);
            //             });
            //             showAMActionSheet();
            //          }
            //          if(buttonArray[index].wrappervalue === 'disableEditAM'){
            //              $scope.SchemaTreeViewAMEdit(am,currentSchema,currentIndex);
            //              showAMActionSheet();
            //          }
            //      }
            //  });
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Actions',
                buttons: buttonArray,
            });
            yield actionSheet.present();
        });
    }
    openViewDetails(assessableObject, schemaViewData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _objects_list_view_details_view_details_page__WEBPACK_IMPORTED_MODULE_4__["ViewDetailsPage"],
                componentProps: {
                    assessableObject: assessableObject,
                    schemaViewData: schemaViewData
                }
            });
            modal.present();
        });
    }
    openEditDetails(assessableObject, schemaViewData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _objects_list_edit_details_edit_details_page__WEBPACK_IMPORTED_MODULE_5__["EditDetailsPage"],
                componentProps: {
                    assessableObject: assessableObject,
                    schemaViewData: schemaViewData
                }
            });
            modal.present();
        });
    }
    openRelatedAMs(assessableObject, schemaViewData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['/related-ams', {
                    assessableObject: JSON.stringify(assessableObject),
                    schemaViewData: JSON.stringify(schemaViewData),
                    level: 0
                }]);
        });
    }
};
ObjectsDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["GestureController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
ObjectsDetailsPage.propDecorators = {
    cards: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"],] }]
};
ObjectsDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-objects-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./objects-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/objects-details/objects-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./objects-details.page.scss */ "./src/app/pages/objects-details/objects-details.page.scss")).default]
    })
], ObjectsDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-objects-details-objects-details-module-es2015.js.map