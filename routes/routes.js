const express = require("express")
const router = express.Router()

// controller
const controller = require("../controllers/mainController")

// middleWare
const checkAuthMiddleware = require("../middlewares/verifyJwt")

// signup route
router.post("/signup", controller.signup)

// restrict access
router.get("/restrict", checkAuthMiddleware.verifyUserAuth, controller.restrict)


module.exports = router