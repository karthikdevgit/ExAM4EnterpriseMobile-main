(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-related-ams-related-ams-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/related-ams/related-ams.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/related-ams/related-ams.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n   <!--ion-title>Assignment Managers for {{assessableObject.Name}}</ion-title-->\n   <ion-title>Assignment Managers for releated level</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div *ngIf=\"schemaViewData[level+1].amWithAssessableIdMap[assessableObject.AIM_Property__c] !== undefined\">\n    <ion-card *ngFor=\"let am of schemaViewData[level+1].amWithAssessableIdMap[assessableObject.AIM_Property__c]\" expand=\"block\">\n      <ion-card-header>\n        <ion-item lines=\"none\">\n          <ion-card-title slot=\"start\">{{assessableObject.Name}}</ion-card-title>\n          <ion-card-subtitle slot=\"end\">{{assessableObject.ExAM__Status__c}}</ion-card-subtitle>\n        </ion-item>\n      </ion-card-header>\n        <!-- <ion-row>\n          <ion-col>\n            <p>{{schemaViewData[0].ViewObjectFieldSet[9].label}}<br>{{assessableObject.ExAM_Inspection__Inspection_Unsuccessful_Reason__c}}</p>\n          </ion-col>\n          <ion-col>\n            <p>{{schemaViewData[0].ViewObjectFieldSet[10].label}}<br>{{assessableObject.ExAM_Inspection__Total_Number_of_Buildings__c}}</p>\n          </ion-col>\n          <ion-col>\n            <p>{{schemaViewData[0].ViewObjectFieldSet[11].label}}<br>{{assessableObject.ExAM_Inspection__Total_Number_of_Units__c}}</p>\n          </ion-col>\n        </ion-row> -->\n        <!--ion-row>\n          <ion-col>\n            <p>{{schemaViewData[0].ViewObjectFieldSet[12].label}}<br>{{formatDate(assessableObject.ExAM__Field_Start_Time__c)}}</p>\n          </ion-col>\n          <ion-col>\n            <p>{{schemaViewData[0].ViewObjectFieldSet[13].label}}<br>{{formatDate(assessableObject.ExAM__Field_End_Time__c)}}</p>\n          </ion-col>\n        </ion-row>\n        <!-- <ion-buttons slot=\"end\">\n          <ion-button (click)=\"presentActions()\">      \n            <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n          </ion-button> -->\n        <!-- </ion-buttons> -->\n        <!--ion-row>\n  \n          <!-- <ion-col>\n            <ion-button *ngIf=\"properties[assessableObject.Id].length > 1\" expand=\"block\">{{properties[assessableObject.Id].length}} Properties</ion-button>\n            <ion-button *ngIf=\"properties[assessableObject.Id].length === 1\" expand=\"block\">1 Property</ion-button>\n          </ion-col>\n        \n          <ion-col>\n            <ion-button *ngFor=\"let a of schemaViewData[0].amWithAssessableIdMap[assessableObject.Id]\" expand=\"block\">{{a.ExAM__Assessment_Template_Type__c}}</ion-button>\n          </ion-col> -->\n        <!--/ion-row> \n    </ion-card>\n  </div>\n  <div *ngIf=\"schemaViewData[level+1].amWithAssessableIdMap[assessableObject.AIM_Property__c] === undefined\">\n    <div>\n      <ion-label style=\"height: 100%; display: flex; align-items: center; justify-content: center;\">No records found</ion-label>\n    </div>\n  </div> -->\n\n<div>\n  <ion-card *ngFor=\"let am of amListData\" (click)=openRelatedAMsDetailPage(am) expand=\"block\">\n    <ion-card-header>\n      <ion-item lines=\"none\">\n        <ion-card-title slot=\"start\">{{am.Name}}</ion-card-title>\n        <ion-card-subtitle slot=\"end\">{{am.ExAM__Status__c}}</ion-card-subtitle>\n      </ion-item>\n    </ion-card-header>\n    </ion-card>\n</div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/related-ams/related-ams-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/related-ams/related-ams-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RelatedAmsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedAmsPageRoutingModule", function() { return RelatedAmsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _related_ams_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./related-ams.page */ "./src/app/pages/related-ams/related-ams.page.ts");




const routes = [
    {
        path: '',
        component: _related_ams_page__WEBPACK_IMPORTED_MODULE_3__["RelatedAmsPage"]
    }
];
let RelatedAmsPageRoutingModule = class RelatedAmsPageRoutingModule {
};
RelatedAmsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RelatedAmsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/related-ams/related-ams.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/related-ams/related-ams.module.ts ***!
  \*********************************************************/
/*! exports provided: RelatedAmsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedAmsPageModule", function() { return RelatedAmsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _related_ams_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./related-ams-routing.module */ "./src/app/pages/related-ams/related-ams-routing.module.ts");
/* harmony import */ var _related_ams_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./related-ams.page */ "./src/app/pages/related-ams/related-ams.page.ts");







let RelatedAmsPageModule = class RelatedAmsPageModule {
};
RelatedAmsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _related_ams_routing_module__WEBPACK_IMPORTED_MODULE_5__["RelatedAmsPageRoutingModule"]
        ],
        declarations: [_related_ams_page__WEBPACK_IMPORTED_MODULE_6__["RelatedAmsPage"]]
    })
], RelatedAmsPageModule);



/***/ }),

/***/ "./src/app/pages/related-ams/related-ams.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/related-ams/related-ams.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlbGF0ZWQtYW1zL3JlbGF0ZWQtYW1zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/related-ams/related-ams.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/related-ams/related-ams.page.ts ***!
  \*******************************************************/
/*! exports provided: RelatedAmsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedAmsPage", function() { return RelatedAmsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




let RelatedAmsPage = class RelatedAmsPage {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        console.log(' this.activatedRoute', this.activatedRoute);
        //this.assessableObject = JSON.parse(this.activatedRoute.snapshot.paramMap.get('assessableObject'));
        // this.schemaViewData = JSON.parse(this.activatedRoute.snapshot.paramMap.get('schemaViewData'));
        this.level = JSON.parse(this.activatedRoute.snapshot.paramMap.get('level'));
        this.amListData = JSON.parse(this.activatedRoute.snapshot.paramMap.get('amListData'));
        console.log(' this.amListData', this.amListData);
    }
    ngOnInit() {
    }
    formatDate(date) {
        return date ? moment__WEBPACK_IMPORTED_MODULE_3__(date).format('YYYY-MM-DD') : "";
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
RelatedAmsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
RelatedAmsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-related-ams',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./related-ams.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/related-ams/related-ams.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./related-ams.page.scss */ "./src/app/pages/related-ams/related-ams.page.scss")).default]
    })
], RelatedAmsPage);



/***/ })

}]);
//# sourceMappingURL=pages-related-ams-related-ams-module-es2015.js.map