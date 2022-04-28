const User = require("../models/User")

const findOneUser = async (req, res, next) => {
    let user
    try {
        user = await User.findOne({
            username: req.body.username,
            password: req.body.password
        })
        if (user == null) {
            return res.status(404).json({ message: "user not found" })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
    res.user = user
    next()
}

module.exports = {
    findOneUser
}