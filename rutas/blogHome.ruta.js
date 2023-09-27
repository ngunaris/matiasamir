
const expres = require('express');

const app = expres();

const Blog = require('../controladores/blogHome.controlador');

app.get('/mostrar-blog', Blog.mostrarBlog);
app.post('/crear-blog',  Blog.crearBlog);
app.put('/editar-blog/:id',  Blog.editarBlog);
app.delete('/borrar-blog/:id', Blog.borrarBlog);
app.get('/mostrar-blog/:imagen', Blog.mostrarArchivo);


/*==================================================
EXPORTAMOS LA RUTA
=================================================*/

module.exports = app;