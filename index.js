const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(PORT, function() {
    console.log(`Server running on PORT ${PORT}`);
});
