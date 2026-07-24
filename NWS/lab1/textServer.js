// textServer.js
var http = require('http');

var server = http.createServer(function (req, res) {
    // Configure header declarations specifying plain text payloads
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Emit string payload data stream and terminate the open session
    res.end('Welcome to the Node.js Core Web Server Engine!');
});

server.listen(5000);
console.log('Server listening on port 5000...');