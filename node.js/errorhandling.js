const express=require('express')
const app=express()

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
       next(error)
    }
}
app.use(reqFilter)

const errorhandle=(err,req,resp,next)=>{
    const error=new Error()
    if(err)
    {
        resp.status(500).json({
            error:{
                 message:"something went wrong"
            }
            
        })
    }
    
}
app.use(errorhandle)
app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1>')
    res.send(error)
})

app.get('about',(req,res)=>{
    res.send('<h1>About page</h1>')
})

app.get('contact',(req,res) =>{
    res.send('<h1>contact page</h1>')
})
app.listen(4500)