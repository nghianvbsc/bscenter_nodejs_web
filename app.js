"use strict";

var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var configHost = require("./core/config/cf_host");
var logging = require("./core/log/logging");

/**
 * loading security
 */
require("./core/security/security")(app);

/**
 * load config server
 */
require("./core/config/config")(app, express, io, __dirname);

/**
 * load routing
 */
require("./core/routing/routing")(app, express, io, __dirname);


/**
 * start server
 */
http.listen(configHost.port, function (error, result) {
    if (error) {
        logging(__filename).show(error);
    } else {
        logging(__filename).show(result);
    }
});