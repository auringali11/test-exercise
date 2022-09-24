const pool = require('../db/pool');

module.exports = {
    updateBook: async (data) => {
        const updatedBook = await pool.QueryRow('UPDATE books SET title = $1, \
        author = $2, user_id = $3 WHERE id = $4 RETURNING *', [data.title, data.author, data.user_id, data.id]);
        return updatedBook;
    },
};