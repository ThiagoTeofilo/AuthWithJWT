const User = require("../models/User")
const jwt = require("jsonwebtoken")

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

const restrict = async (req, res) => {
    const user = await User.findById(req.user.id)
    res.json({ auth: true, message: "Success", user: user })
}

module.exports = {
    signup,
    restrict
}