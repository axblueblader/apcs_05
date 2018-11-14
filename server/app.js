'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// __dirname = base directory name
// path.join creates a path from string input
app.use(express.static(path.join(__dirname, 'public')));

// REPLACE THIS WITH ROUTERS DEFINITION
// EXAMPLE:
// const aRoute = require('./routes/aRoute');
// app.use('/aRoute',aRoute);
app.use('/api', function (req, res) {
    res.send('API ROUTE');
})

const searchRoute = require('./routes/searchRoute');
app.use('/search',searchRoute);

app.use('/chat', function (req,res,next) {
    res.sendFile(path.join(__dirname, 'public/views','chat.html'));
})

app.use('*', function (req,res,next) {
    res.sendFile(path.join(__dirname, 'public/views','home.html'));
})



// 404 ERROR HANDLER
app.use(function (req, res, next) {
    res.status(404).sendFile(path.join(__dirname, 'public/views','error404.html'));
});




module.exports = app;