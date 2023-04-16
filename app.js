const express = require('express')
const app = express()


//MIDDLEWARE

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//CONTROLLERS
app.use('/api/products', require('./Controllers/productController'))
app.use('/api/users', require('./Controllers/userController'))
app.use('/api/orders', require('./Controllers/orderController.js'))



module.exports = app



