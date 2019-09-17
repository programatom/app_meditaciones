import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoriasLogicService } from 'src/app/services/categorias-logic/categorias-logic.service';
import { CategoriasNavigatorService } from 'src/app/services/categorias-logic/categorias-navigator.service';

@Component({
  selector: 'app-slides-d',
  templateUrl: './slides-d.page.html',
  styleUrls: ['./slides-d.page.scss'],
})
export class SlidesDPage implements OnInit {

  @ViewChild('slidesElem') slidesElem;

  slides = [{
    "texto":"Imagenes y videos elegidos para relajarte"
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
      "nombre_categoria" : "categoria_" + this.categoriaNavigation.currentcategoryabcd
    }
    this.categoriesLogic.initCategorie(data);
    this.categoriaNavigation.categoriasSwitchNavigation("categoria_" + this.categoriaNavigation.currentcategoryabcd);
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
