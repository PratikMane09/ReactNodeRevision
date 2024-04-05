const jwt=require('jsonwebtoken')
const User=require('../models/auth')
exports.requireSignin=async (req,resp,next)=>{
    
    try{
        const decode=jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
        req.user=decode
        next()
    }catch(error){
    console.log(error)
    }
}

// admin access
exports.isAdmin=async (req,resp,next)=>{
    try{
        const user=await User.findById(req.user._id)
        if(user.role!=="admin")
        {
            return resp.status(401).send({
                success:false,
                message:"Unauthorized Access"
            })
        }
        else{
            next()
        }

        next()
    }catch(error){
    console.log(error)
    resp.status(401).send({
        success:false,
        message:"Error in Admin middleware",
        error
    })
    }
}