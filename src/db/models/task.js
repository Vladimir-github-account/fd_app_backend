'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    value: {
      type:DataTypes.STRING
    },
    deadline: {
      type:DataTypes.DATE
    },
    userId: {
      type: DataTypes.INTEGER
    },
    isDone: {
      type: DataTypes.BOOLEAN
    },
    files: DataTypes.ARRAY( DataTypes.STRING )
  }, {});
  Task.associate = function (models) {
    Task.belongsTo(models.User, {
      targetKey: 'id',
      foreignKey: 'userId'
    });
  };
  return Task;
};