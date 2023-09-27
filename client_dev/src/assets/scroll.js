/*====================================================
OBJETO CON LAS PROPIEDADES DEL SLIDE
======================================================*/

let ps = {

    posicionScroll: 0,
    articulos: document.querySelectorAll(".cards #article"),
    cajaScroll: document.querySelector(".cards")

}


/*====================================================
OBJETO CON LOS METODOS DEL SLIDE
======================================================*/

let ms = {

  inicioScroll: function(){

    document.addEventListener("scroll", ms.efectoParallax)

  },
  efectoParallax: function(){
    ps.posicionScroll = window.pageYOffset;
    if(ps.posicionScroll > ps.cajaScroll.offsetTop){
        
        for(let i = 0; i<ps.articulos.length; i++){
        ps.articulos[i].style.marginLEft = "0%";
        }

    }else{
        for(let i = 0; i<ps.articulos.length; i++){
            ps.articulos[i].style.marginLEft = ps.posicionScroll -100 + "%";
            }
    }
  }
}


ms.inicioScroll();