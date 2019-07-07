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

        case "categoria_b":
            this.categoriaLogic.fetchAudiosCategoria(categoria).subscribe(async (audios)=>{
              console.log("Audios : ", audios)
              this.categoriaLogic.audiosCategoria = audios.data;
              this.navCtrl.navigateForward("/categoria-b");
            });
            break;
        case "categoria_c": 
             this.categoriaLogic.fetchAudiosCategoria(categoria).subscribe(async (audios)=>{
              console.log("Audios : ", audios)
              this.categoriaLogic.audiosCategoria = audios.data;
              this.navCtrl.navigateForward("/categoria-c");
            });
            break;
    }
  }

  async slidesSwitchNavigation(categoria){
    switch (categoria) {

        case "categoria_a":
        this.navCtrl.navigateForward("/slides-a");
        break;

        case "categoria_b":
        this.navCtrl.navigateForward("/slides-b");
        break;

        case "categoria_c": 
        this.navCtrl.navigateForward("/slides-c");
        break;
    }
  }


}
