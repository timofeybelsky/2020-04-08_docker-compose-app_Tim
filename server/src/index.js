require('./models');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from Tim's server!");
});

app.listen(3000, () => console.log('Tim listen on  port 3000!'));