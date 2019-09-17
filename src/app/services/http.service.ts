import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators"
import { Observable } from 'rxjs';
import { ObjRespuestaServidor } from 'src/interfaces/interfaces';
import { LocalStorageService } from './local-storage/local-storage.service';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  token:string;
  splashIgnore = ["http://meditar-app.com.ar/public/api/actualizarDataUser", 
                  "http://meditar-app.com.ar/public/api/login",
                  "http://meditar-app.com.ar/public/api/register"];

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

    return this.http.post(url, data ,requestOptions)
      .pipe(
        map((respuesta: any) => {
          this.document.getElementById("splash").style.visibility = "hidden";
          return respuesta;
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
