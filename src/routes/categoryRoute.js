const { Router } = require('express')
const categoryController = require('../controllers/categoryController')
const catRouter = Router()

catRouter.post('/create', categoryController.create)
catRouter.get('/', categoryController.get)
catRouter.get('/create', categoryController.form)
catRouter.get('/delete/:id', categoryController.delete)
catRouter.get('/edit/:id', categoryController.edit)
catRouter.post('/edit/:id', categoryController.update)

module.exports = catRouter