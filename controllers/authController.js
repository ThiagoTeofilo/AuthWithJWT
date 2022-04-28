const User = require("../models/User")

const signup = async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        status: req.body.status
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const login = async (req, res) => {
    // checking if the user is an administrator or not
    if(res.user.status){
        console.log("admin")
    } else {
        console.log("simple")
    }
    res.json(res.user)
}

module.exports = {
    signup,
    login
}