const path = require('path');
const fs = require('fs');

const photoDir = path.resolve(__dirname, '..', '..', 'media');
if (!fs.existsSync(photoDir)) fs.mkdirSync(photoDir);

const loaderStream = (file) => {
    const readStream = fs.createReadStream(file.path);
    const writeStream = fs.createWriteStream(photoDir + '/' + file.originalFilename);
    readStream.pipe(writeStream);
    readStream.on('end', () => {
        fs.unlinkSync(file.path);
    });
};

fileLoader = (files) => {
    const photos = files.file;
    photos.forEach((file) => loaderStream(file));
};

module.exports = fileLoader;
