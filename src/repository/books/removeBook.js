const pool = require('../db/pool');

module.exports = {
    removeBook: async (id) => {
        await pool.QueryRow("DELETE FROM books WHERE id = $1", [id]);
        return 'Book Deleted';
    },
};