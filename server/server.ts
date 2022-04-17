import http, { Server, IncomingMessage, ServerResponse } from 'http';
import urlHandler from './handlers/url-handler';
import methodHandler from './handlers/method-handler';

const hostname = '127.0.0.1';
const port = 3000;

const server: Server = http.createServer();

server.on('request', (req: IncomingMessage, res: ServerResponse) => {
    const { url } = req;
    switch (url) {
        case urlHandler('/api/brands', req):
            methodHandler(req, res);
            break;
        case urlHandler('/api/brands?model', req):
            methodHandler(req, res);
            break;
        case urlHandler('/api/brands?model&generation', req):
            methodHandler(req, res);
            break;
        default:
            res.statusCode = 400;
            res.end();
    }
});

server.listen(port, hostname, () => console.log(`Server listens http://${hostname}:${port}`));
