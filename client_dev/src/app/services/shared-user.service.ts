import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedUserService {

  private nombreUsuario: string = "";
  private isAuthenticated: boolean = false;

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private nombreUsuarioSubject = new BehaviorSubject<string>("");
  nombreUsuario$ = this.nombreUsuarioSubject.asObservable();

  constructor() { }


  hasToken(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  login(token: string): void {
    localStorage.setItem('token', token);
    this.isAuthenticatedSubject.next(true);
  }


  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticatedSubject.next(false);
  }

   setNombreUsuario(nombre: string) {
    this.nombreUsuario = nombre;
    this.isAuthenticated = nombre !== ""; // Actualiza el estado de autenticación
    this.nombreUsuarioSubject.next(nombre);
    
  }

  getNombreUsuario() {
    
    return this.nombreUsuarioSubject.value;
  }

  


}

