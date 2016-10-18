"use strict";

var mailer = require("nodemailer");
var config = require('../../config');
var Log = require('../logging/logging')(__dirname);

module.exports = function sendMail(to, subject, content) {
    var smtpTransport = mailer.createTransport("SMTP", {
        service: "Gmail",
        auth: {
            user: config._email_server,
            pass: config._pass_mai_server,
        }
    });

    var mail = {
        from: config._email_from_name,
        to: to,
        subject: subject,
        html: content
    };

    smtpTransport.sendMail(mail, function (error, response) {
        if (error) {
            Log.show('Error send mail', error);
        } else {
            Log.show('Success send mail', response.message);
        }

        smtpTransport.close();
    });
};