const gato = require('../models/gatos');

exports.crearDB = async (request, response, next) => {

    let prueba = new gato({
        nombre: 'Lanita',
        apellido: 'Aguilar',
        complexion: 'Sobrepeso',
        edad: 5,
        animo: 'jugetona'
    }
    );
    await prueba.save()
        .then(() => {
            response.json(
                {
                    status: 200,
                    mensaje: 'se creo la collection base'
                });
        })
        .catch(error => {
            console.error(error);
            response.json({
                status: 400,
                mensaje: 'no fue posible crear la collection'
            });
        });
}

exports.traerTodos = async (request, response, next) => {

    await gato.find()
        .then(documento => {
            response.json(documento);
        })
        .catch(error => {
            console.error(error);
            response.json({
                status: 400,
                mensaje: 'no existen gatos creados'
            });
        });
}

exports.crearGato = async (request, response, next) => {

    let documento = new gato(request.query);

    await documento.save()
        .then(documento => {
            response.json({
                status: 200,
                mensaje: 'gato creado con exito'
            });
        })
        .catch(error => {
            console.error(error);
            response.json({
                status: 400,
                mensaje: 'no fue posible crear el gato'
            });
        });
}

exports.actualizarGatoPorNombre = async(request, response, next) => {
    let nombreGato  = request.query.nombre;
    await gato.findOne({nombre: nombreGato})
    .then(esquema =>{
    response.status(200).jsonp( esquema );
    })
    .catch(error =>{
        response.status(400).jsonp( error );
    });
}

