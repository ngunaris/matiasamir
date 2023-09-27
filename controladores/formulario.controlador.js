
const nodemailer = require('nodemailer');
const { response } = require('../rutas/slide.ruta');



const envioCorreo = (req=request, res=response)=>{

    let body = req.body;

    let config = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        post:587,

        auth:{
            user:'ngunaris@gmail.com',
            pass:'cxga cuhc nsqc azvo'
        }
    });

    const opciones = {
        from: 'Programacion',
        subject: body.asunto,
        to: body.email,
        text: body.mensaje
    };

    config.sendMail(opciones, function(error, result){

        if(error) return res.json({ok:false, msg: error})
 
        return res.json({
            ok:true,
            msg: result
        })
    })
}
/*=====================================================
EXPORTAMOS LAS FUNCIONES DEL CONTROLADOR
======================================================*/

module.exports = {
 envioCorreo
};