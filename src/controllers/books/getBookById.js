const BookRepository = require('../../repository/books');
const UserRepository = require('../../repository/users');

module.exports = {
    getBookById: async (id) => {
        const book = await BookRepository.selectById(id);
        if (!book) {
            throw new Error ('BOOK_DOES_NOT_EXIST');
        };
        const users = await UserRepository.selectAllUsers();
        book.user = users.find(user => book.user_id == user.id);
        return book;
    },
};