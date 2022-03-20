const { Client } = require('pg');
const { postgress } = require('./credentials');
const { getModels } = require('./db');

const { connectionString } = postgress;
const client = new Client({ connectionString });

const createScript = `CREATE TABLE IF NOT EXISTS models(
    name varchar(200) NOT NULL,
    id varchar(200) NOT NULL UNIQUE
);`;

const getModelsCount = async (client) => {
    const { rows } = await client.query('SELECT COUNT(*) FROM MODELS');
    return Number(rows[0].count);
};

const seedModels = async (client) => {
    const sql = `INSERT INTO models(
        name,
        id
    ) VALUES ($1, $2)`;
    await client.query(sql, ['toyota', '1']);
};

client.connect().then(async () => {
    try {
        console.log('Create DB schema');
        await client.query(createScript);
        const modelsCount = await getModelsCount(client);
        if (modelsCount === 0) {
            console.log('Внесение начальных данных модели');
            await seedModels(client);
        } else {
            const models = await getModels();
            console.log(models);
        }
    } catch (err) {
        console.error('Ошибка: невозможно инициализировать БД');
        console.log(err.message);
    } finally {
        client.end();
    }
});
