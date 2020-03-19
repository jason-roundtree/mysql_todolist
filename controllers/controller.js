const express = require('express');

const router = express.Router();

const Todo = require('../models/model.js');

router.get('/', (req, res) => {
    Todo.getTodos(data => {
        const hbsObj = {
            todos: data
        }
        console.log('getTodos hbdObj: ', hbsObj)
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

module.exports = router;

