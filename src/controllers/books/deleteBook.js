const BookRepository = require('../../repository/books');

module.exports = {
    deleteBook: async (id) => {
        const book = await BookRepository.selectById(id);
        if(!book) {
            throw new Error('BOOK_DOES_NOT_EXIST');
        };
        const result = await BookRepository.removeBook(id);
        return result;
    },
};