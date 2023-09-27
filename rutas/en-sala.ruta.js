
/*==================================================
IMPORTAMOS EL CONTROLADOR
=================================================*/
const express = require("express");
const app = express();


/*=====================================================
IMPORTAMOS EL CONTROLADOR
=======================================================*/

const Ensala = require('../controladores/en-sala.controlador');


/*=====================================================
CREAMOS LAS RUTAS HTTP
=======================================================*/
app.get('/mostrar-enSala', Ensala.mostrarFotos);
app.post('/crear-enSala',  Ensala.crearEnSala);
app.put('/editar-enSala/:id',  Ensala.editarEnSala);
app.delete('/borrar-enSala/:id', Ensala.borrarEnSala);
app.get('/mostrar-enSala/:imagen', Ensala.mostrarArchivo);

module.exports = app; 