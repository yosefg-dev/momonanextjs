'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JobInformation.belongsTo(models.applicaitonDetail)
      JobInformation.belongsTo(models.jobLocation)
    }
  }
  JobInformation.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    salary: DataTypes.STRING,
    postingDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    vacantNumber: DataTypes.INTEGER,
    status: DataTypes.STRING,
    JobCategoryID: DataTypes.STRING,
    CompanyID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JobInformation',
  });
  return JobInformation;
};