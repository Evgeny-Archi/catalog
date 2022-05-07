import express, { Express, Request, Response, NextFunction } from 'express';
import 'dotenv/config';

const app: Express = express();
const hostname = '127.0.0.1';
const port = Number(process.env.PORT) || 3000;

app.get(
    '/api/brands',
    (req: Request, res: Response, next: NextFunction) => {
        const a = ['one', 'two', 'three'];
        res.locals.a = a;
        next();
    },
    (req, res) => {
        console.log(res.locals);
        res.status(200).send(res.locals);
    }
);

app.listen(port, hostname, () => console.log(`Server listening https://${hostname}:${port}`));
