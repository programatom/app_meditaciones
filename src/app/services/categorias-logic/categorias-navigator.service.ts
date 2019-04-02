import { Injectable } from '@angular/core';
import { CategoriasLogicService } from './categorias-logic.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class CategoriasNavigatorService {
  constructor(private categoriaLogic: CategoriasLogicService,
              private navCtrl: NavController){

  }


  async categoriasSwitchNavigation(categoria){
    switch (categoria) {

        case "categoria_a":
            this.categoriaLogic.fetchAudiosCategoria(categoria).subscribe(async (audios)=>{
              this.categoriaLogic.audiosCategoria = audios.data;
              this.navCtrl.navigateForward("/categoria-a");
            });
            break;

        case "categoria_b": this.categoria_b(); break;
        case "categoria_c": this.categoria_c(); break;
    }
  }

  async slidesSwitchNavigation(categoria){
    switch (categoria) {

        case "categoria_a":
        this.navCtrl.navigateForward("/slides-a");
        break;

        case "categoria_b": this.categoria_b(); break;
        case "categoria_c": this.categoria_c(); break;
    }
  }



  categoria_b() {
      return true
  }
  categoria_c() {
      return true
  }

}
