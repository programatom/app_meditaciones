import { Component, OnInit } from '@angular/core';
import { ObjAmigo } from 'src/interfaces/interfaces';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { PopupLogicService } from 'src/app/services/popup-logic/popup-logic.service';
import { FriendsService } from 'src/app/services/friends/friends.service';
import { ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/services/services.index';

@Component({
  selector: 'app-friend-request-modal',
  templateUrl: './friend-request-modal.page.html',
  styleUrls: ['./friend-request-modal.page.scss'],
})
export class FriendRequestModalPage implements OnInit {

  nombre:string = "";
  friend:any = {} as ObjAmigo;
  token = "";

  constructor(public popupLogicServ: PopupLogicService,
              private friendsServ: FriendsService,
              private dataUserServ: UserDataService,
              private modalCtrl: ModalController,
              private toastServ: ToastService) {
                this.friend = this.popupLogicServ.friendRequesting;
                this.nombre = this.friend.user.name;
                this.token = this.dataUserServ.token;
                console.log(this.friend)
  }

  ngOnInit() {
    this.friend.popup_state = 0;
    this.changePopupStateOfFriendship(false);
  }

  rechazarSolicitud(){
    let data = {
      "id":this.friend.id
    };
    this.modalCtrl.dismiss();
    this.friendsServ.rechazarSolicitud(data,this.token).subscribe((data)=>{
      console.log(data);
      let index = this.findIndexFriendshipInLocalStorage();
      this.dataUserServ.userData.amigos.recibidas.splice(index, 1 )
    });

  }

  changePopupStateOfFriendship(andAccept:boolean){
    let data:any = {
      "data": {
        "popup_state" : 0,
      },
      "id": this.friend.id
    };
    if (andAccept){
      data.data.estado = "aceptado";
      let index = this.findIndexFriendshipInLocalStorage();
      this.dataUserServ.userData.amigos.recibidas[index].estado = "aceptado";
    };

    this.friendsServ.updateSolicitud(data , this.token).subscribe((data)=>{
      console.log(data);
    });
  }

  findIndexFriendshipInLocalStorage(){
    let arrayRecibidos:any = this.dataUserServ.userData.amigos.recibidas;
    let index;
    arrayRecibidos.find((element, indexFound)=>{
      if(element.id == this.friend.id){
        index = indexFound
      }
    });
    return index;
  }

  aceptarSolicitud(){
    this.changePopupStateOfFriendship(true);
    this.toastServ.presentToast("Se agrego a tu amigo con éxito, ahora podrás ver sus estadisticas y competir por quien meditas mas! Ve a la pantalla de perfil para ver tu nueva amistad")
    this.modalCtrl.dismiss();
  }
}
