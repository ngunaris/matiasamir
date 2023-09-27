/*=================================================
ESQUEMA PARA EL MODELO CONECTOR A MONGODB
===================================================*/

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let slideSchema = new Schema({

    imagen:{

        type: String,
        required: [ true, "la imagen es obligatoria"]
    }
    
})

module.exports = mongoose.model("slides", slideSchema);