const http = require('http');
const express = require('express');
const app = express();
const httpServer = http.createServer(app);
const websocket = require('ws');
const mysql = require('pg');
const DATABASE_HOST='';
const DATABASE_USER='';
const DATABASE_PASSWORD='';
const DATABASE_NAME='';

const {Client} = require('pg');


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


const main = async () => {
 		const client = new Client({
        user: DATABASE_USER,
        password: DATABASE_PASSWORD,
        database: DATABASE_NAME,
        host: DATABASE_HOST,
    });
    await client.connect();
    try {
        console.log(await client.query('SELECT 1'));
    } finally {
        await client.end();
    }
};

main().catch(console.error);