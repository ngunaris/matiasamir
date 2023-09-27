/*==================================================
IMPORTAMOS EL CONTROLADOR
=================================================*/
const express = require('express');
const app = express();

/*=====================================================
IMPORTAMOS EL CONTROLADOR
=======================================================*/
const Formulario = require('../controladores/formulario.controlador');


/*=====================================================
CREAMOS LAS RUTAS HTTP
=======================================================*/


app.post('/crear-formulario', Formulario.envioCorreo);



module.exports = app;