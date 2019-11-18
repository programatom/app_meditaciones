(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["principal-principal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/friend-request-modal/friend-request-modal.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/principal/friend-request-modal/friend-request-modal.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content scrollY=\"false\">\n\n    <ion-row align-items-center justify-content-center>\n        <ion-col size=\"12\" style=\"text-align:center\">\n            <ion-text class=\"title\" style=\"margin:auto\">\n                <strong>{{nombre}}</strong> quiere ser tu amigo!\n            </ion-text>\n        </ion-col>\n        <br><br><br><br>\n        <ion-col size=\"6\" style=\"text-align:center\">\n            <ion-button expand=\"block\" color=\"danger\" (click)=\"rechazarSolicitud()\">\n                <ion-text color=\"light\">\n                    Rechazar\n                </ion-text>\n            </ion-button>\n        </ion-col>\n        <ion-col size=\"6\" style=\"text-align:center\">\n            <ion-button expand=\"block\" (click)=\"aceptarSolicitud()\">\n                <ion-text color=\"light\">\n                    Aceptar solicitud\n                </ion-text>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/principal.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/principal/principal.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding>\n\n    <ion-button expand=\"block\" type=\"submit\" (click)='abrirContribuiModal()'>\n        <ion-text color=\"light\">\n            Contribuí con nosotros\n        </ion-text>\n    </ion-button>\n\n    <div class=\"rectangulo categoria-A-fondo\" (click)=\"checkInitializedCategorie('categoria_a')\">\n        <div class=\"texto-categoria\">\n            <ion-text color=\"light\">\n                Sonidos binaurales\n            </ion-text>\n        </div>\n    </div>\n     <div class=\"rectangulo categoria-B-fondo texto-B\" (click)=\"checkInitializedCategorie('categoria_b')\">\n        <div class=\"texto-categoria\">\n            <ion-text color=\"light\">\n                Meditaciones\n            </ion-text>\n        </div>\n    </div>\n    <div class=\"rectangulo categoria-C-fondo\" (click)=\"checkInitializedCategorie('categoria_c')\">\n        <div class=\"texto-categoria\" style=\"top:10vw !important; \">\n            <ion-text color=\"light\">\n                Música <br>relajante\n            </ion-text>\n        </div>\n    </div>\n    <!--\n    <div class=\"rectangulo categoria-D-fondo\" (click)=\"checkInitializedCategorie('categoria_d')\">\n        <div class=\"texto-categoria\" style=\"top:10vw !important; \">\n            <ion-text color=\"light\">\n                Videos <br><span style=\"font-size:28px\">e imagenes </span><br><span style=\"font-size:22px\">para relajar</span>\n            </ion-text>\n        </div>\n    </div> \n    -->\n    <div class=\"rectangulo categoria-E-fondo\" (click)=\"checkInitializedCategorie('categoria_e')\">\n        <div class=\"texto-categoria\">\n           <ion-text color=\"light\">\n                Meditaciones 2\n            </ion-text>\n        </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/principal/friend-request-modal/friend-request-modal.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/principal/friend-request-modal/friend-request-modal.module.ts ***!
  \*******************************************************************************/
/*! exports provided: FriendRequestModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendRequestModalPageModule", function() { return FriendRequestModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _friend_request_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./friend-request-modal.page */ "./src/app/principal/friend-request-modal/friend-request-modal.page.ts");







var routes = [
    {
        path: '',
        component: _friend_request_modal_page__WEBPACK_IMPORTED_MODULE_6__["FriendRequestModalPage"]
    }
];
var FriendRequestModalPageModule = /** @class */ (function () {
    function FriendRequestModalPageModule() {
    }
    FriendRequestModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_friend_request_modal_page__WEBPACK_IMPORTED_MODULE_6__["FriendRequestModalPage"]]
        })
    ], FriendRequestModalPageModule);
    return FriendRequestModalPageModule;
}());



/***/ }),

