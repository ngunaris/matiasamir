/*propiedades*/

let propiedades = {

    button: document.getElementById("btn__open"),
    menu: document.getElementById("container-oculto"),
    logo: document.getElementById("logo"),
    body: document.querySelector("body")



}


let funcion = {


    menuNew: function () {

        document.addEventListener("click", funcion.action)

    },

    action: function () {

        if (window.innerWidth < 1075) {
            propiedades.menu.classList.toggle("container-oculto-visto")
            propiedades.logo.classList.toggle("logo-oculto")
        }
    }

}

funcion.menuNew();

