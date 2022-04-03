const handlers = require('./lib/handlers');

module.exports = (app) => {
    app.get('/api', handlers.home);
    app.post('/api/process', handlers.process);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    app.use((req, res, next) => {
        res.status(404).json({ code: 'Not found' });
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    app.use((err, req, res, next) => {
        res.status(500).send('ads');
    });
};
