(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-objects-list-related-object-related-object-module~related-object-related-object-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/objects-list/related-object/related-object.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/objects-list/related-object/related-object.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"previousRleatedScreen()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>RelatedObject</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"schemaViewData && schemaViewData[relatedIndex] && schemaViewData[relatedIndex].optionConfigDetailsMap && (schemaViewData[relatedIndex].optionConfigDetailsMap.disableTreeView && schemaViewData[relatedIndex].optionConfigDetailsMap.disableTreeView == 'true')\">\n\n    <app-tree-view-not-enabled  [schemaViewData]=\"schemaViewData\" [currentIndex]=\"relatedIndex\"  [parentId]=\"parentId\"></app-tree-view-not-enabled>\n  </div>\n  <div *ngIf=\"schemaViewData && schemaViewData[relatedIndex] && schemaViewData[relatedIndex].optionConfigDetailsMap && (!schemaViewData[relatedIndex].optionConfigDetailsMap.disableTreeView || schemaViewData[relatedIndex].optionConfigDetailsMap.disableTreeView == 'false')\">\n  \n    <app-tree-view-enabled  [schemaViewData]=\"schemaViewData\" [currentIndex]=\"relatedIndex\"  [parentId]=\"parentId\"></app-tree-view-enabled>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/objects-list/related-object/related-object-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/objects-list/related-object/related-object-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: RelatedObjectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedObjectPageRoutingModule", function() { return RelatedObjectPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _related_object_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./related-object.page */ "./src/app/pages/objects-list/related-object/related-object.page.ts");




const routes = [
    {
        path: '',
        component: _related_object_page__WEBPACK_IMPORTED_MODULE_3__["RelatedObjectPage"]
    }
];
let RelatedObjectPageRoutingModule = class RelatedObjectPageRoutingModule {
};
RelatedObjectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RelatedObjectPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/objects-list/related-object/related-object.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/objects-list/related-object/related-object.module.ts ***!
  \****************************************************************************/
/*! exports provided: RelatedObjectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedObjectPageModule", function() { return RelatedObjectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _related_object_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./related-object-routing.module */ "./src/app/pages/objects-list/related-object/related-object-routing.module.ts");
/* harmony import */ var _related_object_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./related-object.page */ "./src/app/pages/objects-list/related-object/related-object.page.ts");
/* harmony import */ var src_app_svcomponents_each_object_render_each_object_render_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/svcomponents/each-object-render/each-object-render.component */ "./src/app/svcomponents/each-object-render/each-object-render.component.ts");
/* harmony import */ var src_app_svcomponents_each_related_obj_button_render_each_related_obj_button_render_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/svcomponents/each-related-obj-button-render/each-related-obj-button-render.component */ "./src/app/svcomponents/each-related-obj-button-render/each-related-obj-button-render.component.ts");
/* harmony import */ var src_app_svcomponents_each_ambutton_render_each_ambutton_render_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/svcomponents/each-ambutton-render/each-ambutton-render.component */ "./src/app/svcomponents/each-ambutton-render/each-ambutton-render.component.ts");
/* harmony import */ var src_app_svcomponents_tree_view_enabled_tree_view_enabled_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/svcomponents/tree-view-enabled/tree-view-enabled.component */ "./src/app/svcomponents/tree-view-enabled/tree-view-enabled.component.ts");
/* harmony import */ var src_app_svcomponents_tree_view_not_enabled_tree_view_not_enabled_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/svcomponents/tree-view-not-enabled/tree-view-not-enabled.component */ "./src/app/svcomponents/tree-view-not-enabled/tree-view-not-enabled.component.ts");
/* harmony import */ var src_app_svcomponents_each_amrender_each_amrender_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/svcomponents/each-amrender/each-amrender.component */ "./src/app/svcomponents/each-amrender/each-amrender.component.ts");













