import { Component } from '@angular/core';
import { Photo } from './modelos/product.model';
import { UsersService } from './services/users.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UsersService) {


  }

  ngOnInit() {
    const isLoggedIn = this.userService.isLoggedIn();
    if (isLoggedIn) {
      // El usuario está autenticado, puedes realizar acciones adicionales aquí
      console.log('El usuario está autenticado.');
      // Por ejemplo, puedes obtener información adicional del usuario o redirigirlo a una página específica.
    }else{console.log("usuario no logeado")}
  }

}
