"use strict";

var validator = require('validator');
var userModel = require('../../database/bscenter/models/users_model');
var throwConf = require('../../config/cf_throw');
var log = require('../../log/logging');

module.exports = function (app, express, io, baseDir) {

    /**
     * hàm đăng ký tài khoản bscenter
     */
    app.post('/api/sign-up', function (req, res) {

        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var userName = req.body.userName;
        var password = req.body.password;
        var passwordCf = req.body.passwordCf;
        var email = req.body.email;
        var phone = req.body.phone;
        var address = req.body.address;
        var gender = req.body.gender;
        var birthday = req.body.birthday;

        if (firstName == null || lastName == null || userName == null || password == null || passwordCf == null
            || email == null || phone == null || address == null || gender == null || birthday == null) {
            res.json({error: true, messages: [throwConf._message_request_not_validate]});
        } else if (password != passwordCf) {
            res.json({error: true, messages: [throwConf.message_pass_and_passcf_not_match]});
        } else if (!validator.isEmail(email)) {
            res.json({error: true, messages: [throwConf.message_email_not_validate]});
        } else {
            var data = {
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                password: password,
                email: email,
                phone: phone,
                address: address,
                gender: gender,
                birthday: birthday
            };

            log(__filename).show('xxxxxxxx1');
            userModel.signUp(data).then(function (result) {
                res.json(result);
            });
        }
    })
}