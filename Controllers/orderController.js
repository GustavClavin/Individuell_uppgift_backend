const router = require('express').Router()
const orderModel = require('../Models/orderModel')
const {verifyToken, verifySpecific} = require('../Authentication/auth')

//CREATE
router.post('/', verifyToken, orderModel.createOrder)

//READ
router.get('/', verifyToken, orderModel.getAll)
router.get('/:id', verifyToken, verifySpecific, orderModel.userOrders)

//UPDATE


//DELETE



module.exports = router