import { Component, OnInit, Inject } from '@angular/core';
import { FriendsService, ToastService, LocalStorageService } from 'src/app/services/services.index';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { ModalController } from '@ionic/angular';
import { DOCUMENT } from '@angular/platform-browser';

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
              private modalCtrl: ModalController,
              private userDataService: UserDataService,
              @Inject(DOCUMENT) private document: Document) {
                this.token = this.userDataServ.token;
                if(this.userDataServ.userData.nombre=="admin"){
                  this.email = "tomas.garcia.pineiro@gmail.com"
                }
              }

  ngOnInit() {
  }

  enviarFriendRequest(){

    let data = {
      "email":this.email
    }
    this.document.getElementById("enviar").setAttribute("disabled", "true");
    this.friendsServ.enviarFriendRequest(data, this.token).subscribe((respuesta)=>{
      console.log(respuesta);
      this.document.getElementById("enviar").setAttribute("disabled", "false");
      if(respuesta.status == "success"){
        if(respuesta.data == "email_sent"){
          this.toastServ.presentToast("Gracias por referirnos! Cuando tu amigo/a se haga su cuenta en MeditAr podrán compartir sus estadísticas y acompañarse en el camino!" , "success");
          this.modalCtrl.dismiss(null,"email_sent");
        }else{
          this.toastServ.presentToast("Se envió la solicitud con éxito" , "success");
          this.modalCtrl.dismiss(respuesta.data,"agregar_amigo");
        }
      }else{
        if(respuesta.data == "email_fail"){
          this.toastServ.presentToast("Ocurrió algun error con el envío del email");
        } else {
          let keys = Object.keys(respuesta.data);
          this.toastServ.presentToast(respuesta.data[keys[0]], "error");
        }
      }
    })
  }

}
