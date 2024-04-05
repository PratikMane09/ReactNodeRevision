const User=require('../models/auth')
const JWT=require('jsonwebtoken')
const { hashPassword, comparePassword } = require('../helpers/authHelper')
exports.signup=async (req,resp)=>{
    try{
        const {firstName,lastName,password,email,phone,address}=req.body
        if(!firstName)
        {
            return resp.send({error:"First Name is required"})
        }
        if(!lastName)
        {
            return resp.send({error:"Last Name is required"})
        }
        if(!email)
        {
            return resp.send({error:"Email is required"})
        }
        if(!password)
        {
            return resp.send({error:"Password is required"})
        }
        if(!phone)
        {
            return resp.send({error:"Phone Number is required"})
        }
        if(!address)
        {
            return resp.send({error:"Address is required"})
        }
        //Checking existing user
        const existinguser=await User.findOne({email})
        if(existinguser)
        {
            return resp.status(200).send({
                success:true,
                message:"Already registered please login"
            })
        }
        // signup user
        const hashedPassword=await hashPassword(password)
        const user=await new User({firstName,lastName,email,phone,address,password:hashedPassword}).save()
        resp.status(200).send({
            success:true,
            message:"user registerred successfully",
            user
        })
    }catch(error){
        console.log(error)
        resp.status(500).send({
            success:false,
            message:"Error in Signup",
            error
        })
    }
}
exports.signin=async (req,resp)=>{
    try{
        const {email,password}=req.body
        if(!email || !password)
        {
            return resp.status(404).send({
                success:false,
                message:"Invalid email or password"
            })
        }
        // check user
        const user=await User.findOne({email})
        if(!user)
        {
            return resp.status(404).send({
                success:false,
                message:"Email is not registerred"
            })
        }
        const match=await comparePassword(password,user.password)
        
        if(!match)
        {
            return resp.status(200).send({
                success:false,
                message:"Invalid password"
            })
        }
        // token creation
        const token=JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        resp.status(200).send({
            success:true,
            message:"Signin successful",
            user:{
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                phone:user.phone,
                address:user.address
            },
            token
        })
    }catch(error)
    {
        console.log(error)
        resp.status(500).send({
            success:false,
            message:"Error in signin",
            error
        })
    }
       
}