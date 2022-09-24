const pool = require('../db/pool');

module.exports = {
    removeUser: async (id) => {
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
        return 'User deleted';
    },
};