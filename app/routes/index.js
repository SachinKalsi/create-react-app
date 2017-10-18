var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res){
    const body = {
        showTitle: true,
        homepage: 'this is custom home page of base project.'
    };
    res.render('home', body);
});

router.use('/admin', function(req, res){
    res.render('index');
});

// router.use('*', function(req, res){
//     res.sendFile(path.resolve(__dirname + '/../../public/404.html'));
// });

module.exports = router;
