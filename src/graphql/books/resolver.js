const booksController = require('../../controllers/books/index');

exports.resolver = {
    Query: {
        books: async () => {
            const result = await booksController.getAllBooks();
            return result;
        }, 
        book: async (_, args) => {
            const result = await booksController.getBookById(args.id);
            return result;
        },
    },
    Mutation: {
        createBook: async (_, { input }) => {
            const result = await booksController.createBook(input);
            return result;
        },
        updateBook: async (_, { input }) => {
            const result = await booksController.updateBook(input);
            return result;
        },
        deleteBook: async (_, args) => {
            const result = await booksController.deleteBook(args.id);
            return result;
        },
    },
};