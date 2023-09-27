import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../config';

@Injectable({
  providedIn: 'root'
})
export class SliderDataServiceService {
  public url: string


  constructor(private http: HttpClient) {

    this.url = Ruta.url
   }

   getSlideshow(){

    return this.http.get(`${this.url}/mostrar-slide`);
    
   }


  guardarImg(slideJson:any){

  
    return this.http.post(`${this.url}/crear-slide`, slideJson)
   }

   modificarImg(slideJson:any, index: number){

  
    return this.http.post(`${this.url}/editar-slide`, slideJson)
   }
  }