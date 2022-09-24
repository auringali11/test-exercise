const pool = require('../db/pool');

module.exports = {
    insertBook: async (data) => {
        const book = await pool.QueryRow('INSERT INTO books(title, author, user_id)  \
         VALUES ($1, $2, $3) RETURNING *', [data.title, data.author, data.user_id]);
        return book;
    },
};