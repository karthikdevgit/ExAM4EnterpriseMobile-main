(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sv-redirectpage-sv-redirectpage-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/objects-list/sv-redirectpage/sv-redirectpage.page.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/objects-list/sv-redirectpage/sv-redirectpage.page.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesObjectsListSvRedirectpageSvRedirectpagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content style=\"background-color:white;opacity:0.5\">\n  <ion-spinner name=\"circles\"></ion-spinner>\n</ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/pages/objects-list/sv-redirectpage/sv-redirectpage-routing.module.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/objects-list/sv-redirectpage/sv-redirectpage-routing.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: SvRedirectpagePageRoutingModule */

    /***/
    function srcAppPagesObjectsListSvRedirectpageSvRedirectpageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SvRedirectpagePageRoutingModule", function () {
        return SvRedirectpagePageRoutingModule;
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


      var _sv_redirectpage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sv-redirectpage.page */
      "./src/app/pages/objects-list/sv-redirectpage/sv-redirectpage.page.ts");

      var routes = [{
        path: '',
        component: _sv_redirectpage_page__WEBPACK_IMPORTED_MODULE_3__["SvRedirectpagePage"]
      }];

      var SvRedirectpagePageRoutingModule = function SvRedirectpagePageRoutingModule() {
        _classCallCheck(this, SvRedirectpagePageRoutingModule);
      };

      SvRedirectpagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SvRedirectpagePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/objects-list/sv-redirectpage/sv-redirectpage.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/objects-list/sv-redirectpage/sv-redirectpage.module.ts ***!
      \******************************************************************************/

    /*! exports provided: SvRedirectpagePageModule */

    /***/
    function srcAppPagesObjectsListSvRedirectpageSvRedirectpageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SvRedirectpagePageModule", function () {
        return SvRedirectpagePageModule;
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


      var _sv_redirectpage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sv-redirectpage-routing.module */
      "./src/app/pages/objects-list/sv-redirectpage/sv-redirectpage-routing.module.ts");
      /* harmony import */


      var _sv_redirectpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sv-redirectpage.page */
      "./src/app/pages/objects-list/sv-redirectpage/sv-redirectpage.page.ts");

      var SvRedirectpagePageModule = function SvRedirectpagePageModule() {
        _classCallCheck(this, SvRedirectpagePageModule);
      };

      SvRedirectpagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sv_redirectpage_routing_module__WEBPACK_IMPORTED_MODULE_5__["SvRedirectpagePageRoutingModule"]],
        declarations: [_sv_redirectpage_page__WEBPACK_IMPORTED_MODULE_6__["SvRedirectpagePage"]]
      })], SvRedirectpagePageModule);
      /***/
    },

    /***/
    "./src/app/pages/objects-list/sv-redirectpage/sv-redirectpage.page.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/objects-list/sv-redirectpage/sv-redirectpage.page.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesObjectsListSvRedirectpageSvRedirectpagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29iamVjdHMtbGlzdC9zdi1yZWRpcmVjdHBhZ2Uvc3YtcmVkaXJlY3RwYWdlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/objects-list/sv-redirectpage/sv-redirectpage.page.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/objects-list/sv-redirectpage/sv-redirectpage.page.ts ***!
      \****************************************************************************/

    /*! exports provided: SvRedirectpagePage */

    /***/
    function srcAppPagesObjectsListSvRedirectpageSvRedirectpagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SvRedirectpagePage", function () {
        return SvRedirectpagePage;
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

      var SvRedirectpagePage = /*#__PURE__*/function () {
        function SvRedirectpagePage(zone, router, route) {
          var _this2 = this;

          _classCallCheck(this, SvRedirectpagePage);

          this.zone = zone;
          this.router = router;
          this.route = route;
          console.log('sv-redirectpage constructor call ');
          this.route.queryParams.subscribe(function (params) {
            console.log('RedirectpageforrelatedlevelObjPage call');
            var _this = _this2;
            console.log('_this.router', _this.router);
            _this.schemaViewData = _this.router.getCurrentNavigation().extras.state.schemaViewData;
            _this.currentSchemaViewDetail = _this.router.getCurrentNavigation().extras.state.currentSchemaViewDetail;
          });
        }

        _createClass(SvRedirectpagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('sv-redirectpage ngOnInit call ');
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            console.log('sv-redirectpage ionViewDidEnter call ');
            var navigationExtras = {
              state: {
                schemaViewData: _this.schemaViewData,
                currentSchemaViewDetail: _this.currentSchemaViewDetail
              }
            };
            console.log('navigationExtras', navigationExtras);
            this.zone.run(function () {
              _this.router.navigate(['/inspections-list'], navigationExtras);
            });
          }
        }]);

        return SvRedirectpagePage;
      }();

      SvRedirectpagePage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      };

      SvRedirectpagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sv-redirectpage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./sv-redirectpage.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/objects-list/sv-redirectpage/sv-redirectpage.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./sv-redirectpage.page.scss */
        "./src/app/pages/objects-list/sv-redirectpage/sv-redirectpage.page.scss"))["default"]]
      })], SvRedirectpagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sv-redirectpage-sv-redirectpage-module-es5.js.map