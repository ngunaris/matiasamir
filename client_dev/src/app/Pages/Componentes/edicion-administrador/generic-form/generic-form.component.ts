import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminisitradorService } from 'src/app/services/adminisitrador.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/modelos/product.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnInit {

  public archivos: any = [];
  public previsulizacion: string;


  constructor(
    private formBuilder: FormBuilder,
    private administradorService: AdminisitradorService,
    private router: Router,
    private sanitizer: DomSanitizer) {

  }

  formProduct: FormGroup;
  @Input()
  modelProduct: Product;

  @Output()
  submitValues: EventEmitter<Product> = new EventEmitter<Product>()



  ngOnInit(): void {
    this.formProduct = this.formBuilder.group({
      descripcion: [''],
      imagen: ['', Validators.required],
      texto: ['']
    })
    if (this.modelProduct !== undefined) {
      this.formProduct.patchValue(this.modelProduct)
    }
  }

  onSubmit() {
    this.submitValues.emit(this.formProduct.value)
  }

  capturarFile(event): any {
    const archivoCapturado = event.target.files[0]
     this.extraerBase64(archivoCapturado)



  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const imagen = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null

        });
      };
    } catch (e) { 
      return null;
    }
  })



}
