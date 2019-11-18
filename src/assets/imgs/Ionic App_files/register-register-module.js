(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding scrollY=\"false\">\n\n    <ion-icon name=\"arrow-back\" color=\"darkBlue\" class=\"back-icon\" (click)=\"dismiss()\">\n    </ion-icon>\n    <ion-img src=\"assets/imgs/logo.png\"></ion-img>\n\n    <form [formGroup]=\"register\" (ngSubmit)=\"emailRegister()\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item>\n                        <ion-label color=\"darkBlue\" position=\"floating\">\n                            <ion-text>\n                                Nombre y apellido\n                            </ion-text>\n                        </ion-label>\n                        <ion-input type=\"email\" inputmode=\"email\" formControlName=\"name\" color=\"darkBlue\" autofocus>\n                        </ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item>\n                        <ion-label color=\"darkBlue\" position=\"floating\">\n                            <ion-text>\n                                Email\n                            </ion-text>\n                        </ion-label>\n                        <ion-input type=\"email\" inputmode=\"email\" formControlName=\"email\" color=\"darkBlue\">\n                        </ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item>\n                        <ion-label color=\"darkBlue\" position=\"floating\">\n                            <ion-text>\n                                Contraseña\n                            </ion-text>\n                        </ion-label>\n                        <ion-input type=\"password\" inputmode=\"password\" formControlName=\"password\" color=\"darkBlue\" clearOnEdit>\n                        </ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item>\n                        <ion-label color=\"darkBlue\" position=\"floating\">\n                            <ion-text>\n                                Confirmar contraseña\n                            </ion-text>\n                        </ion-label>\n                        <ion-input type=\"password\" inputmode=\"password\" color=\"darkBlue\" formControlName=\"password_confirmation\" clearOnEdit>\n                        </ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <ion-grid style=\"padding-top: 2vw;\">\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-button expand=\"block\" type=\"submit\" [disabled]='registrar_disabled'>\n                        <ion-text color=\"light\">\n                            Registrarme\n                        </ion-text>\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n            <!--\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-button expand=\"block\" (click)=\"facebookRegister()\">\n                        <ion-icon slot=\"start\" name=\"logo-facebook\" color=\"light\">\n                        </ion-icon>\n                        <ion-text color=\"light\">\n                            Registrarme con facebook\n                        </ion-text>\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n        -->\n        </ion-grid>\n    </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  padding-top: 30vw;\n  padding-left: 14vw;\n  padding-right: 14vw;\n}\n\nion-content {\n  --background: white !important;\n}\n\nion-input {\n  --background: transparent;\n}\n\nion-item {\n  --background: transparent;\n}\n\nion-img {\n  position: absolute;\n  left: 33%;\n  top: 10vw;\n  width: 30vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21hc2dhcmNpYXBpbmVpcm8vRGVza3RvcC9wcm95ZWN0byBtZWRpdGFjaW9uL21lZGl0YWNpb24taW9uaWMtNC1saW1waWEvc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBRUUsOEJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlke1xuICBwYWRkaW5nLXRvcDogMzB2dztcbiAgcGFkZGluZy1sZWZ0OiAxNHZ3O1xuICBwYWRkaW5nLXJpZ2h0OiAxNHZ3O1xufVxuaW9uLWNvbnRlbnR7XG4gIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCksIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0e1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taXRlbXtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1pbWd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzMlO1xuICB0b3A6IDEwdnc7XG4gIHdpZHRoOjMwdnc7XG59XG4iLCJpb24tZ3JpZCB7XG4gIHBhZGRpbmctdG9wOiAzMHZ3O1xuICBwYWRkaW5nLWxlZnQ6IDE0dnc7XG4gIHBhZGRpbmctcmlnaHQ6IDE0dnc7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDMzJTtcbiAgdG9wOiAxMHZ3O1xuICB3aWR0aDogMzB2dztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_services_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/services.index */ "./src/app/services/services.index.ts");
/* harmony import */ var _services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-data/user-data.service */ "./src/app/services/user-data/user-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, formBuilder, toastServ, auth, localStorageServ, userDataServ, document) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toastServ = toastServ;
        this.auth = auth;
        this.localStorageServ = localStorageServ;
        this.userDataServ = userDataServ;
        this.document = document;
        this.registrar_disabled = false;
        this.register = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)],
            password_confirmation: ['']
        });
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.dismiss = function () {
        this.navCtrl.navigateBack("/login-or-register");
    };
    RegisterPage.prototype.emailRegister = function () {
        var _this = this;
        var formObj = this.register.value;
        if (!this.register.valid) {
            Object.keys(this.register.controls).forEach(function (key) {
                var controlErrors = _this.register.get(key).errors;
                if (controlErrors != null) {
                    Object.keys(controlErrors).forEach(function (keyError) {
                        if (controlErrors[keyError]) {
                            if (keyError == "required") {
                                _this.toastServ.presentToast("Todos los campos son requeridos");
                                return;
                            }
                            if (keyError == "minLength") {
                                _this.toastServ.presentToast("La contraseña debe tener al menos 6 caracteres");
                                return;
                            }
                            if (keyError == "email") {
                                _this.toastServ.presentToast("Ingrese un email válido");
                                return;
                            }
                        }
                    });
                }
            });
        }
        if (formObj.password != formObj.password_confirmation) {
            this.toastServ.presentToast("Ambas contraseñas deben coincidir!", "error");
            return;
        }
        formObj.tipo_de_cuenta = "nativo";
        formObj.photo_url = "no_url";
        this.registerFN(formObj);
    };
    RegisterPage.prototype.registerFN = function (data) {
        var _this = this;
        console.log("Registración de: ", data);
        this.document.getElementById("splash").style.visibility = "visible";
        this.registrar_disabled = true;
        this.auth.register(data).subscribe(function (respuesta) {
            if (respuesta.status == "success") {
                var token = respuesta.data.api_token;
                var user_1 = respuesta.data;
                _this.localStorageServ.insertAndInstantiateValue("token", token).then(function () {
                    _this.document.getElementById("splash").style.visibility = "visible";
                    _this.userDataServ.gatherUserData(true, user_1).then(function () {
                        _this.document.getElementById("splash").style.visibility = "hidden";
                        _this.toastServ.presentToast("Bienvenido a MeditAr App " + user_1.name + ". Nuestra app es totalmente gratuita, disfruta de nuestras meditaciones y respirá.", "success");
                        _this.navCtrl.navigateForward("/tabs/principal");
                    });
                });
            }
            else {
                _this.registrar_disabled = false;
                var errores = respuesta.data;
                var keys = Object.keys(errores);
                _this.toastServ.presentToast(errores[keys[0]], "error");
            }
        });
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_services_index__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
        { type: _services_services_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _services_services_index__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
        { type: _services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_services_index__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _services_services_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_services_index__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
            _services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"],
            Document])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map