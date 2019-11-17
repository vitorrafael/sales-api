const Employee = require('../models/Employee');

module.exports = {
    async index(req, res) {
        const employees = await Employee.findAll();

        return res.status(200).json(employees);
    },

    async getEmployee(req, res) {
        const { id } = req.params;

        const employee = await Employee.findByPk(id);
        
        if (!employee) {
            return res.sendStatus(404);
        } else {
            return res.status(200).json(employee);
        }
    },

    async store(req, res) {
        const { name, email, monthly_salary } = req.body;

        const employee = await Employee.create({ name, email, monthly_salary });

        return res.status(201).json(employee);
    },

    async update(req, res) {
        const { name, email, monthly_salary } = req.body;
        const { id } = req.params;
        try {
            await Employee.update({ name, email, monthly_salary }, { where: { id: id } })
        }
        catch (err) {
            return res.sendStatus(500);
        }
        return res.sendStatus(204);
    },

    async delete(req, res) {
        const { id } = req.params;

        Employee.destroy({ where: { id: id } });

        return res.sendStatus(204);
    }
}