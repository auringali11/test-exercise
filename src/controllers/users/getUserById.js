const UserRepository = require('../../repository/users');
const booksController = require('../../controllers/books/index');

module.exports = {
    getUserById: async (id) => {
        const user = await UserRepository.selectById(id);
        if (!user) {
            throw new Error('USER_DOES_NOT_EXIST');
        };
        const books = await booksController.getAllBooks();
        user.books = books.filter(book => book.user_id == id);

        return user;
    },
};