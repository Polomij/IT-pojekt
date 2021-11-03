const mysql = require('pg');

const DATABASE_HOST='5cdcafbb145aad0e3d777290.database.pl-waw-1.hyperone.cloud';
const DATABASE_USER='5cdcafbb145aad0e3d777290';
const DATABASE_PASSWORD='strong-password';
const DATABASE_NAME='5cdcafbb145aad0e3d777290';

const {Client} = require('pg');

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