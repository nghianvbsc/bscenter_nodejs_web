"use strict";

var crypto = require('crypto');

exports.hashString = function (value) {
    return crypto.createHash('md5').update(value).digest("hex");
};

exports.randomString = function (count) {
    return crypto.randomBytes(64).toString('hex');
};