const pool = require('../db/pool');

module.exports = {
    selectAllBooks: async () => {
        const books = await pool.QueryRows('SELECT * FROM books');
        return books;
    }, 
};