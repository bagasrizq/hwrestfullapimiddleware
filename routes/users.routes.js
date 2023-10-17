var express = require('express');
var router = express.Router();


var pool = require('../query.js');

router.get('/allusers', (req, res) => {
  pool.query(
      'SELECT * FROM users', (error, results) => {
          if (error) {
              throw error;
          }
          res.json(results.rows);
      });
});

router.get('/pagination', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;

  const offset = (page - 1) * perPage;

  pool.query(
      'SELECT * FROM users OFFSET $1 LIMIT $2', [offset, perPage], (error, results) => {
          if (error) {
              throw error;
          }
          res.json(results.rows);
      });
});

// ambil data dengan pagination (limit 10 movies) => gimana caranya biar bisa dynamic page dan limitnya
router.get('/paginate', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const offset = (page - 1) ;

  pool.query(
      `SELECT * FROM users OFFSET $1 ${ req.query.limit ? 'LIMIT ' + req.query.limit : '' } `, [offset], (error, results) => {
          if (error) {
            throw error;
          }
          res.json(results.rows);
        });
});

router.post('/login', (req, res) => {
    pool.query(
      `SELECT * FROM users WHERE email = $1 AND password = $2`,
      [req.body.email, req.body.password],
      (error, results) => {
        if (error) {
          throw error;
        } else {
          const token = signToken(results.rows[0]);
          res.json({
            token: token,
          });
        }
      }
    );
  });
  



  module.exports = router;