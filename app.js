const http = require('http');
const express = require('express');
const app = express();
const httpServer = http.createServer(app);
const websocket = require('ws');
const { Client } = require('pg');
const mysql = require('pg');
const DATABASE_HOST='5cdcafbb145aad0e3d777290.database.pl-waw-1.hyperone.cloud';
const DATABASE_USER='5cdcafbb145aad0e3d777290';
const DATABASE_PASSWORD='strong-password';
const DATABASE_NAME='5cdcafbb145aad0e3d777290';

const {Clien} = require('pg');


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
 		const client = new Clien({
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