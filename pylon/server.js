const webSocketServer = require('websocket').server;
const http = require('http');
const fs = require('fs');
const path = require('path');

// create http server
const server = http.createServer((req, res) => {
    // check the url of request
    if (req.url === '/') {
        // serve the index.html
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }
            res.writeHead(200);
            res.end(data);
        });
    } else if (req.url === '/bundle.js') {
        // sere bundle.js
        fs.readFile(path.join(__dirname, 'dist', 'bundle.js'), (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading bundle.js');
            }
            res.writeHead(200);
            res.end(data);
        });
    }
});

server.listen(55455, () => {
    console.log('Server is running on port 55455');
});

// Set up WebSocket server
const wsServer = new webSocketServer({
    httpServer: server
});

wsServer.on('request', function (request) {
    console.log('Establishing a new connection with client');
    var connection = request.accept(null, request.origin);

    setInterval(() => {
        connection.sendUTF(new Date().getTime().toString());
    }, 100);
});
