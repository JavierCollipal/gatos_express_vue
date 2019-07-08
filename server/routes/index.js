var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
   res.json({
    message: 'No se admiten perros!'
});

});

module.exports = router;
