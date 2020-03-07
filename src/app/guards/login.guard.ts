import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router'


@Injectable() export class LoginGuard implements CanActivate{
    constructor( public _loginService:LoginService, private _router:Router){

    }
    canActivate(){
         if(this._loginService.loggedIn()){
             return true
         }else{
             this._router.navigate(['/login'])
             return false
         }
    }

}
