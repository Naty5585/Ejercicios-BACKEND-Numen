
const express = require('express')
const router = express.router()
const {sumar, dividir, parImpar} = require('../controllers/mathsControllers')

router.get('/suma/:num1/:num2', sumar )
router.get('/division/:dividendo/:divisor', dividir )
router.get('/parimpar', parImpar)

module.exports = router