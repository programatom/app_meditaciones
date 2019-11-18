(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorias-categoria-b-categoria-b-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/categorias/categoria-b/categoria-b.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/principal/categorias/categoria-b/categoria-b.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar-categoria (dismiss) = \"dismiss()\" (download)=\"download()\" [downloadIconColor]=\"downloadIconColor\" [downloading]=\"downloading\" [categoria] = \"'b'\"> \n</app-toolbar-categoria>\n\n<ion-content padding scrollY=\"false\">\n    <ion-slides #slides>\n        <ion-slide *ngFor=\"let media of medias; let i = index\">\n            <ion-row>\n                <ion-col size=\"12\">\n                    <div class=\"play-button-circle posicion-play\" [id]=\"'play-button-' + i\" (click)=\"playPause(media.url, i )\">\n                        <ion-icon [src]=\"'assets/icon/'+ media.icon +'.svg'\" style=\"color:white\">\n                        </ion-icon>\n                    </div>\n                </ion-col>\n\n                <ion-col size=\"12\" class=\"center\">\n                     <app-progress-bar [progress]=\"media.progress\" color=\"lightblue\"\n                                     attr.id=\"{{media.id_progress}}\"\n                                     [ngClass]=\"{'fadeIn': media.fadeIn}\">\n                  </app-progress-bar>\n                </ion-col>\n                <ion-col size=\"12\" class=\"center\" [ngClass]=\"{'fadeIn': media.fadeIn}\">\n                  <ion-text color=\"light\" attr.id=\"{{media.id_minutero}}\">{{media.minutero ? media.minutero: '00:00'}}</ion-text>\n                </ion-col>\n                <ion-col size=\"12\" class=\"center\">\n                  <app-loader categoria = \"a\" attr.id=\"{{media.id_loader}}\"></app-loader>\n                </ion-col>\n            </ion-row>\n            <div class=\"posicion-texto-explicativo\" *ngIf=\"i == 0\">\n                <ion-text style=\"color:lightblue\">\n                    Deslizar hacia la derecha\n                </ion-text>\n            </div>\n        </ion-slide>\n    </ion-slides>\n\n\n</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/principal/categorias/categoria-b/categoria-b.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/principal/categorias/categoria-b/categoria-b.module.ts ***!
  \************************************************************************/
/*! exports provided: CategoriaBPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaBPageModule", function() { return CategoriaBPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categoria_b_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categoria-b.page */ "./src/app/principal/categorias/categoria-b/categoria-b.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _categoria_b_page__WEBPACK_IMPORTED_MODULE_6__["CategoriaBPage"]
    }
];
var CategoriaBPageModule = /** @class */ (function () {
    function CategoriaBPageModule() {
    }
    CategoriaBPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            exports: [_categoria_b_page__WEBPACK_IMPORTED_MODULE_6__["CategoriaBPage"]],
            declarations: [_categoria_b_page__WEBPACK_IMPORTED_MODULE_6__["CategoriaBPage"]],
            entryComponents: [_categoria_b_page__WEBPACK_IMPORTED_MODULE_6__["CategoriaBPage"]]
        })
    ], CategoriaBPageModule);
    return CategoriaBPageModule;
}());



/***/ }),

/***/ "./src/app/principal/categorias/categoria-b/categoria-b.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/principal/categorias/categoria-b/categoria-b.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-libroMeditacion4) url('mundo-manos.png') no-repeat center center / cover;\n}\n\nion-toggle {\n  position: absolute;\n  right: 7vw;\n  top: 3vw;\n}\n\n.play-button-circle {\n  background: lightblue;\n}\n\n.frases {\n  position: absolute;\n  bottom: 13vw;\n  text-align: center;\n  width: 100%;\n  z-index: 999;\n}\n\n.posicion-texto-explicativo {\n  position: absolute;\n  bottom: 3vw;\n  text-align: center;\n  width: 100%;\n}\n\nion-slides {\n  background: transparent;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21hc2dhcmNpYXBpbmVpcm8vRGVza3RvcC9wcm95ZWN0byBtZWRpdGFjaW9uL21lZGl0YWNpb24taW9uaWMtNC1saW1waWEvc3JjL2FwcC9wcmluY2lwYWwvY2F0ZWdvcmlhcy9jYXRlZ29yaWEtYi9jYXRlZ29yaWEtYi5wYWdlLnNjc3MiLCJzcmMvYXBwL3ByaW5jaXBhbC9jYXRlZ29yaWFzL2NhdGVnb3JpYS1iL2NhdGVnb3JpYS1iLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNHQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FER0E7RUFDRSxxQkFBQTtBQ0FGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3ByaW5jaXBhbC9jYXRlZ29yaWFzL2NhdGVnb3JpYS1iL2NhdGVnb3JpYS1iLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWJyb01lZGl0YWNpb240KSB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL211bmRvLW1hbm9zLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5cbmlvbi10b2dnbGV7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICByaWdodDo3dnc7XG4gIHRvcDogM3Z3O1xufVxuXG5cbi5wbGF5LWJ1dHRvbi1jaXJjbGV7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbn1cblxuXG4uZnJhc2Vze1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgYm90dG9tOiAxM3Z3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5wb3NpY2lvbi10ZXh0by1leHBsaWNhdGl2b3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDN2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiB9XG5cbmlvbi1zbGlkZXN7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpYnJvTWVkaXRhY2lvbjQpIHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL211bmRvLW1hbm9zLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuXG5pb24tdG9nZ2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogN3Z3O1xuICB0b3A6IDN2dztcbn1cblxuLnBsYXktYnV0dG9uLWNpcmNsZSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbn1cblxuLmZyYXNlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxM3Z3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5wb3NpY2lvbi10ZXh0by1leHBsaWNhdGl2byB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1zbGlkZXMge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/principal/categorias/categoria-b/categoria-b.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/principal/categorias/categoria-b/categoria-b.page.ts ***!
  \**********************************************************************/
