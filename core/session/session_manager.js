"use strict";

var utils = require('../utils/utils');
var userSignInSessionKey = 'user-login';

exports.getUser = function (session) {
    if (!utils.isEmptyObject(session[sessionConf.getSessionKey(userSignInSessionKey)])) {
        return session[sessionConf.getSessionKey(userSignInSessionKey)];
    } else {
        return null;
    }
};

exports.getUserId = function (session) {
    if (!utils.isEmptyObject(session[sessionConf.getSessionKey(userSignInSessionKey)])) {
        return session[sessionConf.getSessionKey(userSignInSessionKey)]['_id'];
    }
    return 0;
};

exports.isAdmin = function (session) {

    if (utils.isEmptyObject(session[sessionConf.getSessionKey(userSignInSessionKey)])) {
        return false;
    } else {
        return session[sessionConf.getSessionKey(userSignInSessionKey)].Role == 1;
    }
};

exports.isUser = function (session) {
    if (utils.isEmptyObject(session[sessionConf.getSessionKey(userSignInSessionKey)])) {
        return false;
    } else {
        return session[sessionConf.getSessionKey(userSignInSessionKey)].Role == 2;
    }
};

exports.saveUser = function (session, user) {
    session[sessionConf.getSessionKey(userSignInSessionKey)] = user;
};