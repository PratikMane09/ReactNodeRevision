const mongoose=require('mongoose')
const users=mongoose.connect('mongodb://0.0.0.0:27017/backend')
const userSchema=new mongoose.Schema({
    name:String,
    RollNo:Number,
    age:Number,
    salary:Number
})
async function adddata(){
    const user=mongoose.model('emp',userSchema)
    let result =new user({
        name:'HHH',
    RollNo:5555,
    age:25,
    salary:2000000
    })
    let response=await result.save()
    console.log(response)
}
adddata()
async function getdata()
{
    let person=new mongoose.model('emp',userSchema)
    let result=await person.find()
    console.log(result)
}
getdata()