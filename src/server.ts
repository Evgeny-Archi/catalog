import express, { Express, Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import getFirms from './handlers/firms';

const app: Express = express();
const hostname = '127.0.0.1';
const port = Number(process.env.PORT) || 3000;

app.get('/api/firms', getFirms);

app.use((req: Request, res: Response) => {
    res.contentType('text/plain');
    res.status(404).send('404 - not found');
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    res.contentType('text/plain');
    res.status(500).send('Error 500');
});

app.listen(port, hostname, () => console.log(`Server listening http://${hostname}:${port}`));