let RelatedObjectPageModule = class RelatedObjectPageModule {
};
RelatedObjectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _related_object_routing_module__WEBPACK_IMPORTED_MODULE_5__["RelatedObjectPageRoutingModule"]
        ],
        declarations: [_related_object_page__WEBPACK_IMPORTED_MODULE_6__["RelatedObjectPage"], src_app_svcomponents_tree_view_not_enabled_tree_view_not_enabled_component__WEBPACK_IMPORTED_MODULE_11__["TreeViewNotEnabledComponent"], src_app_svcomponents_each_object_render_each_object_render_component__WEBPACK_IMPORTED_MODULE_7__["EachObjectRenderComponent"], src_app_svcomponents_each_related_obj_button_render_each_related_obj_button_render_component__WEBPACK_IMPORTED_MODULE_8__["EachRelatedObjButtonRenderComponent"], src_app_svcomponents_each_ambutton_render_each_ambutton_render_component__WEBPACK_IMPORTED_MODULE_9__["EachAMButtonRenderComponent"], src_app_svcomponents_tree_view_enabled_tree_view_enabled_component__WEBPACK_IMPORTED_MODULE_10__["TreeViewEnabledComponent"], src_app_svcomponents_each_amrender_each_amrender_component__WEBPACK_IMPORTED_MODULE_12__["EachAMRenderComponent"]]
    })
], RelatedObjectPageModule);



/***/ }),

/***/ "./src/app/pages/objects-list/related-object/related-object.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/objects-list/related-object/related-object.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29iamVjdHMtbGlzdC9yZWxhdGVkLW9iamVjdC9yZWxhdGVkLW9iamVjdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/objects-list/related-object/related-object.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/objects-list/related-object/related-object.page.ts ***!
  \**************************************************************************/
/*! exports provided: RelatedObjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedObjectPage", function() { return RelatedObjectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_global_param_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/global-param.service */ "./src/app/service/global-param.service.ts");




