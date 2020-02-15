'use strict';

function generateUserRoles (users){
  const userRoles = [];
  users.forEach( (user, index) => {
    const userRolesCount = ( Math.round(Math.random() * 10) % 3 ) + 1;
    for (let j = 0; j < userRolesCount; j++) {
      if (j === 0) {
        userRoles.push( {
          userId: users[index].id,
          roleId: j + 1,
          createdAt: new Date(),
          updatedAt: new Date()
        } );
      } else if ( Math.round((Math.random() * 10) % 2) === 0){
        userRoles.push( {
          userId: users[index].id,
          roleId: j + 1,
          createdAt: new Date(),
          updatedAt: new Date()
        } );
      }
    }
  });
  return userRoles;
}


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query( `SELECT "Users".id FROM "Users"` )
        .then( data => {
          return queryInterface.bulkInsert('UserRoles', generateUserRoles(data[0]), {});
        })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserRoles', null, {});

  }
};
