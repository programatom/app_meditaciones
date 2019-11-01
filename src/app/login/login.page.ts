import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService, ToastService, LocalStorageService } from '../services/services.index';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDataService } from '../services/user-data/user-data.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public login: FormGroup;
  disable_ingresar = false;


  constructor(public navCtrl: NavController,
              public authServ: AuthService,
              public formBuilder: FormBuilder,
              public toastServ: ToastService,
              public localStorageServ: LocalStorageService,
              public userDataServ:UserDataService,
              @Inject(DOCUMENT) public document: Document
              ) {
                this.login = this.formBuilder.group({
                    email: [''],
                    password: [''],
                });
              }

  ngOnInit() {
  }

  dismiss(){
    this.navCtrl.navigateBack("/login-or-register");
  }

  emailLogin(){
    this.authServ.login(this.login.value).subscribe((respuesta)=>{
      console.log("RESPUESTA DEL SERVICIO DE LOGIN: ");
      console.log(JSON.stringify(respuesta));
      if(respuesta.status == "success"){
        let token = respuesta.data.api_token;
        let nombre = respuesta.data.name;
        console.log("SE INSTANCIA EL TOKEN EN EL LS");

        this.document.getElementById("splash").style.visibility = "visible";
        this.disable_ingresar = true;
        this.localStorageServ.insertAndInstantiateValue("token" , token).then(()=>{
          this.userDataServ.gatherUserData(false).then(()=>{
            this.document.getElementById("splash").style.visibility = "hidden";
            this.toastServ.presentToast("Bienvenido a MeditAr App. Nuestra app es totalmente gratuita, disfrutá de nuestras meditaciones y respirá.", "success","top",30000);
            this.navCtrl.navigateForward("/tabs/principal");
          })
        });
      }else{
        this.disable_ingresar = false;
        var mensajeError = "El email o la contraseña son incorrectos";
        this.toastServ.presentToast(mensajeError, "error");
      }

      (err)=>{
        console.log("Error con el servicio de login: ", JSON.stringify(err))
      }
    })
  }

  facebookLogin(){

  }
}
