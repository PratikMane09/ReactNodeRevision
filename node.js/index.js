const colors=require("colors")
var http = require('http');
const data=require('./data2')

http.createServer(function (req, res) {

  res.writeHead(200,{'Content-Type':'application/json'})
  res.write("Hello World!");
  res.write(JSON.stringify(data));
  res.end();
}).listen(4100);

// console.log(process.argv)

// const fs=require('fs')
// const input=(process.argv)
// // fs.writeFileSync(input[2],input[3])
// console.log(input)
// // fs.unlinkSync(input[2])
// fs.unlinkSync(hello.txt)
