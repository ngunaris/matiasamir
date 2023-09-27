
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let photoSchema = new Schema({


    name: String,

    imagen: {

        type: String,
        required: [true, "la imagen es obligatoria"]
    }

});



module.exports = mongoose.model("photos", photoSchema);