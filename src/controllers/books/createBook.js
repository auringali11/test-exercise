const BookRepository = require('../../repository/books');
const UserRepository = require('../../repository/users');

module.exports = {
    createBook: async (data) => {
        const user = await UserRepository.selectById(data.user_id);
        if(!user) {
            throw new Error('USER_DOES_NOT_EXIST');
        };
        const createdBook = await BookRepository.insertBook(data);
        return createdBook;
    },
};