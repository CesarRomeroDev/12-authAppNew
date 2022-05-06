import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [ `
    * {
      margin: 15px;
    }
    button{
      width: 70px;
      background: blue;
      height: 30px;
      border-radius: 3px;
      color: #ffffff;
    }
  `
  ]
})
export class DashboardComponent {

  get usuario(){    //(25) y vamos a dashboar.html
    return this.authService.usuario;
  }

  constructor(
    private router: Router,   //(23) iyectamos el servicio de rutas
    private authService: AuthService    //(24)
  ) { }

  logout(){
    this.router.navigateByUrl('/auth')
  }
}
