const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Success');
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log("connected to port",port);
})