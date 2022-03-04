import http, { Server, IncomingMessage, ServerResponse } from 'http';
import fs from 'fs';
import path from 'path';
import mime from 'mime';

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.url) {
        const pathname = path.normalize(path.resolve(__dirname + '/..//client/' + req.url));

        fs.stat(pathname, (err, stats) => {
            if (err) {
                res.writeHead(404);
                res.write('Resource missing 404\n');
                res.end();
            } else if (stats.isFile()) {
                const type = mime.lookup(pathname);
                res.setHeader('Content-Type', type);
                // Создание и перенаправление потока для чтения
                const file = fs.createReadStream(pathname);
                file.on('open', () => {
                    // Код 200 - файл найден, ошибок нет
                    res.statusCode = 200;
                    file.pipe(res);
                });
                file.on('error', (err) => {
                    console.log(err);
                    res.statusCode = 403;
                    res.write('file permission');
                    res.end();
                });
            } else {
                res.writeHead(403);
                res.write('Directory access is forbidden');
                res.end();
            }
        });
    }
});

server.listen(3000);

console.log('Server listen port 3000');
