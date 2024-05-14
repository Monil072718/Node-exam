const categoryModel = require("../model/categoryModel")
const productModel = require("../model/productModel")

const productController = {
    create: async (req, res) => {
        try {
            const product = await productModel.create(req.body)
            res.redirect('/product')
            // res.send(product)
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            const product = await productModel.find({}).populate('categoryID')
            res.render('Pages/productsList', { products: product })
        } catch (error) {
            console.log(error)
        }
    },
    form: async(req, res) => {
        try {
            const categoryData = await categoryModel.find({})
            res.render('Pages/addproduct', { categories: categoryData })
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
        const { id } = req.params
        try {
            const product = await productModel.findByIdAndDelete(id)
            res.redirect('/product')
        } catch (error) {
            console.log(error)
        }
    },
    edit: async (req, res) => {
        const { id } = req.params
        try {
            const product = await productModel.findById(id)
            const categoryData = await categoryModel.find({})
            // console.log(product)
            res.render('Pages/editproduct', { product: product, categories: categoryData })
        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        const { name, url } = req.body
        try {
            const product = await productModel.findByIdAndUpdate(id, { name: name , url : url}, { new: true })
            res.redirect('/product')
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = productController