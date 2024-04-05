
//const {query}=require('express') 
const  url=require('url')
const address="https://r.search.yahoo.com/_ylt=AwrOovWGMT9lifMRLVJXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1699849862/RO=10/RU=https%3a%2f%2fwww.google.com%2f/RK=2/RS=nZxUmssZ3mk6pCUYzEnvafJ9Xf8-/?name=pratik"
var x=url.parse(address,true)
console.log(x.host)
console.log(x.pathname)
console.log(x.search)
var z=x.query
console.log(z.name)