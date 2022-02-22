const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(
    (
        req: { url: string },
        res: { statusCode: number; setHeader: (arg0: string, arg1: string) => void; end: (arg0: string) => void }
    ) => {
        const { name } = require('url').parse(req.url, true).query;

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');

        if (name !== undefined) {
            res.end(`Hello ${name}`);
        } else {
            res.end(`Hello world`);
        }
    }
);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
