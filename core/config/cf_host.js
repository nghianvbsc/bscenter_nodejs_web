var devMode = require('./cf_mode')._is_dev_mode;

exports.host_product = '192.169.169.113';
exports.port_product = '4000';

exports.host_dev = "localhost";
exports.port_dev = "3000";

exports.host = (devMode) ? this.host_dev : this.host_product;
exports.port = (devMode) ? this.port_dev : this.port_product;