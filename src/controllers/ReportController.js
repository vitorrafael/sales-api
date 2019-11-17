const Sales = require('../models/Sales');
const buildReport = require('../utils').buildReport;

module.exports = {
  async show(req, res) {

    const { emp_id } = req.params;

    if(!(await Sales.findOne({ where: { employee_id: emp_id } }))) {
      return res.status(404).json({ message: "Employee not found in our sales report!" });
    }

    const report_data = await Sales.findAll({
      raw: true,
      attributes: ['quantity'],
      where: { employee_id: emp_id},
      include: [
        { association: 'seller', required: false, attributes: ['name'] },
        { association: 'buyer', required: false, attributes: ['name'] },
        { association: 'item', required: false, attributes: ['name', 'value'] } 
      ]
    });

    const report = buildReport(report_data);

    return res.status(200).json(report);
  },
}