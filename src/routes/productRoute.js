const { Router } = require('express')
const productController = require('../controllers/productController')
const proRouter = Router()

proRouter.post('/create', productController.create)
proRouter.get('/', productController.get)
proRouter.get('/create', productController.form)
proRouter.get('/delete/:id', productController.delete)
proRouter.get('/edit/:id', productController.edit)
proRouter.post('/edit/:id', productController.update)

module.exports = proRouter