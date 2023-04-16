const router = require('express').Router()
const productModel = require('../Models/productModel')

//CREATE
router.post('/', productModel.addProduct)

//READ
router.get('/', productModel.getAll)
router.get('/:id', productModel.getProduct)

//UPDATE
router.put('/:id', productModel.updateProduct)

//DELETE
router.delete('/:id', productModel.deleteProduct)


module.exports = router