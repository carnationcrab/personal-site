var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

router.use(bodyParser.json());

module.exports = router;