const usersController = require('../../controllers/users/index');

exports.resolver = {
    Query: {
        users: async () =>{
            const result = await usersController.getAllUsers();
            return result;
        },
        user: async (_, args) => {
            const result = await usersController.getUserById(args.id);
            return result;
        },
    },
    Mutation: {
        createUser: async (_, { input }) => {
            const result = await usersController.createUser(input);
            return result;
        },
        updateUser: async (_, { input }) => {
            const result = await usersController.updateUser(input);
            return result;
        },
        deleteUser: async (_, args) => {
            const result = await usersController.deleteUser(args.id);
            return result;
        },
    },
};