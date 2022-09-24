const UserRepository = require('../../repository/users');

module.exports = {
    deleteUser: async (id) => {
        const message = await UserRepository.removeUser(id);
        return message;
    },
};