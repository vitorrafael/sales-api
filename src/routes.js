const express = require('express');
const EmployeeController = require('./controllers/EmployeeController');

const router = express.Router();

// Employee related routes
router.get('/employees', EmployeeController.index);
router.post('/employees', EmployeeController.store);

module.exports = router;