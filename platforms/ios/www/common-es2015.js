(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "./node_modules/@ionic/core/dist/esm/index-92848855.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-5641d27f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
    return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/objects-list/all-related-record-render/all-related-record-render.page.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/objects-list/all-related-record-render/all-related-record-render.page.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n<ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"previousRleatedScreen()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>allRelatedRecordRender</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div\n  *ngIf=\"\n    schemaViewData &&\n    schemaViewData[currentIndex] &&\n    schemaViewData[currentIndex].relatedObjectsIndex &&\n    schemaViewData[currentIndex].relatedObjectsIndex.length > 0\n  \"\n>\n  <ion-col\n    *ngFor=\"\n      let relatedObjectsIndex of schemaViewData[currentIndex]\n        .relatedObjectsIndex\n    \"\n  >\n    <div *ngIf=\"relatedObjectsIndex != 0 && parentId && schemaViewData[relatedObjectsIndex] && schemaViewData[relatedObjectsIndex].childAssessableObjs && schemaViewData[relatedObjectsIndex].childAssessableObjs[parentId]\">\n      <div *ngFor=\"let parentassObject of schemaViewData[relatedObjectsIndex].childAssessableObjs[parentId]\">\n        <app-each-object-render [eachassessableObject]=\"parentassObject\" [schemaViewData]=\"schemaViewData\" [currentIndex]=\"currentIndex\" [isfromTreeView]=\"false\"></app-each-object-render>\n      </div>\n    </div>\n  </ion-col>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/svcomponents/each-amrender/each-amrender.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/svcomponents/each-amrender/each-amrender.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-row (click)=$event.stopPropagation();openRelatedAMsDetailPage(eachamdetail)\n>\n  <ion-row>\n    <ion-col\n      *ngFor=\"\n        let amField of schemaViewData[currentIndex].amViewFieldset\n      \"\n    >\n      <p *ngIf=\"eachamdetail && eachamdetail[amField.fieldPath]\">\n        {{ amField.label }}<br />{{\n          eachamdetail[amField.fieldPath]\n        }}\n      </p>\n    </ion-col>\n  </ion-row>\n</ion-row> \n");

/***/ }),

/***/ "./src/app/pages/objects-list/all-related-record-render/all-related-record-render-routing.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/objects-list/all-related-record-render/all-related-record-render-routing.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AllRelatedRecordRenderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllRelatedRecordRenderPageRoutingModule", function() { return AllRelatedRecordRenderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _all_related_record_render_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-related-record-render.page */ "./src/app/pages/objects-list/all-related-record-render/all-related-record-render.page.ts");




const routes = [
    {
        path: '',
        component: _all_related_record_render_page__WEBPACK_IMPORTED_MODULE_3__["AllRelatedRecordRenderPage"]
    }
];
let AllRelatedRecordRenderPageRoutingModule = class AllRelatedRecordRenderPageRoutingModule {
};
AllRelatedRecordRenderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AllRelatedRecordRenderPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/objects-list/all-related-record-render/all-related-record-render.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/objects-list/all-related-record-render/all-related-record-render.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: AllRelatedRecordRenderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllRelatedRecordRenderPageModule", function() { return AllRelatedRecordRenderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _all_related_record_render_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-related-record-render-routing.module */ "./src/app/pages/objects-list/all-related-record-render/all-related-record-render-routing.module.ts");
/* harmony import */ var _all_related_record_render_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-related-record-render.page */ "./src/app/pages/objects-list/all-related-record-render/all-related-record-render.page.ts");
/* harmony import */ var src_app_svcomponents_each_object_render_each_object_render_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/svcomponents/each-object-render/each-object-render.component */ "./src/app/svcomponents/each-object-render/each-object-render.component.ts");
/* harmony import */ var src_app_svcomponents_each_related_obj_button_render_each_related_obj_button_render_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/svcomponents/each-related-obj-button-render/each-related-obj-button-render.component */ "./src/app/svcomponents/each-related-obj-button-render/each-related-obj-button-render.component.ts");
/* harmony import */ var src_app_svcomponents_each_ambutton_render_each_ambutton_render_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/svcomponents/each-ambutton-render/each-ambutton-render.component */ "./src/app/svcomponents/each-ambutton-render/each-ambutton-render.component.ts");
/* harmony import */ var src_app_svcomponents_tree_view_enabled_tree_view_enabled_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/svcomponents/tree-view-enabled/tree-view-enabled.component */ "./src/app/svcomponents/tree-view-enabled/tree-view-enabled.component.ts");
/* harmony import */ var src_app_svcomponents_tree_view_not_enabled_tree_view_not_enabled_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/svcomponents/tree-view-not-enabled/tree-view-not-enabled.component */ "./src/app/svcomponents/tree-view-not-enabled/tree-view-not-enabled.component.ts");












