const express = require('express')
const sinhvienRouter = require('./Routers/sinhvien')
const indexRouter = require('./Routers/index')
const methodOverride = require('method-override')
require('dotenv').config()
const mongoose = require('mongoose')
const app = express()

const connectFunction = async() => {
    try{
        await mongoose.connect(process.env.STR_CONNECT)
        console.log("connect successfully")
    }
    catch(e)
    {
        console.log("connection Failed")
    }
}
connectFunction()
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.set('view engine','ejs')
app.use('/',sinhvienRouter)
app.use('/',indexRouter)
app.listen(process.env.PORT||3000)