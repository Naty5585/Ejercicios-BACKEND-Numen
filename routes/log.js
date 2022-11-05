const express = require('express')
const logRouter = express.Router()
const { login } = require('../controllers/logController')

logRouter.post('/', login)

module.exports = logRouter