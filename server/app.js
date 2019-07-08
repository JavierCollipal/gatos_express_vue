//requires
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var gatosRouter = require('./routes/gato');
var jsonParser = bodyParser.json();

var app = express();


//configurando express
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//definiendo rutas
app.get('/', indexRouter);
app.get('/traerTodos',gatosRouter);
app.get('/crearDB',gatosRouter);
app.post('/crearGato',gatosRouter);

module.exports = app;
