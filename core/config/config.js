"user strict";

var sessionConf = require('./cf_session');
var socketConf = require('./cf_socket');
var requestConf = require('./cf_request');
var viewConf = require('./cf_view');
/**
 * config tất cả những thứ ban đầu
 * @param app
 * @param express
 * @param io
 */
module.exports = function (app, express, io, baseDir) {
    sessionConf(app);
    viewConf(app, express, baseDir);
    requestConf(app);
};