import { IncomingHttpHeaders } from 'http';

const getStub = (): Promise<string[]> => {
    const brands = ['toyota', 'honda', 'nissan'];

    return new Promise((res) => {
        setTimeout(() => {
            res(brands);
        }, 500);
    });
};

export const get = async (url: string, headers: IncomingHttpHeaders): Promise<string[]> => {
    const params = new URL(url, `http://${headers.host}`).searchParams;

    for (const p of params) {
        console.log(p);
    }

    const data = await getStub();
    return data;
};
