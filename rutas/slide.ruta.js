/*==================================================
IMPORTAMOS EL CONTROLADOR
=================================================*/
const express = require('express');
const app = express();

const Slide = require('../controladores/slide.controlador');

//IMPORTAMOS EL MIDDLEWARE
const {verificarToken} = require('../middlewares/autentication');

/*==================================================
CREAMOS LA RUTA HTTP
=================================================*/

app.get('/mostrar-slide', Slide.mostrarSlide);
app.get('/getProduct/:id', Slide.getProduct);
app.post('/crear-slide',  Slide.crearSlide);
app.put('/editar-slide/:id',  Slide.editarSlide);
app.delete('/borrar-slide/:id', Slide.borrarSlide);
app.get('/mostrar-img/:imagen', Slide.mostrarArchivo);


/*==================================================
EXPORTAMOS LA RUTA
=================================================*/

module.exports = app;