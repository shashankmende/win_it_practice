require('dotenv').config()
const express = require("express")
const ConnectDb = require("./utils/db")
const app = express()
const cors = require('cors')
const router = require('./router/winit_router')
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT
app.use('/winit_practice/',router)
ConnectDb().then(()=>{
    app.listen(PORT,()=>console.log(`server is running at http://localhost:${PORT}`))

})


