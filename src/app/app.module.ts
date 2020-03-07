import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './components/login/login.component';
import{TokenInterceptorService} from './services/token-interceptor.service';
import {RegistroUsuarioComponent} from './components/registro_usuario/registro_usuario.component'

import { DashboardComponent } from './components/dashboard/dashboard.component';

import {MaterialModule} from './material.module';
import { LoginService }                     from './services/login.service';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginGuard} from './guards/login.guard';
import {DefinicionService} from './services/definicion.service'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ], 
  providers: [LoginService,TokenInterceptorService,LoginGuard,DefinicionService],
  entryComponents:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
    
