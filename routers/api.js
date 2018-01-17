
var express = require('express');
var router = express.Router();
router.get('/user/register', function(req, res, next) {
    console.log(req.body);
});





module.exports = router;