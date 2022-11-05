
const express = require('express')
const usersRouter = express.Router()
const { user } = require('../controllers/usersController')

usersRouter.get('/user/:nombre/:apellido', user)

module.exports = usersRouter
