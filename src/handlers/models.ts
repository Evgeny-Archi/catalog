import { Request, Response } from 'express';

const dataModels = {
    toyota: [
        {
            name: 'Prius',
            id: 1,
            url: 'prius',
        },
        {
            name: 'Mark II',
            id: 2,
            url: 'mark-ii',
        },
        {
            name: 'Land Cruiser',
            id: 3,
            url: 'land-cruiser',
        },
    ],
    nissan: [
        {
            name: 'Patrol',
            id: 1,
            url: 'patrol',
        },
        {
            name: 'Arya',
            id: 2,
            url: 'arya',
        },
        {
            name: 'Cedric',
            id: 3,
            url: 'cedric',
        },
    ],
    honda: [
        {
            name: 'Civic',
            id: 1,
            url: 'civic',
        },
        {
            name: 'Prelude',
            id: 2,
            url: 'prelude',
        },
        {
            name: 'S2000',
            id: 3,
            url: 's2000',
        },
    ],
};

const getModels = (req: Request, res: Response) => {
    const { model } = req.params;
    const data = {
        models: dataModels[model as keyof typeof dataModels] || [],
    };
    res.type('application/json');
    res.status(200).send(data);
};

export default getModels;
