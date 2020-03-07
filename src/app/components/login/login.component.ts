import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBar } from '@angular/material'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {LoginService} from '../../services/login.service'
import { Router } from '@angular/router'


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })

export class LoginComponent implements OnInit{
    loginForm: FormGroup
    test = new Date()
    user = {};
    public ingresando = false
    constructor(public _loginService:LoginService, private snackBar: MatSnackBar, private router: Router) {
        this._loginService.getUsuarioEnLocalStorage()
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            'email': new FormControl('', [ Validators.minLength(1), Validators.required ]),
            'password': new FormControl('',[Validators.minLength(1), Validators.required])
        })
    }

    sidebarToggle() {
    }

    login(){
        this.ingresando = true
        this._loginService.login(this.loginForm.value).subscribe((data:any) => {
            if(!data.OK){
                
                this.snackBar.open('Sin acceso ', 'Cerrar', {duration:3000})
                this.ingresando = false
            }
            this._loginService.verificar(data).subscribe((usuario:any) => {
                if(!usuario.OK){
                    this.snackBar.open('Sin acceso', 'Cerrar', {duration:3000})  
                    this.ingresando = false 
                }
                this._loginService.setUsuarioEnLocalStorage(usuario)
            }, (erro) => {
                this.snackBar.open('Sin acceso ', 'Cerrar', {duration:3000})  
                this.ingresando = false
            })
        }, (error) => {
            this.snackBar.open('Sin acceso ', 'Cerrar', {duration:3000})
            this.ingresando = false
        })
    }


    signIn() {
        console.log(this.loginForm.value)
        this._loginService.signInUser(this.loginForm.value)
          .subscribe(
            res => {
              console.log(res);
              localStorage.setItem('token', res.token);
              this.router.navigate(['/dashboard']);
            },
            err => console.log(err)
          )
      }

}

