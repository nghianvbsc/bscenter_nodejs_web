"use strict";
var bodyParser = require('body-parser');

module.exports = function (app) {
    app.use(bodyParser.urlencoded({
        extends: true
    }));
};