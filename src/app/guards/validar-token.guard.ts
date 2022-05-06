import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/**(31) Y VAMOS A APP-ROUTIN.MODULE------------------------------------*/
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,    //(34)
    private router: Router    //(37)
  ){}

  canActivate(): Observable<boolean> |  boolean {
    // console.log('canActivate');

    return this.authService.validarToken()  //(35) habia un true en el return
      .pipe(    //(37) .pipe
        tap( valid => {
          if (!valid) {
            this.router.navigateByUrl('/auth');
          }
        })
      );
  }
  canLoad(): Observable<boolean> | boolean {
    // console.log('canLoad');
    return this.authService.validarToken()  //(36) habia un true en el return. VAMOS AL auth.service.ts
      .pipe(    //(38) .pipe
        tap( valid => {
          if (!valid) {
            this.router.navigateByUrl('/auth');
          }
        })
      );
  }
}
//-----------------------
