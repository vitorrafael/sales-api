const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const Employee = require('../models/Employee');
const Customer = require('../models/Customer');

const connection = new Sequelize(dbconfig);

Employee.init(connection);
Customer.init(connection);

module.exports = connection;
