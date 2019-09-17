import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoriasLogicService } from 'src/app/services/categorias-logic/categorias-logic.service';
import { Timer } from 'easytimer.js';
import { DownloadService, ToastService } from 'src/app/services/services.index';

@Component({
    selector: 'app-categoria-c',
    templateUrl: './categoria-c.page.html',
    styleUrls: ['./categoria-c.page.scss'],
})
export class CategoriaCPage implements OnInit {

//CONFIG
    categoria = "categoria_c";



    @ViewChild('slides') slides;
    @ViewChild('progress-bar') progress;


    audio = new Audio();

    // variablesOperativas
    medias = [];

    // Intervals
    interval: any;
    minutero: any = "00:00";

    timer = new Timer();

    // progress bar
    progresoBar: number = 0;
    resumeAfterTouchStart: boolean;

    downloadIconColor:string = "light";
    downloading = false;

    constructor(private navCtrl: NavController,
        public _CL: CategoriasLogicService,
        private downloadServ: DownloadService,
        private toastServ: ToastService) {

    }

    async ngOnInit() {


      this._CL.progressBarInteractionSubscriptions(this.audio,
                                                    this.interval,this.medias, this.timer, this.slides,
                                                   this.resumeAfterTouchStart, function(minuteroCB){
                                                     console.log(minuteroCB)
                                                     this.minutero = minuteroCB;
                                                   });
      await this._CL.processUrls(this.medias, this.categoria);
      this._CL.initProgressBarAndLoader(this.medias);
      this._CL.slideSubscriptions(this.slides,  this.interval, this.audio, this.medias, this.timer, ()=>{
        return this.interval;
      });
      this._CL.init(this.medias, this.audio, this.downloadIconColor, this.categoria, (iconColor)=>{

        let split = iconColor.split("-");
        console.log(split)
        if(split.length > 1){  
          // download-end
           this.downloading = false;
           this.downloadIconColor = "success";
        } else {
          this.downloadIconColor = iconColor;
          if(this.downloadServ.downloadingObj[this.categoria]){
            this.downloading = true;
          }

        } 
      });
      this._CL.audioSubscriptions(this.audio, this.medias, this.interval);
    }

    download(){
      if(this.downloadIconColor == "success"){
        let header = "Confirmación";
        let subHeader = "¿Desea eliminar la categoría descargada?";
        let buttons = [{
          text:"Cancelar",
          role:"cancel"
        },{
          text:"Aceptar",
          handler:()=>{
            this.downloadIconColor = "light";
            this.downloadServ.deleteDirectory(this.categoria);
          }
        }];
        this.toastServ.presentAlert(header, subHeader, undefined, buttons);
      }else{
        let filesArray:any = this.downloadServ.generateFilePathArray(this.medias, this.categoria);
        this.downloadServ.switchCordovaAndDataDirectories(filesArray, this.categoria);
        this.downloadIconColor = "success";
        this.downloading = true;
      }
    }

    pausarAudio(){
      this._CL.pausarAudio(this.interval, this.audio, this.medias, this.timer);
    }

    dismiss() {
        this.navCtrl.navigateRoot("/tabs/principal");
    }

    playPause(url, index) {
        // Puede ser una pausa o un play

        this.minutero = this._CL.minuteroFunction(this.audio.currentTime);
        this._CL.playPause(url, index, this.audio,
                            this.interval,this.medias, this.timer,
                           (interval, minuteroCB,progresoCB)=>{
                             this.interval = interval;
                             this.progresoBar = progresoCB;
                             this.minutero = minuteroCB;
                           });

    }

    ngOnDestroy() {
        // Me tengo que desubscribir de los eventos
        this._CL.destroyComponent( this.interval, this.audio, this.medias);
        this._CL.grabarSegundosMeditados(this.timer);
    }
}
