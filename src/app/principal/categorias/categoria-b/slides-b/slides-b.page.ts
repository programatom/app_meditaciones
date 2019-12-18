import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoriasLogicService } from 'src/app/services/categorias-logic/categorias-logic.service';
import { CategoriasNavigatorService } from 'src/app/services/categorias-logic/categorias-navigator.service';

@Component({
  selector: 'app-slides-b',
  templateUrl: './slides-b.page.html',
  styleUrls: ['./slides-b.page.scss'],
})
export class SlidesBPage implements OnInit {

  
  @ViewChild('slidesElem',{static: false}) slidesElem;

  slides = [{
    "parrafos":[
      "Meditar es silenciarnos para poder escuchar"
    ]
  },
  { 
    "parrafos":[
      "Una forma efectiva para acceder al centramiento.  Gracias a la neuroplasticidad el Ser humano tiene la posibilidad de reaprender una forma de vivir en armonía hasta en los escenarios de mayor exigencia y demanda."
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
      "nombre_categoria": "categoria_b"
    }
    this.categoriesLogic.initCategorie(data);
    this.categoriaNavigation.categoriasSwitchNavigation("categoria_b");
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
