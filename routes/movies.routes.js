var express = require('express');
var router = express.Router();
var pool = require('../query.js');


// ambil data / menampilkan data
router.get('/allmovies', (req, res) => {
    pool.query(
        'SELECT * FROM movies', (error, results) => {
            if (error) {
                throw error;
            }
            res.json(results.rows);
        });
});

// menambah data baru
router.post('/newmovie', (req, res) => {
    const { title, genres, year } = req.body;
    pool.query('INSERT INTO movies (title, genres, year) VALUES ($1, $2, $3)', [title, genres, year], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(201).json({ message: 'data succesfully input' });
    });
});



// Edit data
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { title, genres, year } = req.body;
    pool.query(
        'UPDATE movies SET title = $1, genres = $2, year = $3 WHERE id = $4', [title, genres, year], (error, results) => {
            if (error) {
                throw error
            }
            res.json({ message: 'data succesfully edit'});
        });
});

router.delete('/', function (req, res) {


});

module.exports = router;