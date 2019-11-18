(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/email-modal/email-modal.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/email-modal/email-modal.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content scrollY=\"false\" style=\"padding:,--offset-top: -7vw\">\n\n    <ion-row align-items-center justify-content-center>\n        <ion-col size=\"12\" style=\"text-align:center\">\n            <ion-text class=\"title\" style=\"margin:auto\">\n                Ingresa el email de tu meditAmigo!\n            </ion-text>\n        </ion-col>\n        <ion-col size=\"12\" style=\"text-align:center\">\n            <ion-item>\n                <ion-label position=\"floating\" color=\"primary\">\n                    Email\n                </ion-label>\n                <ion-input color=\"darkBlue\" type=\"text\" [(ngModel)]=\"email\"></ion-input>\n            </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" style=\"text-align:center\">\n            <ion-button expand=\"block\" id=\"enviar\" (click)=\"enviarFriendRequest()\">\n                <ion-text color=\"light\">\n                    Enviar solicitud\n                </ion-text>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding>\n\n    <ion-item lines=\"none\">\n\n        <img [src]=\"photoURL\" slot=\"start\">\n        <ion-text color=\"darkBlue\" style=\"font-size:5vw; margin-top:2vw\">\n            {{userDataServ.userData.nombre}}\n        </ion-text>\n        <ion-icon name=\"log-out\" (click) = \"logout()\" slot=\"end\" style=\"font-size:10vw\" color=\"medium\">\n        </ion-icon>\n    </ion-item>\n    <br>\n    <ion-row>\n        <ion-col size=\"1\">\n            <ion-icon color=\"primary\" name=\"md-download\" style=\"font-size:8vw;\"></ion-icon>\n        </ion-col>\n        <ion-col style=\"padding-left:3vw; padding-top:3.5vw\">\n            <ion-text color=\"darkBlue\" style=\"font-size:5.5vw;\">\n                Mis descargas\n            </ion-text>\n        </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"categoriasDescargadas.length == 0\">\n      <br>\n      <ion-col text-center>\n        <ion-text color=\"darkBlue\">\n          Aun no tenes categorías descargadas. Descargate categorías enteras para poder escucharlas sin internet!\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-slides [options] = \"slidesOptions\" *ngIf=\"categoriasDescargadas.length > 0\">\n      <ion-slide *ngFor=\"let nombre of categoriasDescargadas\">\n\n          <app-categoria-a-mini *ngIf =\"nombre == 'categoria_a'\" (click)=\"irACategoria('categoria_a')\">\n\n          </app-categoria-a-mini>\n          <app-categoria-b-mini *ngIf =\"nombre == 'categoria_b'\" (click)=\"irACategoria('categoria_b')\">\n\n          </app-categoria-b-mini>\n          <app-categoria-c-mini *ngIf =\"nombre == 'categoria_c'\" (click)=\"irACategoria('categoria_c')\">\n\n          </app-categoria-c-mini>\n          <app-categoria-e-mini *ngIf =\"nombre == 'categoria_e'\" (click)=\"irACategoria('categoria_e')\">\n\n          </app-categoria-e-mini>\n      </ion-slide>\n    </ion-slides>\n    <br><br>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"1\">\n                <ion-icon color=\"primary\" name=\"ios-timer\" style=\"font-size:8vw;\"></ion-icon>\n            </ion-col>\n            <ion-col style=\"padding-left:3vw; padding-top:3.5vw\">\n                <ion-text color=\"darkBlue\" style=\"font-size:5.5vw;\">\n                    Tiempo meditado\n                </ion-text>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-text color=\"darkBlue\" style=\"font-size:5vw;\">\n                    <strong style=\"font-size:9vw;padding-right:1vw;\">{{tiempoMeditado}}</strong> {{medidaTiempoMeditado}}\n                </ion-text>\n            </ion-col>\n        </ion-row>\n        <br>\n        <ion-row>\n            <ion-col size=\"1\">\n                <ion-icon color=\"primary\" name=\"ios-headset\" style=\"font-size:8vw;\"></ion-icon>\n            </ion-col>\n            <ion-col style=\"padding-left:3vw; padding-top:3.5vw\">\n                <ion-text color=\"darkBlue\" style=\"font-size:5.5vw;\">\n                    Sesiones completadas\n                </ion-text>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-text color=\"darkBlue\" style=\"font-size:5vw;\">\n                    <strong style=\"font-size:9vw;padding-right:1vw;\">{{userData.meditaciones_escuchadas}}</strong> sesiones\n                </ion-text>\n            </ion-col>\n        </ion-row>\n        <br>\n        <ion-row>\n            <ion-col style=\"padding:0\">\n                <ion-row>\n                    <ion-col size=\"2\">\n                        <ion-icon color=\"primary\" name=\"ios-trophy\" style=\"font-size:8vw;\"></ion-icon>\n                    </ion-col>\n                    <ion-col style=\"padding-left:3vw; padding-top:3.5vw\">\n                        <ion-text color=\"darkBlue\" style=\"font-size:5.5vw;\">\n                            Puntaje\n                        </ion-text>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-text color=\"darkBlue\" style=\"font-size:5vw;\">\n                            <strong style=\"font-size:9vw;padding-right:1vw;\">{{puntaje}}</strong> puntos\n                        </ion-text>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n            <ion-col align-self-center text-center style=\"padding:0\">\n                <ion-row style=\"padding:0\">\n                    <ion-col size=\"12\">\n                        <img style=\"height:25vw;\" src=\"assets/imgs/nivel1.jpg\">\n                    </ion-col>\n                    <ion-col size=\"12\">\n                        <ion-text color=\"darkBlue\" style=\"font-size:3vw;\">\n                            Buddha principiante\n                        </ion-text>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n    <ion-item>\n        <ion-text color=\"darkBlue\" style=\"font-size:5.5vw;\">\n            Meditamigos\n        </ion-text>\n        <ion-icon name=\"add-circle\" slot=\"end\" style=\"font-size:8.5vw;\" color=\"primary\" (click)=\"abrirEmailModal()\"></ion-icon>\n    </ion-item>\n    <div *ngFor=\"let amigo of amigos; let i = index\">\n\n        <!-- AMIGOS ACEPTADOS -->\n\n        <ion-item *ngIf=\"amigo.estado == 'aceptado'\">\n            <ion-text color=\"darkBlue\" style=\"font-size:5.0vw;\">\n                {{amigo.user.name}}\n            </ion-text>\n            <ion-icon [name]=\"amigo.icono\" color=\"primary\" slot=\"end\" (click)=\"cambiarIconoDeListaDeAmigos(i)\">\n            </ion-icon>\n        </ion-item>\n        <!-- DAT AMIGOS ACEPTADOS -->\n\n        <div *ngIf=\"amigo.estado == 'aceptado' && amigo.icono == 'arrow-dropup'\">\n            <ion-grid style=\"padding:0 ; padding-top:2vw\">\n                <ion-row>\n                    <ion-col align-self-center>\n                        <ion-text style=\"font-size:5.0vw;margin-left:3vw;\" color=\"darkCustom\">\n                            <strong>Tiempo meditado</strong>\n                        </ion-text>\n                    </ion-col>\n                    <ion-col align-self-center>\n                        <ion-text style=\"margin-left: 4vw;font-size:5.5vw;\" color=\"darkCustom\">\n                            {{amigo.user_data.tiempo_meditado}}\n                            {{amigo.user_data.medida_tiempo_meditado}}\n                        </ion-text>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col align-self-center>\n                        <ion-text style=\"font-size:5.0vw;margin-left:3vw;\" color=\"darkCustom\">\n                            <strong>Sesiones completadas</strong>\n                        </ion-text>\n                    </ion-col>\n                    <ion-col align-self-center>\n                        <ion-text style=\"margin-left: 4vw;font-size:5.5vw;\" color=\"darkBlue\">\n                            {{amigo.user_data.meditaciones_escuchadas}}\n                        </ion-text>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col align-self-center>\n                        <div style=\"font-size:5.0vw;margin-left:3vw;\" color=\"darkBlue\">\n                            <strong>Puntaje</strong>\n                        </div>\n                    </ion-col>\n                    <ion-col align-self-center>\n                        <ion-text style=\"margin-left: 4vw;font-size:5.5vw;\" color=\"darkBlue\">\n                            {{amigo.user_data.puntaje}}\n                        </ion-text>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-button expand=\"full\" color=\"danger\" (click)=\"responderSolicitud('rechazar',i, 'eliminar_aceptada')\">Eliminar</ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n\n        <!-- SOLICITUDES RECIBIDAS -->\n\n        <ion-item *ngIf=\"amigo.user_receiver_id == userData.id && amigo.estado != 'aceptado'\">\n            <ion-text color=\"darkBlue\" style=\"font-size:5.0vw;\">\n                {{amigo.user.name}}\n            </ion-text>\n            <ion-icon name=\"checkbox\" color=\"success\" slot=\"end\" (click)=\"responderSolicitud('aceptar',i)\">\n            </ion-icon>\n            <ion-icon name=\"close-circle\" color=\"danger\" slot=\"end\" (click)=\"responderSolicitud('rechazar',i)\">\n            </ion-icon>\n        </ion-item>\n\n        <!-- SOLICITUDES ENVIADAS -->\n\n        <ion-item *ngIf=\"amigo.user_receiver_id != userData.id && amigo.estado != 'aceptado'\">\n            <ion-grid style=\"padding:0 !important\">\n                <ion-row>\n                    <ion-col align-self-center>\n                        <ion-text color=\"darkBlue\" style=\"font-size:5.0vw;\">\n                            {{amigo.user.name}}\n                        </ion-text>\n                    </ion-col>\n                    <ion-col align-self-center>\n                        <div style=\"float:left;font-size:5.5vw;\" color=\"darkCustom\">\n                            <ion-text color=\"primary\">Enviado</ion-text>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n\n    </div>\n    <!--\n    <ion-button expand=\"block\" type=\"submit\" (click)='abrirContribuiModal()'>\n        <ion-text color=\"light\">\n            Contribuí con nosotros\n        </ion-text>\n    </ion-button>\n-->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/perfil/email-modal/email-modal.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/perfil/email-modal/email-modal.module.ts ***!
  \**********************************************************/
/*! exports provided: EmailModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModalPageModule", function() { return EmailModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _email_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-modal.page */ "./src/app/perfil/email-modal/email-modal.page.ts");







