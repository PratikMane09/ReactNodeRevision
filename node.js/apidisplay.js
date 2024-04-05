const express=require('express')
const getdata=require('mongodb')
const app=express()

app.use(express.json())
app.get('/',async (req,resp)=>{
    let data=await getdata()
    let result =await data.find().toArray()
    console.log(result)
    resp.send(result)
})

app.post('/',async (req,resp)=>{
    let data=await getdata()
    let result=await data.insertOne(req.body)
    console.log(result)
    resp.send(result)
})
app.listen(4310)