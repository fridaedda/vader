// copy this into your app.js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res, next) {
    res.render('index', { title: 'Hello World!' });
});

module.exports = app;

