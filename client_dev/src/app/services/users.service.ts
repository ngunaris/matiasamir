import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ruta } from '../config';
import { Router } from '@angular/router';
import { Usuario } from '../modelos/product.model';
import { catchError, concat, map } from 'rxjs';
import { SharedUserService } from './shared-user.service';
import * as moment from 'moment';
import { tap, shareReplay } from 'rxjs/operators';


interface LoginResponse {
  status: number;
  mensaje: string;
  nombre: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url: string;
  public usuario: string = "";
  httpHeaders = new HttpHeaders().set('Content-type', 'application/json')


  constructor(private http: HttpClient, private router: Router, private sharedUserService: SharedUserService) {

    this.url = Ruta.url
  }



  /*===================================
  PETICION DE TIPO POST EN ANGULAR
  =====================================*/

  guardarUsuario(listaUsuario: any) {


    return this.http.post(`${this.url}/crear-usuario`, listaUsuario)
  }

  /*===================================
LOGIN ANGULAR Y NODEJS
=====================================*/

  loginUsuario(listaUsuario: any) {

    const headers = new HttpHeaders({

    });
    return this.http.post(`${this.url}/login-usuario`, listaUsuario, { headers })
      .pipe(
        tap((res: LoginResponse) =>  {
          this.setSession(res);
          this.sharedUserService.login(res.token);}
        ),
        shareReplay(),
        
      );

     
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn,'second');
    localStorage.setItem('token', authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem('usuario', authResult.nombre);
  }

  /*==============================
  DESLOGUEARSE
  ==================================*/

  logout() {

    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['']);
    // Eliminar información de sesión, como tokens o datos de usuario
    // Ejemplo: localStorage.removeItem('token');
    // Ejemplo: localStorage.removeItem('usuario');

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('expires_at');
    this.sharedUserService.logout();
    

    
  }


   isLoggedIn() {
    const expiration = localStorage.getItem('expires_at');
    if (!expiration) {
      return false; // No hay fecha de expiración
    }
    const expiresAt = moment(JSON.parse(expiration));
    return moment().isBefore(expiresAt);
    
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  

 
  getExpiration(): moment.Moment | null {
    const expiration = localStorage.getItem("expires_at");
    if (!expiration) {
      return null; // No hay fecha de expiración
    }
    return moment(JSON.parse(expiration));
  }

  /*===================================
PETICION DE TIPO lISTADO DE USUARIOS
=====================================*/

  getNombreUsuario(listaUsuario: any) {

    return this.http.post(`${this.url}/login-usuario`, listaUsuario.usuario)
  }

  /*=================================
  PETICION DE USUARIO LOGEADO
  ==================================*/


  getUser() {

    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn) {
      return this.http.get(`${this.url}/mostrar-usuarios`, { headers: this.httpHeaders });
    } else {
      return null
    }

  }


}


