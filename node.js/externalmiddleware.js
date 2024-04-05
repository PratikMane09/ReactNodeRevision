

module.exports= reqFilter=(req,res,next)=>{
    if(!req.query.age)
    {
       res.send("Please enter age")
    }
    else if(req.query.age<18)
    {
       res.send("Access denied,you should  minimum 18 years old")
    }
    else{
       next()
    }
}
