const express = require('express');
const { dirname } = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

// Esto es muy importante para el pase de datos entre los módulos y los componentes

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configuramos las cabeceras y los CORS

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Generamos la conexion a la base de datos de Mongo
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/biblio',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('La base de datos de mongoDB ha sido conectada correctamente'))
    .catch(e => console.log(e));

// Ruta de los libros o ruta de la API
app.use('/libros', require('./router/Libros'));

app.listen(port, () => {
    console.log('El servidor esta activo y escuchando por el puerto: ', port);
});