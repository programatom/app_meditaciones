(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["principal-categorias-categoria-d-categoria-d-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/categorias/categoria-d/categoria-d.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/principal/categorias/categoria-d/categoria-d.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar-categoria (dismiss) = \"dismiss()\"  [downloadIconColor]=\"downloadIconColor\">\n\n</app-toolbar-categoria>\n<ion-content scrollY=\"false\">\n\n\n \n  <!--\n    <div *ngFor=\"let media of medias; let i = index\">\n\n    </div>\n    -->\n    <ion-slides #slides>\n         <div id=\"pantalla_negra\">\n      \n    </div>\n        <ion-slide *ngFor=\"let media of medias; let i = index\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <!--\n                <ion-icon [name] = \"media.icon\" color=\"light\" style=\"font-size: 161px;\" (click)=\"openMedia(media.type, i)\"></ion-icon>\n              -->\n                  <div *ngIf= \"media.type == 'video'\">\n                     <iframe width=\"100%\" height=\"315\" frameborder=\"0\" allowfullscreen \n                    [src]=\"media.url\" [id]=\"i\">\n                    </iframe>\n                  </div>\n                  <div *ngIf=\"media.type == 'imagen'\">\n                    <img [src]=\"media.url\" width=\"100%\">\n                  </div>\n       \n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-text color=\"light\" style=\"font-size: 21px;\">{{media.title}}</ion-text>\n              </ion-col>\n            </ion-row>\n            <div class=\"posicion-texto-explicativo\" *ngIf=\"i == 0\">\n                <ion-text color=\"light\">\n                    Deslizar hacia la derecha\n                </ion-text>\n            </div>\n            <!--\n            <div class=\"posicion-texto-explicativo\" *ngIf=\"i != 0 && !isDragging && videoON\">\n                <ion-text color=\"light\">\n                    Deslizar para ocultar video\n                </ion-text>\n            </div>\n          -->\n        </ion-slide>\n    </ion-slides>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/principal/categorias/categoria-d/categoria-d.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/principal/categorias/categoria-d/categoria-d.module.ts ***!
  \************************************************************************/
/*! exports provided: CategoriaDPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaDPageModule", function() { return CategoriaDPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categoria_d_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categoria-d.page */ "./src/app/principal/categorias/categoria-d/categoria-d.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _categoria_d_page__WEBPACK_IMPORTED_MODULE_6__["CategoriaDPage"]
    }
];
var CategoriaDPageModule = /** @class */ (function () {
    function CategoriaDPageModule() {
    }
    CategoriaDPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            exports: [_categoria_d_page__WEBPACK_IMPORTED_MODULE_6__["CategoriaDPage"]],
            declarations: [_categoria_d_page__WEBPACK_IMPORTED_MODULE_6__["CategoriaDPage"]],
            entryComponents: [_categoria_d_page__WEBPACK_IMPORTED_MODULE_6__["CategoriaDPage"]]
        })
    ], CategoriaDPageModule);
    return CategoriaDPageModule;
}());



/***/ }),

/***/ "./src/app/principal/categorias/categoria-d/categoria-d.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/principal/categorias/categoria-d/categoria-d.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-libroMeditacion3) url('image-23.png') no-repeat 101% center / cover;\n}\n\nion-toggle {\n  position: absolute;\n  right: 7vw;\n  top: 3vw;\n}\n\n.posicion-texto-explicativo {\n  position: absolute;\n  bottom: 3vw;\n  text-align: center;\n  width: 100%;\n}\n\nion-slides {\n  background: transparent;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21hc2dhcmNpYXBpbmVpcm8vRGVza3RvcC9wcm95ZWN0byBtZWRpdGFjaW9uL21lZGl0YWNpb24taW9uaWMtNC1saW1waWEvc3JjL2FwcC9wcmluY2lwYWwvY2F0ZWdvcmlhcy9jYXRlZ29yaWEtZC9jYXRlZ29yaWEtZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3ByaW5jaXBhbC9jYXRlZ29yaWFzL2NhdGVnb3JpYS1kL2NhdGVnb3JpYS1kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlHQUFBO0FDQ0Y7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDQUY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcHJpbmNpcGFsL2NhdGVnb3JpYXMvY2F0ZWdvcmlhLWQvY2F0ZWdvcmlhLWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpYnJvTWVkaXRhY2lvbjMpIHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvaW1hZ2UtMjMucG5nJykgbm8tcmVwZWF0IDEwMSUgY2VudGVyIC8gY292ZXI7XG5cbn1cblxuaW9uLXRvZ2dsZXtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHJpZ2h0Ojd2dztcbiAgdG9wOiAzdnc7XG59XG5cblxuXG4ucG9zaWNpb24tdGV4dG8tZXhwbGljYXRpdm97XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gfVxuXG5pb24tc2xpZGVze1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaWZyYW1le1xuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vdG9wOiAzMyU7XG4gICAgLy96LWluZGV4OiA5OTk7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWJyb01lZGl0YWNpb24zKSB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9pbWFnZS0yMy5wbmdcIikgbm8tcmVwZWF0IDEwMSUgY2VudGVyIC8gY292ZXI7XG59XG5cbmlvbi10b2dnbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA3dnc7XG4gIHRvcDogM3Z3O1xufVxuXG4ucG9zaWNpb24tdGV4dG8tZXhwbGljYXRpdm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogM3Z3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/principal/categorias/categoria-d/categoria-d.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/principal/categorias/categoria-d/categoria-d.page.ts ***!
  \**********************************************************************/
