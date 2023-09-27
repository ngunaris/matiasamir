import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, FormBuilder, Form } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Ruta } from 'src/app/config';
import { FormularioService } from 'src/app/services/formulario.service';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import * as Notiflix from 'notiflix';






@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  datos: FormGroup;
  url = Ruta.url;
  mostrarError: boolean = false;
  mostrarExito: boolean = false;
  prohibidas: string[] = ['puto', 'pija', 'alcahuete', 'bobeta', 'no sabes nada', 'burro', 'cojido', 'hijo de puta', 'puta', 'traga sable', 'tragasable', 'tragasavle', 'maricon', 'hace cojer', 'come traba', 'come trava', 'culo roto', 'culo', 'trava', 'come seco', 'maricon', 'malandra', 'robando', 'estafador', 'copion', 'el pela sabe mas', 'traidor', 'chupa'];
  mostrarAlerta = false;


  constructor(private activateRoute: ActivatedRoute, private http: HttpClient, private fb: FormBuilder) {

    this.datos = new FormGroup({
      asunto: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email]),
      edad: new FormControl('', Validators.required),
      mensaje: new FormControl('', [Validators.required, this.forbiddenWords.bind(this)])

    });

  }
  envioCorreo() {
    Notiflix.Loading.standard('cargando...');
    if (this.datos.invalid) {
      this.mostrarAlerta = true
      this.mostrarError = true;
      this.mostrarExito = false;
      return
    }

    let params = {

      asunto: this.datos.value.asunto,
      email: "Matias.amir.entrenamientos@gmail.com",
      edad: this.datos.value.edad,
      mensaje:

        `
      Nombre: ${this.datos.value.asunto}
      Edad:   ${this.datos.value.edad}
      Mail:   ${this.datos.value.correo}
      Mensaje:   ${this.datos.value.mensaje}`
    }

    this.http.post(`${this.url}/crear-formulario`, params).subscribe(res => {


      this.mostrarExito = true;
      this.mostrarError = false;
      Notiflix.Loading.remove();
    })


  }
  forbiddenWords(control: FormControl): { [key: string]: boolean } | null {
    const message = control.value as string;
    for (const word of this.prohibidas) {
      if (message.includes(word)) {
        return { forbiddenWord: true };
      }
    }
    return null;
  }

  ngOnInit(): void {



  }


}
