const booksController = require('../../controllers/books/index');

exports.resolver = {
    Query: {
        books: async () => {
            const books = await booksController.getAllBooks();
            return books;
        }, 
        book: async (_, args) => {
            const book = await booksController.getBookById(args.id);
            return book;
        },
    },
    Mutation: {
        createBook: async (_, { input }) => {
            const book = await booksController.createBook(input);
            return book;
        },
        updateBook: async (_, { input }) => {
            const updatedBook = await booksController.updateBook(input);
            return updatedBook;
        },
        deleteBook: async (_, args) => {
            const result = await booksController.deleteBook(args.id);
            return result;
        },
    },
};