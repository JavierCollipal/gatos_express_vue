var express = require('express');
var router = express.Router();
var Gatocontroller = require('../controllers/gato');

router.get('/crearDB',Gatocontroller.crearDB);
router.get('/traerTodos',Gatocontroller.traerTodos);
router.post('/crearGato',Gatocontroller.crearGato);

module.exports = router;