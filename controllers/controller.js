const express = require('express');

const router = express.Router();

const Todo = require('../models/model.js');

router.get('/', (req, res) => {
    Todo.getTodos(data => {
        const hbsObj = {
            todos: data
        }
        // console.log('getTodos hbdObj: ', hbsObj)
        res.render('index', hbsObj);
    });
});

router.post('/todos', (req, res) => {
    Todo.createTodo(
        'description',
        req.body.description, 
        result => res.json(result)
    );
});

router.put('/todo', (req, res) => {
    console.log('update todo req.body: ', req.body)
    Todo.updateTodo(
        req.body.id,
        req.body.column,
        req.body.value,
        result => res.json(result)
    )
});

router.delete('/todos', (req, res) => {
    // console.log('req.body: ', )
    Todo.deleteTodo(
        req.body.id,
        result => res.json(result)
    );
});

module.exports = router;

