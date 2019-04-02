import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { NavController, Events } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { CategoriasLogicService } from 'src/app/services/categorias-logic/categorias-logic.service';
import { Timer } from 'easytimer.js';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { DOCUMENT } from '@angular/platform-browser';
import { URL_ASSETS } from 'src/config/config';

@Component({
    selector: 'app-categoria-a',
    templateUrl: './categoria-a.page.html',
    styleUrls: ['./categoria-a.page.scss'],
})
export class CategoriaAPage implements OnInit {

    @ViewChild('slides') slides;
    @ViewChild('progress-bar') progress;


    // variablesOperativas

    categoria: string;
    playState: boolean = false;

    iconoFavorito: string = 'med-corazon-vacio';

    audio = new Audio();
    indexPlay: number = 0;
    url: string;
    duracion: number;
    timer = new Timer();
    isPlaying: boolean = false;
    showLoader: boolean = false;

    favHabilitado: boolean = true;

    // progress bar
    progresoBar: number = 0;
    minutero: any = "00:00"

    // Intervals
    intervalProgress: any;
    minuteroInterval: any;
    timeoutLoader: any;

    resumeAfterTouchStart: boolean;

    audios = [];
    progressBarElement: any;

    isNewView = false;
    loaderElement:any;
    constructor(private navCtrl: NavController,
        private categoriasLogic: CategoriasLogicService,
        private userData: UserDataService,
        private event: Events,
        @Inject(DOCUMENT) private _document: Document,
        private nativeAudio: NativeAudio) {
        this.progressBarInteractionSubscriptions();
        this.audioSubscriptions();
    }

    ngOnInit() {
      this.processUrls(this.categoriasLogic.audiosCategoria);
      this.initProgressBarAndLoader();
      this.slideSubscriptions();
      if(this.audios[0] != undefined){
        this.initNewAudio(this.audios[0].url, 0);
      }
    }

    processUrls(urls:Array<any>){
      urls.filter((value)=>{
        let ultimosCuatroChars = value.substr(value.length - 4);
        if( ultimosCuatroChars == ".mp4" ||
            ultimosCuatroChars == ".mp3"){
              this.pushAudioToMainArray(value);
            }
      });
    }

    pushAudioToMainArray(url){
      this.audios.push({
        "url": URL_ASSETS + url,
        "icon":"play",
        "animateUp" :false,
        "id_loader": Math.random(),
        "id_minutero":Math.random(),
        "id_progress":Math.random(),
        "fadeIn":false
      });
      return;
    }

    initProgressBarAndLoader(){
      console.log(this.audios)
      let length = this.audios.length;
      for (let i = 0; i < length; i ++){
        setTimeout(()=>{
          this._document.getElementById(this.audios[i].id_loader).style.visibility = "hidden";
          this._document.getElementById(this.audios[i].id_minutero).style.visibility = "hidden";
          this._document.getElementById(this.audios[i].id_progress).style.visibility = "hidden";
        },50)
      }
    }

    slideSubscriptions(){
      this.slides.ionSlideDidChange.subscribe((data) => {

          this.isNewView = true;

          if (this.audios[this.indexPlay] != undefined) {

              let indexSlide = this.slides.getActiveIndex();

              // SE VA Y EL AUDIO ESTA CORRIENDO
              if (indexSlide > this.audios.length - 1) {
                  indexSlide = this.audios.length - 1;
              };

              if (!this.audio.paused) {
                this.audio.src = "";
                this.pausarAudio();
              }
          }
      });
    }

    ocultarElementosDeUnAudio(){
      this._document.getElementById(this.audios[this.indexPlay].id_loader).style.visibility = "hidden";
      this._document.getElementById(this.audios[this.indexPlay].id_minutero).style.visibility = "hidden";
      this._document.getElementById(this.audios[this.indexPlay].id_progress).style.visibility = "hidden";
    }

    pausarAudio(){
      clearInterval(this.intervalProgress);
      clearInterval(this.minuteroInterval);
      /*
      this.nativeAudio.stop("audio").then((pause)=>{
      console.log(pause)
    })
      */
      this.audio.pause();
      this.audios[this.indexPlay].icon = "play";
      this.grabarSegundosMeditados();
    }

    dismiss() {
        this.navCtrl.navigateRoot("/tabs/principal");
    }

