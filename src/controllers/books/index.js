const { getAllBooks } = require('./getAllBooks');
const { getBookById } = require('./getBookById');
const { createBook } = require('./createBook');
const { updateBook } = require('./updateBook');
const { deleteBook } = require('./deleteBook');

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
};