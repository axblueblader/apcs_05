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

//conect the db

const mongoose=require('mongoose');
//mongoose.connect("mongodb://admin:admin123@ds247430.mlab.com:47430/talechattest")

mongoose.connect("mongodb://localhost:27017/quizzDB")

// __dirname = base directory name
// path.join creates a path from string input
//app.use(express.static(path.join(__dirname, 'public')));

//QUIZZ ROUTE
const quizzRoute=require('./routes/quizzRoute');
app.use('/quizz',quizzRoute);

const searchRoute = require('./routes/searchRoute');
app.use('/api/search',searchRoute);

const user=require('./routes/authenciation');
app.use('/user',user);

const block=require('./routes/BlockRoute');
app.use('/block',block)

app.use('/api/chat', function (req,res,next) {
    res.sendFile(path.join(__dirname, 'public/views','chat.html'));
})

const allowed = [
    '.js',
    '.css',
    '.png',
    '.jpg'
  ];

app.get('*', function (req,res) {
    if (allowed.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(`./dist/${req.url}`));
    }
    else {
        res.sendFile(path.join(__dirname,'/dist/index.html'));
    }
})



// 404 ERROR HANDLER
app.use(function (req, res, next) {
    res.status(404).sendFile(path.join(__dirname, 'public/views','error404.html'));
});




module.exports = app;