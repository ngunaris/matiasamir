/* ===================================
UBICAMOS LOS REQUERIMIENTOS
===================================
 */

const express = require('express');

/* ===================================
CREAMOS UNA VARIABLES PARA TENER TODAS LAS FUNCIONALIDADES DE EXPRESS
===================================
 */

const app = express()

/* ===================================
PETICIONES GET
===================================
 */
app.get("/", (req, res)=>{


    let salida = {

        nombre: "juan",
        edad: 37,
        url: req.url
    }

    res.send(salida);
})

/* ===================================
SALIDA PUERTO HTTP
===================================
 */

app.listen(4000, ()=>{

    console.log("esta habilitado el puerto 4000");
})