let AllRelatedRecordRenderPageModule = class AllRelatedRecordRenderPageModule {
};
AllRelatedRecordRenderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _all_related_record_render_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllRelatedRecordRenderPageRoutingModule"]
        ],
        declarations: [_all_related_record_render_page__WEBPACK_IMPORTED_MODULE_6__["AllRelatedRecordRenderPage"], src_app_svcomponents_tree_view_not_enabled_tree_view_not_enabled_component__WEBPACK_IMPORTED_MODULE_11__["TreeViewNotEnabledComponent"], src_app_svcomponents_each_object_render_each_object_render_component__WEBPACK_IMPORTED_MODULE_7__["EachObjectRenderComponent"], src_app_svcomponents_each_related_obj_button_render_each_related_obj_button_render_component__WEBPACK_IMPORTED_MODULE_8__["EachRelatedObjButtonRenderComponent"], src_app_svcomponents_each_ambutton_render_each_ambutton_render_component__WEBPACK_IMPORTED_MODULE_9__["EachAMButtonRenderComponent"], src_app_svcomponents_tree_view_enabled_tree_view_enabled_component__WEBPACK_IMPORTED_MODULE_10__["TreeViewEnabledComponent"]]
    })
], AllRelatedRecordRenderPageModule);



/***/ }),

/***/ "./src/app/pages/objects-list/all-related-record-render/all-related-record-render.page.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/objects-list/all-related-record-render/all-related-record-render.page.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29iamVjdHMtbGlzdC9hbGwtcmVsYXRlZC1yZWNvcmQtcmVuZGVyL2FsbC1yZWxhdGVkLXJlY29yZC1yZW5kZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/objects-list/all-related-record-render/all-related-record-render.page.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/objects-list/all-related-record-render/all-related-record-render.page.ts ***!
  \************************************************************************************************/
/*! exports provided: AllRelatedRecordRenderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllRelatedRecordRenderPage", function() { return AllRelatedRecordRenderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_global_param_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/global-param.service */ "./src/app/service/global-param.service.ts");




