var mongodb = require('mongoose');
var configDatabase = require('../config/cf_database');
var bscenterDB = mongodb.createConnection(configDatabase);

var db = {
    bscenterDB: bscenterDB
};

module.exports = db;