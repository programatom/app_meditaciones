import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoriasLogicService } from 'src/app/services/categorias-logic/categorias-logic.service';
import { CategoriasNavigatorService } from 'src/app/services/categorias-logic/categorias-navigator.service';

@Component({
  selector: 'app-slides-inicio',
  templateUrl: './slides-inicio.page.html',
  styleUrls: ['./slides-inicio.page.scss'],
})
export class SlidesInicioPage implements OnInit {

  @ViewChild('slidesElem',{static: false}) slidesElem;

  slides = [{
    "parrafos":[
      "Meditar es silenciarnos para poder escuchar"
    ]
  },
  { 
    "parrafos":[
      "Una forma efectiva  para acceder a nuestro interior."
    ]
  },{
    "parrafos":[
      "Tenemos la posibilidad de reaprender nuevas formas de vivir para lograr la armonía aún en los escenarios más adversos."
      ]
  },{
      "parrafos":[
      "La meditación ayuda a:",
      "- Reducir estrés y ansiedad.",
      "- Amplificar bienestar y felicidad.",
      "- Mejorar la inteligencia mental y emocional"
    ]
  },{
    "audio": "../../assets/audio/meditacion-inicio-comprimida.mp3"

  }
]

  audio = new Audio();

  mediaIcon:string = "play";

  constructor(private navCtrl: NavController,
              private categoriesLogic: CategoriasLogicService,
              private categoriaNavigation: CategoriasNavigatorService) { 

  }

  ngOnInit() {
    this.audio.src = '../../assets/audio/meditacion-inicio-comprimida.mp3';
    this.audio.load();
  }

  slideChanged(){
    console.log("CHANGE EVENT");
    this.slidesElem.getActiveIndex().then((index) =>{
      console.log("Slide en index " +  index);
      console.log(this.slides.length - 1);
      if (index == this.slides.length - 1){
        console.log("PLAY PUASE");
        this.playPause();
      } else {
        if(this.mediaIcon == "pause"){
          
          this.playPause()
        }
      }
    });
  }

  dismiss(){
    
  }

  ngOnDestroy(){
    console.log("DESTROYED COMPONENT");
  }

  async irALoginRegister(){
    this.audio.pause();
    this.navCtrl.navigateRoot("/login-or-register");
  }

  playPause(){
    if(this.mediaIcon == "play"){
      this.audio.play();
      this.mediaIcon = "pause";
      console.log("PLAYED");
    } else {
      this.audio.pause();
      this.mediaIcon = "play";
      console.log("PAUSED");
    }
  }

  nextSlide(){
    console.log("CLICK EVENT");
  }

}
