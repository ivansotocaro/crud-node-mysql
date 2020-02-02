const express = require('express');

const router = express.Router();

//importamos el controlador
const controllerCliente = require('../controller/controllerCliente')

//creamos rutas
router.get('/', controllerCliente.list);
router.post('/add', controllerCliente.save);
router.get('/delete/:id', controllerCliente.delete);
router.get('/update/:id', controllerCliente.edit);
router.post('/update/:id', controllerCliente.update);

//exportamos las rutas
module.exports = router;
