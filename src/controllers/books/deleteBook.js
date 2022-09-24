const BookRepository = require('../../repository/books');

module.exports = {
    deleteBook: async (id) => {
        const message = await BookRepository.removeBook(id);
        return message
    },
};