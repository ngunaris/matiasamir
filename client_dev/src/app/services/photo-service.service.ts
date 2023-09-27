import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../config';
import { Photo } from '../modelos/product.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  private url: any;

  constructor(private readonly http: HttpClient) { 

    this.url = Ruta.url;
  }

  
getPhotos() {
  return this.http.get<Photo[]>(`${this.url}/verPhoto`)
}

createPhoto(name: string, imagen: File){
  return this.http.post(`${this.url}/crearPhoto`, imagen)
}

updatePhoto(id: string, name:string){
  const photo = {
    id,
    name
  };
  return this.http.put(`${this.url}/editarPhoto`, photo)
}

deletePhoto(id: string){
  return this.http.delete(`${this.url}/borrarPhoto`, {
    params:{
      id
    }
  })
}

}
