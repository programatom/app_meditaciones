import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService, ToastService, LocalStorageService } from '../services/services.index';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { UserDataService } from '../services/user-data/user-data.service';

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
              private userDataServ:UserDataService) {
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
      console.log(respuesta)
      if(respuesta.status == "success"){
        let token = respuesta.data.api_token;
        let nombre = respuesta.data.name;
        this.localStorageServ.insertAndInstantiateValue("token" , token).then(()=>{
          this.userDataServ.gatherUserData(false).then(()=>{
            this.toastServ.presentToast("Bienvenido " + nombre, "success");
            this.navCtrl.navigateForward("/tabs/principal");
          })
        });
      }else{
        var mensajeError = "El email o la contraseña son incorrectos";
        this.toastServ.presentToast(mensajeError, "error");
      }
    })
  }

  facebookLogin(){

  }
}
