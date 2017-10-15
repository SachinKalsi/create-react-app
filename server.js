'use strict';
require('./config/read_env');
const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

const logger = require('./config/logger');
const routes = require('./app/routes');
const path = require('path');

// const Promise = require('bluebird');
const bodyParser = require('body-parser');


// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set view engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: 'app/views/layouts'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'app/views'));
logger.info(path.join(__dirname, 'app/views'));

// log routes
app.use(function(req, res, next){
    logger.info(`${req.method} ${req.originalUrl}`);
    next();
});
app.use('/', routes);

app.listen(process.env.PORT, () => logger.info(`server is running at the port ${process.env.PORT}`));
