var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { title: 'Nithin Reddy Kumbham' });
});

module.exports = router;