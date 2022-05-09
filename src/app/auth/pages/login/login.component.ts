import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';   //(27)

import { AuthService } from '../../services/auth.service';    //importamos el servicio(11 de 11)

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  miFormulario: FormGroup =  this.fb.group({
    email: ['test@test1.com', [Validators.required, Validators.email ]],    //valores para validar email
    password: ['123456', [Validators.required, Validators.minLength(6)]],  //validar password, requerido seis caracteres
  })

  constructor(
    private fb: FormBuilder,  // Servicio de Formularios Reactivos
    private router: Router,
    private authServices: AuthService //inyectamos nuestro servicio auth service (11)
  ) { }


  login() {
    console.log(this.miFormulario.value);   //evaluar los valores enviados
    // console.log(this.miFormulario.valid);   //evaluar si el formulario es valido
    const { email, password } = this.miFormulario.value   //extraemos email y password de auth.service(12)

    this.authServices.login( email, password ).subscribe( ok => {   //mandamos el imail y pasword y nos subcribimos(13)
      //  console.log(ok);   //HACEMOS LA PRUEBA, debemos de obtene la respuesta al hacer click en login en consola,(14) si mandamos un correo que no es valido manda error desde el back. vamos a nuestras interfaces.ts
      if (ok === true) {   //(22)hacer if y vamos a dashboar.component.ts
        this.router.navigateByUrl('/dashboard')
      }else{
        Swal.fire('Error', ok, 'error') //(28)usamos alerta de sweet (termina clase, vamos a auth.service.ts)
      }
    });


  }


}
