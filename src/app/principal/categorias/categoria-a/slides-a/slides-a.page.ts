import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoriasLogicService } from 'src/app/services/categorias-logic/categorias-logic.service';
import { CategoriasNavigatorService } from 'src/app/services/categorias-logic/categorias-navigator.service';

@Component({
  selector: 'app-slides-a',
  templateUrl: './slides-a.page.html',
  styleUrls: ['./slides-a.page.scss'],
})
export class SlidesAPage implements OnInit {

  @ViewChild('slidesElem',{static: false}) slidesElem;

  slides = [{
    "texto":"Los sonidos BINAURALES permiten que se sincronicen los dos hemisferios del cerebro, produciendo una sensación de bienestar y mejora del estado de ánimo.",
  },{
    "texto":"Usar auriculares"
  }
  /*,{
    "texto":"Las ondas cerebrales  son cinco, y se categorizan mediante el alfabeto griego. Por ejemplo las frecuencias de 4 a 7Hz, como puede verse mediante electroencefalogramas, generan ondas del tipo theta en el cerebro, asociadas al sueño lúcido y a estados de meditación profunda. Mientras que las gamma, de 32 a 100Hz, se asocian con estados de alta cognición."
  },{
    "texto":"El cerebro procesa la diferencia de frecuencia de los sonidos binaurales, lo que produce ondas cerebrales que se corresponden con esta misma diferencia de frecuencia. Esto significa que si escuchamos sonidos que están entre los 8 y los 13 hercios, el cerebro producirá ondas alfa."
  },{
    "texto":"Los sonidos de este tipo también permiten que se sincronicen los dos hemisferios del cerebro. Esto produce una sensación de bienestar, mejora el estado de ánimo, aumenta el nivel de atención y la memoria, y nos ayuda a asimilar las emociones y a reducir la ansiedad."
  }
  */
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
      "nombre_categoria": "categoria_a"
    }
    if(this.categoriaNavigation.hasToInit){
      this.categoriesLogic.initCategorie(data);
    }
    this.categoriaNavigation.categoriasSwitchNavigation("categoria_a");
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
