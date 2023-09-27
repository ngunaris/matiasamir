/*==================================================
IMPORTAMOS EL MODELO
=================================================*/

const Blog = require ("../modelos/blogHome.modelo");
const fs  = require('fs');
const path =  require('path');



/*==================================================
PETICION GET
=================================================*/

let mostrarBlog = (req, res) => {
    Blog.find().exec()
        .then(docs => {
            const countQuery = Blog.countDocuments();
            countQuery.exec()
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

/*==================================================
PETICION POST
=================================================*/

let crearBlog = (req, res) => {

    let body = req.body;

    if (!req.files || !req.files.archivo) {
        return res.status(400).json({ mensaje: "no se encontro archivo" });
    }

    //Capturamos el archivo

    let archivo = req.files.archivo;
    let nombre = Math.floor(Math.random() * 10000);
    let extension = archivo.name.split('.').pop();
    let nuevaRuta = `./archivos/blog-home/${nombre}.${extension}`;

    archivo.mv(nuevaRuta, err => {

        if (err) {
            return res.status(500).json({ mensaje: 'error al guardar la imagen', error: err })
        }
        //Crear instancia del modelo Slide
        let blog = new Blog({

            imagen: `${nombre}.${extension}`,
            titulo: body.titulo,
            descripcion: body.descripcion
  
        });

        blog.save()
            .then(() => {
                res.status(200).json({ mensaje: 'Blog creado exitosamente' });
            })
            .catch((error) => {
                console.error('error al guardar el blog:', error);
                res.status(500).json({ error: 'ocurrio un error al guardar el blog' });
            })

    });

}

/*==================================================
FUNCION PUT
=================================================*/
let editarBlog = (req, res) => {

    let id = req.params.id;
    let body = req.body;
       /*==================================================
            1-VALIDAMOS QUE EL SLIDE EXISTA
            =================================================*/

    Blog.findById(id)
        .then((data) => {
            if (!data) {
                return res.status(500).json({ mensaje: 'error en el servidor' });
            }

            let rutaImagen = data.imagen;

            /*==================================================
            2- VALIDAMOS QUE HAYA CAMBIO DE IMAGEN
            =================================================*/
            let validarCambioArchivo = (req, rutaImagen) => {
                return new Promise((resolve, reject) => {
                    if (req.files && req.files.archivo) {
                        let archivo = req.files.archivo;

                        if (archivo.mimetype !== 'image/jpeg' && archivo.mimetype !== 'image/png'  && archivo.mimetype !== 'image/mp4') {
                            let respuesta = {
                                res: res,
                                mensaje: "la imagen debe ser formato JPG,PNG o MP4"
                            };
                            reject(respuesta);
                        }

                        let nombre = Math.floor(Math.random() * 10000);
                        let extension = archivo.name.split('.').pop();
                        let nuevaRuta = `./archivos/blog-home/${nombre}.${extension}`;
                        

                        archivo.mv(nuevaRuta, err => {

                            if (err) {
                                let respuesta = {
                                    res: res,
                                    mensaje: 'error al guardar la imagen'
                                }
                                reject(respuesta);
                            }

                            //BORRAMOS LA ANTIGUA IMAGEN

                            if (fs.existsSync(`./archivos/blog-home/${rutaImagen}`)) {
                                fs.unlinkSync(`./archivos/blog-home/${rutaImagen}`);
                            }
                            //DAMOS VALOR A LA NUEVA IMAGEN



                            rutaImagen = `${nombre}.${extension}`;
                            resolve(rutaImagen)
                        })

                    } else {
                        resolve(rutaImagen);

                    }


                })

            }

            /*==================================================
              3-          ACTUALIZAMOS REGISTROS
            =================================================*/

            let cambiarRegistrosBD = (id, body, rutaImagen) => {

                return new Promise((resolve, reject) => {

                    let datosBlog = {

                        imagen: rutaImagen,
    
                    }
                    return Blog.findByIdAndUpdate(id, datosBlog, { new: true, runValidators: true })

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
            /*==================================================
                    SINCRONIZAMOS LAS PROMESAS
            =================================================*/
            validarCambioArchivo(req, rutaImagen)
                .then((rutaImagen) => {

                    body.imagen = rutaImagen;
                    cambiarRegistrosBD(id, body, rutaImagen).then(resolve => {

                        res.status(200).json({ mensaje: "blog ha sido actualizado con exito", data: resolve.data })
                    })
                        .catch((respuesta) => {

                            res.status(400).json({ mensaje: "Error al editar el blog", err: respuesta.error })
                        })
                }).catch(respuesta => {

                    respuesta["res"].status(400).json({ mensaje: respuesta["mensaje"] })

                })

        });
}




/*==================================================
FUNCION DELETE
=================================================*/

let borrarBlog = (req, res)=>{

    let id = req.params.id;

    Blog.findById(id)
    .then((data)=>{
        if(!data){
           return res.status(404).json({mensaje:"Blog no encontrado"});
        }

        let rutaImagen = data.imagen;

        // Eliminar archivo de imagen
        if (fs.existsSync(`./archivos/blog-home/${rutaImagen}`)) {
          fs.unlinkSync(`./archivos/blog-home/${rutaImagen}`);
        }

        Blog.findByIdAndRemove(id)
        .then(()=>{

            return res.status(200).json({ mensaje: 'Blog eliminado correctamente' });
        })
        .catch((error) => {
            return res.status(500).json({ mensaje: 'Error al eliminar el blog', error });
          });
   
    })
      .catch((error) => {
        return res.status(500).json({ mensaje: 'Error al eliminar el blog', error });
      });



}


      /*==================================================
PETICION GET PARA MOSTRAR IMAGEN
=================================================*/

let mostrarArchivo = (req, res) => {

    let imagen = req.params.imagen;
    let rutaImagen = `./archivos/blog-home/${imagen}`;

    fs.exists(rutaImagen, exists=>{

        if(!exists){
            return res.json({

                status:400,
                mensaje: 'la imagen no existe'
            })
        }

        res.sendFile(path.resolve(rutaImagen));
        
    })

    
};

/*==================================================
EXPORTAMOS LAS FUNCIONES DEL CONTROLADOR
=================================================*/
module.exports =  {

    mostrarBlog,
    crearBlog,
    editarBlog,
    borrarBlog,
    mostrarArchivo
}