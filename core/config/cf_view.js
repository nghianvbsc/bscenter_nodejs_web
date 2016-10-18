"use strict";

module.exports = function (app, express, baseDir) {
    /**
     * config render
     */
    app.engine(".html", require('ejs').__express);
    app.set("view engine", 'html');

    /**
     * config folder
     */
    app.use("/views/", express.static(baseDir + '/views/'));
    app.use("/templates/", express.static(baseDir + '/templates/'));
    app.use("/files/", express.static(baseDir + '/files/'));

};