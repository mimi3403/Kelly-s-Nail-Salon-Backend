var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res,) {
  res.status(200).json([
    { firstName: 'Mingyu', lastName: 'Hong', phoneNumber: '123-345-567' },
    { firstName: 'Harper', lastName: 'Liu', phoneNumber: '123-345-567' },
    { firstName: 'Jay', lastName: 'Liu', phoneNumber: '123-345-567' },
  ]);
});

module.exports = router;
