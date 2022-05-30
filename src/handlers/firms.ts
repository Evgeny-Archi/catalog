import { Request, Response } from 'express';

const data = {
    firms: [
        {
            name: 'Toyota',
            id: 1,
            url: 'toyota',
        },
        {
            name: 'Honda',
            id: 2,
            url: 'honda',
        },
        {
            name: 'Nissan',
            id: 3,
            url: 'nissan',
        },
    ],
};

const getFirms = (req: Request, res: Response) => {
    res.type('application/json');
    res.status(200).send(data);
};

export default getFirms;
