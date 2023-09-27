import { Component } from '@angular/core';
import { Product } from 'src/app/modelos/product.model';
import { AdminisitradorService } from 'src/app/services/adminisitrador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {


constructor(
  private administradorService: AdminisitradorService,
  private router: Router
  ){

}

onSubmit(product:Product){
  this.administradorService.createProduct(product).subscribe({
    next:()=>{
      this.router.navigateByUrl('administrador')
    },
    error:(error)=>{
      console.log(error)
    }
  })
}


}
