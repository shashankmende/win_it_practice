
const mongoose = require('mongoose')

const uri = process.env.MONGO_URI

const ConnectDb =async()=>{
    try {
        mongoose.connect(uri)
        console.log("Connection to database is successful")
    } catch (error) {
        console.log("database connection failed",error)
        process.exit(1)
    }
}

module.exports = ConnectDb