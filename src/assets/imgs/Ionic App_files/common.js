(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js ***!
  \************************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
 */
var getTimeGivenProgression = function (p0, p1, p2, p3, progression) {
    var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
var solveCubicParametricEquation = function (p0, p1, p2, p3, t) {
    var partA = (3 * p1) * Math.pow(t - 1, 2);
    var partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    var partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
var solveCubicBezier = function (p0, p1, p2, p3, refPoint) {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(function (root) { return root >= 0 && root <= 1; });
};
var solveQuadraticEquation = function (a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
var solveCubicEquation = function (a, b, c, d) {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    var p = (3 * c - b * b) / 3;
    var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    var r = Math.sqrt(Math.pow(-(p / 3), 3));
    var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    var s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var dfChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (el) {
    return (el.children != null) ? el.children : el.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var router;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js ***!
  \*************************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
var watchForOptions = function (containerEl, tagName, onChange) {
    var mutation = new MutationObserver(function (mutationList) {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
var getSelectedOption = function (mutationList, tagName) {
    var newOption;
    mutationList.forEach(function (mut) {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
var findCheckedOption = function (el, tagName) {
    if (el.nodeType !== 1) {
        return undefined;
    }
    var options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find(function (o) { return o.checked === true; });
};



/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/contribui-modal/contribui-modal.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/contribui-modal/contribui-modal.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n <ion-icon name=\"arrow-back\" class=\"back-icon-custom\" (click)=\"dismissClick()\">\n  </ion-icon>\n  <ion-grid style=\"margin-top:14vh\">\n  \t<ion-row size=\"12\" align-items-center justify-content-center style=\"flex-direction: column\">\n  \t\t<ion-avatar style=\" height: auto;\n    \t\t\t\t\t\twidth: 27vw;\">\n\t\t  <img src=\"assets/imgs/claudia.jpeg\">\n\t\t</ion-avatar>\n\t\t<ion-text style=\"font-size: 1.3em\" color=\"darkBlue\">\n  \t\t\t<b>Claudia roiz</b>\n  \t\t\t\n  \t\t</ion-text>\n  \t\t<ion-text color=\"darkBlue\">\n  \t\t\t<i>Fundadora de MeditAr</i>\n  \t\t</ion-text>\n  \t</ion-row>\n  \t<ion-row size=\"12\" align-items-center justify-content-center style=\"padding: 8vw;\">\n  \t\t<ion-text style=\"text-align: justify;\" color=\"darkBlue\">\n  \t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor eu urna in ultricies. Nullam consectetur sit amet nisl nec euismod. Sed scelerisque diam massa, ac feugiat ante sodales id. Integer eget cursus massa. Sed convallis nec magna sit amet euismod. Fusce placerat nec ante tincidunt egestas.\n  \t\t</ion-text>\n  \t</ion-row>\n  \t <ion-row size = \"12\" align-items-center justify-content-center>\n  \t\t<img src=\"assets/imgs/logo.png\" class=\"logo\" style=\"width: 40vw;\">\n  \t</ion-row>\n  \t<ion-row size=\"12\" align-items-center justify-content-center style=\"    padding-left: 16vw;\n    padding-right: 16vw;\">\n  \t\t<ion-text style=\"text-align: justify; margin-bottom: 1em\" color=\"darkBlue\">\n  \t\t\tPodes contribuir con nosotros. Cualquier tipo de ayuda es bienvenida, ya sea económica, meditaciones guíadas nuevas, sonidos de relajación, tu feedback o lo que vos pienses que pueda ser de valor. \n  \t\t</ion-text>\n        <ion-button expand=\"block\">\n            <ion-text color=\"light\" (click)=\"contacto()\">\n                Contactate con nosotros\n            </ion-text>\n        </ion-button>\n  \t</ion-row>\n\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/categorias/categoria-a/slides-a/slides-a.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/principal/categorias/categoria-a/slides-a/slides-a.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding scrollY=\"false\">\n\n\n    <div class=\"zona-libre-de-click\">\n        <ion-row>\n            <ion-col size='6'> \n                <ion-icon name=\"arrow-back\" color=\"light\" class=\"back-icon\" (click)=\"dismiss()\">\n                </ion-icon>\n            </ion-col>\n            <ion-col size='3' offset='1' style='white-space: nowrap;'> \n                <ion-text color=\"light\" style='font-size:5vw'>\n                    <u>Saltear intro</u>\n                </ion-text>\n            </ion-col>\n        </ion-row>\n\n    \n    </div>\n\n    <div class=\"posicion-texto-explicativo\">\n        <ion-text color=\"light\">\n            Haga click en la pantalla para continuar\n        </ion-text>\n    </div>\n    <ion-slides #slidesElem>\n        <ion-slide *ngFor=\"let slide of slides\" (click)=\"nextSlide()\">\n            <ion-text class=\"texto-slide\">\n              <p>\n                {{slide.texto}}\n              </p>\n            </ion-text>\n        </ion-slide>\n    </ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/perfil/contribui-modal/contribui-modal.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/perfil/contribui-modal/contribui-modal.module.ts ***!
  \******************************************************************/
/*! exports provided: ContribuiModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContribuiModalPageModule", function() { return ContribuiModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contribui_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contribui-modal.page */ "./src/app/perfil/contribui-modal/contribui-modal.page.ts");







var routes = [
    {
        path: '',
        component: _contribui_modal_page__WEBPACK_IMPORTED_MODULE_6__["ContribuiModalPage"]
    }
];
var ContribuiModalPageModule = /** @class */ (function () {
    function ContribuiModalPageModule() {
    }
    ContribuiModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contribui_modal_page__WEBPACK_IMPORTED_MODULE_6__["ContribuiModalPage"]]
        })
    ], ContribuiModalPageModule);
    return ContribuiModalPageModule;
}());



/***/ }),

/***/ "./src/app/perfil/contribui-modal/contribui-modal.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/perfil/contribui-modal/contribui-modal.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back-icon-custom {\n  position: absolute;\n  left: 6vw;\n  top: 6vw;\n  font-size: 12vw;\n  color: var(--ion-color-secondary);\n}\n\nion-text {\n  font-family: \"Myriad\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21hc2dhcmNpYXBpbmVpcm8vRGVza3RvcC9wcm95ZWN0byBtZWRpdGFjaW9uL21lZGl0YWNpb24taW9uaWMtNC1saW1waWEvc3JjL2FwcC9wZXJmaWwvY29udHJpYnVpLW1vZGFsL2NvbnRyaWJ1aS1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BlcmZpbC9jb250cmlidWktbW9kYWwvY29udHJpYnVpLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNDRjs7QURDQTtFQUNDLHFCQUFBO0FDRUQiLCJmaWxlIjoic3JjL2FwcC9wZXJmaWwvY29udHJpYnVpLW1vZGFsL2NvbnRyaWJ1aS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1pY29uLWN1c3RvbXtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGxlZnQ6NnZ3O1xuICB0b3A6NnZ3O1xuICBmb250LXNpemU6IDEydnc7XG4gIGNvbG9yOnZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuaW9uLXRleHR7XG5cdGZvbnQtZmFtaWx5OiAnTXlyaWFkJztcbn1cblxuIiwiLmJhY2staWNvbi1jdXN0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDZ2dztcbiAgdG9wOiA2dnc7XG4gIGZvbnQtc2l6ZTogMTJ2dztcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5pb24tdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk15cmlhZFwiO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/perfil/contribui-modal/contribui-modal.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/perfil/contribui-modal/contribui-modal.page.ts ***!
  \****************************************************************/
/*! exports provided: ContribuiModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContribuiModalPage", function() { return ContribuiModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");




var ContribuiModalPage = /** @class */ (function () {
    function ContribuiModalPage(modalCtrl, emailComposer) {
        this.modalCtrl = modalCtrl;
        this.emailComposer = emailComposer;
    }
    ContribuiModalPage.prototype.ngOnInit = function () {
    };
    ContribuiModalPage.prototype.dismissClick = function () {
        this.modalCtrl.dismiss();
    };
    ContribuiModalPage.prototype.contacto = function () {
        var email = {
            to: 'claudiaroiz59@gmail.com',
            subject: "Contacto MeditAr"
        };
        this.emailComposer.open(email);
    };
    ContribuiModalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"] }
    ]; };
    ContribuiModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contribui-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contribui-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/contribui-modal/contribui-modal.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contribui-modal.page.scss */ "./src/app/perfil/contribui-modal/contribui-modal.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"]])
    ], ContribuiModalPage);
    return ContribuiModalPage;
}());



