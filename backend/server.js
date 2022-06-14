var http = require('http');

http.createServer((req, res) => {
  var indice = req.url.indexOf('=');
  var param = req.url.substring(indice + 1);
  res.end(param);
}
).listen(3000, ()=>{
  console.log('Server running at http://localhost:3000/');
})
