import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService, ToastService, LocalStorageService } from '../services/services.index';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDataService } from '../services/user-data/user-data.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private login: FormGroup;


  constructor(private navCtrl: NavController,
              private authServ: AuthService,
              private formBuilder: FormBuilder,
              private toastServ: ToastService,
              private localStorageServ: LocalStorageService,
              private userDataServ:UserDataService,
              @Inject(DOCUMENT) private document: Document
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
      console.log(JSON.stringify(respuesta));
      if(respuesta.status == "success"){
        let token = respuesta.data.api_token;
        let nombre = respuesta.data.name;
        console.log("SE INSTANCIA EL TOKEN EN EL LS")
        this.document.getElementById("splash").style.visibility = "visible";
        this.localStorageServ.insertAndInstantiateValue("token" , token).then(()=>{
          setTimeout(()=>{
            this.userDataServ.gatherUserData(false).then(()=>{
              this.document.getElementById("splash").style.visibility = "hidden";
              this.toastServ.presentToast("Bienvenido a MeditAr App " + nombre + ". Nuestra app es totalmente gratuita, disfruta de nuestras meditaciones y respirá.", "success");
              this.navCtrl.navigateForward("/tabs/principal");
            })
          }, 1800)
        });
      }else{
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
