const db = require('../models/conexion');
const gatoEsquema = {
    nombre: String,
    apellido: String
};

module.exports = db.model('Gatos',gatoEsquema);