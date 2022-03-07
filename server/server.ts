import http, { Server, IncomingMessage, ServerResponse } from 'http';

const port = process.env.PORT || 3000;

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.url) {
        console.log(req.url);
        if (req.url === '/api') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('API test');
            res.end();
        } else {
            res.end('Hello');
        }
    }
});

server.listen(port, () => {
    console.log(`Server start on port ${port}`);
});
