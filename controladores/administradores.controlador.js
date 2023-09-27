/*=====================================================
IMPORTAMOS EL MODELO
======================================================*/

const Administradores = require('../modelos/administradores.modelo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


/*=====================================================
FUNCION GET
======================================================*/

let mostrarAdministradores = (req, res) => {
    Administradores.find()
        .exec()
        .then(docs => {
            const countQuery = Administradores.countDocuments();
            return countQuery.exec()
                .then(count => {
                    res.json({ total: count, docs: docs });
                })
                .catch(err => {
                    res.json({status:500,  error: err.message });
                });
        })
        .catch(err => {
            res.json({status: 500, error: err.message });
        });
};


/*==================================================
PETICION POST
=================================================*/

let crearAdministrador = (req, res) => {

    let body = req.body;

    //Crear instancia del modelo Slide
    let administradores = new Administradores({

        usuario: body.usuario,
        password: bcrypt.hashSync(body.password, 10)

    });

    administradores.save()
        .then((doc) => {
            res.json({status:200, mensaje: 'administrador creado exitosamente', doc });
        })
        .catch((error) => {
            console.error('error al guardar el administrador:', error);
            res.json({status:500, error: 'ocurrio un error al guardar el administrador' });
        })



}


/*==================================================
FUNCION PUT
=================================================*/
let editarAdministrador = (req, res) => {

    let id = req.params.id;
    let body = req.body;

    /*==================================================
         1- VALIDAMOS QUE EL ADMINISTRADOR EXISTA
          =================================================*/

    Administradores.findById(id)
        .then((data) => {
            if (!data) {
                return res.json({status:500, mensaje: 'el administrador no existe en la base de datos' });
            }
            let pass = data.password;


            /*==================================================
        2- VALIDAMOS QUE HAYA CAMBIO DE CONTRASEñA
        =================================================*/

            let validarCambioPassword = (body, pass) => {

                return new Promise((resolve, reject) => {

                    if (body.password == undefined) {

                        resolve(pass);
                    } else {

                        pass = bcrypt.hashSync(body.password, 10)
                        resolve(pass);
                    }

                })

            }

            /*==================================================
              3-ACTUALIZAMOS REGISTROS
            =================================================*/

            let cambiarRegistrosBD = (id, body, pass) => {

                return new Promise((resolve, reject) => {

                    let datosAdministrador = {

                        usuario: body.usuario,
                        password: pass
                    }
                    return Administradores.findByIdAndUpdate(id, datosAdministrador, { new: true, runValidators: true })

                        .then((data) => {
                            let respuesta = { res: res, data: data };
                            resolve(respuesta);
                        })
                        .catch((error) => {
                            let respuesta = { res: res, error: error };
                            reject(respuesta)
                        });

                });

            }

            /*=====================================================
        SINCRONIZAMOS LAS PROMESAS
        ======================================================*/
            validarCambioPassword(body, pass)
                .then((pass) => {

                    body.password = pass;
                    cambiarRegistrosBD(id, body, pass)
                        .then(respuesta => {

                            res.json({ status:200, mensaje: "El administrador ha sido actualizado con exito", data: respuesta.data })
                        })
                        .catch((respuesta) => {

                            res.json({status:400, mensaje: "Error al editar el administrador", err: respuesta.error })
                        })
                }).catch(respuesta => {

                    respuesta["res"].status(400).json({ mensaje: respuesta.mensaje })

                })

        })



}

/*=====================================================
FUNCION DELETE
======================================================*/

let borrarAdministrador = (req, res) => {

    let id = req.params.id;

    /*==================================================
            1- VALIDAMOS QUE EL ADMINISTRADOR EXISTA
             =================================================*/


    Administradores.findById(id)
        .then((data) => {
            if (!data) {
                return res.json({ status:400, mensaje: "Administrador no encontrado" });
            }


            Administradores.findByIdAndRemove(id)
                .then(() => {

                    return res.json({ status:200, mensaje: 'Administrador eliminado correctamente' });
                })
                .catch((error) => {
                    return res.json({ status:500, mensaje: 'Error al eliminar el administrador', error });
                });

        })
        .catch((error) => {
            return res.json({status:500,  mensaje: 'Error al eliminar el administrador', error });
        });

}

/*=====================================================
FUNCION LOGIN
======================================================*/
let login = (req, res) => {

    //Obtenemos el cuerpo del formulario
    let body = req.body
    
    //Recorremos la base de datos en busqueda de coincidencia con el ususario


    Administradores.findOne({ usuario: body.usuario })
        .then((data) => {
            if (!data) {
                return res.status(404).json({ mensaje: "El usuario es incorrecto" });
            }
            // Verificar la contraseña utilizando bcrypt.compareSync
            const passwordMatch = bcrypt.compareSync(body.password, data.password);
            if (!passwordMatch) {
                return res.status(400).json({ mensaje: 'La contraseña es incorrecta' });
            }

            //Generamos el token de autorizacion
           jwt.sign({data}, process.env.SECRET, process.env.CADUCIDAD, (err, token)=>{

            res.json({ status:200, token });
           });

           
        })
        .catch((error) => {
            return res.status(500).json({ mensaje: 'Error en el servidor, error ', error });
        });




}

/*=====================================================
EXPORTAMOS LAS FUNCIONES DEL CONTROLADOR
======================================================*/

module.exports = {

    mostrarAdministradores,
    crearAdministrador,
    editarAdministrador,
    borrarAdministrador,
    login
}