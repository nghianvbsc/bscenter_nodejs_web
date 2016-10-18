var logingMode = require("../config/cf_mode")._is_logging;

module.exports = function (file) {
    var arrFile = file.split('/');
    var filename = arrFile[arrFile.length - 1];

    module.show = function (content) {
        console.log('______FILE: ' + filename + '___________');
        console.log(content);
    };
    return module;
};