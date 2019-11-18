(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["principal-categorias-categoria-c-slides-c-slides-c-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/categorias/categoria-c/slides-c/slides-c.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/principal/categorias/categoria-c/slides-c/slides-c.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding scrollY=\"false\">\n\n\n    <div class=\"zona-libre-de-click\">\n        <ion-icon name=\"arrow-back\" color=\"light\" class=\"back-icon\" (click)=\"dismiss()\">\n        </ion-icon>\n    </div>\n\n    <div class=\"posicion-texto-explicativo\">\n        <ion-text color=\"light\">\n            Haga click en la pantalla para continuar\n        </ion-text>\n    </div>\n    <ion-slides #slidesElem>\n        <ion-slide *ngFor=\"let slide of slides\" (click)=\"nextSlide()\">\n            <ion-text class=\"texto-slide\">\n              <p>\n                {{slide.texto}}\n              </p>\n            </ion-text>\n        </ion-slide>\n    </ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/principal/categorias/categoria-c/slides-c/slides-c.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/principal/categorias/categoria-c/slides-c/slides-c.module.ts ***!
  \******************************************************************************/
/*! exports provided: SlidesCPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesCPageModule", function() { return SlidesCPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slides_c_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slides-c.page */ "./src/app/principal/categorias/categoria-c/slides-c/slides-c.page.ts");







var routes = [
    {
        path: '',
        component: _slides_c_page__WEBPACK_IMPORTED_MODULE_6__["SlidesCPage"]
    }
];
var SlidesCPageModule = /** @class */ (function () {
    function SlidesCPageModule() {
    }
    SlidesCPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            exports: [_slides_c_page__WEBPACK_IMPORTED_MODULE_6__["SlidesCPage"]],
            declarations: [_slides_c_page__WEBPACK_IMPORTED_MODULE_6__["SlidesCPage"]],
            entryComponents: [_slides_c_page__WEBPACK_IMPORTED_MODULE_6__["SlidesCPage"]],
        })
    ], SlidesCPageModule);
    return SlidesCPageModule;
}());



/***/ }),

/***/ "./src/app/principal/categorias/categoria-c/slides-c/slides-c.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/principal/categorias/categoria-c/slides-c/slides-c.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-libroMeditacion1) !important;\n}\n\nion-slides {\n  background: transparent;\n  height: 100%;\n}\n\n.texto-slide {\n  font-size: 5vw;\n  font-weight: lighter;\n  color: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21hc2dhcmNpYXBpbmVpcm8vRGVza3RvcC9wcm95ZWN0byBtZWRpdGFjaW9uL21lZGl0YWNpb24taW9uaWMtNC1saW1waWEvc3JjL2FwcC9wcmluY2lwYWwvY2F0ZWdvcmlhcy9jYXRlZ29yaWEtYy9zbGlkZXMtYy9zbGlkZXMtYy5wYWdlLnNjc3MiLCJzcmMvYXBwL3ByaW5jaXBhbC9jYXRlZ29yaWFzL2NhdGVnb3JpYS1jL3NsaWRlcy1jL3NsaWRlcy1jLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBEQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURJQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wcmluY2lwYWwvY2F0ZWdvcmlhcy9jYXRlZ29yaWEtYy9zbGlkZXMtYy9zbGlkZXMtYy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlicm9NZWRpdGFjaW9uMSkgIWltcG9ydGFudDtcbn1cblxuaW9uLXNsaWRlc3tcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuXG5cbi50ZXh0by1zbGlkZXtcbiAgZm9udC1zaXplOiA1dnc7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlicm9NZWRpdGFjaW9uMSkgIWltcG9ydGFudDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZXh0by1zbGlkZSB7XG4gIGZvbnQtc2l6ZTogNXZ3O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/principal/categorias/categoria-c/slides-c/slides-c.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/principal/categorias/categoria-c/slides-c/slides-c.page.ts ***!
  \****************************************************************************/
/*! exports provided: SlidesCPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesCPage", function() { return SlidesCPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_categorias_logic_categorias_logic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categorias-logic/categorias-logic.service */ "./src/app/services/categorias-logic/categorias-logic.service.ts");
/* harmony import */ var src_app_services_categorias_logic_categorias_navigator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/categorias-logic/categorias-navigator.service */ "./src/app/services/categorias-logic/categorias-navigator.service.ts");





var SlidesCPage = /** @class */ (function () {
    function SlidesCPage(navCtrl, categoriesLogic, categoriaNavigation) {
        this.navCtrl = navCtrl;
        this.categoriesLogic = categoriesLogic;
        this.categoriaNavigation = categoriaNavigation;
        this.slides = [{
                "texto": "Música exclusiva diseñada para ayudarte a concentrarte, relajarte o conciliar el sueño"
            }
        ];
    }
    SlidesCPage.prototype.ngOnInit = function () {
    };
    SlidesCPage.prototype.dismiss = function () {
        this.navCtrl.navigateRoot("/tabs/principal");
    };
    SlidesCPage.prototype.irACategoria = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = {
                    "nombre_categoria": "categoria_c"
                };
                this.categoriesLogic.initCategorie(data);
                this.categoriaNavigation.categoriasSwitchNavigation("categoria_c");
                return [2 /*return*/];
            });
        });
    };
    SlidesCPage.prototype.nextSlide = function () {
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
    SlidesCPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_categorias_logic_categorias_logic_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasLogicService"] },
        { type: src_app_services_categorias_logic_categorias_navigator_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasNavigatorService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidesElem', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SlidesCPage.prototype, "slidesElem", void 0);
    SlidesCPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slides-c',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slides-c.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/categorias/categoria-c/slides-c/slides-c.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slides-c.page.scss */ "./src/app/principal/categorias/categoria-c/slides-c/slides-c.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_categorias_logic_categorias_logic_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasLogicService"],
            src_app_services_categorias_logic_categorias_navigator_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasNavigatorService"]])
    ], SlidesCPage);
    return SlidesCPage;
}());



/***/ })

}]);
//# sourceMappingURL=principal-categorias-categoria-c-slides-c-slides-c-module.js.map