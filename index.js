var express = require('express');
var bodyParser = require('body-parser');
// morgan
var app = express();

// app.use morgan
// require doten


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var movies = require('./routes/movies.routes.js');
var users = require('./routes/users.routes.js');

app.use('/movies', movies);
app.use('/users', users);

app.listen(3000, () => {
    console.log('server berjalan di port 3000');
});
