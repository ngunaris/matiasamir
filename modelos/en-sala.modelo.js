const mongoose = require('mongoose')

let Schema = mongoose.Schema;

let enSalaSchema = new Schema({

  imagen: {

    type: String,
    required: [true, 'la imagen es obligatoria']
  }



})

module.exports = mongoose.model("enSala", enSalaSchema);