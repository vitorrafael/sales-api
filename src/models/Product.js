const { Model, DataTypes } = require('sequelize');

class Product extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      value: DataTypes.FLOAT
    }, { sequelize: connection });
  }

  static associate(models) {
    this.hasMany(models.Sales, { foreignKey: 'product_id', as: 'item' });
  }
}

module.exports = Product;