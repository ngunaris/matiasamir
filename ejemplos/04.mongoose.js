/* ===================================
UBICAMOS LOS REQUERIMIENTOS
===================================
 */

const express = require('express');
const mongoose = require('mongoose');

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
CONEXION BASE DE DATOS
===================================
 */


 await mongoose.connect('mongodb://localhost:27017/apirest', (err, res)=>{
    if(err) throw err;
    console.log("conectado a base de datos");
});


/* ===================================
SALIDA PUERTO HTTP
===================================
 */

app.listen(4000, ()=>{

    console.log("esta habilitado el puerto 4000");
})