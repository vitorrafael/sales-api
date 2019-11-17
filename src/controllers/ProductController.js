const Product = require('../models/Product');

module.exports = {
  async store(req, res) {
    const { name, value } = req.body;

    const product = await Product.create({ name: name, value: value });

    return res.status(201).json(product);
  },

  async index(req, res) {

    const products = await Product.findAll();

    if (!products) {
      return res.sendStatus(204);
    } else {
      return res.status(200).json(products);
    }
  },

  async getProduct(req, res) {

    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.sendStatus(404);
    } else {
      return res.status(200).json(product);
    }
  },

  async delete(req, res) {

    const { id } = req.params;

    Product.destroy({ where: { id: id } });

    return res.sendStatus(204);
  },

  async update(req, res) {

    const { name, value } = req.body;
    const { id } = req.params;

    try {
      await Product.update({ name: name, value: value}, { where: { id: id }});
    } catch(err) {
      return res.sendStatus(500);
    }

    return res.sendStatus(204);
  }
}