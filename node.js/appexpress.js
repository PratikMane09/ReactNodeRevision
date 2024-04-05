const express=require('express')
var app=express()
app.get('',(req,res)=>{
    res.send(`<h1>This is home Page</h1>
    <p>Welcome to ${req.query.name}</p>
    <a href='/user'>go to user page</a>`)
})
app.get('/about',(req,res)=>{
    res.send(`
    This is about Page
    <input type='text placeholder='Enter Name' value =${req.query.name}>
    <button>Submit</button>`)
})
app.get('/user',(_,res) => {
    res.send(`[
    {
        id:1,
        name:"XXX",
        maill:"pwdlqjed@gmil.com"
    },
    {
        id:2,
        name:"YYY",
        maill:"pwdlqjed@gmil.com"
    }
]
`)
}
)
app.listen(4500)