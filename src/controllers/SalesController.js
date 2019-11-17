const Sales = require('../models/Sales');
const Customer = require('../models/Customer');

module.exports = {
  async index(req, res) {

    const sales = await Sales.findAll();

    return res.status(200).json(sales);
  },

  async store(req, res) {
    const { emp_id, customer_id, product_id } = req.params;
    const { quantity } = req.body;

    const customer = Customer.findByPk(customer_id);
    
    if(!customer) {
      return res.status(404).json({ message: 'Customer not found in our database '});
    } else {
      const sale = await Sales.create({
        employee_id: emp_id,
        customer_id,
        product_id,
        quantity
      });

      return res.status(200).json(sale);
    }
  },
}