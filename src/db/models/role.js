'use strict';
import {ROLES} from '../../constants';

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: {
      type: DataTypes.ENUM( ...Object.values( ROLES ) ),
      allowNull: true,
      unique: true,
    }
  }, {
    timestamps: true
  });
  Role.associate = function(models) {
    Role.belongsToMany( models.User, {
      through: 'UserRoles',
      foreignKey: 'userId',
    } );
  };
  return Role;
};