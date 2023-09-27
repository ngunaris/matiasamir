import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ruta } from '../config';
import { Product } from '../modelos/product.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminisitradorService {

  private url: any;
  httpHeaders = new HttpHeaders().set('Content-type', 'application/json')


  constructor(private http: HttpClient) {

    this.url = Ruta.url;
  }


  getProducts() {
    return this.http.get(`${this.url}/mostrar-slide`, { headers: this.httpHeaders });
  }


  getProduct(id: any) {
    return this.http
      .get(`${this.url}/getProduct/${id}`, { headers: this.httpHeaders })
      .pipe(
        map((res: any) => {
          return res || {}
        })
      );
  }

  createProduct(data: Product) {
    return this.http.post(`${this.url}/crear-slide`, data)
  }

  updateProduct(id: any, data: any) {
    return this.http.put(`${this.url}/editar-slide/${id}`, data)
  }

  deleteProduct(id: any) {
    return this.http.delete(`${this.url}/borrar-imagen/${id}`, { headers: this.httpHeaders })
  }

  /*
    enviarDatos(fomrData: FormData){
       const formData = new FormData();
      return this.http.post(`${this.url}/editar-slide`, formData  )
    }*/


}
