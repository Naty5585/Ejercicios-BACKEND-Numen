const express = require ('express') //guardamos express en una constante
const logger = require('morgan')
const app = express() // asignamos express con una funcion


app.use(logger("dev"))
app.use(express.json())
app.use('/maths')
app.use('/users')
app.use('/list')

module.exports = app 