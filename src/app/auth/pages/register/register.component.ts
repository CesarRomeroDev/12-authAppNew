import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.name] ],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(
    private fb: FormBuilder
  ) { }

  registro(){
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);

  }
}