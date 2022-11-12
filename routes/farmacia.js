const express = require('express')
const farmaciaRouter = express.Router()
const { crearMedicamento, verMedicamentos, vistaMedicamento, editarMedicamento, eliminarMedicamento } = require('../controllers/farmaciaController')
const { validarId } = require('../middleware/validarId')
const { check } = require('express-validator')

//GET
farmaciaRouter.get('/medicamento', verMedicamentos)
farmaciaRouter.get('/medicamento/ver/:id', validarId, vistaMedicamento)

//POST
farmaciaRouter.post('/crear', [
  check('nombre').not().isEmpty().withMessage('El campo nombre es obligatorio').isLength({min:2, max:17}).withMessage('El campo debe tener mas de 2 letras y menos de 17'),
  check('laboratorio').not().isEmpty().withMessage('El campo laboratorio es obligatorio'),
  check('farmaco').not().isEmpty().withMessage('El campo farmaco es obligatorio'),
  check('presentacion').not().isEmpty().withMessage('El campo presentacion es obligatorio'),
  check('vencimiento').not().isEmpty().withMessage('El campo vencimiento es obligatorio'),
  check('venta').not().isEmpty().withMessage('El campo venta es obligatorio'),
  check('precio').not().isEmpty().withMessage('El campo precio es obligatorio'),
  check('stock').not().isEmpty().withMessage('El campo stock es obligatorio')
], crearMedicamento)

//PUT
farmaciaRouter.put('/editar/:id',validarId, [
  check('nombre').not().isEmpty().withMessage('El campo nombre es obligatorio').isLength({min:2, max:17}).withMessage('El campo debe tener mas de 2 letras y menos de 17'),
  check('laboratorio').not().isEmpty().withMessage('El campo laboratorio es obligatorio'),
  check('farmaco').not().isEmpty().withMessage('El campo farmaco es obligatorio'),
  check('presentacion').not().isEmpty().withMessage('El campo presentacion es obligatorio'),
  check('vencimiento').not().isEmpty().withMessage('El campo vencimiento es obligatorio'),
  check('venta').not().isEmpty().withMessage('El campo venta es obligatorio'),
  check('precio').not().isEmpty().withMessage('El campo precio es obligatorio'),
  check('stock').not().isEmpty().withMessage('El campo stock es obligatorio')
], editarMedicamento)

//DELETE
farmaciaRouter.delete('/eliminar/:id',validarId, eliminarMedicamento)

module.exports = farmaciaRouter