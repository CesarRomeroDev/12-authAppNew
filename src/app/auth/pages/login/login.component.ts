import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  miFormulario: FormGroup =  this.fb.group({
    email: ['test1@test.com', [Validators.required, Validators.email ]],    //valores para validar email
    password: ['123456', [Validators.required, Validators.minLength(6)]],  //validar password, requerido seis caracteres
  })

  constructor(
    private fb: FormBuilder  // Servicio de Formularios Reactivos
  ) { }


  login() {
    console.log(this.miFormulario.value);   //evaluar los valores enviados
    console.log(this.miFormulario.valid);   //evaluar si el formulario es valido

  }


}
