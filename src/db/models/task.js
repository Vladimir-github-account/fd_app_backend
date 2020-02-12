'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    value: DataTypes.STRING,
    deadline: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    isDone: DataTypes.BOOLEAN,
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