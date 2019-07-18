var db = require('../models/conexion');
var mongoose = require('mongoose');
const gatoEsquema = mongoose.Schema({
    nombre: String,
    apellido: String,
    complexion: String,
    edad: Number,
    animo: String
});

module.exports = db.model('Gatos',gatoEsquema);