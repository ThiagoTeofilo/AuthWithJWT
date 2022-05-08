const express = require("express")
const router = express.Router()

// controller
const controller = require("../controllers/authController")

// middleWare
const findUserMiddleWare = require("../middlewares/findOneUser")

// login route
router.post("/login", findUserMiddleWare.findOneUser, controller.login)

// logout route
router.delete("/logout", controller.logout)

// create new token
router.post("/token", controller.token)


module.exports = router