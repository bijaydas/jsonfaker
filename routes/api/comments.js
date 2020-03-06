const express = require('express');
const router = new express.Router();
const commentsJSON = require('../../db/comments.json');
router.get('/', (request, response) => {
    /**
     *    If no query param is preset then display all the data
     */
    if (Object.keys(request.query).length === 0) {
        response.status(200).json(commentsJSON);
        return;
    }
    if (request.query.user_id && request.query.comment_id) {
        const output = commentsJSON.filter((currVal) => {
            return currVal['user_id'] == request.query.user_id &&
            currVal['comment_id'] == request.query.comment_id;
        });
        response.status(200).json(output);
        return;
    }
    if (request.query.user_id) {
        const output = commentsJSON.filter((currVal) => {
            return currVal['user_id'] == request.query.user_id;
        });
        response.status(200).json(output);
        return;
    }
    if (request.query.comment_id) {
        const output = commentsJSON.filter((currVal) => {
            return currVal['comment_id'] == request.query.comment_id;
        });
        response.status(200).json(output);
        return;
    }
});

module.exports = router;
