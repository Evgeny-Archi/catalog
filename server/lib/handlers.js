const fileLoader = require('./loader');
const { getModels } = require('../db');

exports.home = async (req, res) => {
    const dbResp = await getModels();
    res.json(dbResp);
};

exports.process = (req, res) => {
    console.log(req.body);
    res.send({ code: 'success' });
};

exports.files = (req, res, fields, files) => {
    fileLoader(files);
    res.status(200).json({ message: 'ok' });
};
