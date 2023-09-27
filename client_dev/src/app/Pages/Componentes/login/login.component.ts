import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { NgForm } from '@angular/forms';
import { SharedUserService } from 'src/app/services/shared-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{



  public userJson: any;
  public login: boolean = false;
  public renderUsers: any;
  public listaUsuario: any;
  public usuariosJson: any;
  public validarLogin: boolean = false;
  public mensajeLogin: string = "";
  usuario: string = '';
  password: string = '';
  isLoggedIn: boolean = false;


  constructor(private router: Router, private usuarioService: UsersService, private sharedUserService: SharedUserService) {

    /*================================
OBJETO LISTA USUARIO
==================================*/
    this.listaUsuario = {
      usuario: null,
      password: null
    }
  }

  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem('usuario');
  }

  onRegistroClick() {
    this.router.navigate(['/registro']);
  }

  onSubmit(f: NgForm) {

    this.usuarioService.loginUsuario(this.listaUsuario).subscribe(respuesta => {
      
      this.usuariosJson = respuesta;      
      if (this.usuariosJson["mensaje"] === "Usuario ingresado correctamente") {
        this.login = true;
        this.validarLogin = true;
        this.mensajeLogin = this.usuariosJson["mensaje"];

         // Almacena el nombre de usuario en localStorage
      localStorage.setItem('usuario', this.listaUsuario.usuario);
        //Obtener información del usuario después de iniciar sesión
        this.sharedUserService.login(this.listaUsuario.usuario);
        this.router.navigate(['home']);
      } else {
        this.mensajeLogin = this.usuariosJson["mensaje"];
        this.validarLogin = false;
      }
      
      if (f.valid) {
        this.router.navigate(['home']);
      }

    })
  }








}
