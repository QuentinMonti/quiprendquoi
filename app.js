const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index', { title: 'Qui prend quoi ?' });
});

app.post('/party', function(req, res) {
  res.send('Post ok !');
  axios
      .post(`${process.env.API_URL}/party`, req.body)
      .then(({data}) => console.log(data))
      .catch((err) => console.error(err));
});



app.listen(port, () => console.log(`Front app listening on port ${port}!`));
