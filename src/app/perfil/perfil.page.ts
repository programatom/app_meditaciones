import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/services.index';
import { UserDataService } from '../services/user-data/user-data.service';
import { ObjUserData } from 'src/interfaces/interfaces';
import { PuntajeCalculatorService } from '../services/puntaje-calculator/puntaje-calculator.service';
import { ModalController } from '@ionic/angular';
import { EmailModalPage } from './email-modal/email-modal.page';

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.page.html',
    styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

    userData:ObjUserData;
    token:string;
    photoURL = "assets/imgs/image-1.png";
    puntaje = 0;
    nivel = 0;
    tiempoMeditado = 0;
    medidaTiempoMeditado = "segundos";

    amigosAceptados = [];
    amigosRecibidos = [];
    amigosEnviados = [];

    amigos = [];


    constructor(public localStorageServ: LocalStorageService,
                public userDataServ: UserDataService,
                public puntajeServ: PuntajeCalculatorService,
                private modalCtrl: ModalController) {
          this.userData = this.userDataServ.userData;
          this.token = this.userDataServ.token;
    }

    ionViewDidEnter(){
      this.calcularPuntajeYNivelUsuario();
      this.procesarTiempoMeditado();
    }

    ngOnInit() {
      this.calcularPuntajeNivelAmigosAgregarHTMLVariablesProcesarTiempo();

    }

    calcularPuntajeNivelAmigosAgregarHTMLVariablesProcesarTiempo(){

      this.userData.amigos.enviadas.concat(this.userData.amigos.recibidas);
      this.amigos = this.userData.amigos.enviadas;

      for(let i = 0; i < this.amigos.length; i ++){
        var amigoData = this.amigos[i].user_data;
        var puntaje = this.puntajeServ.calcularPuntaje(amigoData.segundos_meditados, amigoData.meditaciones_escuchadas);
        var nivel = this.puntajeServ.calcularNivel(puntaje);

        var tiempoMedidaObj = this.convertidorDeTiempo(amigoData.segundos_meditados);
        this.amigos[i].user_data.tiempo_meditado = tiempoMedidaObj.tiempo;
        this.amigos[i].user_data.medida_tiempo_meditado = tiempoMedidaObj.medida;

        this.amigos[i].user_data.puntaje = puntaje;
        this.amigos[i].user_data.nivel = nivel;
        this.amigos[i].icono = "arrow-dropdown";
      }
      console.log(this.amigos)
    }

    cambiarIconoDeListaDeAmigos(i){
      if(this.amigos[i].icono == "arrow-dropdown"){
        this.amigos[i].icono = "arrow-dropup";
      }else{
        this.amigos[i].icono = "arrow-dropdown";
      }
    }

    calcularPuntajeYNivelUsuario(){
      this.puntaje = this.puntajeServ.calcularPuntaje(this.userData.segundos_meditados, this.userData.meditaciones_escuchadas);
      this.nivel = this.puntajeServ.calcularNivel(this.puntaje);
    }

    procesarTiempoMeditado(){
      var tiempoMedidaObj = this.convertidorDeTiempo(this.userData.segundos_meditados);
      this.tiempoMeditado = tiempoMedidaObj.tiempo;
      this.medidaTiempoMeditado = tiempoMedidaObj.medida;
    }

    async abrirEmailModal(){
      let modal = await this.emailModal();
      modal.present();
    }

    async emailModal(){
      return this.modalCtrl.create({
        component: EmailModalPage,
        cssClass: 'modal-email-friend',
        backdropDismiss: true,
      });
    }


    convertidorDeTiempo(tiempo) {
        let secsToMin = tiempo / 60;
        let minsToHour = secsToMin / 60;
        if (secsToMin < 1) {
            let medida = "segundos";
            return {
                "medida": medida,
                "tiempo": tiempo
            }
        } else if (secsToMin < 60) {
            let medida = "minutos";
            let tiempo = Math.round(secsToMin);
            return {
                "medida": medida,
                "tiempo": tiempo
            };
        } else {
            let medida = "horas";
            let tiempo = Math.round(minsToHour);
            return {
                "medida": medida,
                "tiempo": tiempo
            };
        }
    }

}