/***/ "./src/app/principal/friend-request-modal/friend-request-modal.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/principal/friend-request-modal/friend-request-modal.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  color: var(--ion-color-primary);\n  font-size: 5vw;\n}\n\nion-row {\n  margin-top: 12vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21hc2dhcmNpYXBpbmVpcm8vRGVza3RvcC9wcm95ZWN0byBtZWRpdGFjaW9uL21lZGl0YWNpb24taW9uaWMtNC1saW1waWEvc3JjL2FwcC9wcmluY2lwYWwvZnJpZW5kLXJlcXVlc3QtbW9kYWwvZnJpZW5kLXJlcXVlc3QtbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wcmluY2lwYWwvZnJpZW5kLXJlcXVlc3QtbW9kYWwvZnJpZW5kLXJlcXVlc3QtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcHJpbmNpcGFsL2ZyaWVuZC1yZXF1ZXN0LW1vZGFsL2ZyaWVuZC1yZXF1ZXN0LW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDV2dztcbn1cblxuaW9uLXJvd3tcbiAgbWFyZ2luLXRvcDogMTJ2d1xufVxuIiwiLnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiA1dnc7XG59XG5cbmlvbi1yb3cge1xuICBtYXJnaW4tdG9wOiAxMnZ3O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/principal/friend-request-modal/friend-request-modal.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/principal/friend-request-modal/friend-request-modal.page.ts ***!
  \*****************************************************************************/
/*! exports provided: FriendRequestModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendRequestModalPage", function() { return FriendRequestModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-data/user-data.service */ "./src/app/services/user-data/user-data.service.ts");
/* harmony import */ var src_app_services_popup_logic_popup_logic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/popup-logic/popup-logic.service */ "./src/app/services/popup-logic/popup-logic.service.ts");
/* harmony import */ var src_app_services_friends_friends_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/friends/friends.service */ "./src/app/services/friends/friends.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_services_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/services.index */ "./src/app/services/services.index.ts");







var FriendRequestModalPage = /** @class */ (function () {
    function FriendRequestModalPage(popupLogicServ, friendsServ, dataUserServ, modalCtrl, toastServ) {
        this.popupLogicServ = popupLogicServ;
        this.friendsServ = friendsServ;
        this.dataUserServ = dataUserServ;
        this.modalCtrl = modalCtrl;
        this.toastServ = toastServ;
        this.nombre = "";
        this.friend = {};
        this.token = "";
        this.friend = this.popupLogicServ.friendRequesting;
        this.nombre = this.friend.user.name;
        this.token = this.dataUserServ.token;
        console.log(this.friend);
    }
    FriendRequestModalPage.prototype.ngOnInit = function () {
        this.friend.popup_state = 0;
        this.changePopupStateOfFriendship(false);
    };
    FriendRequestModalPage.prototype.rechazarSolicitud = function () {
        var _this = this;
        var data = {
            "id": this.friend.id
        };
        this.modalCtrl.dismiss();
        this.friendsServ.rechazarSolicitud(data, this.token).subscribe(function (data) {
            console.log(data);
            var index = _this.findIndexFriendshipInLocalStorage();
            _this.dataUserServ.userData.amigos.recibidas.splice(index, 1);
        });
    };
    FriendRequestModalPage.prototype.changePopupStateOfFriendship = function (andAccept) {
        var data = {
            "data": {
                "popup_state": 0,
            },
            "id": this.friend.id
        };
        if (andAccept) {
            data.data.estado = "aceptado";
            var index = this.findIndexFriendshipInLocalStorage();
            this.dataUserServ.userData.amigos.recibidas[index].estado = "aceptado";
        }
        ;
        this.friendsServ.updateSolicitud(data, this.token).subscribe(function (data) {
            console.log(data);
        });
    };
    FriendRequestModalPage.prototype.findIndexFriendshipInLocalStorage = function () {
        var _this = this;
        var arrayRecibidos = this.dataUserServ.userData.amigos.recibidas;
        var index;
        arrayRecibidos.find(function (element, indexFound) {
            if (element.id == _this.friend.id) {
                index = indexFound;
            }
        });
        return index;
    };
    FriendRequestModalPage.prototype.aceptarSolicitud = function () {
        this.changePopupStateOfFriendship(true);
        this.toastServ.presentToast("Se agrego a tu amigo con éxito, ahora podrás ver sus estadisticas y competir por quien medita mas! Ve a la pantalla de perfil para ver tu nueva amistad");
        this.modalCtrl.dismiss();
    };
    FriendRequestModalPage.ctorParameters = function () { return [
        { type: src_app_services_popup_logic_popup_logic_service__WEBPACK_IMPORTED_MODULE_3__["PopupLogicService"] },
        { type: src_app_services_friends_friends_service__WEBPACK_IMPORTED_MODULE_4__["FriendsService"] },
        { type: src_app_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: src_app_services_services_index__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
    ]; };
    FriendRequestModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friend-request-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./friend-request-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/friend-request-modal/friend-request-modal.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./friend-request-modal.page.scss */ "./src/app/principal/friend-request-modal/friend-request-modal.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_popup_logic_popup_logic_service__WEBPACK_IMPORTED_MODULE_3__["PopupLogicService"],
            src_app_services_friends_friends_service__WEBPACK_IMPORTED_MODULE_4__["FriendsService"],
            src_app_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            src_app_services_services_index__WEBPACK_IMPORTED_MODULE_6__["ToastService"]])
    ], FriendRequestModalPage);
    return FriendRequestModalPage;
}());



