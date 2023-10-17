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

// ambil data dengan pagination (limit 10 movies)
router.get('/pagination', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10;

    const offset = (page - 1) * perPage;

    pool.query(
        'SELECT * FROM movies OFFSET $1 LIMIT $2', [offset, perPage], (error, results) => {
            if (error) {
                throw error;
            }
            res.json(results.rows);
        });
});

// ambil data dengan pagination (limit 10 movies)
router.get('/paginate', (req, res) => {
 
    pool.query(
        `SELECT * FROM movies ${ req.query.limit ? 'LIMIT ' + req.query.limit : '' } `, (error, results) => {
            if (error) {
              throw error;
            }
            res.json(results.rows);
          });
});

// menambah data baru
router.post('/newmovie', (req, res) => {
    const { title, genres, year } = req.body;
    pool.query(
        'INSERT INTO movies (title, genres, year) VALUES ($1, $2, $3)', [title, genres, year], (error, results) => {
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
        'UPDATE movies SET title = $1, genres = $2, year = $3 WHERE id = $4', [title, genres, year, id], (error, results) => {
            if (error) {
                throw error
            }
            res.json({ message: 'data succesfully edited'});
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    pool.query(
        'DELETE FROM movies WHERE id = $1' , [id], (error, results) => {
            if (error) {
                throw error;
            }
            res.json({ message: 'data succesfully deleted' });
        });
});

module.exports = router;