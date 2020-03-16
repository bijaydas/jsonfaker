const express = require('express');
const router = new express.Router();
const todosJSON = require('../../db/todos.json');
router.get('/', (request, response) => {
    /**
     *    If no query param is preset then display all the data
     */
    if (Object.keys(request.query).length === 0) {
        response.status(200).json(todosJSON);
        return;
    }
    if (request.query.user_id && request.query.todo_id) {
        const output = todosJSON.filter((currVal) => {
            return currVal['user_id'] == request.query.user_id &&
            currVal['todo_id'] == request.query.todo_id;
        });
        response.status(200).json(output);
        return;
    }
    if (request.query.user_id) {
        const output = todosJSON.filter((currVal) => {
            return currVal['user_id'] == request.query.user_id;
        });
        response.status(200).json(output);
        return;
    }
    if (request.query.todo_id) {
        const output = todosJSON.filter((currVal) => {
            return currVal['todo_id'] == request.query.todo_id;
        });
        response.status(200).json(output);
        return;
    }
});

module.exports = router;