var routes = [
    {
        path: '',
        component: _email_modal_page__WEBPACK_IMPORTED_MODULE_6__["EmailModalPage"]
    }
];
var EmailModalPageModule = /** @class */ (function () {
    function EmailModalPageModule() {
    }
    EmailModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_email_modal_page__WEBPACK_IMPORTED_MODULE_6__["EmailModalPage"]]
        })
    ], EmailModalPageModule);
    return EmailModalPageModule;
}());



/***/ }),

/***/ "./src/app/perfil/email-modal/email-modal.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/perfil/email-modal/email-modal.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --offset-top: -7vw !important;\n}\n\n.title {\n  color: var(--ion-color-primary);\n  font-size: 5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21hc2dhcmNpYXBpbmVpcm8vRGVza3RvcC9wcm95ZWN0byBtZWRpdGFjaW9uL21lZGl0YWNpb24taW9uaWMtNC1saW1waWEvc3JjL2FwcC9wZXJmaWwvZW1haWwtbW9kYWwvZW1haWwtbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wZXJmaWwvZW1haWwtbW9kYWwvZW1haWwtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsNkJBQUE7QUNDRDs7QURDQTtFQUNFLCtCQUFBO0VBQ0EsY0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGVyZmlsL2VtYWlsLW1vZGFsL2VtYWlsLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuXHQtLW9mZnNldC10b3A6IC03dncgIWltcG9ydGFudDtcbn1cbi50aXRsZXtcbiAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDV2dztcbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1vZmZzZXQtdG9wOiAtN3Z3ICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogNXZ3O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/perfil/email-modal/email-modal.page.ts":
/*!********************************************************!*\
  !*** ./src/app/perfil/email-modal/email-modal.page.ts ***!
  \********************************************************/
