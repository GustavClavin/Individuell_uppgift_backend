const jwt = require('jsonwebtoken')
require('dotenv').config()
const secretKey = process.env.SECRET

exports.generateToken = (user) => {
    return jwt.sign({_id: user._id}, secretKey, {expiresIn: '1d'})
}


exports.verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        req.userId = jwt.verify(token, secretKey)._id
        next()
    } catch (error) {
        return res.status(401).json({message: 'Access denied!'})
    }
}

exports.verifySpecific = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const {_id} = jwt.decode(token)
        if(req.params.id != _id){
            return res.status(401).json({message: 'Access denied!'})
        }
        next()
    } catch (error) {
        return res.status(401).json({message: 'Access denied!'})
    }
}
