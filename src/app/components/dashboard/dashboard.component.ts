import {Component, Inject} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {DefinicionService}  from '../../services/definicion.service'


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
  })

export class DashboardComponent {

  definicion = {
    proyecto: '',
    definicion: ''
    

}

justificacion = {
  proyecto: '',
  justificacion: ''
  

}

registro ={
  usuario: '',
  password:''
}

    constructor(public _definicionService:DefinicionService,public _loginService:LoginService) {
      


    }



    savedefinicion() {
      this._definicionService.saveChanges(this.definicion).subscribe(data => {
          console.log(this.definicion,'definicion')

      })
  }


  savejustificacion(){
    this._definicionService.saveChangesJustificacion(this.justificacion).subscribe(data => {
      console.log(this.justificacion,'definicion')

  })

  }






}
