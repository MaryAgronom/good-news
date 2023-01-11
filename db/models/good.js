'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Good extends Model {
    static associate({User}) {
      this.belongsTo(User, { foreignKey: 'userid' });
    }
  }
  Good.init({
    gword: DataTypes.STRING,
    userid: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Good',
  });
  return Good;
};