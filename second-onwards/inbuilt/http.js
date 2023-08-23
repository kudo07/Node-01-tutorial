let http = require("http");
//req=> what we send to server params, query params , body
// res=>what server will give us
var server = http.createServer(function (req, res) {
  res.write("<h1> Create server with Node deko</h1>");
  res.end();
});
server.listen(6969);
