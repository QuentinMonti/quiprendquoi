const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;

app.get('/', function(req, res) {
  res.send('test nodemon !');
});

app.listen(port, () => console.log(`Front app listening on port ${port}!`));
