import { Injectable } from '@angular/core';
import { ModalController, Events } from '@ionic/angular';
import { CategoriaAPage } from 'src/app/principal/categorias/categoria-a/categoria-a.page';
import { SlidesAPage } from 'src/app/principal/categorias/categoria-a/slides-a/slides-a.page';
import { SlidesAPageModule } from 'src/app/principal/categorias/categoria-a/slides-a/slides-a.module';

SlidesAPageModule
@Injectable({
    providedIn: 'root'
})

export class ModalCategoriasSlidesService {

    constructor(private modalCtrl: ModalController,
                private events:Events) {
                  this.events.subscribe("slide-nav" , async (categoria)=>{
                    console.log("Se navega a categoria")
                    if(categoria == "categoria_a"){
                      let modal = await this.categoria_a();
                      modal.present()
                    }

                  })
                  this.events.subscribe("audio-nav" , async (categoria)=>{
                    console.log("Se navega a slides")
                    if(categoria == "categoria_a"){
                      let modal = await this.slidesA();
                      modal.present();
                    }

                  })
    }

    categoria_a() {
        return this.modalCtrl.create({
            component: CategoriaAPage
        });
    }

    async slidesA() {
        return this.modalCtrl.create({
            component: SlidesAPage
        });
    }
}
