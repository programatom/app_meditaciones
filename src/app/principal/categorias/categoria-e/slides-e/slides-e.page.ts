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
