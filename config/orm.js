var connection = require("../config/connection.js");

const orm = {
    getTodos: function(table, cb) {
        const queryString = 'select * from ' + table;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    createTodo: function(table, col, val, cb) {
        const queryString = `
            insert into ${table} (${col}) values (?);
        `
        connection.query(queryString, val, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
}

module.exports = orm;