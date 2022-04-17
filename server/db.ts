import { Pool } from 'pg';
import { postgress } from './credentials.json';

const { connectionString, connectionConfig } = postgress;

const pool = new Pool(process.env.NODE_ENV === 'development' ? { connectionString } : connectionConfig);

type Data = Record<PropertyKey, string>[];

export const getModels = async (): Promise<Data> => {
    const { rows } = await pool.query('SELECT * FROM MODELS');
    return rows;
};
