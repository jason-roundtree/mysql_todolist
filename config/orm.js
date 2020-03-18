var connection = require("./connection.js");

const orm = {
    getTodos: function(table, cb) {
        const queryString = 'select * from ' + table;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;