/***/ }),

/***/ "./src/app/principal/categorias/categoria-a/slides-a/slides-a.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/principal/categorias/categoria-a/slides-a/slides-a.module.ts ***!
  \******************************************************************************/
/*! exports provided: SlidesAPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesAPageModule", function() { return SlidesAPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slides_a_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slides-a.page */ "./src/app/principal/categorias/categoria-a/slides-a/slides-a.page.ts");







var routes = [
    {
        path: '',
        component: _slides_a_page__WEBPACK_IMPORTED_MODULE_6__["SlidesAPage"]
    }
];
var SlidesAPageModule = /** @class */ (function () {
    function SlidesAPageModule() {
    }
    SlidesAPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            exports: [_slides_a_page__WEBPACK_IMPORTED_MODULE_6__["SlidesAPage"]],
            declarations: [_slides_a_page__WEBPACK_IMPORTED_MODULE_6__["SlidesAPage"]],
            entryComponents: [_slides_a_page__WEBPACK_IMPORTED_MODULE_6__["SlidesAPage"]],
        })
    ], SlidesAPageModule);
    return SlidesAPageModule;
}());



/***/ }),

/***/ "./src/app/principal/categorias/categoria-a/slides-a/slides-a.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/principal/categorias/categoria-a/slides-a/slides-a.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-libroMeditacion2) !important;\n}\n\nion-slides {\n  background: transparent;\n  height: 100%;\n}\n\n.texto-slide {\n  font-size: 5vw;\n  font-weight: lighter;\n  color: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21hc2dhcmNpYXBpbmVpcm8vRGVza3RvcC9wcm95ZWN0byBtZWRpdGFjaW9uL21lZGl0YWNpb24taW9uaWMtNC1saW1waWEvc3JjL2FwcC9wcmluY2lwYWwvY2F0ZWdvcmlhcy9jYXRlZ29yaWEtYS9zbGlkZXMtYS9zbGlkZXMtYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3ByaW5jaXBhbC9jYXRlZ29yaWFzL2NhdGVnb3JpYS1hL3NsaWRlcy1hL3NsaWRlcy1hLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBEQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURLQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9wcmluY2lwYWwvY2F0ZWdvcmlhcy9jYXRlZ29yaWEtYS9zbGlkZXMtYS9zbGlkZXMtYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlicm9NZWRpdGFjaW9uMikgIWltcG9ydGFudDtcbn1cblxuaW9uLXNsaWRlc3tcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuXG5cblxuLnRleHRvLXNsaWRle1xuICBmb250LXNpemU6IDV2dztcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWJyb01lZGl0YWNpb24yKSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRleHRvLXNsaWRlIHtcbiAgZm9udC1zaXplOiA1dnc7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/principal/categorias/categoria-a/slides-a/slides-a.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/principal/categorias/categoria-a/slides-a/slides-a.page.ts ***!
  \****************************************************************************/
