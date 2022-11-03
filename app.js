const express = require ('express') //guardamos express en una constante
const logger = require('morgan')
const app = express() // asignamos express con una funcion
const {sumar, dividir, parImpar} = require('../controllers/mathsControllers')
const {user, estateUser} = require('../controllers/usersControllers')
const {shopList} = require('../controllers/listControllers')

app.use(logger("dev"))
app.use(express.json())
app.use('/maths', sumar, dividir, parImpar)
app.use('/users', user, estateUser)
app.use('/list', shopList)

console.log(user)

module.exports = app 