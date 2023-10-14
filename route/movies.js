var express = require('express');
var router = express.Router();
var pool = require('../query.js');


// ambil data / menampilkan data
router.get('/', function (req, res) {
    pool.query(
        "SELECT * FROM movies "

    )

});

// menambah data baru
router.post('/', function (req, res) {


});

// Edit data
router.put('/', function (req, res) {


});

router.delete('/', function (req, res) {


});

module.exports = router;