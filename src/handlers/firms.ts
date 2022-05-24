import { Request, Response } from 'express';

const getFirms = (req: Request, res: Response) => {
    const firms = ['Toyota', 'Honda', 'Nissan'];
    res.type('application/json');
    res.status(200).send(firms);
};

export default getFirms;
