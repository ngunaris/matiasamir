
const jwt = require('jsonwebtoken');

/*=========================================
VERIFICAMOS EL TOKEN
==========================================*/

let verificarToken = (req, res, next)=>{

    let token = req.get('Authorization');

    jwt.verify(token, process.env.SECRET, (err, decoded)=>{

        if(err){

            return res.json({status:401, err, mensaje:"Token invalido"})
        }

        req.usuario = decoded.usuario;

        next();
    })

}

module.exports = {
    verificarToken
}