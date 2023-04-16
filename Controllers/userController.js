const router = require('express').Router()
const userModel = require('../Models/userModel')
const {verifyToken} = require('../Authentication/auth')
//CREATE
router.post('/add', userModel.addUser)
router.post('/login', userModel.loginUser)
//READ


//UPDATE


//DELETE



module.exports = router