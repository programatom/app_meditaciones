import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-login-or-register',
  templateUrl: './login-or-register.page.html',
  styleUrls: ['./login-or-register.page.scss'],
})
export class LoginOrRegisterPage implements OnInit {

  initLogo = false;

  constructor(public navCtrl: NavController,
              public plt:Platform) { }

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
