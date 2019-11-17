const express = require('express');
const EmployeeController = require('./controllers/EmployeeController');
const CustomerController = require('./controllers/CustomerController');
const ProductController = require('./controllers/ProductController');

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

// Product related routes
router.get('/products',ProductController.index);
router.get('/products/:id', ProductController.getProduct);
router.post('/products', ProductController.store);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.delete);

module.exports = router;