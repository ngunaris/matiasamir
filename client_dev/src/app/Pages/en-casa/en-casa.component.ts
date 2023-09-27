import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ruta } from 'src/app/config';
import { EnSalaService } from 'src/app/services/en-sala.service';

@Component({
  selector: 'app-en-casa',
  templateUrl: './en-casa.component.html',
  styleUrls: ['./en-casa.component.css']
})
export class EnCasaComponent implements OnInit{
  isSmallScreen: boolean = false;
  public enSalaJson: any[]= [];

   url = Ruta.url;


  

  constructor(

    private enSalaService: EnSalaService) {

  
  
    }

  ngOnInit() {
  
    this.enSalaService.getFotos().subscribe((respuesta: any) => {
     this.enSalaJson = respuesta["docs"];
    })

    window.scrollTo(0, -5)

  
  }
 
}
