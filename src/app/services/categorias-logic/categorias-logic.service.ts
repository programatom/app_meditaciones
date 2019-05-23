import { Injectable, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { UserDataService } from '../user-data/user-data.service';
import { URL_SERVICES, URL_ASSETS } from 'src/config/config';
import { Events } from '@ionic/angular';
import { DOCUMENT } from '@angular/platform-browser';
import { DownloadService } from '../download/download.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriasLogicService {

  token: string;
  audiosCategoria = [];
  url = "";
  index = 0;


  constructor(private http:HttpService,
              private userDataServ: UserDataService,
              private event: Events,
              @Inject(DOCUMENT) private _document: Document,
              private userData: UserDataService,
              private downloadServ: DownloadService,
              private localStorageServ: LocalStorageService) {
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
        this.cambiarProgresoAudio(objTouchEnd.progressPercentage, resumeAfterTouchStart, audio);
    });

    this.event.subscribe("touchstart", () => {
        if (audio.paused == false) {

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



  cambiarProgresoAudio(progressPercentage, resume, audio = new Audio()) {

      setTimeout(()=>{
        audio.play();
      }, 2000)
  }


  destroyComponent(progresInt, audio){
    audio.pause();
    this.clearIntervals(progresInt);
    this.event.unsubscribe("swipes");
    this.event.unsubscribe("touchend");
    this.event.unsubscribe("touchstart");
  }

  clearIntervals(progresInt){
    clearInterval(progresInt);
    return;
  }


  processUrls(medias){
    let validMimes = [".mp4" ,".mp3"];
    this.audiosCategoria = this.audiosCategoria.filter((value)=> validMimes.includes(value.substr(value.length - 4)));
    this.audiosCategoria.filter((value)=>{
      medias.push({
        "url": URL_ASSETS + value,
        "icon":"play",
        "animateUp" :false,
        "id_loader": Math.random(),
        "id_minutero":Math.random(),
        "id_progress":Math.random(),
        "fadeIn":false
      });
    });
  }

  initProgressBarAndLoader(medias){
    let length = medias.length;
    for (let i = 0; i < length; i ++){
      setTimeout(()=>{
        this._document.getElementById(medias[i].id_loader).style.visibility = "hidden";
        this._document.getElementById(medias[i].id_minutero).style.visibility = "hidden";
        this._document.getElementById(medias[i].id_progress).style.visibility = "hidden";
      },100)
    }
  }

  slideSubscriptions(slides, intervalInt, audio, medias, timer){
    slides.ionSlideDidChange.subscribe(() => {

        if (medias[this.index] != undefined) {
            if (!audio.paused) {
              audio.src = "";
              this.pausarAudio(intervalInt, audio, medias, timer);
            }
        }
    });
  }

  pausarAudio(intervalInt, audio, medias, timer){
    this.clearIntervals(intervalInt);
    audio.pause();
    medias[this.index].icon = "play";
    this.grabarSegundosMeditados(timer);
  }

  grabarSegundosMeditados(timer) {

      // Envío la data cuando se va de la página o después de 5 minutos de inactividad marcada por la play function
      return new Promise((resolve) => {
          let segundosMeditadosUser = this.userData.userData.segundos_meditados;
          let segundosMeditadosSesion = timer.getTimeValues().seconds;
          timer.stop();
          let segundosTotales = segundosMeditadosUser + segundosMeditadosSesion;
          this.userData.userData.segundos_meditados = segundosTotales;

          this.userData.updateUserData({
              "segundos_meditados": segundosTotales
          }).subscribe(() => {
              console.log("Segundos meditados: " + segundosTotales);
              resolve();
          });
      })
  }

  playPause(url, index, audio,
            intervalInt,
            medias, timer,
            callbackMinutero) {
      this._document.getElementById("play-button").classList.add("moveUp");

      if (audio.paused == false) {

          this.pausarAudio(intervalInt, audio, medias, timer);

      } else {

          medias[index].animateUp = true;
          timer.start();
          medias[index].icon = "pause";
          if(this._document.getElementById(medias[index].id_progress).style.visibility == "hidden"){
            setTimeout(()=>{
              this._document.getElementById(medias[index].id_progress).style.visibility = "visible";
              this._document.getElementById(medias[index].id_minutero).style.visibility = "visible";
              medias[index].fadeIn = true;
            },1500);
          }

          if(this.index != index){
            this.initNewAudio(url,index, audio);
          }

          audio.play().then(() => {
            this.intervalsFN(audio, function(interval, minuteroCB, progresoCB){
              callbackMinutero(interval, minuteroCB, progresoCB);
            });
          })
          .catch((err)=>{
            console.log(err)
          });
      }
  }
  async init(medias, audio, downloadIconColor, categoria){

      if(medias[0] != undefined){
        this.initNewAudio(medias[0].url, 0, audio);
      }

      let directory = this.downloadServ.getDeviceDirectory();

      if(directory == null){
        if(this.localStorageServ.localStorageObj[categoria] != undefined){
          downloadIconColor = "success";
        }else{
          downloadIconColor = "light";
        }
      }else{
        let responseDirectory = await this.downloadServ.getCategoriaDirectory(categoria, directory);
        if(responseDirectory["found"]){
          downloadIconColor = "success";
          let filesArray:any = this.downloadServ.generateFilePathArray(medias, categoria);
          let resultFiles = await this.downloadServ.switchCordovaAndDataDirectories(filesArray,categoria);
          console.log("Resultado de files en categoria: " + resultFiles)
        }else{
          downloadIconColor = "light";
        }
      }
  }

  initNewAudio(url,index, audio){
    this.url = url;
    this.index = index;
    audio.src = url;
    audio.load();
    return;
  }

  intervalsFN(audio, callback){
    let interval = setInterval(() =>
    {
        console.log("Interval cycle")
        let minutero = this.minuteroFunction(audio.currentTime);
        let progreso = (audio.currentTime / audio.duration) * 100;
        callback(interval, minutero, progreso);
    }, 1000);
  }


   audioSubscriptions(audio, media, intervalsFN){
     audio.addEventListener("progress", () => {

         // LOADER
         console.log("progress")
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
