const path = require('path');
const fs = require('fs');

const photoDir = path.resolve(__dirname, '..', '..', 'media');

const loaderStream = (file) => {
    if (!fs.existsSync(photoDir)) fs.mkdirSync(photoDir);
    const readStream = fs.createReadStream(file.path);
    const writeStream = fs.createWriteStream(photoDir + '/' + file.originalFilename);
    readStream.pipe(writeStream);
    readStream.on('end', () => {
        fs.unlinkSync(file.path);
    });
};

fileLoader = (files) => {
    const photos = files.file;
    console.log(photos);
    if (photos.length < 1) {
        photos.forEach((file) => loaderStream(file));
    } else {
        throw new Error('No files');
    }
};

module.exports = fileLoader;
