const pool = require('../db/pool');

module.exports = {
    updateUser: async (data) => {
        const updatedUser = await pool.QueryRow('UPDATE users SET first_name = $1,  \
        last_name = $2, age = $3, updated_at = $4 WHERE id = $5 RETURNING *',
        [data.first_name, data.last_name, data.age, data.updated_at, data.id]);
        return updatedUser;
    },
};