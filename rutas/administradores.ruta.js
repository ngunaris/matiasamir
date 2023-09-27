const express = require('express');
const app = express()

/*=====================================================
IMPORTAMOS EL CONTROLADOR
=======================================================*/
const Administradores = require('../controladores/administradores.controlador');

//IMPORTAMOS EL MIDDLEWARE
const {verificarToken} = require('../middlewares/autentication');

/*=====================================================
CREAMOS LAS RUTAS HTTP
=======================================================*/

app.get('/mostrar-administradores', Administradores.mostrarAdministradores);
app.post('/crear-administrador',  Administradores.crearAdministrador);
app.put('/editar-administrador/:id', verificarToken, Administradores.editarAdministrador);
app.delete('/borrar-administrador/:id', verificarToken, Administradores.borrarAdministrador);
app.post('/login-administrador', Administradores.login);

module.exports = app;