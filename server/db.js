const { Pool } = require('pg');
const { postgress } = require('./credentials');

const { connectionString } = postgress;
const pool = new Pool({ connectionString });

module.exports = {
    getModels: async () => {
        const { rows } = await pool.query('SELECT * FROM MODELS');
        return rows;
    },
    addModels: async (name, id) => {
        await pool.query('INSERT INTO models (name, id) VALUES ($1, $2) ON CONFLICT DO NOTHING', [name, id]);
    },
};
