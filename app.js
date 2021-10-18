const http = require('http');
const express = require('express');
const app = express();
const httpServer = http.createServer(app);
const websocket = require('ws');

const wss = new websocket.Server({
  server: httpServer
});

app.use(express.static(__dirname + '/website'));
httpServer.listen(80, function() {
    console.log("Server listening at port 80!");
});

wss.on('connection', (_ws, _req) => {
  console.log('Socket connected from '+_req.socket.remoteAddress+'.');
});
