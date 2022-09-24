const pool = require('../db/pool');

module.exports = {
    selectById: async (id) => {
        const book = await pool.QueryRow('SELECT * FROM books where id = $1', [id]);
        return book;
    },
};