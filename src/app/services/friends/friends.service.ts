import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { URL_SERVICES } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http:HttpService) {

  }

  enviarFriendRequest(data:{
    email:string
  }, token){
    let url = URL_SERVICES + "enviarSolicitud";
    return this.http.httpPost(url, data, token);
  }

  rechazarSolicitud(data:{
    id
  }, token){
    let url = URL_SERVICES + "rechazarSolicitud";
    return this.http.httpPost(url, data, token);
  }

  updateSolicitud(data, token){
    let url = URL_SERVICES + "actualizarSolicitud";
    return this.http.httpPost(url, data, token);
  }
}
