const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})

        console.log(`Connected to database: ${connect.connection.host}`)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB