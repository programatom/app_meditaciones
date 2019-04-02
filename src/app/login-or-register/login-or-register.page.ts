import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-or-register',
  templateUrl: './login-or-register.page.html',
  styleUrls: ['./login-or-register.page.scss'],
})
export class LoginOrRegisterPage implements OnInit {

  initLogo = false;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {

    setTimeout(()=>{
      this.initLogo = true;
    },3000);
  }

  irALogin(){
    this.navCtrl.navigateForward("/login");
  }
  irARegister(){
    this.navCtrl.navigateForward("/register");
  }

}
