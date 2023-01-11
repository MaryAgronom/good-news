'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Good, Bad}) {
      this.hasMany(Good, { foreignKey: 'userid' });
      this.hasMany(Bad, { foreignKey: 'userid' });
    }
    
  }
  User.init(
    {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'User',
  }
  );
  return User;
};