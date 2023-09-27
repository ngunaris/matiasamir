const mongoose = require('mongoose')

let Schema = mongoose.Schema;

let entrenamientoSchema = new Schema({

  imagen: {

    type: String,
    required: [true, 'la imagen es obligatoria']
  }



})

module.exports = mongoose.model("entrenamientos", entrenamientoSchema);