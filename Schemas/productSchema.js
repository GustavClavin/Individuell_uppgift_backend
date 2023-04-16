const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, default: 'A wonderful product!'},
    imageURL: {type: String, default: 'https://t3.ftcdn.net/jpg/00/57/01/24/360_F_57012433_EIwmdg3XWlexaBDMiENygEJPdcemyxv2.jpg'}
})

module.exports = mongoose.model('Product', productSchema)