var express = require('express');
var app = express();

// express config

app.use(express.static('../src'));

module.exports = app;
