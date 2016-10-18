"use strict";

var moment = require('moment-timezone');
var timeConf = require('../config/cf_time');

function setTimeZone(date) {
    return moment.tz(date, timeConf._default_tme_zone);
}
exports.getCurrentTime = function () {
    return setTimeZone(new Date()).format('Y-MM-DD H:m:sZ');
};

exports.parseTimeFormat1 = function (oldTimeFormat) {
    return setTimeZone(oldTimeFormat).format('Y-MM-DD | H:m');
};

exports.convertDateBirthToDateDb = function (date) {
    return moment.tz(new Date(date), config._default_tme_zone);
};