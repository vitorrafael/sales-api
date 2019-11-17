const { Model, DataTypes } = require('sequelize');

class Sales extends Model {
  static init(connection) {
    super.init({
      quantity: DataTypes.INTEGER,
    }, { sequelize: connection });
  }

  static associate(models) {
    this.belongsTo(models.Employee, { foreignKey: 'employee_id', as: 'seller' });
    this.belongsTo(models.Customer, { foreignKey: 'customer_id', as: 'buyer' });
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'item' });
  }
}

module.exports = Sales;