var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/send', function(req, res) {
  res.send('hello world');
});

router.post('/send', function (req, res) {
  res.send('POST request to the homepage');
  console.log(req.body);
});

module.exports = router;
