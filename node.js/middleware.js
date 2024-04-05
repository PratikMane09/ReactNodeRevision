//http://localhost:4120/?age=23 we have to neter age to start page

//Application level type it all 
//Router level


const express=require('express')
const app=express()
const reqFilter=require('./externalmiddleware')
// const reqFilter=(req,res,next)=>{
//     if(!req.query.age)
//     {
//        res.send("Please enter age")
//     }
//     else if(req.query.age<18)
//     {
//        res.send("Access denied,you should  minimum 18 years old")
//     }
//     else{
//        next()
//     }
// }
// app.use(reqFilter)
app.get('',(req,res)=>{
    res.send('<h1>Home page</h1>')
})

app.get('about',reqFilter,(req,res)=>{
    res.send('<h1>About page</h1>')
})

app.get('contact',(req,res) =>{
    res.send('<h1>contact page</h1>')
})

app.listen(4120)
