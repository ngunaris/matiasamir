
/*==================================================
IMPORTAMOS EL CONTROLADOR
=================================================*/
const express = require("express");
const app = express();


/*=====================================================
IMPORTAMOS EL CONTROLADOR
=======================================================*/

const AltoRendimiento = require('../controladores/alto-rendimiento.controlador');


/*=====================================================
CREAMOS LAS RUTAS HTTP
=======================================================*/
app.get('/mostrar-altoRendimiento', AltoRendimiento.mostrarFotos);
app.post('/crear-altoRendimiento',  AltoRendimiento.crearAltoRendimiento);
app.put('/editar-altoRendimiento/:id',  AltoRendimiento.editarAltoRendimiento);
app.delete('/borrar-altoRendimiento/:id', AltoRendimiento.borrarAltoRendimiento);
app.get('/mostrar-altoRendimiento/:imagen', AltoRendimiento.mostrarArchivo);

module.exports = app; 