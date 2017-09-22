'use strict';
require('./config/read_env');
const express = require('express');
const app = express();
const logger = require('./config/logger');
const routes = require('./app/routes');

// const Promise = require('bluebird');
const bodyParser = require('body-parser');

app.use(express.static('./public'));


// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// log routes
app.use(function(req, res, next){
    logger.info(`${req.method} ${req.originalUrl}`);
    next();
});
app.use('/', routes);

app.listen(process.env.PORT, () => logger.info(`server started at the port ${process.env.PORT}`));