/*! exports provided: EmailModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModalPage", function() { return EmailModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/services.index */ "./src/app/services/services.index.ts");
/* harmony import */ var src_app_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-data/user-data.service */ "./src/app/services/user-data/user-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var EmailModalPage = /** @class */ (function () {
    function EmailModalPage(friendsServ, userDataServ, toastServ, modalCtrl, userDataService, document) {
        this.friendsServ = friendsServ;
        this.userDataServ = userDataServ;
        this.toastServ = toastServ;
        this.modalCtrl = modalCtrl;
        this.userDataService = userDataService;
        this.document = document;
        this.token = "";
        this.email = "";
        this.token = this.userDataServ.token;
        if (this.userDataServ.userData.nombre == "admin") {
            this.email = "tomas.garcia.pineiro@gmail.com";
        }
    }
    EmailModalPage.prototype.ngOnInit = function () {
    };
    EmailModalPage.prototype.enviarFriendRequest = function () {
        var _this = this;
        var data = {
            "email": this.email
        };
        this.document.getElementById("enviar").setAttribute("disabled", "true");
        this.friendsServ.enviarFriendRequest(data, this.token).subscribe(function (respuesta) {
            console.log(respuesta);
            _this.document.getElementById("enviar").setAttribute("disabled", "false");
            if (respuesta.status == "success") {
                if (respuesta.data == "email_sent") {
                    _this.toastServ.presentToast("Gracias por referirnos! Cuando tu amigo/a se haga su cuenta en MeditAr podrán compartir sus estadísticas y acompañarse en el camino!", "success");
                    _this.modalCtrl.dismiss(null, "email_sent");
                }
                else {
                    _this.toastServ.presentToast("Se envió la solicitud con éxito", "success");
                    _this.modalCtrl.dismiss(respuesta.data, "agregar_amigo");
                }
            }
            else {
                if (respuesta.data == "email_fail") {
                    _this.toastServ.presentToast("Ocurrió algun error con el envío del email");
                }
                else {
                    var keys = Object.keys(respuesta.data);
                    _this.toastServ.presentToast(respuesta.data[keys[0]], "error");
                }
            }
        });
    };
    EmailModalPage.ctorParameters = function () { return [
        { type: src_app_services_services_index__WEBPACK_IMPORTED_MODULE_2__["FriendsService"] },
        { type: src_app_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"] },
        { type: src_app_services_services_index__WEBPACK_IMPORTED_MODULE_2__["ToastService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: src_app_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
    ]; };
    EmailModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./email-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/email-modal/email-modal.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./email-modal.page.scss */ "./src/app/perfil/email-modal/email-modal.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_services_index__WEBPACK_IMPORTED_MODULE_2__["FriendsService"],
            src_app_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"],
            src_app_services_services_index__WEBPACK_IMPORTED_MODULE_2__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            src_app_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"],
            Document])
    ], EmailModalPage);
    return EmailModalPage;
}());



