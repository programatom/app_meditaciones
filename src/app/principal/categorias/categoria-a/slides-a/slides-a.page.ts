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

  @ViewChild('slidesElem') slidesElem;

  slides = [{
    "texto":"Morbi orci diam, venenatis non tincidunt semper, suscipit et tortor. Sed sit amet egestas est. Nunc lobortis pretium arcu, sit amet molestie lorem cursus ut."
  },{
    "texto":"Nulla in ex quis odio vulputate posuere. Nam nunc justo, viverra ut quam id, faucibus hendrerit libero. Pellentesque fringilla viverra velit sit amet sollicitudin."
  },{
    "texto":"Nam mollis placerat turpis sed pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
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
      "nombre_categoria": "categoria_a"
    }
    this.categoriesLogic.initCategorie(data);
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
