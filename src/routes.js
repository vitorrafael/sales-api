const express = require('express');
const EmployeeController = require('./controllers/EmployeeController');

const router = express.Router();

router.get('/', (req, res) => {
    return res.json({ hello: "Hello World"} );
})

router.post('/employees', EmployeeController.store);

module.exports = router;