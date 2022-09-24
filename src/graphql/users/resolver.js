const usersController = require('../../controllers/users/index');

exports.resolver = {
    Query: {
        users: async () =>{
            const users = await usersController.getAllUsers();
            return users;
        },
        user: async (_, args) => {
            const user = await usersController.getUserById(args.id);
            return user;
        },
    },
    Mutation: {
        createUser: async (_, { input }) => {
            const createdUser = await usersController.createUser(input);
            return createdUser;
        },
        updateUser: async (_, { input }) => {
            const updatedUser = await usersController.updateUser(input);
            return updatedUser;
        },
        deleteUser: async (_, args) => {
            const result = await usersController.deleteUser(args.id);
            return result;
        },
    },
};