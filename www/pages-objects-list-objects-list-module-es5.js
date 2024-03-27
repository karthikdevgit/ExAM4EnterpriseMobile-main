(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-objects-list-objects-list-module"], {
    /***/
    "./src/app/pages/objects-list/objects-list-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/objects-list/objects-list-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ObjectsListPageRoutingModule */

    /***/
    function srcAppPagesObjectsListObjectsListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObjectsListPageRoutingModule", function () {
        return ObjectsListPageRoutingModule;
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


      var _objects_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./objects-list.page */
      "./src/app/pages/objects-list/objects-list.page.ts");

      var routes = [{
        path: '',
        component: _objects_list_page__WEBPACK_IMPORTED_MODULE_3__["ObjectsListPage"]
      }, {
        path: 'view-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | view-details-view-details-module */
          "view-details-view-details-module").then(__webpack_require__.bind(null,
          /*! ./view-details/view-details.module */
          "./src/app/pages/objects-list/view-details/view-details.module.ts")).then(function (m) {
            return m.ViewDetailsPageModule;
          });
        }
      }, {
        path: 'edit-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | edit-details-edit-details-module */
          "edit-details-edit-details-module").then(__webpack_require__.bind(null,
          /*! ./edit-details/edit-details.module */
          "./src/app/pages/objects-list/edit-details/edit-details.module.ts")).then(function (m) {
            return m.EditDetailsPageModule;
          });
        }
      }, {
        path: 'related-object',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | related-object-related-object-module */
          "default~pages-objects-list-related-object-related-object-module~related-object-related-object-module").then(__webpack_require__.bind(null,
          /*! ./related-object/related-object.module */
          "./src/app/pages/objects-list/related-object/related-object.module.ts")).then(function (m) {
            return m.RelatedObjectPageModule;
          });
        }
      }, {
        path: 'redirectpageforrelatedlevel-obj',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | redirectpageforrelatedlevel-obj-redirectpageforrelatedlevel-obj-module */
          "redirectpageforrelatedlevel-obj-redirectpageforrelatedlevel-obj-module").then(__webpack_require__.bind(null,
          /*! ./redirectpageforrelatedlevel-obj/redirectpageforrelatedlevel-obj.module */
          "./src/app/pages/objects-list/redirectpageforrelatedlevel-obj/redirectpageforrelatedlevel-obj.module.ts")).then(function (m) {
            return m.RedirectpageforrelatedlevelObjPageModule;
          });
        }
      }, {
        path: 'all-related-record-render',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | all-related-record-render-all-related-record-render-module */
          "common").then(__webpack_require__.bind(null,
          /*! ./all-related-record-render/all-related-record-render.module */
          "./src/app/pages/objects-list/all-related-record-render/all-related-record-render.module.ts")).then(function (m) {
            return m.AllRelatedRecordRenderPageModule;
          });
        }
      }, {
        path: 'sv-redirectpage',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | sv-redirectpage-sv-redirectpage-module */
          "sv-redirectpage-sv-redirectpage-module").then(__webpack_require__.bind(null,
          /*! ./sv-redirectpage/sv-redirectpage.module */
          "./src/app/pages/objects-list/sv-redirectpage/sv-redirectpage.module.ts")).then(function (m) {
            return m.SvRedirectpagePageModule;
          });
        }
      }];

      var ObjectsListPageRoutingModule = function ObjectsListPageRoutingModule() {
        _classCallCheck(this, ObjectsListPageRoutingModule);
      };

      ObjectsListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ObjectsListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/objects-list/objects-list.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/objects-list/objects-list.module.ts ***!
      \***********************************************************/

    /*! exports provided: ObjectsListPageModule */

    /***/
    function srcAppPagesObjectsListObjectsListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObjectsListPageModule", function () {
        return ObjectsListPageModule;
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


      var _objects_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./objects-list-routing.module */
      "./src/app/pages/objects-list/objects-list-routing.module.ts");
      /* harmony import */


      var _objects_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./objects-list.page */
      "./src/app/pages/objects-list/objects-list.page.ts");
      /* harmony import */


      var src_app_svcomponents_tree_view_not_enabled_tree_view_not_enabled_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/svcomponents/tree-view-not-enabled/tree-view-not-enabled.component */
      "./src/app/svcomponents/tree-view-not-enabled/tree-view-not-enabled.component.ts");
      /* harmony import */


      var src_app_svcomponents_each_object_render_each_object_render_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/svcomponents/each-object-render/each-object-render.component */
      "./src/app/svcomponents/each-object-render/each-object-render.component.ts");
      /* harmony import */


      var src_app_svcomponents_each_related_obj_button_render_each_related_obj_button_render_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/svcomponents/each-related-obj-button-render/each-related-obj-button-render.component */
      "./src/app/svcomponents/each-related-obj-button-render/each-related-obj-button-render.component.ts");
      /* harmony import */


      var src_app_svcomponents_each_ambutton_render_each_ambutton_render_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/svcomponents/each-ambutton-render/each-ambutton-render.component */
      "./src/app/svcomponents/each-ambutton-render/each-ambutton-render.component.ts");
      /* harmony import */


      var src_app_svcomponents_tree_view_enabled_tree_view_enabled_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/svcomponents/tree-view-enabled/tree-view-enabled.component */
      "./src/app/svcomponents/tree-view-enabled/tree-view-enabled.component.ts");
      /* harmony import */


      var src_app_svcomponents_schema_view_select_schema_view_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/svcomponents/schema-view-select/schema-view-select.component */
      "./src/app/svcomponents/schema-view-select/schema-view-select.component.ts");
      /* harmony import */


      var src_app_svcomponents_each_amrender_each_amrender_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/svcomponents/each-amrender/each-amrender.component */
      "./src/app/svcomponents/each-amrender/each-amrender.component.ts");

      var ObjectsListPageModule = function ObjectsListPageModule() {
        _classCallCheck(this, ObjectsListPageModule);
      };

      ObjectsListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _objects_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ObjectsListPageRoutingModule"]],
        declarations: [_objects_list_page__WEBPACK_IMPORTED_MODULE_6__["ObjectsListPage"], src_app_svcomponents_tree_view_not_enabled_tree_view_not_enabled_component__WEBPACK_IMPORTED_MODULE_7__["TreeViewNotEnabledComponent"], src_app_svcomponents_each_object_render_each_object_render_component__WEBPACK_IMPORTED_MODULE_8__["EachObjectRenderComponent"], src_app_svcomponents_each_related_obj_button_render_each_related_obj_button_render_component__WEBPACK_IMPORTED_MODULE_9__["EachRelatedObjButtonRenderComponent"], src_app_svcomponents_each_ambutton_render_each_ambutton_render_component__WEBPACK_IMPORTED_MODULE_10__["EachAMButtonRenderComponent"], src_app_svcomponents_tree_view_enabled_tree_view_enabled_component__WEBPACK_IMPORTED_MODULE_11__["TreeViewEnabledComponent"], src_app_svcomponents_schema_view_select_schema_view_select_component__WEBPACK_IMPORTED_MODULE_12__["SchemaViewSelectComponent"], src_app_svcomponents_each_amrender_each_amrender_component__WEBPACK_IMPORTED_MODULE_13__["EachAMRenderComponent"]]
      })], ObjectsListPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-objects-list-objects-list-module-es5.js.map