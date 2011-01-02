var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('test/fixtures/keys/agent1-key.pem'),
  cert: fs.readFileSync('test/fixtures/keys/agent1-cert.pem')
};


https.createServer(options, function (req, res) {
  console.log("got request");
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('hello world\n');
}).listen(8000);
