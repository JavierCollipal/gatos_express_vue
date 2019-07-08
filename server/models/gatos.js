const mongoose = require('mongoose');
const gatoEsquema = mongoose.Schema({
    nombre: String,
    apellido: String
});

module.exports = {
    gatoEsquema
};