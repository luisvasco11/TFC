import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {RegistroUsuarioComponent} from './components/registro_usuario/registro_usuario.component'
import { JustificacionProblemaComponent } from './components/justificacion_problema/justificacion_problema.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DefinicionProblemaComponent } from './components/definicion_problema/definicion_problema.component';

const routes: Routes = 
[
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registo_usuario',
    component:RegistroUsuarioComponent

  },
  {
    path:'justificacion',
    component:JustificacionProblemaComponent

  },
  {
    path:'dashboard',
    component:DashboardComponent

  },
  {
    path:'definicion',
    component:DefinicionProblemaComponent

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
