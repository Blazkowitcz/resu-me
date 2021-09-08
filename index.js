const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config.json');
const app = express();

app.set('view engine', 'ejs');


/**
 * Routes require
 */
const user = require('./app/routes/user.route');
const study = require('./app/routes/study.route');
const index = require('./app/routes/index.route');

/**
 * Express configuration
 */
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

/**
 * Routes settings
 */
app.use('/user', user);
app.use('/study', study);
app.use('/', index);


/**
 * Express Start
 */
app.listen(config.port, function () { console.log("Server started")});