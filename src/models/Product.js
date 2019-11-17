const { Model, DataTypes } = require('sequelize');

class Product extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      value: DataTypes.FLOAT
    }, { sequelize: connection });
  }
}

module.exports = Product;