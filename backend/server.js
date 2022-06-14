var http = require('http');
var app = require('./config/express');

http.createServer(app).listen(3000, ()=>{
  console.log('Server running at http://localhost:3000/');
})
