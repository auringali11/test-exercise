const pool = require('../db/pool');

module.exports = {
    insertBook: async (data) => {
        const book = await pool.QueryRow('INSERT INTO books(title, author, user_id, created_at)  \
         VALUES ($1, $2, $3, $4) RETURNING *', [data.title, data.author, data.user_id, data.created_at]);
        return book;
    },
};