const UserRepository = require('../../repository/users');

module.exports = {
    updateUser: async (data) => {
        const user = await UserRepository.selectById(data.id);
        if (!user) {
            throw new Error('USER_DOES_NOT_EXIST');
        };
        data.updated_at = new Date();
        const result = await UserRepository.updateUser(data);
        return result;
    },
};