require("dotenv").config()

const express = require("express")
const app = express()

// json config
app.use(express.json())

// database
const connectDB = require("./database/connection")
connectDB()

// routes
const routesRouter = require("./routes/routes")
app.use("/api", routesRouter)


const port = process.env.PORT
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})