var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/rest_test');

var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));
// app.use('/api2', require('./routes/api2'));

app.listen(3000);
console.log('API isrunning on prt 3000');