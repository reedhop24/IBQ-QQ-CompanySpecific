const express = require('express');
const app = express();
const post = require('./routes/postSpreadsheet');
const port = 4000;

app.use('/spreadsheet', post);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})
