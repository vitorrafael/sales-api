const Employee = require('../models/Employee');

module.exports = {
    async store(req, res) {
        const { name, email, monthly_salary } = req.body;

        const employee = await Employee.create({ name, email, monthly_salary });

        return res.json(employee);
    }
}