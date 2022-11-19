const { NODE_ENV } = process.env;
const defaultConfig = require('./default');
const developmentConfig = require('./development');

module.exports = developmentConfig;