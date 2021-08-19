const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config.json');
const app = express();
const InitiateMongoServer = require('./app/modules/database.module');

InitiateMongoServer();

/**
 * Express configuration
 */
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

/**
 * Check if server is started
 */
app.get("/", (req, res) => {
    res.json({ message: "Comic Reader Status : OK" });
});

/**
 * Express Start
 */
app.listen(config.port, function () {});