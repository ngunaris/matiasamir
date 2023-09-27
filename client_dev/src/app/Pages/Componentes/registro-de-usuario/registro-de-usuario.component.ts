import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registro-de-usuario',
  templateUrl: './registro-de-usuario.component.html',
  styleUrls: ['./registro-de-usuario.component.css']
})
export class RegistroDeUsuarioComponent {

 
  public registro: boolean = false;
  public listaUsuario: any;
  public password: any;
  public email: any;
  public usuarioCreado: any;
  public validarCreacionUsuario: boolean = true;
  public mensajeApi: any;


  constructor(activateRoute: ActivatedRoute,private router: Router, private usersService: UsersService){
    activateRoute.snapshot.params["id"]

    this.listaUsuario = {

      usuario: null,
      password: null,
      email: null
    }
  }

  guardarUsuario(f: NgForm){

    this.usersService.guardarUsuario(this.listaUsuario).subscribe(respuesta=>{
      this.usuarioCreado = respuesta;

      if(this.usuarioCreado["status"] ==200){
        this.validarCreacionUsuario = true;
        this.registro = true;
      }else{
        this.validarCreacionUsuario = false;
       
        this.registro = false;
        this.mensajeApi = this.usuarioCreado["message"]
      }
    })
  
  }
}

