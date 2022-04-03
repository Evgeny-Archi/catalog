const fs = require('fs');
const path = require('path');

module.exports = (env) => {
    return (req, res, next) => {
        switch (env) {
            case 'development':
                console.log(req.url);
                next();
                break;
            case 'production':
                const content = JSON.stringify({
                    time: Date.now(),
                    url: req.url,
                });
                try {
                    const stream = fs.createWriteStream(path.join(__dirname, '../../query.log'), { flags: 'a' });
                    stream.write(content);
                    stream.end();
                } catch (err) {
                    console.error(err);
                }
                next();
                break;
        }
    };
};
