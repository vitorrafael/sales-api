const { Model, DataTypes } = require('sequelize');

class Employee extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            monthly_salary: DataTypes.FLOAT,
        }, {
            sequelize: connection
        });
    }

    static associate(models) {
        this.hasMany(models.Sales, { foreignKey: 'customer_id', as: 'buyers' });
    }
}

module.exports = Employee;