
require("dotenv").config()
const mongoose =require("mongoose")
const express =require('express')
const app=express()


app.use(express.json())
const router =require("./router/router")

app.use('/api/v1',router)

const url=process.env.DATABASE
const port=process.env.port

mongoose.connect(url).then(()=>{
    console.log("connection to database established")
    app.listen(port,()=>{console.log("my app is connected on port "+port)})
}).catch((error)=>{
    console.log("unable to connect because "+error)
})  