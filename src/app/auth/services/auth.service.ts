import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';    //verificar que se importo nuestro servicio(3)
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthResponse, Usuario } from '../interfaces/interfaces'; //verificamos que importe AuthRespo(de 10)
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;    //importamos nuestros environment(7)
  private _usuario!: Usuario;   //(16) manda errro por que no lo inicializamos pero usamo ! indicando que viene algo

  get usuario(){    //(17)
    return { ...this._usuario }   //'...'por seguridad para no cambiar sus valores por error
  }

  constructor(
    private http: HttpClient    //para hacer peticiones http(3)
  ) { }

  /**
   * Obtener Usuario
   * @param email usuario
   * @param password usuario
   * @returns
   */
  login( email: string, password: string ){   //(4) vamos a los environment.ts
    const url = `${ this.baseUrl }/auth`;   //(8)
    const body = { email, password };   //(9) vamos a crear nuestras interfaces y vamos al archivo interfaces.ts

    return this.http.post<AuthResponse>(url, body)  //este post va a retornar algo de tipo authResponse (10). es momento de hacer la  peticion el el login login.component.ts
    .pipe(    //(18) mutacion de la data
      tap( resp => {    //(21)hacemos if , terminando if vamos a login.component.ts
        if ( resp.ok ) {
          localStorage.setItem('token', resp.token!)    //29 para no perder informacion del usuario al recargar pagina
          this._usuario = {   //para mantener la informacion del usuario y capturarla
            name: resp.name!,
            uid: resp.uid!
          }
        }
       } ),
      map( resp => resp.ok ),      //(19)Mutar la respuesta, solo con el ok
      catchError( err => of(err.error.msg) )  //(20)catchError: para tomar el error del back y of para tranformarlo en un observable para que se compatible con el boolean
    );
  }


 //(30) -------------------------------------------------------------------
  validarToken(): Observable<boolean> {    //(32)observable<boolean> se agrega en el paso 32

    const url = `${ this.baseUrl }/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');    //si esto es || manda un string vacio

    return this.http.get<AuthResponse>( url, { headers  } ) //(33) SE AGREGO el <AUthRes> y .pipe
      .pipe(
        map( resp => {
          localStorage.setItem('token', resp.token!)    //(37) no estaba el localStorage
          this._usuario = {   //para mantener la informacion del usuario y capturarla
            name: resp.name!,
            uid: resp.uid!
          }                                              //(37)localStorage
          return resp.ok;
        }),
        catchError( err => of(false) )
      );

  }
  //------------------------------------------------------- vamos a CREAR UN GUARD escibimos el siguente comando en consola : ng g g guard/validarToken --skip-Tests
  //seleccionamos CanActivate y CanLoad y ingresamos al archivo creado.
}
