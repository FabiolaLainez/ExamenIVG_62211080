
const mongoose = require ('mongoose');

const url = 'mongodb://localhost:27017/Examen1_62211080';

   mongoose.connect(url)
  .then(() => console.log("Conectado a la base de datos"))
  .catch(error => console.log("Error:", error));

  module.exports = db;