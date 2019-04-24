import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { UserDataService } from '../user-data/user-data.service';
import { URL_SERVICES } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class CategoriasLogicService {
  token: string;
  audiosCategoria = [];

  constructor(private http:HttpService,
              private userDataServ: UserDataService) {
                this.token = this.userDataServ.token;
              }

  checkInitializedCategorie(categoria){
    for(let i = 0; i < this.userDataServ.userData.initCats.length; i ++){
      let categoriaInit = this.userDataServ.userData.initCats[i];
      if(categoriaInit.nombre_categoria == categoria){
        return true;
      }
    }
    return false;
  }

  initCategorie(data:{
    nombre_categoria:string
  }){
    let url = URL_SERVICES + "inicializarCategoria";
    this.http.httpPost(url,data,this.token).subscribe((respuesta)=>{

      console.log(respuesta);
      this.userDataServ.userData.initCats.push({
        "nombre_categoria": data.nombre_categoria
      })
    });
  }

  minuteroFunction(currentAudioTime) {
      let minutos = currentAudioTime / 60;
      let segundos;
      if (minutos < 1) {
          let minutosStr = "00";
          segundos = Math.floor(currentAudioTime);
          let segundosStr;
          if (segundos < 10) {
              segundosStr = "0" + segundos;
          } else {
              segundosStr = segundos
          }

          return minutosStr + " : " + segundosStr;
      } else {
          let n = minutos;
          let decimal = n - Math.floor(n);

          let segundos = Math.floor(decimal * 60);
          minutos = Math.floor(minutos);

          let segundosStr;
          if (segundos < 10) {
              segundosStr = "0" + segundos;
          } else {
              segundosStr = segundos
          }

          let minutosStr;
          if (minutos < 10) {
              minutosStr = "0" + minutos;
          } else {
              minutosStr = minutos
          }

          return minutosStr + " : " + segundosStr;
      }
  }


  fetchAudiosCategoria(categoria){
    let url = URL_SERVICES + "audiosCategoria/" + categoria;
    return this.http.httpGet(url);
  }



}
