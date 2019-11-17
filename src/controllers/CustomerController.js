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
}