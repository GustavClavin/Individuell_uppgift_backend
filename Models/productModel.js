const Product = require('../Schemas/productSchema')

exports.addProduct = (req, res) => {
    const {name, price, description, imageURL} = req.body
    if(!name || !price){
        res.status(400).json({message: 'Every product needs an assigned name and price!'})
        return
    }

    Product.create({name, price, description, imageURL})
        .then(data => {
            res.status(200).json(data)
        })
}

exports.getAll = (req, res) => {
    Product.find()
        .then(data => {
            res.status(200).json(data)
        })  
    }

exports.getProduct = (req, res) => {
    Product.findById(req.params.id)
    .then(data => {
        if(!data){
            res.status(404).json({message: 'Product not found'})
            return
        }
        res.status(200).json(data)
    })
}

exports.updateProduct = (req, res) => {
    const {name, price, description, imageURL} = req.body

    if(!name || !price || !description || !imageURL){
        res.status(400).json({message: 'You need to enter a new name, price, description and imageURL'})
    }
    
    Product.findByIdAndUpdate(req.params.id, {name: name, price: price, description: description, imageURL: imageURL}, {new: true})
        .then(data => {
            if(!data){
                res.status(404).json({message: 'Product not found'})
                return
            }
            res.status(200).json(data)
        })
}

exports.deleteProduct = (req, res) => {
    
    Product.findByIdAndDelete(req.params.id)
    .then(data => {
        if(!data){
            res.status(404).json({message: 'Product not found'})
            return
        }
        res.status(200).json({_id: req.params.id, message: 'DELETED'})
    })
}