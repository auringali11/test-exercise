const BookRepository = require('../../repository/books');

module.exports = {
    createBook: async (data) => {
        const book = await BookRepository.selectByTitle(data.title);
        if(book){
            throw new Error('BOOK_ALREADY_EXISTS');
        };
        data.created_at = new Date();
        const createdBook = await BookRepository.insertBook(data);
        return createdBook;
    },
};