var express = require('express');
var bodyParser = require('body-parser');
// morgan
var app = express();

// app.use morgan
// require doten


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var movies = require('./route/movies.js');
var movies = require('./route/users.js');

app.use('/movies', movies);
app.use('/users', users);

app.listen(3000);