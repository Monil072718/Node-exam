const { Router } = require('express')
const userController = require('../controllers/userController')
const userRouter = Router()

userRouter.post('/create', userController.create)
userRouter.post('/login', userController.login)

module.exports = userRouter