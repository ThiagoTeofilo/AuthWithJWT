const express = require("express")
const router = express.Router()

// controller
const controller = require("../controllers/authController")

// middleware
const middleware = require("../middlewares/findOneUser")

// signup route
router.post("/signup", controller.signup)

// login route
router.post("/login",middleware.findOneUser, controller.login)


module.exports = router