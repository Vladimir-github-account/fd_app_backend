'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName:  {
          type: DataTypes.STRING(64),
          allowNull: false,
        },
        lastName:  {
          type: DataTypes.STRING(64),
          allowNull: false,
        },
        login: {
          type: DataTypes.STRING(64),
          allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'passwordHash',
            set(value) {
                this.setDataValue('password', bcrypt.hashSync(value, 10));
            },
        },
        email: {
            type: DataTypes.STRING(64),
            unique: true,
            isEmail: true,
        },
        profilePicture: {
            type: DataTypes.STRING
        },
    }, {
        timestamps: true
    });
    User.associate = function (models) {
        User.hasMany(models.Task, {
            foreignKey: 'userId'
        });
        User.belongsToMany(models.Role,{
            foreignKey: 'roleId',
            through: 'UserRoles',
        })
    };
    return User;
};