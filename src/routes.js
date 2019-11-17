const express = require('express');
const EmployeeController = require('./controllers/EmployeeController');
const CustomerController = require('./controllers/CustomerController');

const router = express.Router();

// Employee related routes
router.get('/employees', EmployeeController.index);
router.get('/employees/:id', EmployeeController.getEmployee);
router.post('/employees', EmployeeController.store);
router.put('/employees/:id', EmployeeController.update);
router.delete('/employees/:id', EmployeeController.delete);

// Customer related routes
router.get('/customers', CustomerController.index);
router.get('/customers/:id', CustomerController.getCustomer);
router.post('/customers', CustomerController.store);
router.delete('/customers/:id', CustomerController.delete);

module.exports = router;