"use strict";

var promise = require('bluebird');

var usersCollection = require('../collections/users_collections');
var timeUtils = require('../../../utils/time_utils');
var utils = require('../../../utils/utils');
var stringUtils = require('../../../utils/string_utils');
var throwConf = require('../../../config/cf_throw');
var log = require('../../../log/logging');


/**
 * promise function
 * đăng ký user mới
 * @param data
 */
exports.signUp = function (data) {
    return new promise(function (resolve, reject) {
        /**
         * kiểm tra sự tồn tại của username và email.
         */
        checkEmailAndUserName(data.userName, data.email).then(function (isExists) {
            if (isExists) {
                /**
                 * email ỏ username đã tồn tại.
                 */
                return resolve({error: true, messages: [throwConf.message_email_username_is_exists]});
            } else {
                /**
                 * insert tài khoản mới.
                 */
                var newUser = new usersCollection({
                    FirstName: data.firstName,
                    LastName: data.lastName,
                    UserName: data.userName,
                    Email: data.email,
                    Phone: data.phone,
                    Address: data.address,
                    Gender: data.gender, // 0- femail || 1 male
                    Avatar: "",
                    Password: stringUtils.hashString(data.password),
                    Birthday: data.birthday,
                    CreateAt: timeUtils.getCurrentTime(),
                    UpdateAt: timeUtils.getCurrentTime()
                });

                newUser.save(function (error, user) {
                    return resolve({error: false, messages: [throwConf.message_sign_up_success]});
                });
            }
        });
    });
};

/**
 * promise function
 * đăng ký user mới
 * @param email
 * @param userName
 */
var checkEmailAndUserName = function (userName, email) {
    return new promise(function (resolve, reject) {
        usersCollection.findOne({
            $or: [
                {UserName: userName},
                {Email: email}
            ]
        }).exec().then(function (user) {
            console.log(user);
            if (utils.isEmptyObject(user)) {
                return resolve(false);
            } else {
                return resolve(true);
            }
        })
    });
};
exports.checkEmailAndUserName = checkEmailAndUserName;