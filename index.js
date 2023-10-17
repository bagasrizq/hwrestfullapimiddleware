var express = require('express');
var bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./utils/swagger'); // Impor swagger.js
// morgan
var jwt = require('jsonwebtoken');
var app = express();

// app.use morgan
// require doten


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var movies = require('./routes/movies.routes.js');
var users = require('./routes/users.routes.js');



app.use('/movies', movies);
app.use('/users', users);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

// app.get('/', (req, res) => {
//     const token = jwt.sign(
//       {
//         userID: 23,
//         role: 'admin',
//       },
//       'koderahasia',
//       { expiresIn: '1h' }
//     );
//     res.json({
//       token: token,
//     });
//   });


app.listen(3000, () => {
    console.log('server berjalan di port 3000');
});