/*! exports provided: SlidesAPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesAPage", function() { return SlidesAPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_categorias_logic_categorias_logic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categorias-logic/categorias-logic.service */ "./src/app/services/categorias-logic/categorias-logic.service.ts");
/* harmony import */ var src_app_services_categorias_logic_categorias_navigator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/categorias-logic/categorias-navigator.service */ "./src/app/services/categorias-logic/categorias-navigator.service.ts");





var SlidesAPage = /** @class */ (function () {
    function SlidesAPage(navCtrl, categoriesLogic, categoriaNavigation) {
        this.navCtrl = navCtrl;
        this.categoriesLogic = categoriesLogic;
        this.categoriaNavigation = categoriaNavigation;
        this.slides = [{
                "texto": "Los sonidos BINAURALES permiten que se sincronicen los dos hemisferios del cerebro, produciendo una sensación de bienestar y mejora del estado de ánimo."
            }
            /*,{
              "texto":"Las ondas cerebrales  son cinco, y se categorizan mediante el alfabeto griego. Por ejemplo las frecuencias de 4 a 7Hz, como puede verse mediante electroencefalogramas, generan ondas del tipo theta en el cerebro, asociadas al sueño lúcido y a estados de meditación profunda. Mientras que las gamma, de 32 a 100Hz, se asocian con estados de alta cognición."
            },{
              "texto":"El cerebro procesa la diferencia de frecuencia de los sonidos binaurales, lo que produce ondas cerebrales que se corresponden con esta misma diferencia de frecuencia. Esto significa que si escuchamos sonidos que están entre los 8 y los 13 hercios, el cerebro producirá ondas alfa."
            },{
              "texto":"Los sonidos de este tipo también permiten que se sincronicen los dos hemisferios del cerebro. Esto produce una sensación de bienestar, mejora el estado de ánimo, aumenta el nivel de atención y la memoria, y nos ayuda a asimilar las emociones y a reducir la ansiedad."
            }
            */
        ];
    }
    SlidesAPage.prototype.ngOnInit = function () {
    };
    SlidesAPage.prototype.dismiss = function () {
        this.navCtrl.navigateRoot("/tabs/principal");
    };
    SlidesAPage.prototype.irACategoria = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = {
                    "nombre_categoria": "categoria_a"
                };
                this.categoriesLogic.initCategorie(data);
                this.categoriaNavigation.categoriasSwitchNavigation("categoria_a");
                return [2 /*return*/];
            });
        });
    };
    SlidesAPage.prototype.nextSlide = function () {
        var _this = this;
        this.slidesElem.isEnd().then(function (isEnd) {
            if (isEnd) {
                _this.irACategoria();
            }
            else {
                _this.slidesElem.slideNext();
            }
        });
    };
    SlidesAPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_categorias_logic_categorias_logic_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasLogicService"] },
        { type: src_app_services_categorias_logic_categorias_navigator_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasNavigatorService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidesElem', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SlidesAPage.prototype, "slidesElem", void 0);
    SlidesAPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slides-a',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slides-a.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/categorias/categoria-a/slides-a/slides-a.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slides-a.page.scss */ "./src/app/principal/categorias/categoria-a/slides-a/slides-a.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_categorias_logic_categorias_logic_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasLogicService"],
            src_app_services_categorias_logic_categorias_navigator_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasNavigatorService"]])
    ], SlidesAPage);
    return SlidesAPage;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map