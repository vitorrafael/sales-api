const express = require('express');
const EmployeeController = require('./controllers/EmployeeController');

const router = express.Router();

// Employee related routes
router.get('/employees', EmployeeController.index);
router.get('/employees/:id', EmployeeController.getEmployee);
router.post('/employees', EmployeeController.store);
router.put('/employees/:id', EmployeeController.update);
router.delete('/employees/:id', EmployeeController.delete);

module.exports = router;