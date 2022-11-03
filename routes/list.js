const express = require('express')
const router = express.router()
const {shopList} = require('../controllers/listController')

router.get('/shop', shopList)

module.exports = router