    playPause(url, index) {
        // Puede ser una pausa o un play
        this.minutero = this.categoriasLogic.minuteroFunction(this.audio.currentTime);
        if (this.isPlaying) {

            this.isPlaying = false;
            this.pausarAudio();

        } else {


            this.timer.start();
            this.audios[index].icon = "pause";
            this.audios[index].animateUp = true;
            setTimeout(()=>{
              this._document.getElementById(this.audios[index].id_progress).style.visibility = "visible";
              this._document.getElementById(this.audios[index].id_minutero).style.visibility = "visible";
              this.audios[index].fadeIn = true;
            },1500)

            // Puede ser un url nuevo o uno ya corriendo

            if (this.isNewView) {
              console.log("Se inicializa un nuevo audio")
              this.initNewAudio(url,index);
            };
            /*
            this.nativeAudio.play("audio").then((play) => {
            console.log(play);
            this.isPlaying = true;
            this.progresoIntervalFN();
            this.minuteroIntervalFN();
          })
          .catch((err)=>{
          console.log(err)
        });
            */
            this.audio.play().then((play) => {
              this.isPlaying = true;
              this.progresoIntervalFN();
              this.minuteroIntervalFN();
            })
            .catch((err)=>{
              console.log(err)
            });
        }
    }

    initNewAudio(url,index){
      this.url = url;
      this.indexPlay = index;
      /*
      this.nativeAudio.preloadSimple("audio",url).then((nativeAudio)=>{
      console.log(nativeAudio);
    })
      */
      this.audio.src = url;
      this.audio.load();
      return;
    }

   minuteroIntervalFN(){
     this.minuteroInterval = setInterval(() => {
         this.minutero = this.categoriasLogic.minuteroFunction(this.audio.currentTime);
     }, 1000);
   }


    progresoIntervalFN() {
        this.duracion = this.audio.duration;
        this.intervalProgress = setInterval(() => {
            this.progresoBar = (this.audio.currentTime / this.duracion) * 100;
        }, 1000);
    }


    cambiarProgresoAudio(progressPercentage, resume) {
      /*
        this.audio.currentTime = Math.round(progressPercentage*100)/100 * this.audio.duration;
        this.audio.load();
        this.audio.currentTime = 100;
        console.log("cambio de progres" , this.audio.currentTime)
        */
        this.audio.play();
        this.audio.addEventListener('canplaythrough', function() {
          console.log("can play")
          this.currentTime = 100;
          this.play();
        });
        /*
        if (resume) {
            this.playPause(this.url, this.indexPlay);
        }
        */
    }

    grabarSegundosMeditados() {

        // Envío la data cuando se va de la página o después de 5 minutos de inactividad marcada por la play function
        return new Promise((resolve, reject) => {
            let segundosMeditadosUser = this.userData.userData.segundos_meditados;
            let segundosMeditadosSesion = this.timer.getTimeValues().seconds;
            this.timer.stop();
            let segundosTotales = segundosMeditadosUser + segundosMeditadosSesion;
            segundosMeditadosUser = segundosTotales;

            this.userData.updateUserData({
                "segundos_meditados": segundosTotales
            }).subscribe((data) => {
                console.log("Segundos meditados: " + segundosTotales);
                resolve();
            });
        })
    }


    ngOnDestroy() {
        this.grabarSegundosMeditados();
        this.audio.pause();
        clearInterval(this.minuteroInterval);
        clearInterval(this.intervalProgress);
    }

    audioSubscriptions() {


        this.audio.addEventListener("progress", () => {

            // LOADER

            if (this.isPlaying) {
                this._document.getElementById(this.audios[this.indexPlay].id_loader).style.visibility = "visible";
                this.timeoutLoader = setTimeout(() => {
                    this._document.getElementById(this.audios[this.indexPlay].id_loader).style.visibility = "hidden";
                }, 1000);
            }
        });

        this.audio.addEventListener("ended", () => {

            this.audios[this.indexPlay].icon = "med-play";

            // ABRIR PAGINAS DE NOTAS DE USUARIO !

            clearInterval(this.intervalProgress);
        });

    }

    progressBarInteractionSubscriptions() {

        // LOGICA COMPONENTE PROGRESS BAR

        this.event.subscribe("swipes", (lock) => {
            if (lock) {
                this.slides.lockSwipes(true)
            } else {
                this.slides.lockSwipes(false)
            }
        })

        this.event.subscribe("touchend", (objTouchEnd: {
            progressPercentage
        }) => {
            this.cambiarProgresoAudio(objTouchEnd.progressPercentage, this.resumeAfterTouchStart);
        })

        this.event.subscribe("touchstart", () => {
            if (this.isPlaying) {
                this.playPause(this.url, this.indexPlay);
                this.resumeAfterTouchStart = true;
            } else {
                this.resumeAfterTouchStart = false;
            }
        });
    }

}

interface objMeditacion {
    id: number,
    url: string,
    orden: number,
    icon: string,
    showBar: boolean,
    escuchada: boolean,
    tick: boolean,
    fav: boolean,
    downloaded: string
}
