var orm = require("../config/orm.js");

const Todo = {
    getTodos: (cb) => {
        orm.getTodos('todos', (res) =>  {
            cb(res);
        });
    },

    getTodo: (cb) => {
        orm.getTodo('todos', (res) => {
            cb(res);
        })
    },

    createTodo: (col, val, cb) => {
        orm.createTodo('todos', col, val, (res) => {
            cb(res);
        })
    },

    updateTodo: (cb) => {
        orm.updateTodo('todos', (res) => {
            cb(res);
        })
    },

    deleteTodo: (cb) => {
        orm.deleteTodo('todos', (res) => {
            cb(res);
        })
    },

    // deleteTodos: () => {
    //     orm.deleteTodos('todo_list', (res) => {
    //         cb(res);
    //     })
    // }
}

module.exports = Todo;