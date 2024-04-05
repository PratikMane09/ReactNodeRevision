const express=require('express')
const {signup, signin}=require('../controller/auth')
const { requireSignin, isAdmin } = require('../middlewares/authMiddleware')
const router=express.Router()

router.post('/signup',signup)
router.post('/signin',signin)

router.get('/user-auth',requireSignin, (req,resp)=>{
    resp.status(200).send({ok:true})
})
router.get('/admin-auth',requireSignin,isAdmin,(req,resp)=>{
    resp.status(200).send({ok:true})
})
module.exports=router