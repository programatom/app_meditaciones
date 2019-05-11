import { Component, OnInit } from '@angular/core';
import { FriendsService, ToastService } from 'src/app/services/services.index';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-email-modal',
  templateUrl: './email-modal.page.html',
  styleUrls: ['./email-modal.page.scss'],
})
export class EmailModalPage implements OnInit {

  token:string = "";
  email:string = "";

  constructor(private friendsServ: FriendsService,
              private userDataServ: UserDataService,
              private toastServ: ToastService,
              private modalCtrl: ModalController) {
                this.token = this.userDataServ.token;
              }

  ngOnInit() {
  }

  enviarFriendRequest(){

    let data = {
      "email":this.email
    }
    this.friendsServ.enviarFriendRequest(data, this.token).subscribe((respuesta)=>{
      console.log(respuesta);
      if(respuesta.status == "success"){
        this.toastServ.presentToast("Se envió la solicitud con éxito" , "success");
        this.modalCtrl.dismiss(respuesta.data,"agregar_amigo");
      }else{
        let keys = Object.keys(respuesta.data);
        this.toastServ.presentToast(respuesta.data[keys[0]], "error");
      }
    })
  }

}
