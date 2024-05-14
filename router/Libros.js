const express = require('express');
const router = express.Router();
const Libro = require('../models/libro');

// Obtener todos los documentos directamente de la base de datos de mongo
router.get('/', async (req, res) => {
    try {
        const arrayLibrosDB = await Libro.find();
        console.log(arrayLibrosDB)
        res.json(arrayLibrosDB);
    } catch (error) {
        console.log(error)
    }
})

// Para obtener un solo libro de la base de datos con referencia en el isbn
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const arrayLibrosDB = await Libro.find({ isbn: id });
        console.log(arrayLibrosDB);
        res.json(arrayLibrosDB);
    } catch (error) {
        console.log(error);
    }
});

// Para insertar un documento en la base de datos de Mongo
router.post('/', async (req, res) => {
    const body = req.body;
    try {
        await Libro.create(body);
        res.json({ estado: 'Libro insertado correctamente en la base de datos'});
    } catch (error) {
        console.log(error);
    }
});




module.exports = router;