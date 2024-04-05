const querystring=require('querystring')
const os=require('os')
var x=querystring.parse('name=pratik&&email=p@gmail.com')
console.log(x.name,x.email)
console.log(os.platform());
console.log(os.arch());