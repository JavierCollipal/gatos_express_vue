const gato = require('./models/gatos');

exports.crearDB = async (request, response, next) => {

    let prueba = new gato({ nombre: 'lanita', apellido: 'Aguilar' });
    await prueba.save()
        .then(() => {
            response.json(
                {
                    status: 200,
                    mensaje: 'se crearon todos los gatos de la casa'
                });
        })
        .catch(error => {
            console.error(error);
            response.json({
                status: 400,
                mensaje: 'no fue posible crear el collection'
            });
        });
}


exports.traerTodos = async (request, response, next) => {

    await gato.find()
        .then(documento => {
            response.jsonp(documento);
        })
        .catch(error => {
            console.error(error);
            response.json({
                status: 400,
                mensaje: 'no existen gatos creados'
            });
        });
}
exports.crearGatito  = async(request, response, next) => {

        let gato = new gato(request.query);
        await gato.save().then( gato => {
            response.jsonp(gato);
        }).catch( error => {
            console.error(error);
            response.json({
                status: 400,
                mensaje: 'no fue posible crear el gato'
            });
        });
    }
