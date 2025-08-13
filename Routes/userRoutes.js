//importing modules
const express = require('express')
const userController = require('../controllers/userController')
const { register, login } = userController
const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//register endpoint
//passing the middleware function to the register
router.post('/register', userAuth.saveUser, register)

//login route
router.post('/login', login )

module.exports = router