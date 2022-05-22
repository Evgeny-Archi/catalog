import express, { Express, Request, Response } from 'express';
import 'dotenv/config';

const app: Express = express();
const hostname = '127.0.0.1';
const port = Number(process.env.PORT) || 3000;

app.get('/api', (req: Request, res: Response) => {
    console.log(req.url);
    res.status(200).send('asd');
});

app.listen(port, hostname, () => console.log(`Server listening http://${hostname}:${port}`));
