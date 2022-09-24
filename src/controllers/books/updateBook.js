const BookRepository = require('../../repository/books');
const UserRepository = require('../../repository/users');

module.exports = {
    updateBook: async (data) => {
        const book = await BookRepository.selectById(data.id);
        if (!book) {
            throw new Error ('BOOK_DOES_NOT_EXIST');
        };
        const user = await UserRepository.selectById(data.user_id);
        if(!user) {
            throw new Error('USER_DOES_NOT_EXIST');
        };
        const updatedBook = await BookRepository.updateBook(data);
        return updatedBook;
    },
};