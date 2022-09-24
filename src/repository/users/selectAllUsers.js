const pool = require('../db/pool');

module.exports = {
    selectAllUsers: async () => {
        const users = await pool.QueryRows('SELECT * FROM users');
        return users;
    },
};