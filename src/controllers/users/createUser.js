const UserRepository = require('../../repository/users');

module.exports = {
    createUser: async (data) => {
        data.created_at = new Date();
        data.updated_at = data.created_at;
        const user = await UserRepository.insertUser(data);
        return user;
    },
};