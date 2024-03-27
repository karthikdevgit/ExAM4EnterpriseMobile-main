(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-related-records-related-records-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/related-records/related-records.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/related-records/related-records.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>related-records</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/related-records/related-records-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/related-records/related-records-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: RelatedRecordsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedRecordsPageRoutingModule", function() { return RelatedRecordsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _related_records_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./related-records.page */ "./src/app/pages/related-records/related-records.page.ts");




const routes = [
    {
        path: '',
        component: _related_records_page__WEBPACK_IMPORTED_MODULE_3__["RelatedRecordsPage"]
    }
];
let RelatedRecordsPageRoutingModule = class RelatedRecordsPageRoutingModule {
};
RelatedRecordsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RelatedRecordsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/related-records/related-records.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/related-records/related-records.module.ts ***!
  \*****************************************************************/
/*! exports provided: RelatedRecordsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedRecordsPageModule", function() { return RelatedRecordsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _related_records_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./related-records-routing.module */ "./src/app/pages/related-records/related-records-routing.module.ts");
/* harmony import */ var _related_records_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./related-records.page */ "./src/app/pages/related-records/related-records.page.ts");







let RelatedRecordsPageModule = class RelatedRecordsPageModule {
};
RelatedRecordsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _related_records_routing_module__WEBPACK_IMPORTED_MODULE_5__["RelatedRecordsPageRoutingModule"]
        ],
        declarations: [_related_records_page__WEBPACK_IMPORTED_MODULE_6__["RelatedRecordsPage"]]
    })
], RelatedRecordsPageModule);



/***/ }),

/***/ "./src/app/pages/related-records/related-records.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/related-records/related-records.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlbGF0ZWQtcmVjb3Jkcy9yZWxhdGVkLXJlY29yZHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/related-records/related-records.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/related-records/related-records.page.ts ***!
  \***************************************************************/
/*! exports provided: RelatedRecordsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedRecordsPage", function() { return RelatedRecordsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let RelatedRecordsPage = class RelatedRecordsPage {
    constructor() { }
    ngOnInit() {
    }
};
RelatedRecordsPage.ctorParameters = () => [];
RelatedRecordsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-related-records',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./related-records.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/related-records/related-records.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./related-records.page.scss */ "./src/app/pages/related-records/related-records.page.scss")).default]
    })
], RelatedRecordsPage);



/***/ })

}]);
//# sourceMappingURL=pages-related-records-related-records-module-es2015.js.map