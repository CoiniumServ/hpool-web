'use strict';

var express = require('express');
var events = require('events');
var winston = require('winston');
var path = require('path');
var routes = require('./routes/index');

var webServer = module.exports = function (config) {

    var _this = this;

    winston.log('info', 'test');
}
