
const mongoose = require("mongoose")

const winitSchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    package:{
        type:Number,
        required:true
    }
})

const winitModel = new mongoose.model('winit',winitSchema)

module.exports = winitModel