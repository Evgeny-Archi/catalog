import { IncomingMessage, ServerResponse } from 'http';
import fs from 'fs';
const { Pool } = require('pg');
import { postgress } from '../server2/credentials.json';

const { connectionString } = postgress;
const pool = new Pool({ connectionString });

type Data = Record<PropertyKey, string>[];

const getModels = async (): Promise<Data> => {
    const { rows } = await pool.query('SELECT * FROM MODELS');
    return rows;
};

export const get = async (req: IncomingMessage, res: ServerResponse) => {
    const { url } = req;
    if (url === '/') {
        const staticFile = `frontend/build/index.html`;
        try {
            res.setHeader('Content-Type', 'text/html');
            const file = fs.createReadStream(staticFile);
            file.on('open', () => {
                res.statusCode = 200;
                file.pipe(res);
            });
        } catch (e) {
            console.log(e);
        }
    } else if (url === '/api') {
        res.on('error', (err) => console.error(err));
        const data = await getModels();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    } else {
        res.statusCode = 404;
        res.end();
    }
};