/*! exports provided: CategoriaBPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaBPage", function() { return CategoriaBPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_categorias_logic_categorias_logic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categorias-logic/categorias-logic.service */ "./src/app/services/categorias-logic/categorias-logic.service.ts");
/* harmony import */ var easytimer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! easytimer.js */ "./node_modules/easytimer.js/dist/easytimer.js");
/* harmony import */ var easytimer_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(easytimer_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_services_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/services.index */ "./src/app/services/services.index.ts");






var CategoriaBPage = /** @class */ (function () {
    function CategoriaBPage(navCtrl, _CL, downloadServ, toastServ) {
        this.navCtrl = navCtrl;
        this._CL = _CL;
        this.downloadServ = downloadServ;
        this.toastServ = toastServ;
        //CONFIG
        this.categoria = "categoria_b";
        this.audio = new Audio();
        // variablesOperativas
        this.medias = [];
        this.minutero = "00:00";
        this.timer = new easytimer_js__WEBPACK_IMPORTED_MODULE_4__["Timer"]();
        // progress bar
        this.progresoBar = 0;
        this.downloadIconColor = "light";
        this.downloading = false;
    }
    CategoriaBPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._CL.progressBarInteractionSubscriptions(this.audio, this.interval, this.medias, this.timer, this.slides, this.resumeAfterTouchStart, function (minuteroCB) {
            console.log(minuteroCB);
            this.minutero = minuteroCB;
        });
        this._CL.slideSubscriptions(this.slides, this.interval, this.audio, this.medias, this.timer, function () {
            return _this.interval;
        });
    };
    CategoriaBPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._CL.processUrls(this.medias, this.categoria)];
                    case 1:
                        _a.sent();
                        this._CL.initProgressBarAndLoader(this.medias);
                        this._CL.init(this.medias, this.audio, this.downloadIconColor, this.categoria, function (iconColor) {
                            var split = iconColor.split("-");
                            console.log(split);
                            if (split.length > 1) {
                                // download-end
                                _this.downloading = false;
                                _this.downloadIconColor = "success";
                            }
                            else {
                                _this.downloadIconColor = iconColor;
                                if (_this.downloadServ.downloadingObj[_this.categoria]) {
                                    _this.downloading = true;
                                }
                            }
                        });
                        this._CL.audioSubscriptions(this.audio, this.medias, this.interval);
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoriaBPage.prototype.download = function () {
        var _this = this;
        if (this.downloadIconColor == "success") {
            var header = "Confirmación";
            var subHeader = "¿Desea eliminar la categoría descargada?";
            var buttons = [{
                    text: "Cancelar",
                    role: "cancel"
                }, {
                    text: "Aceptar",
                    handler: function () {
                        _this.downloadIconColor = "light";
                        _this.downloadServ.deleteDirectory(_this.categoria);
                    }
                }];
            this.toastServ.presentAlert(header, subHeader, undefined, buttons);
        }
        else {
            var filesArray = this.downloadServ.generateFilePathArray(this.medias, this.categoria);
            this.downloadServ.switchCordovaAndDataDirectories(filesArray, this.categoria);
            this.downloadIconColor = "success";
            this.downloading = true;
        }
    };
    CategoriaBPage.prototype.pausarAudio = function () {
        this._CL.pausarAudio(this.interval, this.audio, this.medias, this.timer);
    };
    CategoriaBPage.prototype.dismiss = function () {
        this.navCtrl.navigateRoot("/tabs/principal");
    };
    CategoriaBPage.prototype.playPause = function (url, index) {
        // Puede ser una pausa o un play
        var _this = this;
        this.minutero = this._CL.minuteroFunction(this.audio.currentTime);
        this._CL.playPause(url, index, this.audio, this.interval, this.medias, this.timer, function (interval, minuteroCB, progresoCB) {
            _this.interval = interval;
            _this.progresoBar = progresoCB;
            _this.minutero = minuteroCB;
        });
    };
    CategoriaBPage.prototype.ngOnDestroy = function () {
        // Me tengo que desubscribir de los eventos
        this._CL.destroyComponent(this.interval, this.audio, this.medias);
        this._CL.grabarSegundosMeditados(this.timer);
    };
    CategoriaBPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_categorias_logic_categorias_logic_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasLogicService"] },
        { type: src_app_services_services_index__WEBPACK_IMPORTED_MODULE_5__["DownloadService"] },
        { type: src_app_services_services_index__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoriaBPage.prototype, "slides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('progress-bar', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoriaBPage.prototype, "progress", void 0);
    CategoriaBPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categoria-b',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categoria-b.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/categorias/categoria-b/categoria-b.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categoria-b.page.scss */ "./src/app/principal/categorias/categoria-b/categoria-b.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_categorias_logic_categorias_logic_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasLogicService"],
            src_app_services_services_index__WEBPACK_IMPORTED_MODULE_5__["DownloadService"],
            src_app_services_services_index__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
    ], CategoriaBPage);
    return CategoriaBPage;
}());



/***/ })

}]);
//# sourceMappingURL=categorias-categoria-b-categoria-b-module.js.map