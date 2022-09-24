const { selectAllBooks } = require('./selectAllBooks');
const { selectById } = require('./selectById');
const { insertBook } = require('./insertBook');
const { updateBook } = require('./updateBook');
const { removeBook } = require('./removeBook');

const BookRepository = {
    selectAllBooks,
    selectById,
    insertBook,
    updateBook,
    removeBook,
};

module.exports = BookRepository;