/***/ }),

/***/ "./src/app/principal/principal.module.ts":
/*!***********************************************!*\
  !*** ./src/app/principal/principal.module.ts ***!
  \***********************************************/
/*! exports provided: PrincipalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalPageModule", function() { return PrincipalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _principal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./principal.page */ "./src/app/principal/principal.page.ts");
/* harmony import */ var _principal_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./principal.router.module */ "./src/app/principal/principal.router.module.ts");
/* harmony import */ var _friend_request_modal_friend_request_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./friend-request-modal/friend-request-modal.module */ "./src/app/principal/friend-request-modal/friend-request-modal.module.ts");
/* harmony import */ var _categorias_categoria_a_categoria_a_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categorias/categoria-a/categoria-a.module */ "./src/app/principal/categorias/categoria-a/categoria-a.module.ts");
/* harmony import */ var _categorias_categoria_a_slides_a_slides_a_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./categorias/categoria-a/slides-a/slides-a.module */ "./src/app/principal/categorias/categoria-a/slides-a/slides-a.module.ts");
/* harmony import */ var _perfil_contribui_modal_contribui_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../perfil/contribui-modal/contribui-modal.module */ "./src/app/perfil/contribui-modal/contribui-modal.module.ts");











var PrincipalPageModule = /** @class */ (function () {
    function PrincipalPageModule() {
    }
    PrincipalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _principal_router_module__WEBPACK_IMPORTED_MODULE_6__["PrincipalPageRoutingModule"],
                _friend_request_modal_friend_request_modal_module__WEBPACK_IMPORTED_MODULE_7__["FriendRequestModalPageModule"],
                _categorias_categoria_a_categoria_a_module__WEBPACK_IMPORTED_MODULE_8__["CategoriaAPageModule"],
                _categorias_categoria_a_slides_a_slides_a_module__WEBPACK_IMPORTED_MODULE_9__["SlidesAPageModule"],
                _perfil_contribui_modal_contribui_modal_module__WEBPACK_IMPORTED_MODULE_10__["ContribuiModalPageModule"]
            ],
            declarations: [_principal_page__WEBPACK_IMPORTED_MODULE_5__["PrincipalPage"]]
        })
    ], PrincipalPageModule);
    return PrincipalPageModule;
}());



/***/ }),

/***/ "./src/app/principal/principal.page.scss":
/*!***********************************************!*\
  !*** ./src/app/principal/principal.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".texto-categoria {\n  position: relative;\n  top: 33vw;\n  font-size: 10vw;\n  font-weight: lighter;\n  left: 3vw;\n}\n\n.texto-b {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21hc2dhcmNpYXBpbmVpcm8vRGVza3RvcC9wcm95ZWN0byBtZWRpdGFjaW9uL21lZGl0YWNpb24taW9uaWMtNC1saW1waWEvc3JjL2FwcC9wcmluY2lwYWwvcHJpbmNpcGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJpbmNpcGFsL3ByaW5jaXBhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0FDQUY7O0FER0E7RUFDRyx1QkFBQTtBQ0FIIiwiZmlsZSI6InNyYy9hcHAvcHJpbmNpcGFsL3ByaW5jaXBhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50ZXh0by1jYXRlZ29yaWF7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0b3A6MzN2dztcbiAgZm9udC1zaXplOjEwdnc7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBsZWZ0OjN2dztcbn1cblxuLnRleHRvLWJ7XG4gICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xufSIsIi50ZXh0by1jYXRlZ29yaWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzN2dztcbiAgZm9udC1zaXplOiAxMHZ3O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbGVmdDogM3Z3O1xufVxuXG4udGV4dG8tYiB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/principal/principal.page.ts":
/*!*********************************************!*\
  !*** ./src/app/principal/principal.page.ts ***!
  \*********************************************/
/*! exports provided: PrincipalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalPage", function() { return PrincipalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-data/user-data.service */ "./src/app/services/user-data/user-data.service.ts");
/* harmony import */ var _services_services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/services.index */ "./src/app/services/services.index.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _friend_request_modal_friend_request_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./friend-request-modal/friend-request-modal.page */ "./src/app/principal/friend-request-modal/friend-request-modal.page.ts");
/* harmony import */ var _services_categorias_logic_categorias_logic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/categorias-logic/categorias-logic.service */ "./src/app/services/categorias-logic/categorias-logic.service.ts");
/* harmony import */ var _services_categorias_logic_categorias_navigator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/categorias-logic/categorias-navigator.service */ "./src/app/services/categorias-logic/categorias-navigator.service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _perfil_contribui_modal_contribui_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../perfil/contribui-modal/contribui-modal.page */ "./src/app/perfil/contribui-modal/contribui-modal.page.ts");










