const express = require('express');
const app = express()
//IMPORTAMOS EL MIDDLEWARE
const {verificarToken} = require('../middlewares/autentication');
/*=====================================================
IMPORTAMOS EL CONTROLADOR
=======================================================*/
const Usuarios = require('../controladores/usuarios.controlador');

/*=====================================================
CREAMOS LAS RUTAS HTTP
=======================================================*/

app.get('/mostrar-usuarios', Usuarios.mostrarUsuarios);

app.post('/crear-usuario', Usuarios.crearUsuario);
app.post('/login-usuario', Usuarios.loginUsuario);

module.exports = app;