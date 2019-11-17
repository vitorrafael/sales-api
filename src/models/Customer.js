const { Model, DataTypes } = require('sequelize');


class Customer extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    }, { sequelize: connection });
  }
}

module.exports = Customer;