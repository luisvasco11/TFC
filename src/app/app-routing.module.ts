import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {RegistroUsuarioComponent} from './components/registro_usuario/registro_usuario.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = 
[
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registro_usuario',
    component:RegistroUsuarioComponent

  },
 
  {
    path:'dashboard',
    component:DashboardComponent

  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
