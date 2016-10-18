/**
 * routing trên trang bscenter
 * gồm có dành cho admin và bscenter
 */
var routingGuestBSCenter = require('./bscenter/guest_routing');
var routingAdminBSCenter = require('./bscenter/admin_routing');
var routingAPIBSCenter = require('./bscenter/api_routing');

var session = require('../session/session_manager');

var configPage = require('../config/cf_page');
var utils = require('../utils/utils');

module.exports = function (app, express, io, baseDir) {
    /**
     * lấy path thực tế của 1 đường dẫn
     * @param fullPath
     * @returns {string}
     */
    function getRelPath(fullPath) {
        var arrPath = fullPath.split('/');
        return '/' + arrPath[1];
    }

    /**
     * phân quền và chuyển hướng
     * @param req
     * @param res
     * @param next
     */
    function checkAuthor(req, res, next) {
        var relPath = getRelPath(req.path);
        if (relPath == "/api") {
            /**
             * api: không check quền và cho tiếp tục
             */
            next();
        } else {
            var currentRender = configPage.allPage[relPath];
            if (utils.isEmptyObject(currentRender)) {
                res.redirect('/404.html');
            } else {
                res.currentRender = currentRender;
                var auth = currentRender.auth;
                switch (auth) {
                    case configPage.auth_admin:
                        if (session.isAdmin()) {
                            next();
                        } else {
                            res.redirect('/404.html');
                        }
                        break;
                    case configPage.auth_guest:
                        next();
                        break;
                }
            }
        }
    }

    app.use(checkAuthor);

    routingGuestBSCenter(app, express, io, baseDir);
    routingAdminBSCenter(app, express, io, baseDir);
    routingAPIBSCenter(app, express, io, baseDir);

    /**
     * xử lý 404 page
     */
    app.get('/404.html', function (req, res) {
        res.render(res.currentRender.view, {
            currentRender: res.currentRender
        })
    });

    /**
     * xử lý tất cả các trang ngoại lệ chuyển về 404
     */

    app.use('*', function (req, res) {
        res.redirect('404.html')
    })
};