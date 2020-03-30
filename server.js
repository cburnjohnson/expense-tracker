const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port: ${PORT}`));
