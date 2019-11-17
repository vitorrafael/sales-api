const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const Employee = require('../models/Employee');
const Customer = require('../models/Customer');
const Product = require('../models/Product');
const Sales = require('../models/Sales');

const connection = new Sequelize(dbconfig);

Employee.init(connection);
Customer.init(connection);
Product.init(connection);
Sales.init(connection);

Sales.associate(connection.models);
Employee.associate(connection.models);
Product.associate(connection.models);

module.exports = connection;
