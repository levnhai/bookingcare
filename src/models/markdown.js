'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MarkDown extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MarkDown.init({
    doctorId: DataTypes.INTEGER,
    clinicId: DataTypes.INTEGER,
    speciatlyId: DataTypes.INTEGER,
    contentHTML: DataTypes.TEXT,
    contentMarkDown: DataTypes.TEXT,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'MarkDown',
  });
  return MarkDown;
};