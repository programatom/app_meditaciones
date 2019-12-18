import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoriasLogicService } from 'src/app/services/categorias-logic/categorias-logic.service';
import { CategoriasNavigatorService } from 'src/app/services/categorias-logic/categorias-navigator.service';

@Component({
  selector: 'app-slides-e',
  templateUrl: './slides-e.page.html',
  styleUrls: ['./slides-e.page.scss'],
})
export class SlidesEPage implements OnInit {

  @ViewChild('slidesElem',{static: false}) slidesElem;

  slides = [
  {
    "parrafos":[
      "La meditación ayuda a:",
      "- Reducir Estrés y ansiedad",
      "- Amplificar Bienestar y felicidad",
      "- Mejorar Inteligencia mental y emocional",
      "- Experimentar Crecimiento personal"

    ]
  },{
      "parrafos":[
      "La meditación ayuda a:",
      "- Integra los hemisferios cerebrales ampliando la visión.",
      "- Mejora la concentración.",
      "- Reduce, previene y ayuda a manejar las situaciones de estrés.",
      "- Estimula la creatividad.",
      "- Disminuye y previene las enfermedades.",
      "- Incrementa la energía general."
    ]
  }
]

  constructor(private navCtrl: NavController,
              private categoriesLogic: CategoriasLogicService,
              private categoriaNavigation: CategoriasNavigatorService) { }

  ngOnInit() {
  }

  dismiss(){
    this.navCtrl.navigateRoot("/tabs/principal");
  }

  async irACategoria(){

    let data = {
      "nombre_categoria": "categoria_e"
    }
    this.categoriesLogic.initCategorie(data);
    this.categoriaNavigation.categoriasSwitchNavigation("categoria_e");
  }

  nextSlide(){
  this.slidesElem.isEnd().then((isEnd)=>{
    if (isEnd) {
      this.irACategoria();
    } else {
      this.slidesElem.slideNext();
    }
  })
}

}
