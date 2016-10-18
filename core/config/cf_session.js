"use strict";

var session_version = "v1.0.0";
var session_key = "bscenter";

var sessionEx = require('express-session');

/**
 * config session theo version vaf key
 * @param app
 */
module.exports = function (app) {
    var session = sessionEx({
        secret: session_key + '_' + session_version,
        resave: true,
        saveUninitialized: true,
        cookie: {secure: true}
    });

    app.use(session);
    return session;
};