'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobCategroy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JobCategroy.belongsTo(models.applicaitonDetail)
    }
  }
  JobCategroy.init({
    name: DataTypes.STRING,
    EmployeeID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JobCategroy',
  });
  return JobCategroy;
};