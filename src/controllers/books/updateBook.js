const BookRepository = require('../../repository/books');

module.exports = {
    updateBook: async (data) => {
        const book = await BookRepository.selectById(data.id);
        if (!book) {
            throw new Error ("BOOK_DOES_NOT_EXIST");
        };
        const updatedBook = await BookRepository.updateBook(data);
        return updatedBook;
    },
};