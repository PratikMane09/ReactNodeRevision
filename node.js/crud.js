const fs=require("fs")
const path=require('path')
const dirpath=path.join(__dirname,"Files")
const filepath=`${dirpath}/Content.txt`
fs.writeFileSync(filepath,"We are performing crud operation")
fs.readFile(filepath,'utf-8',(err,contt)=>{
    console.log(contt)
})
fs.appendFile(filepath,"Adding new data",(err)=>{
    if(!err)
    {
        console.log("File is updated")
    }
})
fs.rename(filepath,`${dirpath}/crud.txt`,(err)=>{
    if(!err)
    {
        console.log("File is rename")
    }
})
fs.unlinkSync(filepath,`${dirpath}/crud.txt`,(err)=>{
    if(!err)
    {
        console.log("File is rename")
    }
})