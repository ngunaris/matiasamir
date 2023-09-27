import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../config';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  public url: any;

  constructor(private http: HttpClient) {

    this.url = Ruta.url;
   }


   /*===================================
   PETICION DE TIPO POST EN ANGULAR
   =====================================*/

   guardarFormulario(listaFormulario:any){

  
    return this.http.post(`${this.url}/crear-formulario`, listaFormulario)
   }

}
