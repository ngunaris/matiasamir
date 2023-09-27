
/*==================================================
IMPORTAMOS EL CONTROLADOR
=================================================*/
const express = require("express");
const app = express();


/*=====================================================
IMPORTAMOS EL CONTROLADOR
=======================================================*/

const Entrenamiento = require('../controladores/entrenamiento.controlador');


/*=====================================================
CREAMOS LAS RUTAS HTTP
=======================================================*/
app.get('/mostrar-entrenamiento', Entrenamiento.mostrarFotos);
app.post('/crear-entrenamiento',  Entrenamiento.crearEntrenamiento);
app.put('/editar-entrenamiento/:id',  Entrenamiento.editarEntrenamiento);
app.delete('/borrar-entrenamiento/:id', Entrenamiento.borrarEntrenamiento);
app.get('/mostrar-entrenamiento/:imagen', Entrenamiento.mostrarArchivo);

module.exports = app; 