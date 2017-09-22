var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../../public/'));
});

router.use('*', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../../public/404.html'));
});

module.exports = router;
