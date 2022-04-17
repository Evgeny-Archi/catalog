import { IncomingMessage, ServerResponse } from 'http';
import fs from 'fs';
import path from 'path';
import { getModels } from './db';

const staticPath = path.resolve(__dirname, '../frontend/build');

export const get = async (req: IncomingMessage, res: ServerResponse) => {
    const { url, headers } = req;
    console.log(url);
    if (url) {
        const query = new URL(url, `http://${headers.host}`);
        console.log(query);
    }
    if (url === '/') {
        console.log(req.url);
        const staticFile = `${staticPath}/index.html`;
        res.setHeader('Content-Type', 'text/html');
        const file = fs.createReadStream(staticFile);
        file.on('open', () => {
            res.statusCode = 200;
            file.pipe(res);
        });
        file.on('error', (err) => {
            const stream = fs.createReadStream(__dirname + '/500.html');
            stream.on('open', () => {
                res.setHeader('Content-Type', 'text/html');
                res.statusCode = 500;
                stream.pipe(res);
                console.error(err.message);
            });
            stream.on('error', (err) => {
                res.setHeader('Content-Type', 'text/plain');
                res.statusCode = 503;
                res.end('Internal server error');
                console.log('asdasdasd', err.message);
            });
        });
    } else if (url === '/models') {
        console.log(req.url);
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
