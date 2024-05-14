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
module.exports=router;