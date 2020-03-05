const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const configRoutes = require('./configs/routes');

const users = require('./routes/api/users');

app.use(express.static('public'));

app.use(configRoutes.users, users);

app.listen(PORT, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log(`Server running on PORT ${PORT}`);
});
