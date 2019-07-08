const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const StringConexion = process.env.MONGO_URI;
mongoose.connect(StringConexion, { useNewUrlParser: true });
const db = mongoose.connection;
module.exports = db;