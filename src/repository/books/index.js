const { selectAllBooks } = require('./selectAllBooks');
const { selectById } = require('./selectById');
const { selectByTitle } = require('./selectByTitle');
const { insertBook } = require('./insertBook');
const { updateBook } = require('./updateBook');
const { removeBook } = require('./removeBook');

const BookRepository = {
    selectAllBooks,
    selectById,
    selectByTitle,
    insertBook,
    updateBook,
    removeBook,
};

module.exports = BookRepository;