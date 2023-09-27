import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public url: string;

  constructor(private http: HttpClient) {

    this.url = "assets/json/fotos.json";
   }

   getMain(){

    return this.http.get(this.url);
   }
}
