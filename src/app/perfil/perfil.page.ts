import { Component, OnInit } from '@angular/core';
import { LocalStorageService, DownloadService, FriendsService } from '../services/services.index';
import { UserDataService } from '../services/user-data/user-data.service';
import { ObjUserData } from 'src/interfaces/interfaces';
import { PuntajeCalculatorService } from '../services/puntaje-calculator/puntaje-calculator.service';
import { ModalController } from '@ionic/angular';
import { EmailModalPage } from './email-modal/email-modal.page';
import { CategoriasNavigatorService } from '../services/categorias-logic/categorias-navigator.service';

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

    categoriasDescargadas:Array<{
      "nombre":string
    }> = [];

    categoriasNombres = {
      "categoria_a":"Sonidos Binaurales"
    }

    slidesOptions;


    constructor(public localStorageServ: LocalStorageService,
                public userDataServ: UserDataService,
                public puntajeServ: PuntajeCalculatorService,
                private modalCtrl: ModalController,
                private downloadServ: DownloadService,
                private categoriaNavigation: CategoriasNavigatorService,
                private friendsServ: FriendsService) {
          this.userData = this.userDataServ.userData;
          this.token = this.userDataServ.token;
          this.slidesOptions = {
            "slidesPerView" : 3
          }
    }

    ionViewDidEnter(){
      this.calcularPuntajeYNivelUsuario();
      this.procesarTiempoMeditado();
      this.buscarMediaDescargada();
    }

    ngOnInit() {
      this.calcularPuntajeNivelAmigosAgregarHTMLVariablesProcesarTiempo();
    }


    buscarMediaDescargada(){
      let directory = this.downloadServ.getDeviceDirectory();
      if(directory == null){
        // Desktop buscar en desktop directorios con categoria
        this.mediaDesktopCase();
      }else{
        this.mediaDeviceCase(directory);
      }
    }

    irACategoria(categoria){
      this.categoriaNavigation.categoriasSwitchNavigation(categoria)
    }

    mediaDeviceCase(directory){
      this.categoriasDescargadas = [];
      this.downloadServ.getCategoriaDirectory("", directory).then((responseDirectory)=>{
        if(responseDirectory["found"]){
          console.log("Respuesta directory" + JSON.stringify(responseDirectory["dir"]));
          let directories = responseDirectory["dir"];
          for(let i = 0; i < directories.length; i ++){
            let nombre = this.categoriasNombres[directories[i].name];
            this.categoriasDescargadas.push({
              "nombre": nombre,
            });
          }
        }
      })
    }

    mediaDesktopCase(){
      let keys = Object.keys(this.localStorageServ.localStorageObj);
      this.categoriasDescargadas = [];
      for(let i = 0; i < keys.length; i ++){
        let key = keys[i];
        let split = key.split("_");
        if(split.length > 0){
          if(split[0] == "categoria"){
            let nombreCategoria = this.categoriasNombres[key];
            this.categoriasDescargadas.push({
              "nombre": nombreCategoria,
            });
          }
        }
      }
    }

    calcularPuntajeNivelAmigosAgregarHTMLVariablesProcesarTiempo(){


      this.amigos = this.userData.amigos.enviadas.concat(this.userData.amigos.recibidas);;

      for(let i = 0; i < this.amigos.length; i ++){
        if(this.amigos[i].estado == "aceptado"){
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
      modal.onDidDismiss().then((val)=>{
        let role = val.role;
        if(role == "agregar_amigo"){
          let data = val.data;
          this.amigos.push(data);
        }
      })
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



    responderSolicitud(action, index){
      let id = this.amigos[index].id;

      switch(action){
        case "aceptar":
        this.amigos[index].estado = "aceptado";
        this.friendsServ.updateSolicitud({
          "id": id,
          "data":{
            "estado":"aceptado"
          }
        }, this.token).subscribe((respuesta)=>{
          console.log(respuesta)
        })
        break;
        case "rechazar":
        this.amigos.splice(index,1);
        this.friendsServ.rechazarSolicitud({
          "id" : id
        },this.token).subscribe((respuesta)=>{
          console.log(respuesta);
        });
        break;
      }
    }

}
