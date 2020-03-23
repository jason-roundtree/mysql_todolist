var connection = require("../config/connection.js");

const orm = {
    createTodo: (table, col, val, cb) => {
        const queryString = `
            insert into ${table} 
            (${col}) values (?);
        `;
        // console.log('post queryString: ', queryString)
        connection.query(queryString, val, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    getTodos: (table, cb) => {
        const queryString = 'select * from ' + table;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    getTodo: (table, id, cb) => {
        const queryString = `
            select * from ${table}
            where id=${id}
        `;
    },

    deleteTodo: (table, id, cb) => {
        const queryString = `
            delete from ${table}
            where id=${id};
        `;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateTodo: (table, id, col, val, cb) => {
        let queryString; 
        if (typeof val === 'string') {
            queryString = `
                update ${table} 
                set ${col}="${val}"
                where id=${id};
            `
        } else {
            queryString = `
                update ${table} 
                set ${col}=${val}
                where id=${id};
            `
        }

        console.log('updateTodo queryString: ', queryString)
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    
}

module.exports = orm;