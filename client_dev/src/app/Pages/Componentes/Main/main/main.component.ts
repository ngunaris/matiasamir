import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  public mainJson: any;
  

  constructor(private mainService: MainService){

      this.mainService.getMain().subscribe(respuesta => 
      

        this.mainJson = respuesta);


  }
}
