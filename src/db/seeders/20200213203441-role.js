'use strict';
import { ROLES } from '../../constants';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        name: ROLES.USER,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: ROLES.ADMIN,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: ROLES.MODERATOR,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});

  }
};
