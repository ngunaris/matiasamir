const http = require('http');
const puerto = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { error } = require('console');



/*
res.write("hola mundo");
res.end();
*/
app.get('/', function(req, res){



    Slide.find().exec()
    .then(docs=>{

        res.json(docs)

    })
    .catch(err=>{
res.status(500).json({error: err.message});

    })

});





mongoose.connect('mongodb://localhost:27017/apirest')

let Schema = mongoose.Schema;
let slideSchema = new Schema({

    imagen:{

        type: String,
        required: [ true, "la imagen es obligatoria"]
    },
    titulo:{

        type: String,
        required: [ false]
    },
    descripcion:{

        type: String,
        required: [  false]
    }
})

const Slide = mongoose.model("slides", slideSchema);


app.listen(puerto, ()=>{
 
    console.log("habilitado el puerto 4000");

});