var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(userDataServ, popupLogicServ, modalCtrl, categoriaLogic, categoriaNavigation, statusBar) {
        this.userDataServ = userDataServ;
        this.popupLogicServ = popupLogicServ;
        this.modalCtrl = modalCtrl;
        this.categoriaLogic = categoriaLogic;
        this.categoriaNavigation = categoriaNavigation;
        this.statusBar = statusBar;
        this.userData = this.userDataServ.userData;
        this.statusBar.styleLightContent();
    }
    PrincipalPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.buscarPopupsDeSolicitudes();
        }, 1000);
    };
    PrincipalPage.prototype.buscarPopupsDeSolicitudes = function () {
        var solicitudesRecibidas = this.userData.amigos.recibidas;
        var response = this.popupLogicServ.checkPopupStateInArray(solicitudesRecibidas);
        if (response.status == true) {
            var friend = response.data;
            this.popupLogicServ.friendRequesting = friend;
            if (friend.estado == "pendiente") {
                this.modalFriendRequest();
            }
            ;
        }
        else {
            console.log("Se terminó de buscar popups de amistad");
        }
        ;
    };
    PrincipalPage.prototype.modalFriendRequest = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.friendModal()];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PrincipalPage.prototype.friendModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.modalCtrl.create({
                        component: _friend_request_modal_friend_request_modal_page__WEBPACK_IMPORTED_MODULE_5__["FriendRequestModalPage"],
                        cssClass: 'modal-email-friend',
                        backdropDismiss: true,
                    })];
            });
        });
    };
    PrincipalPage.prototype.checkInitializedCategorie = function (categoria) {
        var isInit = this.categoriaLogic.checkInitializedCategorie(categoria);
        console.log("Categoria is init: " + isInit);
        if (isInit || categoria == "categoria_e") {
            this.categoriaNavigation.categoriasSwitchNavigation(categoria);
        }
        else {
            this.categoriaNavigation.slidesSwitchNavigation(categoria);
        }
    };
    PrincipalPage.prototype.abrirContribuiModal = function () {
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
    PrincipalPage.prototype.contribuiModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.modalCtrl.create({
                        component: _perfil_contribui_modal_contribui_modal_page__WEBPACK_IMPORTED_MODULE_9__["ContribuiModalPage"],
                    })];
            });
        });
    };
    PrincipalPage.ctorParameters = function () { return [
        { type: _services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"] },
        { type: _services_services_index__WEBPACK_IMPORTED_MODULE_3__["PopupLogicService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _services_categorias_logic_categorias_logic_service__WEBPACK_IMPORTED_MODULE_6__["CategoriasLogicService"] },
        { type: _services_categorias_logic_categorias_navigator_service__WEBPACK_IMPORTED_MODULE_7__["CategoriasNavigatorService"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"] }
    ]; };
    PrincipalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-principal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./principal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/principal.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./principal.page.scss */ "./src/app/principal/principal.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"],
            _services_services_index__WEBPACK_IMPORTED_MODULE_3__["PopupLogicService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _services_categorias_logic_categorias_logic_service__WEBPACK_IMPORTED_MODULE_6__["CategoriasLogicService"],
            _services_categorias_logic_categorias_navigator_service__WEBPACK_IMPORTED_MODULE_7__["CategoriasNavigatorService"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]])
    ], PrincipalPage);
    return PrincipalPage;
}());



/***/ }),

/***/ "./src/app/principal/principal.router.module.ts":
/*!******************************************************!*\
  !*** ./src/app/principal/principal.router.module.ts ***!
  \******************************************************/
/*! exports provided: PrincipalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalPageRoutingModule", function() { return PrincipalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _principal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./principal.page */ "./src/app/principal/principal.page.ts");




var routes = [
    { path: '', component: _principal_page__WEBPACK_IMPORTED_MODULE_3__["PrincipalPage"] },
    { path: 'categoria-a', loadChildren: './categorias/categoria-a/categoria-a.module#CategoriaAPageModule' },
    { path: 'categoria-b', loadChildren: './categorias/categoria-b/categoria-b.module#CategoriaBPageModule' },
];
var PrincipalPageRoutingModule = /** @class */ (function () {
    function PrincipalPageRoutingModule() {
    }
    PrincipalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PrincipalPageRoutingModule);
    return PrincipalPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=principal-principal-module.js.map