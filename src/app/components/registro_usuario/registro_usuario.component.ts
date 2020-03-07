import { Component } from '@angular/core';
import {LoginService  } from '../../services/login.service'
import { Router } from '@angular/router'

@Component({
    selector: 'app-registro-usuario',
    templateUrl: './registro_usuario.component.html',
    styleUrls: ['./registro_usuario.component.css']
  })

export class RegistroUsuarioComponent {
  user = {}
    constructor(private authService: LoginService,
      private router: Router) {}

    signUp() {
      this.authService.signUpUser(this.user)
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
