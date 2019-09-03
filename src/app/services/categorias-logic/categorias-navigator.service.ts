import { Injectable } from '@angular/core';
import { CategoriasLogicService } from './categorias-logic.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class CategoriasNavigatorService {

  currentcategoryabcd:string;
  fetchAudiosIgnore = ["categoria_d"];

  constructor(private categoriaLogic: CategoriasLogicService,
              private navCtrl: NavController){

  }


  async categoriasSwitchNavigation(categoria){
    if(this.fetchAudiosIgnore.includes(categoria)){
        this.currentcategoryabcd = this.getCurrentNavigationACBD(categoria);
        this.navCtrl.navigateForward("/categoria-" + this.currentcategoryabcd);
    } else {
      this.categoriaLogic.fetchAudiosCategoria(categoria).subscribe(async (audios)=>{
        this.categoriaLogic.audiosCategoria = audios.data;
        this.currentcategoryabcd = this.getCurrentNavigationACBD(categoria);
        this.navCtrl.navigateForward("/categoria-" + this.currentcategoryabcd);
      });
    }

  }

  async slidesSwitchNavigation(categoria:string){
    this.currentcategoryabcd = this.getCurrentNavigationACBD(categoria);

    this.navCtrl.navigateForward("/slides-" + this.currentcategoryabcd );

  }

  getCurrentNavigationACBD(categoria){
    let split = categoria.split("_");
    let abcdcat = split[1];
    return abcdcat;

  }


}
