import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './components/login/login.component';
import{TokenInterceptorService} from './services/token-interceptor.service';
import {RegistroUsuarioComponent} from './components/registro_usuario/registro_usuario.component'
import { JustificacionProblemaComponent } from './components/justificacion_problema/justificacion_problema.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DefinicionProblemaComponent } from './components/definicion_problema/definicion_problema.component';
import {MaterialModule} from './material.module';
import { LoginService }                     from './services/login.service';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    JustificacionProblemaComponent,
    DashboardComponent,
    DefinicionProblemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ], 
  providers: [LoginService,TokenInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
    
