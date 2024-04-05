const fpath=require('path')
const express=require('express')
const dirpath=fpath.join(__dirname,"HTML")
 const app=express()
 //app.use(express.static(dirpath))
 app.get('',(_,res)=>{
    res.sendFile(`${dirpath}/index.html`)
 })
 app.get('/contact',(_,res)=>{
    res.sendFile(`${dirpath}/contact.html`)
 })
 app.get('*',(_,res)=>{
    res.sendFile(`${dirpath}/notfound.html`)
 })


 app.listen(4520)