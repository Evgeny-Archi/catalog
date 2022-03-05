import http, { Server, IncomingMessage, ServerResponse } from 'http';

const port = process.env.PORT;

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.url) {
        console.log(req.url);
        if (req.url === '/test') {
            res.end('Test');
        } else {
            res.end('Hello');
        }
    }
});

server.listen(port, () => {
    console.log(`Server start on port ${port}`);
});
