const db = require('../models/conexion');
const gatoEsquema = {
    nombre: String,
    apellido: String
};

const gato = db.model('Gatos',gatoEsquema);

module.exports = gato;