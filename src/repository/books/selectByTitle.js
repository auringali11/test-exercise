const pool = require('../db/pool');

module.exports = {
    selectByTitle: async (title) => {
        const book = await pool.QueryRow('SELECT * FROM books WHERE title = $1', [title]);
        return book;
    },
};