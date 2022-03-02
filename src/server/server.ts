import http, { Server, IncomingMessage, ServerResponse } from 'http';
import { URL } from 'url';

interface Params {
    req: IncomingMessage;
    res: ServerResponse;
    method?: string;
}

const requestHandler = ({ req, res, method = 'GET' }: Params, response: string) => {
    if (method === 'POST') {
        let body = '';

        req.on('data', (data) => {
            body += data;
        });

        req.on('end', () => {
            const post = JSON.parse(body);
            console.log(post);

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(response);
        });
    } else {
        req.on('end', () => {
            res.end('Hello from GET request');
        });
    }
};

const port = 3000;

const server: Server = http.createServer();

server.on('request', (req: IncomingMessage, res: ServerResponse) => {
    if (req.url) {
        const url: URL = new URL(req.url, `http://${req.headers.host}`);

        if (url.pathname === '/hello') {
            requestHandler(
                {
                    req,
                    res,
                    method: req.method,
                },
                'Hello from server! /hello'
            );
        } else if (url.pathname === '/test') {
            requestHandler(
                {
                    req,
                    res,
                    method: req.method,
                },
                'Hello from server! /test'
            );
        } else {
            requestHandler(
                {
                    req,
                    res,
                    method: req.method,
                },
                'Hello from server!'
            );
        }
    }
});

server.listen(port, () => {
    console.log('Server start at port:', port);
});
