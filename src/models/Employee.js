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
}

module.exports = Employee;