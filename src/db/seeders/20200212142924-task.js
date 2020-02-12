'use strict';

const moment = require('moment');

function generateTasks (users){
  const tasks = [];
  users.forEach( (user, index) => {
    const tasksCount = Math.round(Math.random() * 10);
    for (let j = 0; j < tasksCount; j++) {
      tasks.push( {
                    userId: users[index].id,
                    value: `UserID${users[index].id} task value #${j + 1}`,
                    isDone: Math.random() > 0.5,
                    deadline: moment().set( 'date', 7 + j ).toDate(),
                    createdAt: new Date(),
                    updatedAt: new Date()
                  } );
    }
  });
  return tasks;
}

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.sequelize.query( `SELECT id FROM "Users"` )
                         .then( data => {
      return queryInterface.bulkInsert('Tasks', generateTasks(data[0]), {});
    })
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Tasks', null, {});
  }
};
