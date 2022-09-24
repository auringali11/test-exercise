const { selectAllUsers } = require('./selectAllUsers');
const { selectById } = require('./selectById');
const { insertUser } = require('./insertUser');
const { updateUser } = require('./updateUser');
const { removeUser } = require('./removeUser');


const UserRepository = {
    selectAllUsers,
    selectById,
    insertUser,
    updateUser,
    removeUser,
};

module.exports = UserRepository;