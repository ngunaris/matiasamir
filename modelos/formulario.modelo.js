
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let formularioSchema = new Schema({

    nombre:{

        type: String,
        required: [ true, "El nombre es obligatorio"],
        unique: true
    },
    edad:{

        type: String,
        required: [ true, "La edad es obligatoria"]
    },
    email:{

        type: String,
        required: [ true, "El email es obligatorio"],
        unique: true
    },

    mensaje:{

        type: String,
        required: [ true, "El mensaje es obligatorio"],
        unique: true
    },
})

module.exports = mongoose.model("formulario", formularioSchema);