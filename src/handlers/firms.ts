import { Request, Response } from 'express';

const firms = ['Toyota', 'Honda', 'Nissan'];

const getFirms = (req: Request, res: Response) => {
    res.type('application/json');
    res.status(200).send(firms);
};

export default getFirms;
