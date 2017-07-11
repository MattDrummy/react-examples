'use strict'

var express = require('express');
var sendPi = require('./sendPi.js');
var sendCalculate = require('./sendCalculate.js');
var sendSum = require('./sendSum.js');
var sendVolume = require('./sendVolume.js')
var sendArea = require('./sendArea.js')
var bodyParser = require('body-parser')
var server = express();
var port = process.env.PORT || 8080;
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
server.get('/math/pi', sendPi);
server.get('/math/calculate', sendCalculate);
server.post('/math/sum', sendSum);
server.all('/math/volume/:num1/:num2/:num3', sendVolume);
server.post('/math/area', jsonParser, sendArea)
server.post('/math/area', urlencodedParser, sendArea)
server.listen(port);
