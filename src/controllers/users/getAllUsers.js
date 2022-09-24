const BookRepository = require('../../repository/books');
const UserRepository = require('../../repository/users');

module.exports = {
    getAllUsers: async () => {
        const users = await UserRepository.selectAllUsers();
        const books = await BookRepository.selectAllBooks();
        return users.map(user => {
            return {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                age: user.age,
                created_at: user.created_at,
                updated_at: user.updated_at,
                books: books.filter(book => book.user_id == user.id),
            };
        });
    },
};