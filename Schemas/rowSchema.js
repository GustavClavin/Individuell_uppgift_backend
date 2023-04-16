const mongoose = require('mongoose')


const rowSchema = mongoose.Schema({
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    quantity: {type: Number, default: 1}
})



module.exports = rowSchema