const fs=require("fs")
const path=require('path')
const data1=require('./data1')
// const data2=require('./data2')
const dirpath=path.join(__dirname,"Files")
console.log(dirpath)
const names=["AAA","BBB","CCC","DDD","EEE"]

for(i=0;i<5;i++){
   
    fs.writeFileSync(dirpath+"/file"+i+".txt",names[i])
    fs.writeFileSync(dirpath+"/file"+i+".txt",JSON.stringify(data1[i]))
 }
 fs.readdir(dirpath,(err,files)=>{
    files.forEach((item)=>{
        console.log(item)
    })
 })

 fs.unlinkSync()