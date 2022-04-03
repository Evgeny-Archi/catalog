const express = require('express');
const vhost = require('vhost');

const app = express();
const api = express.Router();

app.use(vhost('api.*', api));

api.get('*', (req, res) => res.send('Hello from api'));
