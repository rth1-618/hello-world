//import
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
require('dotenv').config();


mongoose.connect(process.env.MNGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        console.log("Connect to Mongo.")
    }
)

const app = express(); 
// const PORT = process.env.port || 4000
app.use(express.json())

app.use('/api',routes) //express fn

app.get("/",(req,res)=>{
    res.send("Text file sent.")
})

app.listen((process.env.PORT || 4000), ()=>{
    console.log("Server satrted at port ")
})

app.get("/:id",(req,res)=>{
    res.status(201)
    res.send("hdjshd "+ req.params.id)
})
