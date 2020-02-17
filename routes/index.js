var express = require('express');
var router = express.Router();

/* GET helo world (HOME) page. */
router.get('/', function(req, res, next) {
    res.render('helloWorld', { title: 'Hello World!' });
});

module.exports = router;
