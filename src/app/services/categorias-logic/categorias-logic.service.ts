import { Injectable, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { UserDataService } from '../user-data/user-data.service';
import { URL_SERVICES, URL_ASSETS } from 'src/config/config';
import { Events } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';

import { DOCUMENT } from '@angular/common';
import { DownloadService } from '../download/download.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Media, MediaObject } from "@ionic-native/media/ngx";
import { Platform } from '@ionic/angular';
import { titulosMeditaciones, categoriasConTitulo } from './titulos-meditaciones';
@Injectable({
  providedIn: 'root'
})
export class CategoriasLogicService {

  token: string;
  audiosCategoria = [];
  url = "";
  index = 0;
  position_interval;
  audioIsPaused = true;
  currentAudio:MediaObject;
  blockPlayFN = false;
  callbackDownload;

  constructor(private http:HttpService,
              private userDataServ: UserDataService,
              private event: Events,
              @Inject(DOCUMENT) private _document: Document,
              private userData: UserDataService,
              private downloadServ: DownloadService,
              private localStorageServ: LocalStorageService,
              private sanitizer:DomSanitizer,
              private media:Media,
              private plt: Platform,
              private files:File
             ) {
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
    console.log("Data enviada a inicializar: ", data)
    this.http.httpPost(url,data,this.token).subscribe((respuesta)=>{
      console.log(respuesta);
      this.userDataServ.userData.initCats.push({
        "nombre_categoria": data.nombre_categoria
      });
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
  
  progressBarInteractionSubscriptions(audio,
                                      intervalInt,
                                      medias, timer, slides, resumeAfterTouchStart, callbackMinutero){

    this.event.subscribe("swipes", (lock) => {
        if (lock) {
            slides.lockSwipes(true)
        } else {
            slides.lockSwipes(false)
        }
    });

    this.event.subscribe("touchend", (objTouchEnd: {
        progressPercentage
    }) => {
        this.cambiarProgresoAudio(objTouchEnd.progressPercentage, resumeAfterTouchStart, audio, medias);
    });

    this.event.subscribe("touchstart", () => {
        if (!this.audioIsPausedFN(audio)) {

          this.playPause(this.url, this.index, audio,
                    intervalInt,
                    medias, timer,
                    callbackMinutero);

            resumeAfterTouchStart = true;
        } else {
            resumeAfterTouchStart = false;
        }
    });
  }

  audioIsPausedFN(audio){
    if(this.plt.is("cordova")){
      return this.audioIsPaused;
    } else {
      return audio.paused;
    }
  }



  cambiarProgresoAudio(progressPercentage, resume, audio = new Audio(), medias) {

    if(this.plt.is("cordova")){
      let newTime = Math.floor(medias[this.index].audioDuration * progressPercentage);
      console.log("SEEK TO DEVICE AUDIO");+
      console.log("To new time: " + newTime + " in miliseconds " + (newTime * 1000))
      this.currentAudio.seekTo(newTime * 1000);
      if(resume){
        medias[this.index].icon = "pause";
        var iOSPlayOptions = {
          numberOfLoops: 1,
          playAudioWhenScreenIsLocked : true
        };
        this.currentAudio.play(iOSPlayOptions);
        this.audioIsPaused = false;
      }
    } else {
      let newTime = Math.round(audio.duration * progressPercentage);
      audio.currentTime = newTime;
      if(resume){
        medias[this.index].icon = "pause";
        audio.play();
      }
    }

  }


  destroyComponent(progresInt, audio, medias){
    if(!this.audioIsPausedFN(audio)){
      if(this.plt.is("cordova")){
        this.currentAudio.stop();
      } else {
        audio.pause();
      }
    }
    this.clearIntervals(progresInt);
    this.event.unsubscribe("swipes");
    this.event.unsubscribe("touchend");
    this.event.unsubscribe("touchstart");
  }

  clearIntervals(progresInt){
    clearInterval(progresInt);
    return;
  }

   serverAudios(){
    let validMimes = ["mp4" ,"mp3"];
    this.audiosCategoria = this.audiosCategoria.filter((value)=> {
        if(validMimes.includes(value.split(".")[1])){
          return true;
        } else {
          return false;
        }
    });
    return;
   }
   async processUrls(medias, categoria){
     console.log("PROCESS URLS");
    if(this.plt.is("cordova")){
      let directory = this.downloadServ.getDeviceDirectory();
      let responseDirectory = await this.downloadServ.getCategoriaDirectory(categoria, directory);
      if(responseDirectory["found"]){
        console.log("DIRECTORY FOUND");
        console.log(JSON.stringify(responseDirectory["dir"]));
        responseDirectory["dir"] = responseDirectory["dir"].reverse();
        this.audiosCategoria = [];
        for(let i = 0; i < responseDirectory["dir"].length; i ++){
          this.audiosCategoria.push(responseDirectory["dir"][i].nativeURL);
        }
      } else {
        this.serverAudios();
      }

    } else {
      this.serverAudios();
    }

   
    console.log("Audios despues del filtro");
    console.log(JSON.stringify(this.audiosCategoria));
    var contador = 0;
    this.audiosCategoria.filter((value)=>{

      var mediaObj:any = 
      { "url": value,
        "icon":"play",
        "animateUp" :false,
        "id_loader": Math.random(),
        "id_minutero":Math.random(),
        "id_minutero_duracion":Math.random(),
        "id_progress":Math.random(),
        "fadeIn":false,
        "progress": 0,
        "audioObject":undefined,
        "audioDuration":0
      }

      if(categoriasConTitulo.includes(categoria)){
        mediaObj.texto = titulosMeditaciones[categoria][contador];
      }
      contador ++;
      medias.push(
       mediaObj
      );
      console.log("MEDIA OBJ PUSHED")
      console.log(mediaObj)
    });
    console.log("Audios con keys de trabajo");
    console.log(medias)
  }

  initProgressBarAndLoader(medias){
    let length = medias.length;
    for (let i = 0; i < length; i ++){
      setTimeout(()=>{
        this._document.getElementById(medias[i].id_loader).style.visibility = "hidden";
        this._document.getElementById(medias[i].id_minutero).style.visibility = "hidden";
        this._document.getElementById(medias[i].id_minutero_duracion).style.visibility = "hidden";
        this._document.getElementById(medias[i].id_progress).style.visibility = "hidden";
      },100)
    }
  }

  slideSubscriptions(slides, intervalInt, audio, medias, timer, intervalReturn){
    slides.ionSlideDidChange.subscribe(() => {
      console.log("ION SLIDE CHANGE")
        clearInterval(intervalReturn());
        if (medias[this.index] != undefined) {
            if (!this.audioIsPausedFN(audio)) {
              if(!this.plt.is("cordova")){
                audio.src = "";
              } else {
                console.log("RELEASE CURRENT AUDIO")
                //this.currentAudio.release();
              }
              this.pausarAudio(intervalInt, audio, medias, timer);
            }
        }
    });
  }

  pausarAudio(intervalInt, audio, medias, timer){
    this.clearIntervals(intervalInt);
    if(this.plt.is("cordova")){
      console.log("CURRENT DEVICE AUDIO PAUSED")
      this.currentAudio.pause();
      this.audioIsPaused = true;
    } else {
      audio.pause();
    }
    medias[this.index].icon = "play";
    this.grabarSegundosMeditados(timer);
  }

  grabarSegundosMeditados(timer) {
      // Envío la data cuando se va de la página o después de 5 minutos de inactividad marcada por la play function
      return new Promise((resolve) => {
          let segundosMeditadosUser:any = this.userData.userData.segundos_meditados;
          let segundosMeditadosSesion = timer.getTimeValues().seconds;
          timer.stop();
          let segundosTotales:any = parseInt(segundosMeditadosUser) + parseInt(segundosMeditadosSesion);
          this.userData.userData.segundos_meditados = parseInt(segundosTotales);

          this.userData.updateUserData({
              "segundos_meditados": segundosTotales
          }).subscribe(() => {
              console.log("Segundos meditados: " + segundosTotales);
              resolve();
          });
      })
  }

  movePlayButton(id) {
    console.log(id);
    var elem = document.getElementById(id);   
    function frame() {
      if (top == 0) {
        clearInterval(interval);
      } else {
        top--; 
        elem.style.top = top + 'vw'; 
      }
    }
    if(elem.style.top != "0vw"){
      var top = 10;
      var interval = setInterval(frame, 50);
    }
  }

  playPause(url, index, audio,
            intervalInt,
            medias, timer,
            callbackMinutero) {

      this.movePlayButton("play-button-" + index);

      if(this.blockPlayFN){
        return;
      }

      var isPaused = this.audioIsPausedFN(audio);
       
      console.log("EL AUDIO ESTA PAUSADO: " + isPaused);
      console.log(medias);
      if (!isPaused) {

          this.pausarAudio(intervalInt, audio, medias, timer);

      } else {

          medias[index].animateUp = true;
          timer.start();
          medias[index].icon = "pause";
          if(this._document.getElementById(medias[index].id_progress).style.visibility == "hidden"){
            setTimeout(()=>{
              this._document.getElementById(medias[index].id_progress).style.visibility = "visible";
              this._document.getElementById(medias[index].id_minutero).style.visibility = "visible";
              this._document.getElementById(medias[index].id_minutero_duracion).style.visibility = "visible";
              medias[index].fadeIn = true;
            },1500);
          }

          if(this.index != index){
            console.log("LAST INDEX: " + this.index + " NEW INDEX: " + index)
            this.initNewAudio(url,index, audio, medias, true, callbackMinutero);
          } else {
            this.audioObjPlay(audio, callbackMinutero, medias)
          }
      }
  }

  audioObjPlay(audio, callbackMinutero, medias){
    if(this.plt.is("cordova")){
      console.log("PLAY MEDIA AUDIO");
      var iOSPlayOptions = {
        numberOfLoops: 1,
        playAudioWhenScreenIsLocked : true
      };
      this.currentAudio.play(iOSPlayOptions);
      this.audioIsPaused = false;
      console.log("SET VOLUME TO 1 JUST IN CASE");
      this.currentAudio.setVolume(1.0);

      this.intervalsFN(audio, function(interval, minuteroCB, progresoCB){
          callbackMinutero(interval, minuteroCB, progresoCB);
      }, medias);
    } else {
      audio.play().then(() => {
        this.intervalsFN(audio, function(interval, minuteroCB, progresoCB){
          callbackMinutero(interval, minuteroCB, progresoCB);
        }, medias);
      })
      .catch((err)=>{
        console.log(err)
      });
    }
  }

  async init(medias, audio, downloadIconColor, categoria, callback){
      // VERIFICO QUE EL ARRAY DE AUDIOS NO VIENE VACIO 
      if(medias[0] != undefined){
        //INICIALIZO EL PRIMER AUDIO DEL ARRAY
        setTimeout(()=>{
          console.log("SE INICIALIZA EL AUDIO");
          this.initNewAudio(medias[0].url, 0, audio, medias);
        }, 300);
      } else {
        console.log("No se encontró el array de medias")
      }


      let directory = this.downloadServ.getDeviceDirectory();

      if(directory == null){
        console.log(this.localStorageServ.localStorageObj[categoria]);
        console.log(categoria);
        if(this.localStorageServ.localStorageObj[categoria] != undefined){
          console.log("Categoria descargada..")
          downloadIconColor = "success";
        }else{
          console.log("Categoria sin descargar..")
          downloadIconColor = "light";
        }
      }else{
        let responseDirectory = await this.downloadServ.getCategoriaDirectory(categoria, directory);
        if(responseDirectory["found"]){
          downloadIconColor = "success";
          let filesArray:any = responseDirectory["dir"];

          console.log("Resultado de files en categoria: " + JSON.stringify(filesArray))
          /*
        [{"isFile":true,
        "isDirectory":false,
        "name":"1.mp3",
        "fullPath":"/categoria_a/1.mp3",
        "filesystem":"<FileSystem: library-nosync>",
        "nativeURL":"file:///Users/tomasgarciapineiro/Library/Developer/CoreSimulator/Devices/C8794599-26B2-4152-A8CE-C1469997948F/data/Containers/Data/Application/F8D4C026-355C-44CC-BAD9-81958891ABF3/Library/NoCloud/categoria_a/1.mp3"}
        ]
          */

        }else{
          downloadIconColor = "light";
        }
      }
      this.downloadServ.callbackDownload = callback;
      callback(downloadIconColor);
  }



  async initNewAudio(url,index, audio, medias, play = false, callbackMinutero = undefined){
    /*
    if(url.substring(0,4) == "file"){
      this.url = url.substring(8);
      this.index = index;
      audio.src = get;
      audio.load();
      return;
    }
    */

    if(this.plt.is("cordova")){
      // busca file VER EN ANDROID SI ES IGUAL EL PREFIJO
      var path;
      console.log("FULL URL: " + url)
      if(url.substring(0,7) == "cdvfile"){
        //path = url.substring(10); para sacarle el cdvfile
        path = url;
        // VIENE EL FULL PATH EN IOS hay que sacarle el file://
        //path = "/Library/NoCloud/categoria_a/1.mp3";
        //console.log("CREATING FILE");
        //await this.files.createFile(this.files.tempDirectory,"audio.mp4",true);

        //path = this.files.tempDirectory.replace(/^file:\/\//, '') + 'audio.mp3';

      } else {
        path = URL_ASSETS + url;
      }
      console.log("PATH SUBR " + path.substring(0,7));
      console.log("EL PATH A CARGAR EN EL MEDIA OBJECT");
      console.log(path);
      //path = "https://www.kozco.com/tech/piano2-CoolEdit.mp3";
      console.log("EL INDEX A CARGAR: ");
      console.log(index);
      this.currentAudio = this.media.create(path);
      console.log("PLAY MEDIA AUDIO");
      this.currentAudio.setVolume(0.0);
      var iOSPlayOptions = {
        numberOfLoops: 1,
        playAudioWhenScreenIsLocked : true
      };
      this.currentAudio.play(iOSPlayOptions);
      this.audioIsPaused = false;
      console.log("SET VOLUME MEDIA AUDIO");
      var duration;
      this._document.getElementById(medias[index].id_loader).style.visibility = "visible";
      this.blockPlayFN = true;
      var interval = setInterval(()=>{
        if(duration > 0){
          console.log("STOP MEDIA AUDIO");
          this.currentAudio.stop();
          this.currentAudio.seekTo(0.0);
          this.audioIsPaused = true;
          medias[this.index].audioDuration = parseInt(duration);
          this._document.getElementById(medias[index].id_loader).style.visibility = "hidden";
          this.blockPlayFN = false;
          console.log("SE CONSIGUE LA DURACION DEL AUDIO QUE ES");
          console.log(duration);
          medias[index].minutero_duracion = this.minuteroFunction(parseInt(duration));
          this.currentAudio.onError.subscribe((err)=>{
            console.log("AUDIO ERROR : ")
            console.log(JSON.stringify(err))
          });
          this.currentAudio.onSuccess.subscribe((success)=>{
            console.log("AUDIO SUCCESS: ");
            console.log(JSON.stringify(success));
          })
          this.currentAudio.onStatusUpdate.subscribe((ev)=>
          {
            console.log("SE EJECUTA EL EVENTO UPDATE DEL MEDIA OBJECT");
            console.log(ev.toString());

            if(ev.toString() == "2"){
              // CREO QUE ESTE EVENTO NO ESTA FUNCIONADO
              console.log("EL AUDIO ESTA EN PLAY");
              this.audioIsPaused = false;
            }

            if(ev.toString() == "3"){
              console.log("EL AUDIO ESTA EN PAUSA");
              this.audioIsPaused = true;
            }

            if(ev.toString() == "4"){
              // AUDIO FINISH
              console.log("EL AUDIO TERMINÓ");
              this.audioIsPaused = true;
            }

          });
          clearInterval(interval);
          if(play){
            console.log("SE DA EL PLAY DESPUES DE INICIAR EL AUDIO")
            setTimeout(()=>{
              this.audioObjPlay(audio, callbackMinutero, medias)
            },1000);
          }
        } else {
          console.log("DURATION IS NEGATIVE");
          duration = this.currentAudio.getDuration();
          console.log(duration)
        }
      }, 10);
      setTimeout(()=>{
        clearInterval(interval);
      }, 30000)
      this.index = index;
    } else{
      var get = "https://meditar-app.com.ar/media/audio.php?location=" + url;
      console.log("Petición GET para elemento audio HTML");
      console.log(get);
      this.url = get;
      this.index = index;
      audio.src = get;
      audio.load();
      medias[index].minutero_duracion = this.minuteroFunction(1500);
      return;
    }
  }

  intervalsFN(audio, callback, medias){
    let interval = setInterval(() =>
    {
        console.log("Interval cycle");
        var minutero;
        var progreso;
        if(this.plt.is("cordova")){
          this.currentAudio.getCurrentPosition().then((currentPosition)=>{
            console.log("CURRENT AUDIO MEDIA POSITION");
            console.log(currentPosition)
            minutero = this.minuteroFunction(Math.floor(currentPosition));
            progreso = (Math.floor(currentPosition)/Math.floor(medias[this.index].audioDuration)) * 100;
            medias[this.index].progreso = progreso;
            medias[this.index].minutero = minutero;
            callback(interval, minutero, progreso);
          });
        } else {
          minutero = this.minuteroFunction(audio.currentTime);
          progreso = (audio.currentTime / audio.duration) * 100;
          medias[this.index].progreso = progreso;
          medias[this.index].minutero = minutero;
          callback(interval, minutero, progreso);
        }
    }, 1000);
  }


   audioSubscriptions(audio, media, intervalsFN){
     if(!this.plt.is("cordova")){
       audio.addEventListener("progress", () => {
           console.log("progress");
           if (audio.paused == false) {
               this._document.getElementById(media[this.index].id_loader).style.visibility = "visible";
               setTimeout(() => {
                   this._document.getElementById(media[this.index].id_loader).style.visibility = "hidden";
               }, 1000);
           }
       });

       audio.addEventListener("ended", () => {
           media[this.index].icon = "med-play";
           clearInterval(intervalsFN);
       });
     }
   }

   sanitizeurl(url){
     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
   }



   // VIDEOS


}
