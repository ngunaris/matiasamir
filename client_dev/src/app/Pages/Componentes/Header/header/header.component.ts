import { PropertyRead } from '@angular/compiler';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/modelos/product.model';
import { SharedUserService } from 'src/app/services/shared-user.service';
import { Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  usuario: any;
  activeLink: string = "home";
  public listaUsuario: any;
  nombreUsuario: string;
  tiempoRestante: number | null = null;
  private timerSubscription: Subscription | undefined
  




  constructor(private activateRoute: ActivatedRoute, private userService: UsersService, private http: HttpClient, private sharedUserService: SharedUserService) {

    activateRoute.snapshot.params["id"];
 this.listaUsuario = {
      usuario: null
    }
    

  }



  ngOnInit() {
    this.sharedUserService.nombreUsuario$.subscribe((nombre) => {
      this.nombreUsuario = nombre;
    });

    let funcion = {
      menuNew: function () {
        document.addEventListener("DOMContentLoaded", function () {
          let propiedades: any = {
            button: document.getElementById("btn__open"),
            menu: document.getElementById("container-oculto"),
            logo: document.getElementById("logo"),
            body: document.querySelector("body"),
            element: false,

            //elementos dentro del menu Oculto
            listaOculta: document.querySelectorAll("#menu-ul a")
          };



          //Accion para mostrar el menu lateral
          if (window.innerWidth < 1075) {
            propiedades.button.addEventListener("touch", funcion.action.bind(null, propiedades));
            propiedades.button.addEventListener("click", funcion.action.bind(null, propiedades));
          } else {
            propiedades.button.addEventListener("click", funcion.action.bind(null, propiedades));
          }
          //Accion para ocultar el menu lateral con los li
          for (let i = 0; i < propiedades.listaOculta.length; i++) {
            if (window.innerWidth < 1075) {
              propiedades.listaOculta[i].addEventListener("touch", funcion.ocultar.bind(null, propiedades));
              propiedades.listaOculta[i].addEventListener("click", funcion.ocultar.bind(null, propiedades));
            }
             else {
              propiedades.listaOculta[i].addEventListener("click", funcion.ocultar.bind(null, propiedades));
            }
          }



        });
      },

      action: function (propiedades: any) {
        if (window.innerWidth < 1075 && propiedades.menu && propiedades.logo && !propiedades.element) {
          propiedades.menu.classList.add("container-oculto-visto");
          propiedades.logo.classList.add("logo-oculto");
          propiedades.button.classList.add("rotate");
          propiedades.button.classList.add("fa-xmark");
          propiedades.element = true
        } else if (window.innerWidth < 1075 && propiedades.menu && propiedades.logo && propiedades.element) {
          propiedades.menu.classList.remove("container-oculto-visto");
          propiedades.logo.classList.remove("logo-oculto");
          propiedades.button.classList.remove("rotate");
          propiedades.button.classList.remove("fa-xmark");
          propiedades.element = false

        }
      },

      ocultar: function (propiedades: any) {
        if (window.innerWidth < 1075 && propiedades.menu && propiedades.logo && propiedades.element) {
          propiedades.menu.classList.remove("container-oculto-visto");
          propiedades.logo.classList.remove("logo-oculto");
          propiedades.button.classList.remove("rotate");
          propiedades.button.classList.remove("fa-xmark");
          propiedades.element = false
        }

      }
    };
    funcion.menuNew();
  }

  // Método para realizar logout
  doLogout() {
    this.userService.logout(); 
    location.reload();// Llama al método de logout del servicio de usuarios
  }
  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }
  
}
