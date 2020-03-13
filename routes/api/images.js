const express = require('express');
const router = new express.Router();
const imagesJSON = require('../../db/images.json');
router.get('/', (request, response) => {
    /**
     *    If no query param is preset then display all the data
     */
    if (Object.keys(request.query).length === 0) {
        response.status(200).json(imagesJSON);
        return;
    }
    if (request.query.user_id && request.query.image_id) {
        const output = imagesJSON.filter((currVal) => {
            return currVal['user_id'] == request.query.user_id &&
            currVal['image_id'] == request.query.image_id;
        });
        response.status(200).json(output);
        return;
    }
    if (request.query.image_id) {
        const output = imagesJSON.filter((currVal) => {
            return currVal['image_id'] == request.query.image_id;
        });
        response.status(200).json(output);
        return;
    }
    if (request.query.user_id) {
        const output = imagesJSON.filter((currVal) => {
            return currVal['user_id'] == request.query.user_id;
        });
        response.status(200).json(output);
        return;
    }
});

module.exports = router;
