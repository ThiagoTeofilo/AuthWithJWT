require("dotenv").config()

const express = require("express")
const app = express()

// json config
app.use(express.json())

// database
const connectDB = require("../database/connection")
connectDB()

// routes
const authRouter = require("./routes/auth")
app.use("/api/auth", authRouter)


const port = process.env.AUTH_PORT
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})