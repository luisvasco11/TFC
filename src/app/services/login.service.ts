import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'


@Injectable() export class LoginService {
    provaideIn : 'root'

    public usuario:any = null
    public token = ''

    constructor(public _httpClient:HttpClient
        ,public _router:Router){
        this.getUsuarioEnLocalStorage()
    }

    login({username,password}){
        const usuario = {
            usuario:username,
            password
        }
        console.log(username,password,'data User')
        
        
        let url = `https://mosaico.arus.com.co:3000/ldap`
        return this._httpClient.post(url, usuario).pipe(map(data => {
            return data
        }))
    }

    verificar(cedula){
        let url = `https://mosaico.arus.com.co:3000/login`
        return this._httpClient.post(url, { cedula }).pipe( map(data => {
            return data
        }))
    }

    setUsuarioEnLocalStorage({ analista, token }){
        localStorage.setItem('analista-mosaico-arus-gti', JSON.stringify(analista))
        localStorage.setItem('token-mosaico-arus-gti', token)
        this.getUsuarioEnLocalStorage()
        this._router.navigate(['/dashboard'])
    }

    getUsuarioEnLocalStorage(){
        console.log('Me ejectuté')
        try {   
            this.usuario = JSON.parse(localStorage.getItem('analista-mosaico-arus-gti'))
            this.token = localStorage.getItem('token-mosaico-arus-gti')
        } catch ( e ){
            this.usuario = null
            this.token = ''
        }        
    }

    removeUsuarioEnLocalStorage(){
        localStorage.removeItem('analista-mosaico-arus-gti')
        localStorage.removeItem('token-mosaico-arus-gti')
        this.usuario = null
        this.token = ''
    }

    analistaIsLogged(){
        if(this.token){
            return (this.token.length > 1) ? true : false
        }else{
            return false
        }
    }


 private URL = 'http://localhost:4000/api';
  

  signUpUser(user) {
    return this._httpClient.post<any>(this.URL + '/signup', user);
  }

  signInUser(user) {
      console.log(user,'En el servicio')
    return this._httpClient.post<any>(this.URL + '/signin', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/tasks']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
  


    

