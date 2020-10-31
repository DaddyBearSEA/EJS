'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// app.use(bodyParser());   Deprecated new code below
//https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({
  extended: true
}));
app.use(cors());
app.use(expressLayouts);



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(requiest, response) {
  response.prependListener('index');
});

app.listen(8000, function () {
  console.log('heard on 8000');
});