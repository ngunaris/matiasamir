import { Component, OnInit } from '@angular/core';
import { SliderDataServiceService } from 'src/app/services/slider-data-service.service';
import { Ruta } from '../../../../config';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {



  //VARIABLES PUBLICAS//

  public sliderModificado: any;
  public validarSLider: boolean = false;
  public validarCambioSlider: boolean = false;
  public mensajeApiSlider: any

  slideJson: any[] = [
    {
      imagen: "slide1.jpg"
    },
    {
      imagen: "slide2.jpg"
    },
    {
      imagen: "slide3.jpg"
    }
  ];
  renderSlide: boolean = true;
  url = Ruta.url;




  constructor(
    private sliderDataService: SliderDataServiceService) { }

  ngOnInit() {



    /*===============================================
    RECIBIENDO DATOS DINAMICOS
    ================================================*/
    this.sliderDataService.getSlideshow().subscribe((respuesta: any) => {
      this.slideJson = respuesta["docs"];
      this.callback();
    });



  }



  callback() {

    if (this.renderSlide) {

      this.renderSlide = false;


      let props: any = {
        paginacion: document.querySelectorAll("#paginacion li"),
        item: 0,
        cajaSlide: document.querySelector("#slide ul"),
        animacionSlide: "slide",
        imgSlide: document.querySelectorAll("#slide ul li"),
        avanzar: document.querySelector("#slide #avanzar"),
        retroceder: document.querySelector("#slide #retroceder"),
        velocidadSlide: 3000,
        formatearLoop: false
      };

      let m = {
        inicioSlide: function () {
          for (let i = 0; i < props.paginacion.length; i++) {
            props.paginacion[i].addEventListener("click", m.paginacionSlide);
          }
          props.avanzar.addEventListener("click", m.avanzar);
          props.retroceder.addEventListener("click", m.retroceder);
          m.intervalo();
        },

        paginacionSlide: function (event: any) {
          let item = parseInt(event.target.parentNode.getAttribute("item")) - 1;
          m.movimientoSlide(item);
        },

        avanzar: function () {
          if (props.item == props.imgSlide.length - 1) {
            props.item = 0;
          } else {
            props.item++;
          }
          m.movimientoSlide(props.item);
        },

        retroceder: function () {
          if (props.item == 0) {
            props.item = props.imgSlide.length - 1;
          } else {
            props.item--;
          }
          m.movimientoSlide(props.item);
        },

        movimientoSlide: function (item: any) {
          if (props.cajaSlide) {
            props.formatearLoop = true;
            props.cajaSlide.style.left = item * -100 + "%";
            for (let i = 0; i < props.paginacion.length; i++) {
              props.paginacion[i].style.opacity = "0.5";
            }
            props.paginacion[item].style.opacity = "1";
            if (props.animacionSlide == "slide") {
              props.cajaSlide.style.transition = ".5s left";
            } else if (props.animacionSlide == "fade") {
              props.cajaSlide.style.transition = ".5s opacity";
              props.cajaSlide.style.opacity = 0;
            }
          }
        },

        intervalo: function () {
          setInterval(function () {
            if (props.formatearLoop) {
              props.formatearLoop = false;
            } else {
              m.avanzar();
            }
          }, props.velocidadSlide);
        }
      };

      m.inicioSlide();
    }
  }

}