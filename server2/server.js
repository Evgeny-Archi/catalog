const express = require('express');
const bodyParser = require('body-parser');
const multiparty = require('multiparty');
const handlers = require('./lib/handlers');
const logger = require('./middleware/logger');
// const addRoutes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(logger(app.get('env')));
app.use(express.static(__dirname + '/static'));

// addRoutes(app);

app.get('/api', handlers.home);
app.post('/api/process', handlers.process);
app.post('/api/files', (req, res) => {
    const form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {
        if (err) return res.status(500).send({ message: err.message });
        handlers.files(req, res, fields, files);
    });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((req, res, next) => {
    res.status(404).json({ code: 'Not found' });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, req, res, next) => {
    res.status(500).send('ads');
});

const startServer = (port) => {
    app.listen(port);
};

if (require.main === module) {
    startServer(process.env.PORT || 3000);
} else {
    module.exports = startServer;
}
