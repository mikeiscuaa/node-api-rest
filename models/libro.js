const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const librosSchema = Schema({
    isbn: Number,
    titulo: String,
    autor: String,
    anio: Number,
    editorial: String,
});

const Libro = mongoose.model('Libro',librosSchema);
module.exports = Libro;