import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent {

  constructor( activateRoute: ActivatedRoute){
  
    console.log(activateRoute.snapshot.params["id"]);

  }

}
