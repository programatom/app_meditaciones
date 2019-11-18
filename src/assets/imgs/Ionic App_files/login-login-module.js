(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding scrollY=\"false\">\n\n    <ion-icon name=\"arrow-back\" color=\"darkBlue\" class=\"back-icon\" (click)=\"dismiss()\">\n\n    </ion-icon>\n    <ion-img src=\"assets/imgs/logo.png\"></ion-img>\n\n    <form [formGroup]=\"login\" (ngSubmit)=\"emailLogin()\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item>\n                        <ion-label color=\"darkBlue\" position=\"floating\">\n                            <ion-text>\n                                Email\n                            </ion-text>\n                        </ion-label>\n                        <ion-input type=\"email\" inputmode=\"email\" color=\"darkBlue\" autofocus formControlName=\"email\">\n                        </ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item>\n                        <ion-label color=\"darkBlue\" position=\"floating\">\n                            <ion-text>\n                                Contraseña\n                            </ion-text>\n                        </ion-label>\n                        <ion-input type=\"password\" inputmode=\"password\" color=\"darkBlue\" clearOnEdit formControlName=\"password\">\n                        </ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <ion-grid style=\"padding-top: 2vw;\">\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-button expand=\"block\" type=\"submit\" id='ingresar_buttton' [disabled]='disable_ingresar'>\n                        <ion-text color=\"light\">\n                            Ingresar\n                        </ion-text>\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <!--\n                <ion-col size=\"12\">\n                    <ion-button expand=\"block\" (click)=\"faecbookLogin()\">\n                        <ion-icon slot=\"start\" name=\"logo-facebook\" color=\"light\">\n                        </ion-icon>\n                        <ion-text color=\"light\">\n                            Ingresar con facebook\n                        </ion-text>\n                    </ion-button>\n                </ion-col>\n                -->\n            </ion-row>\n        </ion-grid>\n\n    </form>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  padding-top: 30vw;\n  padding-left: 14vw;\n  padding-right: 14vw;\n}\n\nion-content {\n  --background: white !important;\n}\n\nion-input {\n  --background: transparent;\n}\n\nion-item {\n  --background: transparent;\n}\n\nion-img {\n  position: absolute;\n  left: 33%;\n  top: 10vw;\n  width: 30vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21hc2dhcmNpYXBpbmVpcm8vRGVza3RvcC9wcm95ZWN0byBtZWRpdGFjaW9uL21lZGl0YWNpb24taW9uaWMtNC1saW1waWEvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBRUUsOEJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlke1xuICBwYWRkaW5nLXRvcDogMzB2dztcbiAgcGFkZGluZy1sZWZ0OiAxNHZ3O1xuICBwYWRkaW5nLXJpZ2h0OiAxNHZ3O1xufVxuXG5pb24tY29udGVudHtcbiAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KSwgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXR7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1pdGVte1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWltZ3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzMyU7XG4gIHRvcDogMTB2dztcbiAgd2lkdGg6MzB2dztcbn1cbiIsImlvbi1ncmlkIHtcbiAgcGFkZGluZy10b3A6IDMwdnc7XG4gIHBhZGRpbmctbGVmdDogMTR2dztcbiAgcGFkZGluZy1yaWdodDogMTR2dztcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzMlO1xuICB0b3A6IDEwdnc7XG4gIHdpZHRoOiAzMHZ3O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/services.index */ "./src/app/services/services.index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-data/user-data.service */ "./src/app/services/user-data/user-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authServ, formBuilder, toastServ, localStorageServ, userDataServ, document) {
        this.navCtrl = navCtrl;
        this.authServ = authServ;
        this.formBuilder = formBuilder;
        this.toastServ = toastServ;
        this.localStorageServ = localStorageServ;
        this.userDataServ = userDataServ;
        this.document = document;
        this.disable_ingresar = false;
        this.login = this.formBuilder.group({
            email: [''],
            password: [''],
        });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.dismiss = function () {
        this.navCtrl.navigateBack("/login-or-register");
    };
    LoginPage.prototype.emailLogin = function () {
        var _this = this;
        this.authServ.login(this.login.value).subscribe(function (respuesta) {
            console.log("RESPUESTA DEL SERVICIO DE LOGIN: ");
            console.log(JSON.stringify(respuesta));
            if (respuesta.status == "success") {
                var token = respuesta.data.api_token;
                var nombre = respuesta.data.name;
                console.log("SE INSTANCIA EL TOKEN EN EL LS");
                _this.document.getElementById("splash").style.visibility = "visible";
                _this.disable_ingresar = true;
                _this.localStorageServ.insertAndInstantiateValue("token", token).then(function () {
                    _this.userDataServ.gatherUserData(false).then(function () {
                        _this.document.getElementById("splash").style.visibility = "hidden";
                        _this.toastServ.presentToast("Bienvenido a MeditAr App. Nuestra app es totalmente gratuita, disfrutá de nuestras meditaciones y respirá.", "success", "top", 30000);
                        _this.navCtrl.navigateForward("/tabs/principal");
                    });
                });
            }
            else {
                _this.disable_ingresar = false;
                var mensajeError = "El email o la contraseña son incorrectos";
                _this.toastServ.presentToast(mensajeError, "error");
            }
            (function (err) {
                console.log("Error con el servicio de login: ", JSON.stringify(err));
            });
        });
    };
    LoginPage.prototype.facebookLogin = function () {
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_services_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services_services_index__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
        { type: _services_services_index__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
        { type: _services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_services_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_services_index__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
            _services_services_index__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
            _services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"],
            Document])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map