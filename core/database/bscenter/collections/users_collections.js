"use strict";

var mongodbBSCenter = require('../../db_connect').bscenterDB;
var schema = require('mongoose').Schema;

var UserObject = new schema({
    FirstName: String,
    LastName: String,
    UserName: String,
    Email: String,
    Phone: String,
    Address: String,
    Gender: Number, // 0- femail || 1 male
    Avatar: String,
    Password: String,
    Birthday: Date,
    Role: {type: Number, default: 2}, // 1-admin || 2-user || ....
    CreateAt: Date,
    UpdateAt: Date
});

var UsersCollection = mongodbBSCenter.model('users', UserObject);
module.exports = UsersCollection;