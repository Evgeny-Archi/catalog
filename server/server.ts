import http, { Server, IncomingMessage, ServerResponse } from 'http';
import * as handlers from './handlers';

const hostname = '127.0.0.1';
const port = 3000;

const server: Server = http.createServer();

server.on('request', (req: IncomingMessage, res: ServerResponse) => {
    const { method } = req;
    switch (method) {
        case 'GET':
            handlers.get(req, res);
            break;
        default:
            res.statusCode = 400;
            res.end();
    }
});

server.listen(port, hostname, () => console.log(`Server listens http://${hostname}:${port}`));
