const User = require("../../models/User")
const jwt = require("jsonwebtoken")

// create access token
const access = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' })
}

// create refresh token
const refresh = (id) => {
    return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET)
}

// refresh tokens are stored here
let refreshTokens = []

const login = async (req, res) => {
    const accessToken = access(res.user._id)
    const refreshToken = refresh(res.user._id)
    refreshTokens.push(refreshToken)
    res.json({ accessToken: accessToken, refreshToken: refreshToken })
}

const token = (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decodedToken) => {
        if (err) return res.sendStatus(403)
        const accessToken = access(decodedToken.id)
        res.json({ accessToken: accessToken })
    })
}

module.exports = {
    login,
    token
}