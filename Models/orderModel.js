const Product = require('../Schemas/productSchema')
const User = require('../Schemas/userSchema')
const Order = require('../Schemas/orderSchema')

exports.createOrder = async (req, res) => {

    const {userId, rows} = req.body

    if(!userId || ! rows){
        res.status(400).json({message: 'An order needs a userId and at least one order row'})
        return
    }

    const order = await Order.create({userId, rows})
    if(!order){
        return res.status(500).json({message: 'Could not create order'})
    }

    res.status(201).json(order)
}

exports.getAll = (req, res) => {
    Order.find()
        .then(data => {
            res.status(200).json(data)
        })
}

exports.userOrders = (req, res) => {
    Order.find({userId: req.params.id})
        .then(data => {
            res.status(200).json(data)
        })
}