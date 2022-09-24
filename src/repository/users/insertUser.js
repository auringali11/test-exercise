const pool = require('../db/pool');

module.exports = {
    insertUser: async (data) => {
        const user = await pool.QueryRow('INSERT INTO users(first_name, last_name, age, created_at, updated_at) \
         VALUES ($1, $2, $3, $4, $5) RETURNING *', [data.first_name, data.last_name, data.age, data.created_at, data.updated_at]);
        return user;
    },
};