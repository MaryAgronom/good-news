'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bad extends Model {
    static associate({User}) {
      this.belongsTo(User, { foreignKey: 'userid' });
    }
  }
  Bad.init({
    word: DataTypes.STRING,
    userid: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'Bad',
  });
  return Bad;
};