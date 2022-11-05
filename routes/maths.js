const express = require('express')
const mathsRouter = express.Router()
const { sumar, dividir, parImpar } = require('../controllers/mathsController')

mathsRouter.get('/suma/:num1/:num2', sumar )
mathsRouter.get('/division/:dividendo/:divisor', dividir )
mathsRouter.get('/parimpar', parImpar)

module.exports = mathsRouter