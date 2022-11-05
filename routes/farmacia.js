const express = require('express')
const farmaciaRouter = express.Router()
const { crearMedicamento, verMedicamento } = require('../controllers/farmaciaController')

farmaciaRouter.post('/crear', crearMedicamento)
farmaciaRouter.get('/medicamento', verMedicamento)

module.exports = farmaciaRouter