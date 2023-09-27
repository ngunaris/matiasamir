import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ruta } from 'src/app/config';
import { AltoRendimientoService } from 'src/app/services/alto-rendimiento.service';

@Component({
  selector: 'app-alto-rendimiento',
  templateUrl: './alto-rendimiento.component.html',
  styleUrls: ['./alto-rendimiento.component.css']
})
export class AltoRendimientoComponent implements OnInit{

  isSmallScreen: boolean = false;
  public altoRendimientoJson: any[]= [];
   url = Ruta.url;


  

  constructor(

    private altoRendimientoService: AltoRendimientoService,
    activateRoute: ActivatedRoute) {

      activateRoute.snapshot.params["id"]
  
    }

  ngOnInit() {
  
    this.altoRendimientoService.getFotos().subscribe((respuesta: any) => {
     this.altoRendimientoJson = respuesta["docs"];
    })

    window.scrollTo(0, -5)

  
  }
 
}
