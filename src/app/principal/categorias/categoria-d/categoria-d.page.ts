import { Component, OnInit, ViewChild, ElementRef,Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoriasLogicService } from 'src/app/services/categorias-logic/categorias-logic.service';
import { Timer } from 'easytimer.js';
import { DownloadService, ToastService } from 'src/app/services/services.index';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-categoria-d',
    templateUrl: './categoria-d.page.html',
    styleUrls: ['./categoria-d.page.scss'],
})
export class CategoriaDPage implements OnInit {

    @ViewChild('slides') slides;

    downloadIconColor:string = "light";
    videoON = false;
    dragDetectorTimeout;
    isDragging = false;

    medias:Array<any> = [
    {
      "type" : "video",
      "title":"Amaneceres I",
      "url":"https://www.youtube.com/embed/83UZyu8P2xk?autoplay=1"

    },
    /*
    {
      "type" : "video",
      "icon":"logo-youtube",
      "title":"Amaneceres II",
      "url":"https://www.youtube.com/embed/7KU_6vJ-Nh4?autoplay=1"

    },
    */
    {
      "type" : "video",
      "title":"Atardeceres I",
      "url":"https://www.youtube.com/embed/kNmVY65ZLSs?autoplay=1"

    },
    {
      "type" : "video",
      "title":"Agua I",
      "url":"https://www.youtube.com/embed/8V8sI3N3bDE?autoplay=1"

    },
    {
      "type" : "video",
      "title":"Agua II",
      "url":"https://www.youtube.com/embed/Tvb0iK5aP3Y?autoplay=1"

    },
    {
      "type" : "video",
      "title":"Agua III",
      "url":"https://www.youtube.com/embed/cXyJiBZS8wM?autoplay=1"
    },
    {
      "type" : "imagen",
      "title":"Amanecer I",
      "url":"assets/imgs-cats/amanecer_1.png"
    },
    {
      "type" : "imagen",
      "title":"Amanecer II",
      "url":"assets/imgs-cats/amanecer_2.jpg"
    }];

    constructor(private navCtrl: NavController,
        public _CL: CategoriasLogicService,
        @Inject(DOCUMENT) private document: Document) {

        for (var media of this.medias) {
            media.url = _CL.sanitizeurl(media.url);
        }

        

    }

    ngOnInit(){
      this.document.getElementById("downloadicon").style.display = "none";
        //this.slidesSubscriptions();
    }

        /* para adelante 
    slidesSubscriptions(){
        this.slides.ionSlideNextEnd.subscribe(() => {
            this.hideNextSlideVideo("forward");
       
        });
        this.slides.ionSlidePrevEnd.subscribe(() => {
             this.hideNextSlideVideo("backwards");
        });
        this.slides.ionSlideDrag.subscribe(()=>{
            if(this.dragDetectorTimeout){
                clearTimeout(this.dragDetectorTimeout);
            }
            this.isDragging = true;
            this.dragDetectorTimeout = setTimeout(()=>{

                this.isDragging = false;
            },1000);
        });
    }
        
    hideNextSlideVideo(direction){
        switch(direction){
            case "forward":
                this.slides.getActiveIndex().then((index)=>{
                    let prevIndexNum = index - 1;
                    let prevIndex = prevIndexNum.toString();
                    let previousMedia = this.medias[prevIndex];
                    if(previousMedia.type == "video"){
                        let prevVideo = document.getElementById(prevIndex);
                        this.showHide(prevVideo, false);
                    }                    
                });
                break;
            case "backwards":
                this.slides.getActiveIndex().then((index)=>{
                    let prevIndexNum = index + 1;
                    let prevIndex = prevIndexNum.toString();
                    let previousMedia = this.medias[prevIndex];
                    if(previousMedia.type == "video"){
                        let prevVideo = document.getElementById(prevIndex);
                        this.showHide(prevVideo, false);
                    }                    
                });
                break;
        }
    }
        */

    openMedia(mediatype, index){
        if(mediatype == "video"){
            let video = document.getElementById(index);
            this.showHide(video);
        } else {
        }
    }

    showHide(element, show = true){

          if(show){
            this.videoON = true;
            element.style.display = "inline-block";
            element.animate([ 
              { // from
                display : "inline-block",  
                opacity: 0,
              }, 
              { // to
                opacity: 1,
              }
            ], 2000);
          } else {
            this.videoON = false;
            element.style.display = "none";
            /*
            element.animate([ 
                { // from
                   display : "inline-block",
                   opacity: 1,
                }, 
                { // to
                   opacity: 0,
                   display: "none"
                }
                ], 2000);
                */
          }
    }



    dismiss() {
      this.navCtrl.navigateRoot("/tabs/principal");
    }

}
