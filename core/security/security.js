"use strict";

var ddosSecurity = require('./s_ddos');
module.exports = function (app) {
    ddosSecurity(app);
};