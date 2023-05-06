'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.hasMany(models.jobInformation)
    }
  }
  Company.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    contact: DataTypes.STRING,
    email: DataTypes.STRING,
    website: DataTypes.STRING,
    password: DataTypes.STRING,
    userName: DataTypes.STRING,
    accountStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};