/*! exports provided: CategoriaDPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaDPage", function() { return CategoriaDPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_categorias_logic_categorias_logic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categorias-logic/categorias-logic.service */ "./src/app/services/categorias-logic/categorias-logic.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var CategoriaDPage = /** @class */ (function () {
    function CategoriaDPage(navCtrl, _CL, document) {
        this.navCtrl = navCtrl;
        this._CL = _CL;
        this.document = document;
        this.downloadIconColor = "light";
        this.videoON = false;
        this.isDragging = false;
        this.medias = [
            {
                "type": "video",
                "title": "Amaneceres I",
                "url": "https://www.youtube.com/embed/83UZyu8P2xk?autoplay=1"
            },
            /*
            {
              "type" : "video",
              "icon":"logo-youtube",
              "title":"Amaneceres II",
              "url":"https://www.youtube.com/embed/7KU_6vJ-Nh4?autoplay=1"
        
            },
            */
            {
                "type": "video",
                "title": "Atardeceres I",
                "url": "https://www.youtube.com/embed/kNmVY65ZLSs?autoplay=1"
            },
            {
                "type": "video",
                "title": "Agua I",
                "url": "https://www.youtube.com/embed/8V8sI3N3bDE?autoplay=1"
            },
            {
                "type": "video",
                "title": "Agua II",
                "url": "https://www.youtube.com/embed/Tvb0iK5aP3Y?autoplay=1"
            },
            {
                "type": "video",
                "title": "Agua III",
                "url": "https://www.youtube.com/embed/cXyJiBZS8wM?autoplay=1"
            },
            {
                "type": "imagen",
                "title": "Amanecer I",
                "url": "assets/imgs-cats/amanecer_1.png"
            },
            {
                "type": "imagen",
                "title": "Amanecer II",
                "url": "assets/imgs-cats/amanecer_2.jpg"
            }
        ];
        for (var _i = 0, _a = this.medias; _i < _a.length; _i++) {
            var media = _a[_i];
            media.url = _CL.sanitizeurl(media.url);
        }
    }
    CategoriaDPage.prototype.ngOnInit = function () {
        //this.document.getElementById("downloadicon").style.display = "none";
        //this.slidesSubscriptions();
    };
    /* para adelante
slidesSubscriptions(){
    this.slides.ionSlideNextEnd.subscribe(() => {
        this.hideNextSlideVideo("forward");
   
    });
    this.slides.ionSlidePrevEnd.subscribe(() => {
         this.hideNextSlideVideo("backwards");
    });
    this.slides.ionSlideDrag.subscribe(()=>{
        if(this.dragDetectorTimeout){
            clearTimeout(this.dragDetectorTimeout);
        }
        this.isDragging = true;
        this.dragDetectorTimeout = setTimeout(()=>{

            this.isDragging = false;
        },1000);
    });
}
    
hideNextSlideVideo(direction){
    switch(direction){
        case "forward":
            this.slides.getActiveIndex().then((index)=>{
                let prevIndexNum = index - 1;
                let prevIndex = prevIndexNum.toString();
                let previousMedia = this.medias[prevIndex];
                if(previousMedia.type == "video"){
                    let prevVideo = document.getElementById(prevIndex);
                    this.showHide(prevVideo, false);
                }
            });
            break;
        case "backwards":
            this.slides.getActiveIndex().then((index)=>{
                let prevIndexNum = index + 1;
                let prevIndex = prevIndexNum.toString();
                let previousMedia = this.medias[prevIndex];
                if(previousMedia.type == "video"){
                    let prevVideo = document.getElementById(prevIndex);
                    this.showHide(prevVideo, false);
                }
            });
            break;
    }
}
    */
    CategoriaDPage.prototype.openMedia = function (mediatype, index) {
        if (mediatype == "video") {
            var video = document.getElementById(index);
            this.showHide(video);
        }
        else {
        }
    };
    CategoriaDPage.prototype.showHide = function (element, show) {
        if (show === void 0) { show = true; }
        if (show) {
            this.videoON = true;
            element.style.display = "inline-block";
            element.animate([
                {
                    display: "inline-block",
                    opacity: 0,
                },
                {
                    opacity: 1,
                }
            ], 2000);
        }
        else {
            this.videoON = false;
            element.style.display = "none";
            /*
            element.animate([
                { // from
                   display : "inline-block",
                   opacity: 1,
                },
                { // to
                   opacity: 0,
                   display: "none"
                }
                ], 2000);
                */
        }
    };
    CategoriaDPage.prototype.dismiss = function () {
        this.navCtrl.navigateRoot("/tabs/principal");
    };
    CategoriaDPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_categorias_logic_categorias_logic_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasLogicService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoriaDPage.prototype, "slides", void 0);
    CategoriaDPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categoria-d',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categoria-d.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/categorias/categoria-d/categoria-d.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categoria-d.page.scss */ "./src/app/principal/categorias/categoria-d/categoria-d.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_categorias_logic_categorias_logic_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasLogicService"],
            Document])
    ], CategoriaDPage);
    return CategoriaDPage;
}());



/***/ })

}]);
//# sourceMappingURL=principal-categorias-categoria-d-categoria-d-module.js.map