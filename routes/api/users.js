const express = require('express');
const router = new express.Router();
const usersJSON = require('../../db/users.json');
const {invalidRequest} = require('../../system/response');

router.get('/', (request, response) => response.json(usersJSON));

router.get('/:userId', (request, response) => {
    const {userId} = request.params;
    const updatedArray = usersJSON.filter((e) => e['user_id'] == userId);

    if (updatedArray.length === 0) {
        invalidRequest(response);
    }
    response.json(updatedArray);
});
module.exports = router;
