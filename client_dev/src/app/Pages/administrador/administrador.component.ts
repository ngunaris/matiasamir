import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCirclePlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { AdminisitradorService } from 'src/app/services/adminisitrador.service';
import { Router } from '@angular/router';
import { Ruta } from 'src/app/config';
import { Product, ProductResponse } from 'src/app/modelos/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';





@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {


  faCirclePlus = faCirclePlus;
  faPen = faPen;
  faTrash = faTrash; 
  public previsualizacion: string = "";
  public archivos: any = [null, null, null];
  public url = Ruta.url;
  public fotoSeleccionada: number | null = null;
  public file: File | null = null
  public form: any;
  products: Product[]=[];


  constructor(
    private activateRoute: ActivatedRoute,
    private adminisitradorService: AdminisitradorService,
    private router: Router
  ) {
    activateRoute.snapshot.params['id'];
  }

  ngOnInit() {

    this.adminisitradorService.getProducts().subscribe( (res: ProductResponse)=>{
      this.products = res.docs
      console.log(this.products);
    })


  }

  delete(id:any, index:any){
    this.adminisitradorService.deleteProduct(id).subscribe((res)=>{
      this.products.splice(index, 1)
      
    })
  }


/*
  renderImage(formData: any) {
    const file = formData.get('newImage1')
    const image = URL.createObjectURL(file)
    this.previsualizacion = image;
  }


  actualizar(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];// Actualizamos la variable 'file' con el archivo seleccionado
      const image = URL.createObjectURL(file);
      this.previsualizacion = image;

    }
  }


  capturar(event: any) {
    const formData = new FormData(event.currentTarget)
    formData.append("newImage1", event.target.files[0]);
    this.adminisitradorService.enviarDatos(formData).subscribe(
      (response) => {
        console.log('Respuesta de la API:', response);
        // Puedes realizar acciones adicionales después de recibir la respuesta del servidor
      },
      (error) => {
        console.error('Error al enviar la imagen:', error);
        // Puedes manejar el error o mostrar un mensaje de error al usuario
      }
    );

  }
  /*
    capturarFile(event: Event, index: number): void {
      //Asegurar de que el evento sea del tipo ChangeEvent
      const fileEvent = event as InputEvent;
      const inputElement = event.target as HTMLInputElement;
  
  
      if (inputElement.files && inputElement.files.length > 0) {
        const archivoCapturado = inputElement.files[0];
        this.archivos[index] = archivoCapturado
        this.extraerBase64(archivoCapturado).then((imagen: any) => {
          this.previsualizacion = imagen.base;
          console.log(imagen);
        })
        //console.log(archivoCapturado);
      }
  
    }
    //Convertir el archivo a base64
    extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
      try {
        const unsafeImg = URL.createObjectURL($event);
        const imagen = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({ base: reader.result });
        };
        reader.onerror = error => {
          resolve({
            base: null
          });
        };
      } catch (e) {
        reject(e);
      }
    })
  */
  /*
    //Subir archivo
    subirArchivo(index: number): void {
      try {
        if (this.archivos[index]) {
          const formularioDeDatos = new FormData();
          formularioDeDatos.append(`archivo`, this.archivos[index]);
  
          this.sliderDataService.modificarImg(formularioDeDatos, index).subscribe((respuesta) => {
            console.log('Respuesta del servidor', respuesta);
            // Aquí puedes realizar acciones adicionales si lo deseas
          });
        } else {
          console.log('No se seleccionó ningún archivo para la foto', index + 1);
        }
      } catch (e) {
        console.log('ERROR', e);
      }
    }*/

}