/***/ }),

/***/ "./src/app/perfil/perfil.module.ts":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil.page */ "./src/app/perfil/perfil.page.ts");
/* harmony import */ var _perfil_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.router.module */ "./src/app/perfil/perfil.router.module.ts");
/* harmony import */ var _email_modal_email_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email-modal/email-modal.module */ "./src/app/perfil/email-modal/email-modal.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _contribui_modal_contribui_modal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contribui-modal/contribui-modal.module */ "./src/app/perfil/contribui-modal/contribui-modal.module.ts");










var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _perfil_router_module__WEBPACK_IMPORTED_MODULE_6__["PerfilPageRoutingModule"],
                _email_modal_email_modal_module__WEBPACK_IMPORTED_MODULE_7__["EmailModalPageModule"],
                _contribui_modal_contribui_modal_module__WEBPACK_IMPORTED_MODULE_9__["ContribuiModalPageModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
            ],
            declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_5__["PerfilPage"]]
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());



/***/ }),

/***/ "./src/app/perfil/perfil.page.scss":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 17vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21hc2dhcmNpYXBpbmVpcm8vRGVza3RvcC9wcm95ZWN0byBtZWRpdGFjaW9uL21lZGl0YWNpb24taW9uaWMtNC1saW1waWEvc3JjL2FwcC9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGVyZmlsL3BlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1ne1xuICB3aWR0aDoxN3Z3O1xufVxuIiwiaW1nIHtcbiAgd2lkdGg6IDE3dnc7XG59Il19 */");

/***/ }),

/***/ "./src/app/perfil/perfil.page.ts":
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/services.index */ "./src/app/services/services.index.ts");
/* harmony import */ var _services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user-data/user-data.service */ "./src/app/services/user-data/user-data.service.ts");
/* harmony import */ var _services_puntaje_calculator_puntaje_calculator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/puntaje-calculator/puntaje-calculator.service */ "./src/app/services/puntaje-calculator/puntaje-calculator.service.ts");
/* harmony import */ var _email_modal_email_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-modal/email-modal.page */ "./src/app/perfil/email-modal/email-modal.page.ts");
/* harmony import */ var _contribui_modal_contribui_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contribui-modal/contribui-modal.page */ "./src/app/perfil/contribui-modal/contribui-modal.page.ts");
/* harmony import */ var _services_categorias_logic_categorias_navigator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/categorias-logic/categorias-navigator.service */ "./src/app/services/categorias-logic/categorias-navigator.service.ts");










