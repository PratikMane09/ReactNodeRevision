const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    city:String,
})
module.exports=mongoose.model('user',userSchema)