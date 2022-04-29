const User = require("../models/User")
const jwt = require("jsonwebtoken")

// create access token
const accessToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET)
}

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
    const token = accessToken(res.user._id)
    res.json({ accessToken: token })
}

const restrict = async (req, res) => {
    const user = await User.findById(req.user.id)
    res.json({ auth: true, message: "Success", user: user })
}

module.exports = {
    signup,
    login,
    restrict
}