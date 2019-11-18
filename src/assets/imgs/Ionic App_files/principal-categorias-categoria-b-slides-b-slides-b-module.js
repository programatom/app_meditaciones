(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["principal-categorias-categoria-b-slides-b-slides-b-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/categorias/categoria-b/slides-b/slides-b.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/principal/categorias/categoria-b/slides-b/slides-b.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding scrollY=\"false\">\n\n\n    <div class=\"zona-libre-de-click\">\n        <ion-icon name=\"arrow-back\" color=\"light\" class=\"back-icon\" (click)=\"dismiss()\">\n        </ion-icon>\n    </div>\n\n    <div class=\"posicion-texto-explicativo\">\n        <ion-text color=\"light\">\n            Haga click en la pantalla para continuar\n        </ion-text>\n    </div>\n    <ion-slides #slidesElem>\n        <ion-slide *ngFor=\"let slide of slides\" (click)=\"nextSlide()\" style=\"text-transform: none; \n            flex-wrap:wrap;    \n            padding-top: 30vh;\n            padding-bottom: 22vh;\">\n              <div class=\"texto-slide\" *ngFor=\"let parrafo of slide.parrafos\" style=\"margin-top: -1vh;\">\n                <p [innerHtml] = \"parrafo + '<br>'\" >\n                </p>\n              </div>\n              \n        </ion-slide>\n    </ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/principal/categorias/categoria-b/slides-b/slides-b.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/principal/categorias/categoria-b/slides-b/slides-b.module.ts ***!
  \******************************************************************************/
/*! exports provided: SlidesBPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesBPageModule", function() { return SlidesBPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slides_b_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slides-b.page */ "./src/app/principal/categorias/categoria-b/slides-b/slides-b.page.ts");







var routes = [
    {
        path: '',
        component: _slides_b_page__WEBPACK_IMPORTED_MODULE_6__["SlidesBPage"]
    }
];
var SlidesBPageModule = /** @class */ (function () {
    function SlidesBPageModule() {
    }
    SlidesBPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            exports: [_slides_b_page__WEBPACK_IMPORTED_MODULE_6__["SlidesBPage"]],
            declarations: [_slides_b_page__WEBPACK_IMPORTED_MODULE_6__["SlidesBPage"]],
            entryComponents: [_slides_b_page__WEBPACK_IMPORTED_MODULE_6__["SlidesBPage"]],
        })
    ], SlidesBPageModule);
    return SlidesBPageModule;
}());



/***/ }),

/***/ "./src/app/principal/categorias/categoria-b/slides-b/slides-b.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/principal/categorias/categoria-b/slides-b/slides-b.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-libroMeditacion4) !important;\n}\n\nion-slides {\n  background: transparent;\n  height: 100%;\n}\n\n.texto-slide {\n  font-size: 5vw;\n  font-weight: lighter;\n  color: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21hc2dhcmNpYXBpbmVpcm8vRGVza3RvcC9wcm95ZWN0byBtZWRpdGFjaW9uL21lZGl0YWNpb24taW9uaWMtNC1saW1waWEvc3JjL2FwcC9wcmluY2lwYWwvY2F0ZWdvcmlhcy9jYXRlZ29yaWEtYi9zbGlkZXMtYi9zbGlkZXMtYi5wYWdlLnNjc3MiLCJzcmMvYXBwL3ByaW5jaXBhbC9jYXRlZ29yaWFzL2NhdGVnb3JpYS1iL3NsaWRlcy1iL3NsaWRlcy1iLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBEQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURNQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wcmluY2lwYWwvY2F0ZWdvcmlhcy9jYXRlZ29yaWEtYi9zbGlkZXMtYi9zbGlkZXMtYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlicm9NZWRpdGFjaW9uNCkgIWltcG9ydGFudDtcbn1cblxuaW9uLXNsaWRlc3tcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuXG5cblxuXG4udGV4dG8tc2xpZGV7XG4gIGZvbnQtc2l6ZTogNXZ3O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpYnJvTWVkaXRhY2lvbjQpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZXMge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGV4dG8tc2xpZGUge1xuICBmb250LXNpemU6IDV2dztcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/principal/categorias/categoria-b/slides-b/slides-b.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/principal/categorias/categoria-b/slides-b/slides-b.page.ts ***!
  \****************************************************************************/
/*! exports provided: SlidesBPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesBPage", function() { return SlidesBPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_categorias_logic_categorias_logic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categorias-logic/categorias-logic.service */ "./src/app/services/categorias-logic/categorias-logic.service.ts");
/* harmony import */ var src_app_services_categorias_logic_categorias_navigator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/categorias-logic/categorias-navigator.service */ "./src/app/services/categorias-logic/categorias-navigator.service.ts");





var SlidesBPage = /** @class */ (function () {
    function SlidesBPage(navCtrl, categoriesLogic, categoriaNavigation) {
        this.navCtrl = navCtrl;
        this.categoriesLogic = categoriesLogic;
        this.categoriaNavigation = categoriaNavigation;
        this.slides = [{
                "parrafos": [
                    "Meditar es silenciarnos para poder escuchar"
                ]
            },
            {
                "parrafos": [
                    "Una forma efectiva para acceder al centramiento.  Gracias a la neuroplasticidad el Ser humano tiene la posibilidad de reaprender una forma de vivir en armonía hasta en los escenarios de mayor exigencia y demanda."
                ]
            }, {
                "parrafos": [
                    "La meditación ayuda a:",
                    "- Reducir Estrés y ansiedad",
                    "- Amplificar Bienestar y felicidad",
                    "- Mejorar Inteligencia mental y emocional",
                    "- Experimentar Crecimiento personal"
                ]
            }, {
                "parrafos": [
                    "La meditación ayuda a:",
                    "- Integra los hemisferios cerebrales ampliando la visión.",
                    "- Mejora la concentración.",
                    "- Reduce, previene y ayuda a manejar las situaciones de estrés.",
                    "- Estimula la creatividad.",
                    "- Disminuye y previene las enfermedades.",
                    "- Incrementa la energía general."
                ]
            }
        ];
    }
    SlidesBPage.prototype.ngOnInit = function () {
    };
    SlidesBPage.prototype.dismiss = function () {
        this.navCtrl.navigateRoot("/tabs/principal");
    };
    SlidesBPage.prototype.irACategoria = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = {
                    "nombre_categoria": "categoria_b"
                };
                this.categoriesLogic.initCategorie(data);
                this.categoriaNavigation.categoriasSwitchNavigation("categoria_b");
                return [2 /*return*/];
            });
        });
    };
    SlidesBPage.prototype.nextSlide = function () {
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
    SlidesBPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_categorias_logic_categorias_logic_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasLogicService"] },
        { type: src_app_services_categorias_logic_categorias_navigator_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasNavigatorService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidesElem', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SlidesBPage.prototype, "slidesElem", void 0);
    SlidesBPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slides-b',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slides-b.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/categorias/categoria-b/slides-b/slides-b.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slides-b.page.scss */ "./src/app/principal/categorias/categoria-b/slides-b/slides-b.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_categorias_logic_categorias_logic_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasLogicService"],
            src_app_services_categorias_logic_categorias_navigator_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasNavigatorService"]])
    ], SlidesBPage);
    return SlidesBPage;
}());



/***/ })

}]);
//# sourceMappingURL=principal-categorias-categoria-b-slides-b-slides-b-module.js.map