const UserRepository = require('../../repository/users');

module.exports = {
    deleteUser: async (id) => {
        const user = await UserRepository.selectById(id);
        if(!user) {
            throw new Error('USER_DOES_NOT_EXIST');
        };
        const result = await UserRepository.removeUser(id);
        return result;
    },
};