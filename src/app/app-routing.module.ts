import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/**
 * RUTAS PRINCIPALES
 */
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)     //Ruta de las paginas de registro
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule)  //Ruta .....
  },
  {
    path: '**',
    redirectTo: 'auth'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