let AllRelatedRecordRenderPage = class AllRelatedRecordRenderPage {
    constructor(router, route, GlobalParamService) {
        this.router = router;
        this.route = route;
        this.GlobalParamService = GlobalParamService;
        this.showTreeViewNotEnabledView = false;
        var _this = this;
        this.route.queryParams.subscribe(params => {
            _this.schemaViewData =
                _this.router.getCurrentNavigation().extras.state.schemaViewData;
            //if it call from all related record page not pass related inde it pass only current index so here assign relted inex value ti currentIndex
            _this.currentIndex =
                _this.router.getCurrentNavigation().extras.state.relatedIndex;
            _this.parentId = _this.router.getCurrentNavigation().extras.state.parentId;
            _this.eachassessableObject =
                _this.router.getCurrentNavigation().extras.state.eachassessableObject;
            _this.isFromback = _this.router.getCurrentNavigation().extras.state.isFromback;
            console.log(' _this.allrelated level push.trackparamFormObjRedirect', _this.GlobalParamService.trackparamFormObjRedirect);
        });
        console.log("allrelated object list page call");
    }
    ngOnInit() {
        var _this = this;
        console.log("allrelated object list page  schemaViewData", _this.schemaViewData);
        console.log("allrelated object list page  this.relatedIndex:::", _this.currentIndex);
        console.log("allrelated object list page  this.parentId:::", _this.parentId);
        console.log("allrelated object list page  this.eachassessableObject:::", _this.eachassessableObject);
    }
    previousRleatedScreen() {
        var _this = this;
        console.log('_this.allrelated.trackparamFormObjRedirect', _this.GlobalParamService.trackparamFormObjRedirect);
        if (_this.GlobalParamService.trackparamFormObjRedirect && _this.GlobalParamService.trackparamFormObjRedirect.length > 0) {
            console.log('_this.allrelated.trackparamFormObjRedirect.length', _this.GlobalParamService.trackparamFormObjRedirect.length);
            //Added for  last level render 2 time issue fix
            const navigationExtras = _this.GlobalParamService.trackparamFormObjRedirect[_this.GlobalParamService.trackparamFormObjRedirect.length - 1];
            console.log('navigationExtras', _this.currentIndex, navigationExtras.state.currentIndex);
            if (_this.currentIndex == navigationExtras.state.currentIndex) {
                const currentlevelIndex = _this.GlobalParamService.trackparamFormObjRedirect.length - 1;
                _this.GlobalParamService.trackparamFormObjRedirect.splice(currentlevelIndex, 1); // Removes the last element
            }
            console.log('allrelated remove after length', _this.GlobalParamService.trackparamFormObjRedirect.length);
            const lastIndex = _this.GlobalParamService.trackparamFormObjRedirect.length - 1;
            console.log('lastIndex-1', lastIndex);
            console.log('allrelated', _this.GlobalParamService.trackparamFormObjRedirect, lastIndex);
            const parentnavigationExtras = _this.GlobalParamService.trackparamFormObjRedirect[lastIndex];
            console.log('allrelated', parentnavigationExtras);
            if (parentnavigationExtras && parentnavigationExtras.state) {
                console.log('allrelated', _this.currentIndex, parentnavigationExtras.state.currentIndex);
                parentnavigationExtras.state.isFromback = true;
                //  _this.GlobalParamService.trackparamFormObjRedirect.splice(lastIndex, 1); // Removes the last element
                console.log('After allrelated last track', _this.GlobalParamService.trackparamFormObjRedirect);
                console.log('navigationExtras', parentnavigationExtras);
                _this.router.navigate(['/redirectpageforrelatedlevel-obj'], parentnavigationExtras);
            }
            else {
                _this.GlobalParamService.trackparamFormObjRedirect = [];
                _this.router.navigate(['/inspections-list']);
            }
        }
        else {
            _this.GlobalParamService.trackparamFormObjRedirect = [];
            _this.router.navigate(['/inspections-list']);
        }
    }
};
AllRelatedRecordRenderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_global_param_service__WEBPACK_IMPORTED_MODULE_3__["GlobalParamService"] }
];
AllRelatedRecordRenderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-related-record-render',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./all-related-record-render.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/objects-list/all-related-record-render/all-related-record-render.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./all-related-record-render.page.scss */ "./src/app/pages/objects-list/all-related-record-render/all-related-record-render.page.scss")).default]
    })
], AllRelatedRecordRenderPage);



/***/ }),

/***/ "./src/app/svcomponents/each-amrender/each-amrender.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/svcomponents/each-amrender/each-amrender.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N2Y29tcG9uZW50cy9lYWNoLWFtcmVuZGVyL2VhY2gtYW1yZW5kZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/svcomponents/each-amrender/each-amrender.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/svcomponents/each-amrender/each-amrender.component.ts ***!
  \***********************************************************************/
/*! exports provided: EachAMRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EachAMRenderComponent", function() { return EachAMRenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let EachAMRenderComponent = class EachAMRenderComponent {
    constructor(router) {
        this.router = router;
        var _this = this;
        console.log('EachAMRenderComponent constructor textthis.assessableObject', _this.eachassessableObject);
        console.log('EachAMRenderComponent this.schemaViewData', _this.schemaViewData);
        console.log('EachAMRenderComponent this.currentIndex', _this.currentIndex);
        console.log('EachAMRenderComponent this.amdetail', _this.eachamdetail);
    }
    ngOnInit() {
        var _this = this;
        console.log('EachAMRenderComponent ngOnInit textthis.assessableObject', _this.eachassessableObject);
        console.log('EachAMRenderComponent this.schemaViewData', _this.schemaViewData);
        console.log('EachAMRenderComponent this.currentIndex', _this.currentIndex);
        console.log('EachAMRenderComponent this.amdetail', _this.eachamdetail);
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
EachAMRenderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EachAMRenderComponent.propDecorators = {
    eachassessableObject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    schemaViewData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currentIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    eachamdetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
EachAMRenderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-each-amrender',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./each-amrender.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/svcomponents/each-amrender/each-amrender.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./each-amrender.component.scss */ "./src/app/svcomponents/each-amrender/each-amrender.component.scss")).default]
    })
], EachAMRenderComponent);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map