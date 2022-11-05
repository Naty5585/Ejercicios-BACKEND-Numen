const express = require('express')
const listRouter = express.Router()
const { shopList } = require('../controllers/listController')

listRouter.get('/shop', shopList)

module.exports = listRouter