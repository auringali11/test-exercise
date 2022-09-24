const BookRepository = require('../../repository/books');
const UserRepository = require('../../repository/users');

module.exports = {
    getAllBooks: async () => {
        const books = await BookRepository.selectAllBooks();
        const users = await UserRepository.selectAllUsers();
        return await books.map(book => {
            return {
                id: book.id,
                title: book.title,
                author: book.author,
                created_at: book.created_at,
                user_id: book.user_id,                    
                user: users.find(user => user.id == book.user_id),
            };
        });
    },
};