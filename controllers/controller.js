const express = require('express');

const router = express.Router();

const Todo = require('../models/model');

router.get('/', (req, res) => {
    Todo.getTodos(data => {
        const hbsObj = {
            todos: data
        }
        console.log('getTodos hbdObj: ', hbsObj)
        res.render('index', hbsObj);
    });
});

module.exports = router;

