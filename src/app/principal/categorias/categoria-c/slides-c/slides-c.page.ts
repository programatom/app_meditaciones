import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoriasLogicService } from 'src/app/services/categorias-logic/categorias-logic.service';
import { CategoriasNavigatorService } from 'src/app/services/categorias-logic/categorias-navigator.service';

@Component({
  selector: 'app-slides-c',
  templateUrl: './slides-c.page.html',
  styleUrls: ['./slides-c.page.scss'],
})
export class SlidesCPage implements OnInit {

  @ViewChild('slidesElem',{static: false}) slidesElem;

  slides = [{
    "texto":"Música exclusiva diseñada para ayudarte a concentrarte, relajarte o conciliar el sueño"
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
      "nombre_categoria": "categoria_c"
    }
    this.categoriesLogic.initCategorie(data);
    this.categoriaNavigation.categoriasSwitchNavigation("categoria_c");
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
