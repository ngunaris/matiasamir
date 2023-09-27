/*=================================================
ESQUEMA PARA EL MODELO CONECTOR A MONGODB
===================================================*/

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let usuariosSchema = new Schema({

    usuario:{

        type: String,
        required: [ true, "El usuario es obligatorio"],
        unique: true
    },
    password:{

        type: String,
        required: [ true, "La contraseña es obligatoria"],
    },
    email:{

        type: String,
        required: [ true, "El email es obligatorio"],
        unique: true
    },
})

/*=============================================
EVITAR DEVOLVER EN LA DATA EL CAMPO PASSWORD
===============================================*/

usuariosSchema.methods.toJSON = function(){

    let usuario = this;
    let usuarioObject = usuario.toObject();
    delete usuarioObject.password;

    return usuarioObject;
}

/*=============================================
DEVOLVER MENSAJE PERSONALIZADO PARA VALIDACIONES UNICAS
===============================================*/

usuariosSchema.plugin(uniqueValidator, {message: 'el {PATH} ya esta registrado en la Base de datos'})


module.exports = mongoose.model("usuarios", usuariosSchema);