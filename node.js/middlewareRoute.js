//http://localhost:4120/?age=23 we have to neter age to start page

//routelication level type it all 
//Router level


const express=require('express')
const route =express.Router()
const app=express()
//const reqFilter=require('./externalmiddleware')
const reqFilter=(req,res,next)=>{
    if(!req.query.age)
    {
       res.send("Please enter age")
    }
    else if(req.query.age<18)
    {
       res.send("Access denied,you should  minimum 18 years old")
    }
    else{
       next()
    }
}
route.use(reqFilter)
route.get('',(req,res)=>{
    res.send('<h1>Home page</h1>')
})

route.get('about',reqFilter,(req,res)=>{
    res.send('<h1>About page</h1>')
})

route.get('contact',(req,res) =>{
    res.send('<h1>contact page</h1>')
})
app.use('/',route)
app.listen(4100)
