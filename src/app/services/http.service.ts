import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators"
import { Observable } from 'rxjs';
import { ObjRespuestaServidor } from 'src/interfaces/interfaces';
import { LocalStorageService } from './local-storage/local-storage.service';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  token:string;
  splashIgnore = ["https://meditar-app.com.ar/public/api/actualizarDataUser", 
                  "https://meditar-app.com.ar/public/api/login",
                  "https://meditar-app.com.ar/public/api/register"];

  constructor(private http: HttpClient,
              private localStorageServ: LocalStorageService,
              @Inject(DOCUMENT) private document: Document) {

  }

  httpGet(url: string, token?:string): Observable<ObjRespuestaServidor> {
    this.token = this.localStorageServ.localStorageObj.token;
    const headerDict = {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.token
    }
    console.log("HEADER GET: ")
    console.log(JSON.stringify(headerDict));

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    console.log("GET: " + url);
    if(!this.splashIgnore.includes(url)){
      this.document.getElementById("splash").style.visibility = "visible";
    }
    return this.http.get(url, requestOptions)
      .pipe(
        map((respuesta: any) => {
          this.document.getElementById("splash").style.visibility = "hidden";
          return respuesta;
        })
      );
  }

  httpPost(url: string, data:any ,token?:string, content_type?:string): Observable<ObjRespuestaServidor> {
    this.token = this.localStorageServ.localStorageObj.token;
    var headerDict;

    if(this.token == undefined){
      headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }else{
      headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      }
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    console.log("POST: " + url);
    if(!this.splashIgnore.includes(url)){
      this.document.getElementById("splash").style.visibility = "visible";
    }

    console.log("Se envia la data: ");
    console.log(JSON.stringify(data));
    console.log("Con los headers: ");
    console.log(JSON.stringify(requestOptions));
    return this.http.post(url, data ,requestOptions)
      .pipe(
        map((respuesta: any) => {
          console.log("VUELVE LA RESPUESTA");
          console.log(JSON.stringify(respuesta));
          this.document.getElementById("splash").style.visibility = "hidden";
          return respuesta;
          (error) =>{
            console.log("Error con post!")
            console.log(JSON.stringify(error))
          }
          (always) =>{
            console.log(always)
          }
        })
      );
  }

  httpPut(url: string, data:any ,token?:string, content_type?:string): Observable<ObjRespuestaServidor> {
    this.token = this.localStorageServ.localStorageObj.token;
    var headerDict;

    if(this.token == undefined){
      headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }else if(content_type == "file"){
      headerDict = {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      }
    }else{
      headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      }

    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    console.log(url, data ,requestOptions)

    return this.http.put(url, data ,requestOptions)
      .pipe(
        map((respuesta: any) => {
          return respuesta;
        })
      );
  }
}
