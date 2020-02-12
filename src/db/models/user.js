'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING(64),
    lastName: DataTypes.STRING(64),
    login: DataTypes.STRING(64),
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'passwordHash',
      set (value) {
        this.setDataValue('password', bcrypt.hashSync(value, 10));
      },
    },
    email: DataTypes.STRING(64),
    profilePicture: {
      type: DataTypes.STRING(64),
      unique: true
    },
  }, {
                                  timestamps: true
                                });
  User.associate = function (models) {
    User.hasMany(models.Task, {
      foreignKey: 'userId'
    });
  };
  return User;
};