import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-contribui-modal',
  templateUrl: './contribui-modal.page.html',
  styleUrls: ['./contribui-modal.page.scss'],
})
export class ContribuiModalPage implements OnInit {

  constructor(private modalCtrl: ModalController,
              private emailComposer: EmailComposer,) {

              }

  ngOnInit() {
  }

  dismissClick(){
  	this.modalCtrl.dismiss();
  }

  contacto(){
    let email = {
      cc: 'claudiaroiz59@gmail.com',
      subject: "Contacto MeditAr"
    }
    this.emailComposer.open(email);
  }


}
