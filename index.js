require('./config');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
const app = express();
const https = require("https");





app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(bodyParser.urlencoded({limit: "10mb" , extended: false}));
app.use(bodyParser.json({limit: '10mb'}));





app.use('/', express.static('client/angular-cacho', {redirect: false}));
app.use(require('./rutas/slide.ruta'));
app.use(require('./rutas/administradores.ruta'));
app.use(require('./rutas/usuarios.ruta'));
app.use(require('./rutas/formulario.ruta'));
app.use(require('./rutas/entrenamiento.ruta'));
app.use(require('./rutas/blogHome.ruta'));
app.use(require('./rutas/photo.ruta'));
app.use(require('./rutas/alto-rendimiento.ruta'))


app.get('*', function(req, res, next){
res.sendFile(path.resolve('client/angular-cacho/index.html'));
});

/*CONFIGURACION SSL
y;*/

mongoose.connect('mongodb://127.0.0.1:27017/apirest', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.listen(process.env.PORT, ()=>{

    console.log("habilitado el puerto 4000");

});

