import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data/user-data.service';
import { ObjUserData } from 'src/interfaces/interfaces';
import { PopupLogicService } from '../services/services.index';
import { ModalController, NavController } from '@ionic/angular';
import { FriendRequestModalPage } from './friend-request-modal/friend-request-modal.page';
import { CategoriasLogicService } from '../services/categorias-logic/categorias-logic.service';
import { CategoriasNavigatorService } from '../services/categorias-logic/categorias-navigator.service';
import { ModalCategoriasSlidesService } from '../services/categorias-logic/modal-categorias-slides.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ContribuiModalPage } from '../perfil/contribui-modal/contribui-modal.page';

@Component({
    selector: 'app-principal',
    templateUrl: './principal.page.html',
    styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

    userData: ObjUserData;


    constructor(private userDataServ: UserDataService,
        private popupLogicServ: PopupLogicService,
        private modalCtrl: ModalController,
        private categoriaLogic: CategoriasLogicService,
        private categoriaNavigation: CategoriasNavigatorService,
        private statusBar: StatusBar) {
        this.userData = this.userDataServ.userData;
        this.statusBar.styleLightContent();
    }

    ngOnInit() {
        setTimeout(() => {
            this.buscarPopupsDeSolicitudes();
        }, 1000)
    }

    buscarPopupsDeSolicitudes() {
        var solicitudesRecibidas = this.userData.amigos.recibidas;
        var response = this.popupLogicServ.checkPopupStateInArray(solicitudesRecibidas);
        if (response.status == true) {
            let friend = response.data;
            this.popupLogicServ.friendRequesting = friend;
            if (friend.estado == "pendiente") {
                this.modalFriendRequest();
            };
        } else {
            console.log("Se terminó de buscar popups de amistad")
        };
    }

    async modalFriendRequest() {
        var modal = await this.friendModal();
        modal.present();
    }

    async friendModal() {
        return this.modalCtrl.create({
            component: FriendRequestModalPage,
            cssClass: 'modal-email-friend',
            backdropDismiss: true,
        });
    }

    checkInitializedCategorie(categoria) {
        let isInit = this.categoriaLogic.checkInitializedCategorie(categoria);
        console.log("Categoria is init: " + isInit);
        if (isInit || categoria == "categoria_e") {
          this.categoriaNavigation.categoriasSwitchNavigation(categoria);
        } else {
          this.categoriaNavigation.slidesSwitchNavigation(categoria,true);
        }
    }

    async abrirContribuiModal(){
      let modal = await this.contribuiModal();
      modal.present();
    }

    async contribuiModal(){
      return this.modalCtrl.create({
        component: ContribuiModalPage,
      });
    }

}
