import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/modelos/product.model';
import { AdminisitradorService } from 'src/app/services/adminisitrador.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id!: any;
  model: Product;
  formBuilder: FormBuilder;
  form: FormControl;

  constructor(
    private administradorService: AdminisitradorService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id')
    this.administradorService.getProduct(this.id).subscribe((res)=>{
      this.model = {
        _id: res._id,
        imagen: res.imagen,
        descripcion: res.descripcion
      }
      
    })
  }

  onSubmit(product: Product){
    this.administradorService.updateProduct(this.id, product).subscribe({
      next: ()=>{
this.router.navigateByUrl('/administrador');
      },
      error: (error) => {
        console.log(error)
      }
    })
  };
}
