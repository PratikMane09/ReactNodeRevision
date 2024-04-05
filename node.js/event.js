const express=require('express')
const { EventEmitter } = require('nodemailer/lib/xoauth2')
var app=express()
const event=new EventEmitter
var c=0
event.on('counter',()=>{
    c++
    console.log("using Event Emitter");
    console.log(c)
})
app.get('/',(req,res)=>{
    res.send("Hello!!!,Welcome to  home page")
})
app.get('/about',(req,res)=>{
    res.send("Hello!!!,Welcome to  about page")
    event.emit('counter')
})
app.get('/contact',(req,res)=>{
    res.send("Hello!!!,Welcome to  contact page")
})
app.listen(4500)