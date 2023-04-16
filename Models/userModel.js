const User = require('../Schemas/userSchema')
const bcrypt = require('bcryptjs')
const auth = require('../Authentication/auth')



exports.addUser = async (req, res) => {
    const {email, password} = req.body

    if(!email || !password){
        res.status(400).json({message: 'Enter an email and a password'})
        return
    }
    

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    
    User.create({email, password: hash})
        .then(data => {
            res.status(200).json(auth.generateToken(data))
        })

    
}

exports.loginUser = async (req, res) => {
    const {email, password} = req.body

    if(!email || !password){
        res.status(400).json({message: 'Enter matching email and password'})
        return
    }

    const user = await User.findOne({email: email})
    if(!user){
        return res.status(404).json({message: "User not found"})
    }
    
    const result = await bcrypt.compare(password, user.password)

    if(!result){
        return res.status(401).json({message: "Credentials must match"})
    }

    res.status(200).json(auth.generateToken(user))
}


