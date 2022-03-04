import http, { RequestOptions, ClientRequest } from 'http';

const postData = JSON.stringify({
    msg: 'hello',
});

const options: RequestOptions = {
    hostname: 'localhost',
    port: 3000,
    method: 'POST',
    path: '/src/client/index.html',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length,
    },
};

const req: ClientRequest = http.request(options, (res) => {
    console.log('Status: ', res.statusCode);
    console.log('Headers: ', JSON.stringify(res.headers));
    res.setEncoding('utf-8');

    res.on('data', (chunk) => {
        process.stdout.write(`${chunk}\n`);
    });

    res.on('end', () => {
        console.log('No more data');
    });
});

req.on('error', (e) => {
    console.log('Error: ', e);
});

req.write(postData);
req.end();
