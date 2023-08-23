let http = require("http");
let fs = require("fs");
let port = 9090;
let server = http.createServer(function (req, res) {
  fs.readFile("alllone.txt", "utf-8", function (err, data) {
    if (err) throw err;
    res.write(data);

    // reading the file and output
    res.end();
  });
});
server.listen(port);
