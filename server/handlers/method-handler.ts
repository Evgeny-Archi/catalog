import { IncomingMessage, ServerResponse } from 'http';
import { get } from '../controllers/get';

const methodHandler = async (req: IncomingMessage, res: ServerResponse) => {
    const { method, url, headers } = req;
    if (!url) return;

    switch (method) {
        case 'GET':
            const data = await get(url, headers);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
    }
};

export default methodHandler;
