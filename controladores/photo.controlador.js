/*=====================================================
IMPORTAMOS EL MODELO
======================================================*/

const Photos = require('../modelos/photo.modelo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const verPhoto = async (req, res)=>{

    const photos = await Photos.find();
    res.json(photos)
}

const createPhoto = async (req, res)=>{

const {name, imagen} = req.body;
const photo = new Photos({
    name,
    imagen
});
await photo.save();
res.status(201).json(photo);


}

const editarPhoto = async (req, res)=>{
    const id = req.params.id;
    const {name} = req.body;
    const photo = await Photos.findById(id);
    if(!photo){
        res.status(404).json({error: 'Photo not found'});
        return
    }

    photo.name = name;
    await photo.save();
    res.json(photo);
}

const borrarPhoto = async (req, res)=>{

    const id = req.params.id;
    const photo = await Photos.findByIdAndDelete(id);
    if (!photo){
        res.status(404).json({error: 'Photo not found'});
        return
    }
    res.json(photo)
}


module.exports = {

    createPhoto,
    verPhoto,
    editarPhoto,
    borrarPhoto
}