const jwt = require("jsonwebtoken")

const verifyUserAuth = (req, res, next) => {
    const token = req.headers["authorization"]

    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
            if (err) {
                res.json({auth: false, message: err})
            } else {
                req.user = decodedToken
                // res.json({auth: true, message: decodedToken})
                next()
            }
        })
    }
    else {
        res.json({auth: false, message: "You don't have a token"})
    }
}

module.exports = {
    verifyUserAuth
}