const pool = require('../db/pool');

module.exports = {
    selectById: async (id) => {
        const user = pool.QueryRow('SELECT * FROM users where id = $1', [id]);
        return user;
    },
};