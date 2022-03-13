const getTitle = require('./titles');
const fileLoader = require('./loader');

exports.home = (req, res) => {
    res.json({ code: getTitle() });
};

exports.process = (req, res) => {
    console.log(req.body);
    res.send({ code: 'success' });
};

exports.files = (req, res, fields, files) => {
    fileLoader(files);
    res.status(200).json({ message: 'ok' });
};
