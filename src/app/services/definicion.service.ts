import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class DefinicionService {

    URL = 'https://tfc-ing-soft-backend.herokuapp.com/api/definicion';


    constructor(private _httpClient: HttpClient) {
        
    }

    saveChanges(body) {
        console.log(body)
        return this._httpClient.post(this.URL, body).pipe(map(data => {

            return data
        }))
    }

    saveChangesJustificacion(body) {
       this.URL = 'https://tfc-ing-soft-backend.herokuapp.com/api/justificacion';
        return this._httpClient.post(this.URL, body).pipe(map(data => {

            return data
        }))
    }




}
