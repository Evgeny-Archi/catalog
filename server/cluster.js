const cluster = require('cluster');

const startWorker = () => cluster.fork();

if (cluster.isMaster) {
    require('os').cpus().forEach(startWorker);

    cluster.on('disconnect', (worker) => console.log(`Cluster ${worker.id} is disconnected`));
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Cluster ${worker.id} exit with code ${code} (${signal})`);
        console.log(`Cluster ${cluster.worker.id} launch`);
        require('./server')(port);
    });
} else {
    const port = process.env.PORT || 3000;
    console.log(`Cluster ${cluster.worker.id} launch`);
    require('./server')(port);
}

process.on('uncaughtException', function (err) {
    console.error(new Date().toUTCString() + ' uncaughtException:', err.message);
    console.error(err.stack);
    process.exit(1);
});