let RelatedObjectPage = class RelatedObjectPage {
    constructor(router, route, GlobalParamService) {
        this.router = router;
        this.route = route;
        this.GlobalParamService = GlobalParamService;
        this.showTreeViewNotEnabledView = false;
        var _this = this;
        this.route.queryParams.subscribe(params => {
            _this.schemaViewData =
                _this.router.getCurrentNavigation().extras.state.schemaViewData;
            _this.relatedIndex =
                _this.router.getCurrentNavigation().extras.state.relatedIndex;
            _this.parentId = _this.router.getCurrentNavigation().extras.state.parentId;
            _this.eachassessableObject =
                _this.router.getCurrentNavigation().extras.state.eachassessableObject;
            _this.isFromback = _this.router.getCurrentNavigation().extras.state.isFromback;
            console.log(' _this.relatd level push.trackparamFormObjRedirect', _this.GlobalParamService.trackparamFormObjRedirect);
            _this.isFromback = _this.router.getCurrentNavigation().extras.state.isFromback;
            console.log(' _this.relatd level push.trackparamFormObjRedirect', _this.GlobalParamService.trackparamFormObjRedirect);
            _this.isFrom = _this.router.getCurrentNavigation().extras.state.isFrom;
            console.log(' _this.relatd level push.trackparamFormObjRedirect', _this.isFrom);
        });
        console.log("related object list page call");
        // _this.schemaViewData = _this.router.getCurrentNavigation().extras.state.schemaViewData;
        // _this.relatedIndex = _this.router.getCurrentNavigation().extras.state.relatedIndex;
        // _this.parentId = _this.router.getCurrentNavigation().extras.state.parentId;
    }
    ngOnInit() {
        var _this = this;
        console.log("related object list page  schemaViewData", _this.schemaViewData);
        console.log("related object list page  this.relatedIndex:::", _this.relatedIndex);
        console.log("related object list page  this.parentId:::", _this.parentId);
        console.log("related object list page  this.eachassessableObject:::", _this.eachassessableObject);
    }
    previousRleatedScreen() {
        var _this = this;
        console.log('_this.GlobalParamService.trackparamFormObjRedirect', _this.GlobalParamService.trackparamFormObjRedirect);
        if (_this.GlobalParamService.trackparamFormObjRedirect && _this.GlobalParamService.trackparamFormObjRedirect.length > 0) {
            console.log('_this.GlobalParamService.trackparamFormObjRedirect.length', _this.GlobalParamService.trackparamFormObjRedirect.length);
            //Added for  last level render 2 time issue fix
            const navigationExtras = _this.GlobalParamService.trackparamFormObjRedirect[_this.GlobalParamService.trackparamFormObjRedirect.length - 1];
            console.log('navigationExtras', _this.relatedIndex, navigationExtras.state.currentIndex);
            if (_this.relatedIndex == navigationExtras.state.currentIndex) {
                const currentlevelIndex = _this.GlobalParamService.trackparamFormObjRedirect.length - 1;
                _this.GlobalParamService.trackparamFormObjRedirect.splice(currentlevelIndex, 1); // Removes the last element
            }
            console.log('currenlevel remove after length', _this.GlobalParamService.trackparamFormObjRedirect.length);
            const lastIndex = _this.GlobalParamService.trackparamFormObjRedirect.length - 1;
            console.log('lastIndex-1', lastIndex);
            console.log('parentnavigationExtras', _this.GlobalParamService.trackparamFormObjRedirect, lastIndex);
            const parentnavigationExtras = _this.GlobalParamService.trackparamFormObjRedirect[lastIndex];
            console.log('parentnavigationExtras', parentnavigationExtras);
            if (parentnavigationExtras && parentnavigationExtras.state) {
                console.log('parentnavigationExtras', _this.relatedIndex, parentnavigationExtras.state.currentIndex);
                parentnavigationExtras.state.isFromback = true;
                //  _this.GlobalParamService.trackparamFormObjRedirect.splice(lastIndex, 1); // Removes the last element
                console.log('After delte last track', _this.GlobalParamService.trackparamFormObjRedirect);
                console.log('navigationExtras', parentnavigationExtras);
                // if( parentnavigationExtras.isFrom=='objectButtoncall'){
                // console.log('parentnavigationExtras.isFrom',parentnavigationExtras.isFrom);
                _this.router.navigate(['/redirectpageforrelatedlevel-obj'], parentnavigationExtras);
                //  }else if( parentnavigationExtras.isFrom=='allRelatedcall'){
                //   console.log('parentnavigationExtras.isFrom',parentnavigationExtras.isFrom);
                //     _this.router.navigate(['/redirectpageforrelatedlevel-obj'],parentnavigationExtras);
                //  }
            }
            else {
                _this.GlobalParamService.trackparamFormObjRedirect = [];
                _this.router.navigate(['/inspections-list']);
            }
            //   console.log(' window.history', window.history);
            // if(_this.eachassessableObject.Id && navigationExtras && navigationExtras.state && !navigationExtras.state.isFromback){
            //   navigationExtras.state.isFromback=true;
            //   console.log('_this.relatedIndex',_this.relatedIndex);
            //   console.log('navigationExtras.state.currentIndex',navigationExtras.state.currentIndex);
            //   if(_this.relatedIndex == navigationExtras.state.currentIndex){
            //     const currentIndex = _this.GlobalParamService.trackparamFormObjRedirect.length - 1;
            //     console.log('currentIndex',currentIndex);
            //     _this.GlobalParamService.trackparamFormObjRedirect.splice(currentIndex, 1); // Removes the last element
            //     console.log('first one delete', _this.GlobalParamService);
            //     const  navigationExtras2 = _this.GlobalParamService.trackparamFormObjRedirect[currentIndex-1];
            //   _this.GlobalParamService.trackparamFormObjRedirect.splice(currentIndex-1, 1); // Removes the last element
            // console.log('After delte last track',_this.GlobalParamService.trackparamFormObjRedirect);
            // console.log('navigationExtras',navigationExtras2);
            // _this.router.navigate(['/redirectpageforrelatedlevel-obj'],navigationExtras2);
            // console.log(' window.history', window.history);
            //   }else{
            //     _this.GlobalParamService.trackparamFormObjRedirect.splice(lastIndex, 1); // Removes the last element
            //     console.log('After delte last track',_this.GlobalParamService.trackparamFormObjRedirect);
            //     console.log('navigationExtras',navigationExtras);
            //     _this.router.navigate(['/redirectpageforrelatedlevel-obj'],navigationExtras);
            //     console.log(' window.history', window.history);
            //   }
            // }else{
            //   _this.GlobalParamService.trackparamFormObjRedirect.splice(lastIndex, 1); // Removes the last element
            //   console.log('After delte last track',_this.GlobalParamService.trackparamFormObjRedirect);
            //   console.log('navigationExtras',navigationExtras);
            //   _this.router.navigate(['/redirectpageforrelatedlevel-obj'],navigationExtras);
            //   console.log(' window.history', window.history);
            // }
        }
        else {
            _this.GlobalParamService.trackparamFormObjRedirect = [];
            _this.router.navigate(['/inspections-list']);
        }
    }
};
RelatedObjectPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_global_param_service__WEBPACK_IMPORTED_MODULE_3__["GlobalParamService"] }
];
RelatedObjectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-related-object",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./related-object.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/objects-list/related-object/related-object.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./related-object.page.scss */ "./src/app/pages/objects-list/related-object/related-object.page.scss")).default]
    })
], RelatedObjectPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-objects-list-related-object-related-object-module~related-object-related-object-module-es2015.js.map