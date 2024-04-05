const express=require('express')
require('./config')
const User=require('./user')
const app=express()

app.use(express.json())

app.post('/create',async(req,resp)=>{

    let data=new User(req.body)
    let result=await data.save()
    resp.send(result)
})
app.listen(4800)

app.get('/list',async(req,resp)=>{
    const result=await User.find()
    console.log(result)
    resp.send(result)
})

app.delete('/delete/:_id',async(req,resp)=>{
    const result=await User.deleteOne(req.params)
    resp.send(result)
}) 

app.put('/update/:_id',async(req,resp)=>{
    const result=await User.updateOne(
        req.params,
        {$set:req.body}
        )
    resp.send(result)
})


app.get('/search/:key',async(req,resp)=>{
    const result=await User.find({
        $or:[
            {name:{$regex:req.params.key}}
        ]
    })
    resp.send(result)

})