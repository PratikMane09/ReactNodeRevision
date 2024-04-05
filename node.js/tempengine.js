const express=require('express')
const ejs=require('ejs') ///install npm install ejs (embeded js)
const app=express()
app.set('view engine','ejs')
app.get('/user',(_, res)=>{
    const emp={
        id:1,
        name:"AAA",
        phone:[11111,22222,33333]
    }
    res.render('user',{emp})
})

app.get('/profile',(_,res)=>
    res.render('profile')
)
app.get('/login',(_,res)=>
    res.render('login')
)

app.listen(4101)