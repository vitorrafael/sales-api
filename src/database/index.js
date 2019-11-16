const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const Employee = require('../models/Employee');

const connection = new Sequelize(dbconfig);

Employee.init(connection);

module.exports = connection;
