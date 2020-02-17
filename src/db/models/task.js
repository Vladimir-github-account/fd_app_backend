'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    value: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      }
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    files: DataTypes.ARRAY( DataTypes.STRING )
  }, {
    timestamps: true
  });
  Task.associate = function (models) {
    Task.belongsTo(models.User, {
      targetKey: 'id',
      foreignKey: 'userId'
    });
  };
  return Task;
};