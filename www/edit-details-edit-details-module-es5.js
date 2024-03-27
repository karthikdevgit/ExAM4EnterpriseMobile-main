(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-details-edit-details-module"], {
    /***/
    "./src/app/pages/objects-list/edit-details/edit-details-routing.module.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/objects-list/edit-details/edit-details-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: EditDetailsPageRoutingModule */

    /***/
    function srcAppPagesObjectsListEditDetailsEditDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditDetailsPageRoutingModule", function () {
        return EditDetailsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _edit_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-details.page */
      "./src/app/pages/objects-list/edit-details/edit-details.page.ts");

      var routes = [{
        path: '',
        component: _edit_details_page__WEBPACK_IMPORTED_MODULE_3__["EditDetailsPage"]
      }];

      var EditDetailsPageRoutingModule = function EditDetailsPageRoutingModule() {
        _classCallCheck(this, EditDetailsPageRoutingModule);
      };

      EditDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditDetailsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/objects-list/edit-details/edit-details.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/pages/objects-list/edit-details/edit-details.module.ts ***!
      \************************************************************************/

    /*! exports provided: EditDetailsPageModule */

    /***/
    function srcAppPagesObjectsListEditDetailsEditDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditDetailsPageModule", function () {
        return EditDetailsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _edit_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-details-routing.module */
      "./src/app/pages/objects-list/edit-details/edit-details-routing.module.ts");
      /* harmony import */


      var _edit_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-details.page */
      "./src/app/pages/objects-list/edit-details/edit-details.page.ts");

      var EditDetailsPageModule = function EditDetailsPageModule() {
        _classCallCheck(this, EditDetailsPageModule);
      };

      EditDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditDetailsPageRoutingModule"]],
        declarations: [_edit_details_page__WEBPACK_IMPORTED_MODULE_6__["EditDetailsPage"]]
      })], EditDetailsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=edit-details-edit-details-module-es5.js.map