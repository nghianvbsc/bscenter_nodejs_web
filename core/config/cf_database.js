var devMode = require('./cf_mode')._is_dev_mode;

/**
 * config link mongodb product.
 * @type {string}
 */
exports.db_product = "mongodb://192.169.169.113:27017/bscenter";
/**
 * config link mongodb development.
 * @type {string}
 */
exports.db_dev = "mongodb://localhost:27017/bscenter";

var db = (devMode) ? this.db_dev : this.db_product;

module.exports = db;
