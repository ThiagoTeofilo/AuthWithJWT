const express = require("express")
const router = express.Router()

// controller
const controller = require("../controllers/authController")

// middleWare
const findUserMiddleWare = require("../middlewares/findOneUser")
const checkAuthMiddleware = require("../middlewares/verifyJwt")

// signup route
router.post("/signup", controller.signup)

// login route
router.post("/login", findUserMiddleWare.findOneUser, controller.login)

// restrict access
router.get("/restrict", checkAuthMiddleware.verifyUserAuth, controller.restrict)


module.exports = router