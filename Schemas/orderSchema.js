const mongoose = require('mongoose')
const rowSchema = require('./rowSchema')

const orderSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    rows: [rowSchema]
})


module.exports = mongoose.model('order', orderSchema)