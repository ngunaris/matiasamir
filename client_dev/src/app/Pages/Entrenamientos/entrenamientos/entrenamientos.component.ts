import { Component, OnInit } from '@angular/core';
import { EntrenamientosService } from 'src/app/services/entrenamientos.service';
import { Ruta } from 'src/app/config';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.component.html',
  styleUrls: ['./entrenamientos.component.css']
})
export class EntrenamientosComponent implements OnInit{

  isSmallScreen: boolean = false;
  public entrenamientosJson: any[]= [];
   url = Ruta.url;


  

  constructor(

    private entrenamientosService: EntrenamientosService,
    activateRoute: ActivatedRoute
) {

    

  
  
    }

  ngOnInit() {
  
    this.entrenamientosService.getFotos().subscribe((respuesta: any) => {
     this.entrenamientosJson = respuesta["docs"];
    })

    window.scrollTo(0, -5)

  
  }
 
  

}
