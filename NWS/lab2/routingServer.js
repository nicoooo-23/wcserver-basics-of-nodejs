// routingServer.js
var http = require('http');

var server = http.createServer(function (req, res) {
    // Evaluate targeting endpoint via req.url parameters
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to the Home Page Portal</h1>');
    } 
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Corporate Team Page</h1>');
    } 
    else {
        // Handle invalid routing endpoints using 404 Error Status Codes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Error 404: Resource path context not found.');
    }
});

server.listen(5000);
console.log('Routing engine processing on port 5000...');