import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ToastService, AuthService, LocalStorageService } from '../services/services.index';
import { UserDataService } from '../services/user-data/user-data.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    private register: FormGroup;

    constructor(private navCtrl: NavController,
        private formBuilder: FormBuilder,
        private toastServ: ToastService,
        private auth: AuthService,
        private localStorageServ: LocalStorageService,
        private userDataServ: UserDataService,
        @Inject(DOCUMENT) private document: Document
    ) {

        this.register = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            name: ['', Validators.required],
            password: ['', Validators.minLength(6)],
            password_confirmation: ['']
        });
    }

    ngOnInit() {
    }

    dismiss() {
        this.navCtrl.navigateBack("/login-or-register");
    }

    emailRegister() {
        let formObj = this.register.value;
        if (!this.register.valid) {
            Object.keys(this.register.controls).forEach(key => {

                const controlErrors: ValidationErrors = this.register.get(key).errors;
                if (controlErrors != null) {
                    Object.keys(controlErrors).forEach(keyError => {
                      if(controlErrors[keyError]){
                        if(keyError == "required"){
                          this.toastServ.presentToast("Todos los campos son requeridos");
                          return;
                        }
                        if(keyError == "minLength"){
                          this.toastServ.presentToast("La contraseña debe tener al menos 6 caracteres");
                          return;
                        }
                        if(keyError == "email"){
                          this.toastServ.presentToast("Ingrese un email válido");
                          return;
                        }
                      }
                    });
                }
            });
        }
        if (formObj.password != formObj.password_confirmation) {
            this.toastServ.presentToast("Ambas contraseñas deben coincidir!", "error");
            return;
        }

        formObj.tipo_de_cuenta = "nativo";
        formObj.photo_url = "no_url";

        this.registerFN(formObj);
    }

    registerFN(data){
      console.log("Registración de: " , data)
      this.document.getElementById("splash").style.visibility = "visible";
      this.auth.register(data).subscribe((respuesta)=>{
        if(respuesta.status == "success"){
          let token = respuesta.data.api_token;
          let user = respuesta.data;
          this.localStorageServ.insertAndInstantiateValue("token" , token).then(()=>{
            this.document.getElementById("splash").style.visibility = "visible";
            this.userDataServ.gatherUserData(true, user).then(()=>{
              setTimeout(()=>{
                this.document.getElementById("splash").style.visibility = "hidden";
                this.toastServ.presentToast("Bienvenido a MeditAr App " + user.name + ". Nuestra app es totalmente gratuita, disfruta de nuestras meditaciones y respirá.", "success");
                this.navCtrl.navigateForward("/tabs/principal");
              },1800)
            })
          });
        }else{
          let errores = respuesta.data;
          let keys = Object.keys(errores);
          this.toastServ.presentToast(errores[keys[0]], "error");
        }
      });
    }

}
