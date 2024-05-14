const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    url : {
        type : String
    },
    categoryID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "category"
    }
}, { timestamps: true })

module.exports = mongoose.model('product', productSchema)