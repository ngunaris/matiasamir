/*=====================================================
IMPORTAMOS EL MODELO
======================================================*/

const Usuarios = require('../modelos/usuarios.modelo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


/*=====================================================
FUNCION GET
======================================================*/

let mostrarUsuarios = (req, res) => {
    Usuarios.find()
        .exec()
        .then(docs => {
            const countQuery = Usuarios.countDocuments();
            return countQuery.exec()
                .then(count => {
                    res.json({ total: count, docs: docs });
                })
                .catch(err => {
                    res.status(500).json({ error: err.message });
                });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
};

let getUser = (req, res) => {

    const { id } = req.params
    res.json({ id })
}


/*==================================================
PETICION POST
=================================================*/

let crearUsuario = (req, res) => {

    let body = req.body;



    //Crear instancia del modelo Slide
    let usuarios = new Usuarios({

        usuario: body.usuario,
        password: bcrypt.hashSync(body.password, 10),
        email: body.email

    });

    usuarios.save()
        .then((doc) => {
            res.json({ status: 200, mensaje: 'usuario creado exitosamente', doc });
        })
        .catch((error) => {
            res.json({ status: 400, mensaje: error.message, error });
        })



}



/*=====================================================
FUNCION LOGIN
======================================================*/
let loginUsuario = (req, res) => {

    //Obtenemos el cuerpo del formulario
    let body = req.body

    //Recorremos la base de datos en busqueda de coincidencia con el ususario


    Usuarios.findOne({ usuario: body.usuario })
        .then((data) => {
            if (!data) {
                return res.json({ status: 404, mensaje: "El usuario es incorrecto" });
            }
            // Verificar la contraseña utilizando bcrypt.compareSync
            const passwordMatch = bcrypt.compareSync(body.password, data.password);
            if (!passwordMatch) {
                return res.json({ status: 400, mensaje: 'La contraseña es incorrecta' });
            }

            //Generamos el token de autorizacion
            const token = jwt.sign({ data }, process.env.SECRET, { expiresIn: process.env.CADUCIDAD});

    

            res.json({
                status: 200,
                mensaje: "Usuario ingresado correctamente",
                nombre: data.usuario,
                token

            });





        })
        .catch((error) => {
            return res.json({ status: 500, mensaje: 'Error en el servidor, error ', error });
        });




}

/*=====================================================
EXPORTAMOS LAS FUNCIONES DEL CONTROLADOR
======================================================*/

module.exports = {

    mostrarUsuarios,
    crearUsuario,
    loginUsuario,
    getUser
}