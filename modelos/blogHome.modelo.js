const mongoose = require('mongoose')

let Schema = mongoose.Schema;

let blogSchema = new Schema({

    imagen: {

        type: String,
        required: [true, 'la imagen es obligatoria']
    },
    titulo:{

        type:String,
        required: [true]
    },
    descripcion:{
        
        type: String,
        required: [true]
    }

})

module.exports = mongoose.model("blogs", blogSchema);