import { Injectable } from '@angular/core';
import { ObjUserData } from 'src/interfaces/interfaces';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { HttpService } from '../http.service';
import { URL_SERVICES } from 'src/config/config';

@Injectable({
    providedIn: 'root'
})
export class UserDataService {

    userData = new Object() as ObjUserData;
    token: string = "";

    constructor(private localStorageServ: LocalStorageService,
        private httpService: HttpService) {
    }

    gatherUserData(isRegistration: boolean, user?) {
      return new Promise((resolve) => {
        this.token = this.localStorageServ.localStorageObj.token;
        if (isRegistration) {
          this.initializeUserDataObj(user.name, user.email, user.id);
          resolve();
        }
        else {
          this.getUserData().subscribe((userDataResp) => {
            console.log(userDataResp);
            let userData = userDataResp.data.user_data;
            let user = userDataResp.data.user;
            this.getFriends().subscribe((amigosResp) => {
              console.log(amigosResp);
              let amigos = amigosResp.data;
              this.getInitializedCategories().subscribe((initCatResp)=>{
                let initCats = initCatResp.data;
                this.getInitializedMeditations().subscribe(async (initMedResp)=>{
                  let initMeds = initMedResp.data;
                  await this.initializeUserDataObj(user.name, user.email, user.id, userData.segundos_meditados, userData.puntaje, userData.meditaciones_escuchadas, amigos, initCats, initMeds);
                  console.log("Se inicializo el user data");
                  resolve()

                })
              })
            });
          });
        }
      });
    }

   async initializeUserDataObj(
        nombre?,
        email?,
        id?,
        segundos_meditados?,
        puntaje?,
        meditaciones_escuchadas?,
        amigos?,
        initCats?,
        initMeds?

    ) {
      nombre = nombre || "";
      email = email || "";
      id = id || 0;
      segundos_meditados = segundos_meditados || 0;
      puntaje = puntaje || 0;
      meditaciones_escuchadas = meditaciones_escuchadas || 0;
      amigos = amigos || {
        enviadas: [],
        recibidas: []
      };
      initCats = initCats || [];
      initMeds = initMeds || [];

      this.userData.initCats = initCats;
      this.userData.initMeds = initMeds;
      this.userData.nombre = nombre;
      this.userData.email = email;
      this.userData.id = id;
      this.userData.segundos_meditados = segundos_meditados;
      this.userData.puntaje = puntaje;
      this.userData.meditaciones_escuchadas = meditaciones_escuchadas;
      this.userData.amigos = amigos;
      console.log(this.userData)
    }

    getUserData() {
        let url = URL_SERVICES + "buscarDataUser";
        return this.httpService.httpGet(url);
    }

    getFriends() {
        let url = URL_SERVICES + "buscarAmistades";
        return this.httpService.httpGet(url);
    }

    getInitializedCategories(){
      let url = URL_SERVICES + "categoriasInicializadas";
      return this.httpService.httpGet(url);
    }

    getInitializedMeditations(){
      let url = URL_SERVICES + "meditacionesInicializadas";
      return this.httpService.httpGet(url);
    }

    updateUserData(data){
      let url = URL_SERVICES + "actualizarDataUser";
      return this.httpService.httpPost(url, data);
    }


}
