const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config.json');
const app = express();
const user = require('./app/routes/user.route');

/**
 * Express configuration
 */
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

app.use('/user', user);

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