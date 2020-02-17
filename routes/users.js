var express = require('express');
var router = express.Router();

/* GET users page. */
router.get('/', function (req, res) {
    res.render('users', { title: 'users' });
});

module.exports = router;
