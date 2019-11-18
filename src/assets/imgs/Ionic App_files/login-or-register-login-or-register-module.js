(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-or-register-login-or-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-or-register/login-or-register.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-or-register/login-or-register.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding scrollY=\"false\">\n\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-button expand=\"block\" (click)=\"irALogin()\">\n                    <ion-text>\n                        Ya tengo una cuenta\n                    </ion-text>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-button expand=\"block\" (click)=\"irARegister()\">\n                    <ion-text>\n                        Registrarme\n                    </ion-text>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <img src=\"assets/imgs/logo.png\" class=\"logo fadeIn\" *ngIf=\"initLogo && plt.is('ios') && plt.is('cordova')\">\n    <img src=\"assets/imgs/logo.png\" class=\"logo fadeIn android-logo\" *ngIf=\"plt.is('android') || !plt.is('cordova')\">\n\n    <ion-row *ngIf=\"plt.is('ios') && plt.is('cordova')\">\n        <ion-col size=\"12\">\n            <img src=\"assets/gifs/login-gif.gif\">\n        </ion-col>\n    </ion-row>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/login-or-register/login-or-register.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/login-or-register/login-or-register.module.ts ***!
  \***************************************************************/
/*! exports provided: LoginOrRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginOrRegisterPageModule", function() { return LoginOrRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_or_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-or-register.page */ "./src/app/login-or-register/login-or-register.page.ts");







var routes = [
    {
        path: '',
        component: _login_or_register_page__WEBPACK_IMPORTED_MODULE_6__["LoginOrRegisterPage"]
    }
];
var LoginOrRegisterPageModule = /** @class */ (function () {
    function LoginOrRegisterPageModule() {
    }
    LoginOrRegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_or_register_page__WEBPACK_IMPORTED_MODULE_6__["LoginOrRegisterPage"]]
        })
    ], LoginOrRegisterPageModule);
    return LoginOrRegisterPageModule;
}());



/***/ }),

/***/ "./src/app/login-or-register/login-or-register.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/login-or-register/login-or-register.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: rgb(255,255,255);\n  --background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(251,255,249,1) 0%, rgba(166,216,235,1) 100%);\n}\n\nion-grid {\n  padding-left: 20vw;\n  padding-right: 20vw;\n}\n\n.logo {\n  position: absolute;\n  top: 30%;\n  left: 25%;\n  width: 50vw;\n}\n\nion-text {\n  color: var(--ion-color-darkBlue-tint);\n}\n\n.android-logo {\n  top: 39%;\n  left: 13vw;\n  width: 77vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21hc2dhcmNpYXBpbmVpcm8vRGVza3RvcC9wcm95ZWN0byBtZWRpdGFjaW9uL21lZGl0YWNpb24taW9uaWMtNC1saW1waWEvc3JjL2FwcC9sb2dpbi1vci1yZWdpc3Rlci9sb2dpbi1vci1yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luLW9yLXJlZ2lzdGVyL2xvZ2luLW9yLXJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLDhCQUFBO0VBQ0EsK0dBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSxxQ0FBQTtBQ0RGOztBRElBO0VBQ0UsUUFBQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi1vci1yZWdpc3Rlci9sb2dpbi1vci1yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpLCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpKSAhaW1wb3J0YW50O1xuICAvLy0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpOyBcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI1MSwyNTUsMjQ5LDEpIDAlLCByZ2JhKDE2NiwyMTYsMjM1LDEpIDEwMCUpO1xufVxuXG5pb24tZ3JpZHtcbiAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHZ3O1xufVxuXG4ubG9nb3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgbGVmdDogMjUlO1xuICB3aWR0aDogNTB2dztcbn1cblxuaW9uLXRleHR7XG4gIGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZS10aW50KTtcbn1cblxuLmFuZHJvaWQtbG9nb3tcbiAgdG9wOiAzOSU7XG4gICAgbGVmdDogMTN2dztcbiAgICB3aWR0aDogNzd2dztcbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjUxLDI1NSwyNDksMSkgMCUsIHJnYmEoMTY2LDIxNiwyMzUsMSkgMTAwJSk7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHZ3O1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDI1JTtcbiAgd2lkdGg6IDUwdnc7XG59XG5cbmlvbi10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZS10aW50KTtcbn1cblxuLmFuZHJvaWQtbG9nbyB7XG4gIHRvcDogMzklO1xuICBsZWZ0OiAxM3Z3O1xuICB3aWR0aDogNzd2dztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login-or-register/login-or-register.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/login-or-register/login-or-register.page.ts ***!
  \*************************************************************/
/*! exports provided: LoginOrRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginOrRegisterPage", function() { return LoginOrRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var LoginOrRegisterPage = /** @class */ (function () {
    function LoginOrRegisterPage(navCtrl, plt) {
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.initLogo = false;
    }
    LoginOrRegisterPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initLogo = true;
        }, 3000);
    };
    LoginOrRegisterPage.prototype.irALogin = function () {
        this.navCtrl.navigateForward("/login");
    };
    LoginOrRegisterPage.prototype.irARegister = function () {
        this.navCtrl.navigateForward("/register");
    };
    LoginOrRegisterPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    LoginOrRegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-or-register',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-or-register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-or-register/login-or-register.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-or-register.page.scss */ "./src/app/login-or-register/login-or-register.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], LoginOrRegisterPage);
    return LoginOrRegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-or-register-login-or-register-module.js.map