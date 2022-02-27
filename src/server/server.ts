import http, { Server } from 'http';

const port = 3000;

const server: Server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request event');

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello');
});

server.on('connection', () => {
    console.log('Connection event');
});

server.listen(port, () => {
    console.log('Listening event', process.env.USER_ID);
});

console.log('Server start at port:', port);