var PerfilPage = /** @class */ (function () {
    function PerfilPage(localStorageServ, userDataServ, puntajeServ, modalCtrl, downloadServ, categoriaNavigation, friendsServ, toastServ, navCtrl) {
        this.localStorageServ = localStorageServ;
        this.userDataServ = userDataServ;
        this.puntajeServ = puntajeServ;
        this.modalCtrl = modalCtrl;
        this.downloadServ = downloadServ;
        this.categoriaNavigation = categoriaNavigation;
        this.friendsServ = friendsServ;
        this.toastServ = toastServ;
        this.navCtrl = navCtrl;
        this.photoURL = "assets/imgs/image-1.png";
        this.puntaje = 0;
        this.nivel = 0;
        this.tiempoMeditado = 0;
        this.medidaTiempoMeditado = "segundos";
        this.amigosAceptados = [];
        this.amigosRecibidos = [];
        this.amigosEnviados = [];
        this.amigos = [];
        this.categoriasDescargadas = [];
        this.categoriasNombres = {
            "categoria_a": "Sonidos Binaurales",
            "categoria_b": "Meditaciones",
            "cateogria_c": "Música relajante"
        };
        this.userData = this.userDataServ.userData;
        this.token = this.userDataServ.token;
        this.slidesOptions = {
            "slidesPerView": 3
        };
    }
    PerfilPage.prototype.ionViewDidEnter = function () {
        this.calcularPuntajeYNivelUsuario();
        this.procesarTiempoMeditado();
        this.buscarMediaDescargada();
    };
    PerfilPage.prototype.ngOnInit = function () {
        this.calcularPuntajeNivelAmigosAgregarHTMLVariablesProcesarTiempo();
    };
    PerfilPage.prototype.buscarMediaDescargada = function () {
        var directory = this.downloadServ.getDeviceDirectory();
        if (directory == null) {
            // Desktop buscar en desktop directorios con categoria
            this.mediaDesktopCase();
        }
        else {
            this.mediaDeviceCase(directory);
        }
    };
    PerfilPage.prototype.irACategoria = function (categoria) {
        this.categoriaNavigation.categoriasSwitchNavigation(categoria);
    };
    PerfilPage.prototype.mediaDeviceCase = function (directory) {
        var _this = this;
        this.categoriasDescargadas = [];
        this.downloadServ.getCategoriaDirectory("", directory).then(function (responseDirectory) {
            if (responseDirectory["found"]) {
                console.log("Respuesta directory" + JSON.stringify(responseDirectory["dir"]));
                var directories = responseDirectory["dir"];
                for (var i = 0; i < directories.length; i++) {
                    var nombre = directories[i].name;
                    _this.categoriasDescargadas.push(nombre);
                    console.log("NOMBRES CATs: " + JSON.stringify(_this.categoriasDescargadas));
                }
            }
        });
    };
    PerfilPage.prototype.mediaDesktopCase = function () {
        var keys = Object.keys(this.localStorageServ.localStorageObj);
        this.categoriasDescargadas = [];
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var split = key.split("_");
            if (split.length > 0) {
                if (split[0] == "categoria") {
                    //let nombreCategoria = this.categoriasNombres[key];
                    this.categoriasDescargadas.push(key);
                }
            }
        }
    };
    PerfilPage.prototype.calcularPuntajeNivelAmigosAgregarHTMLVariablesProcesarTiempo = function () {
        this.amigos = this.userData.amigos.enviadas.concat(this.userData.amigos.recibidas);
        ;
        for (var i = 0; i < this.amigos.length; i++) {
            if (this.amigos[i].estado == "aceptado") {
                var amigoData = this.amigos[i].user_data;
                this.inicializarAmigoAceptado(amigoData, i);
            }
        }
        console.log(this.amigos);
    };
    PerfilPage.prototype.inicializarAmigoAceptado = function (amigoData, index) {
        console.log("amigoData enviada a procesar");
        console.log(amigoData);
        var puntaje = this.puntajeServ.calcularPuntaje(amigoData.segundos_meditados, amigoData.meditaciones_escuchadas);
        var nivel = this.puntajeServ.calcularNivel(puntaje);
        var tiempoMedidaObj = this.convertidorDeTiempo(amigoData.segundos_meditados);
        this.amigos[index].user_data.tiempo_meditado = tiempoMedidaObj.tiempo;
        this.amigos[index].user_data.medida_tiempo_meditado = tiempoMedidaObj.medida;
        this.amigos[index].user_data.puntaje = puntaje;
        this.amigos[index].user_data.nivel = nivel;
        this.amigos[index].icono = "arrow-dropdown";
        return;
    };
    PerfilPage.prototype.cambiarIconoDeListaDeAmigos = function (i) {
        if (this.amigos[i].icono == "arrow-dropdown") {
            this.amigos[i].icono = "arrow-dropup";
        }
        else {
            this.amigos[i].icono = "arrow-dropdown";
        }
    };
    PerfilPage.prototype.calcularPuntajeYNivelUsuario = function () {
        this.puntaje = this.puntajeServ.calcularPuntaje(this.userData.segundos_meditados, this.userData.meditaciones_escuchadas);
        this.nivel = this.puntajeServ.calcularNivel(this.puntaje);
    };
    PerfilPage.prototype.procesarTiempoMeditado = function () {
        var tiempoMedidaObj = this.convertidorDeTiempo(this.userData.segundos_meditados);
        this.tiempoMeditado = tiempoMedidaObj.tiempo;
        this.medidaTiempoMeditado = tiempoMedidaObj.medida;
    };
    PerfilPage.prototype.abrirEmailModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.emailModal()];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        modal.onDidDismiss().then(function (val) {
                            var role = val.role;
                            if (role == "agregar_amigo") {
                                var data = val.data;
                                _this.amigos.push(data);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilPage.prototype.emailModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.modalCtrl.create({
                        component: _email_modal_email_modal_page__WEBPACK_IMPORTED_MODULE_6__["EmailModalPage"],
                        cssClass: 'modal-email-friend',
                        backdropDismiss: true,
                    })];
            });
        });
    };
    PerfilPage.prototype.convertidorDeTiempo = function (tiempo) {
        var secsToMin = tiempo / 60;
        var minsToHour = secsToMin / 60;
        if (secsToMin < 1) {
            var medida = "segundos";
            return {
                "medida": medida,
                "tiempo": tiempo
            };
        }
        else if (secsToMin < 60) {
            var medida = "minutos";
            var tiempo_1 = Math.round(secsToMin);
            return {
                "medida": medida,
                "tiempo": tiempo_1
            };
        }
        else {
            var medida = "horas";
            var tiempo_2 = Math.round(minsToHour);
            return {
                "medida": medida,
                "tiempo": tiempo_2
            };
        }
    };
    PerfilPage.prototype.responderSolicitud = function (action, index, type) {
        var _this = this;
        if (type === void 0) { type = "normal"; }
        var id = this.amigos[index].id;
        if (type == "eliminar_aceptada") {
            var header = "Confirmación";
            var subHeader = "";
            var inputs = [];
            var buttons = [{
                    "text": "Cancelar",
                    "role": "cancel"
                }, {
                    "text": "Aceptar",
                    "handler": function () {
                        _this.rechazarSolicitud(index, id);
                    }
                }];
            var message = "¿Está seguro que desea eliminar esta amistad?";
            this.toastServ.presentAlert(header, subHeader, inputs, buttons, message);
        }
        else {
            switch (action) {
                case "aceptar":
                    this.amigos[index].estado = "aceptado";
                    this.friendsServ.updateSolicitud({
                        "id": id,
                        "data": {
                            "estado": "aceptado"
                        }
                    }, this.token).subscribe(function (respuesta) {
                        console.log(_this.amigos);
                        var amigoNuevoData = respuesta.data.user_data;
                        var amigoNuevoUser = respuesta.data.user;
                        _this.toastServ.presentToast("Se agrego a tu amigo con éxito, ahora podrás ver sus estadisticas y competir por quien medita mas!");
                        _this.inicializarAmigoAceptado(amigoNuevoData, index);
                    });
                    break;
                case "rechazar":
                    this.rechazarSolicitud(index, id);
                    break;
            }
        }
    };
    PerfilPage.prototype.rechazarSolicitud = function (index, id) {
        this.amigos.splice(index, 1);
        this.friendsServ.rechazarSolicitud({
            "id": id
        }, this.token).subscribe(function (respuesta) {
            console.log(respuesta);
        });
    };
    PerfilPage.prototype.logout = function () {
        var _this = this;
        var buttons = [
            {
                "text": "Confirmar",
                "handler": function () {
                    _this.localStorageServ.eliminateAllValuesInStorage().then(function () {
                        _this.navCtrl.navigateBack("/login-or-register");
                    });
                }
            },
            {
                "text": "Cancelar",
                "role": "cancel"
            }
        ];
        var inputs = [];
        this.toastServ.presentAlert("Salir de la sesión", "¿Está seguro que quiere salir de la sesión?", inputs, buttons, "");
    };
    PerfilPage.prototype.abrirContribuiModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contribuiModal()];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilPage.prototype.contribuiModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.modalCtrl.create({
                        component: _contribui_modal_contribui_modal_page__WEBPACK_IMPORTED_MODULE_7__["ContribuiModalPage"],
                    })];
            });
        });
    };
    PerfilPage.ctorParameters = function () { return [
        { type: _services_services_index__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
        { type: _services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"] },
        { type: _services_puntaje_calculator_puntaje_calculator_service__WEBPACK_IMPORTED_MODULE_5__["PuntajeCalculatorService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_services_index__WEBPACK_IMPORTED_MODULE_3__["DownloadService"] },
        { type: _services_categorias_logic_categorias_navigator_service__WEBPACK_IMPORTED_MODULE_8__["CategoriasNavigatorService"] },
        { type: _services_services_index__WEBPACK_IMPORTED_MODULE_3__["FriendsService"] },
        { type: _services_services_index__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    PerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./perfil.page.scss */ "./src/app/perfil/perfil.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_services_index__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
            _services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"],
            _services_puntaje_calculator_puntaje_calculator_service__WEBPACK_IMPORTED_MODULE_5__["PuntajeCalculatorService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_services_index__WEBPACK_IMPORTED_MODULE_3__["DownloadService"],
            _services_categorias_logic_categorias_navigator_service__WEBPACK_IMPORTED_MODULE_8__["CategoriasNavigatorService"],
            _services_services_index__WEBPACK_IMPORTED_MODULE_3__["FriendsService"],
            _services_services_index__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], PerfilPage);
    return PerfilPage;
}());



/***/ }),

/***/ "./src/app/perfil/perfil.router.module.ts":
/*!************************************************!*\
  !*** ./src/app/perfil/perfil.router.module.ts ***!
  \************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "./src/app/perfil/perfil.page.ts");
/* harmony import */ var _email_modal_email_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-modal/email-modal.page */ "./src/app/perfil/email-modal/email-modal.page.ts");





var routes = [
    { path: '', component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"] },
    { path: '/tabs/perfil/email-modal', component: _email_modal_email_modal_page__WEBPACK_IMPORTED_MODULE_4__["EmailModalPage"] },
];
var PerfilPageRoutingModule = /** @class */ (function () {
    function PerfilPageRoutingModule() {
    }
    PerfilPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PerfilPageRoutingModule);
    return PerfilPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/puntaje-calculator/puntaje-calculator.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/services/puntaje-calculator/puntaje-calculator.service.ts ***!
  \***************************************************************************/
/*! exports provided: PuntajeCalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuntajeCalculatorService", function() { return PuntajeCalculatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PuntajeCalculatorService = /** @class */ (function () {
    function PuntajeCalculatorService() {
    }
    PuntajeCalculatorService.prototype.calcularPuntaje = function (segundosMeditados, sesionesFinalizadas) {
        var puntosPorSegundoMeditado = 1;
        var puntosPorSesionFinalizada = 10;
        return puntosPorSegundoMeditado * segundosMeditados + puntosPorSesionFinalizada * sesionesFinalizadas;
    };
    PuntajeCalculatorService.prototype.calcularNivel = function (puntaje) {
        var nivel1 = 1500;
        var nivel2 = 3000;
        var nivel3 = 4000;
        if (puntaje <= nivel1) {
            return 1;
        }
        else if (puntaje > nivel1 && puntaje <= nivel2) {
            return 2;
        }
        else {
            return 3;
        }
    };
    PuntajeCalculatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PuntajeCalculatorService);
    return PuntajeCalculatorService;
}());



/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module.js.map