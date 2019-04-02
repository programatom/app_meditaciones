import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocalStorageService, AuthService } from './services/services.index';
import { UserDataService } from './services/user-data/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {


  test = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private localStorageServ: LocalStorageService,
    private userDataServ: UserDataService,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {


      this.localStorageServ.searchAndInstantiateKey("token").then((respuesta:{
        status:string
        mensaje:string
      })=>{
        if(respuesta.status == "fail"){
          this.redirectToLoginOrRegisterPage();
        }else{
          let data = {
            "token":this.localStorageServ.localStorageObj.token
          }
          this.authService.verifySession(data).subscribe((respuesta)=>{
            console.log(respuesta);
            if(respuesta.status == "success"){
              this.userDataServ.gatherUserData(false).then(()=>{
                this.navCtrl.navigateForward("/tabs/principal").then(()=>{
                  this.statusBar.styleLightContent();
                  this.splashScreen.hide();
                });
              });
            }else{
              this.redirectToLoginOrRegisterPage();
            }
          })
        }
      })
    });
  }

  redirectToLoginOrRegisterPage(){
    this.statusBar.styleLightContent();
    this.splashScreen.hide();
    this.navCtrl.navigateForward("/login-or-register");
  }
}
