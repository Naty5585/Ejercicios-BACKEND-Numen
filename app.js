const express = require ('express') //guardamos express en una constante
const app = express() // asignamos express con una funcion
const logger = require("morgan") //middleware de app
const cors = require('cors')

//configuracion
app.use(logger("dev"))
app.use(express.json())
//middleware de app
app.use(cors())

const mathsRouter = require('./routes/maths')
app.use('/maths', mathsRouter)

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

const listRouter = require('./routes/list')
app.use('/list', listRouter)

const logRouter = require('./routes/log')
app.use('/log', logRouter)

const farmaciaRouter = require('./routes/farmacia')
app.use('/farmacia', farmaciaRouter)

const { conect } = require('./db/db')
conect()

module.exports = app 