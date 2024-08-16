//creo las rutas
const express = require('express');
const router = express.Router();
const Productos = require('../controller/indexController')



// Definir rutas
router.get('/productos', Productos.getAll);


module.exports = router;