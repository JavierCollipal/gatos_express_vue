const mongoose = require('conexion');

const gatoEsquema = mongoose.Schema({
    nombre: String,
    apellido: String
});

const gato = mongoose.model('Gatos',gatoEsquema);

module.exports = {
    gato
};