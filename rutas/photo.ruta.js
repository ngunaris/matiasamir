/*==================================================
IMPORTAMOS EL CONTROLADOR
=================================================*/
const express = require('express');
const app = express();

const Photo = require("../controladores/photo.controlador");


app.get('/verPhoto', Photo.verPhoto);
app.post('/crearPhoto', Photo.createPhoto);
app.put('/editarPhoto/:id', Photo.editarPhoto)
app.delete('./borrarPhoto/:id', Photo.borrarPhoto)


module.exports = app;