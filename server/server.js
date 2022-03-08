const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

const options = {
    extensions: ['htm', 'html'],
};
app.use(express.static(__dirname + '/static', options));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/static/404.html');
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, req, res, next) => {
    console.error(err.message);
    res.type(500);
    res.render('404');
});

app.listen(port, () => {
    console.log('Server start at port ' + port);
});
