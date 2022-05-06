import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';    //para hacer peticiones http en forma de observables(1)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule    //importamos en modulo principal(2)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/**
 * una ves echo el paso 1 y 2, vamso a crear nuestro servicio en consola
 * con el siguiente comando ng g s auth/services/auth --skip-Tests
 * ya creado vamos a nuestra carpeta services y al archivo auth.service.ts
 */
