const Customer = require('../models/Customer');

module.exports = {
  async index(req, res) {

    const customers = await Customer.findAll();
    if (!customers) {
      return res.sendStatus(204);
    } else {
      return res.status(200).json(customers);
    }
  },

  async getCustomer(req, res) {

    const { id } = req.params;

    const customer = Customer.findByPk(id);
    if(!customer) {
      return res.sendStatus(204);
    } else {
      return res.status(200).json(customer);
    }
  },

  async store(req, res) {
    
    const { name, email } = req.body;

    const customer = Customer.create({ name, email});

    return res.status(201).json(customer);
  },
}