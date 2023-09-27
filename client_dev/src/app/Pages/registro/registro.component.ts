import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  public login: boolean = true;
  public usuario: string = "";
  public password: string = "";
  public email: string = "";

  constructor(activateRoute: ActivatedRoute, private router: Router) {

    activateRoute.snapshot.params["id"]

  }

}
