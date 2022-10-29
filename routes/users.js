
const express = require('express')
const router = express.router()
const {user, estateUser} = require('../controllers/usersControllers')

router.get('/user/:nombre/:apellido', user)
router.post('/user', estateUser)

module.exports = router