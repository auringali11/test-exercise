const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    user:  process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
});

pool.QueryRow = async (query, args) => {
    const data = await pool.query(query, args);

    return data.rows[0];
};

pool.QueryRows = async (query, args) => {
    const data = await pool.query(query, args);

    return data.rows;
};

module.exports = pool;