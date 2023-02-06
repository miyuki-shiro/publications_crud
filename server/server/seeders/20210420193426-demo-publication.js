'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Publications', [{
      name: 'Primer post',
      description: 'Descripción de prueba',
      createdAt: '2021-04-20T00:31:18.304Z',
      updatedAt: '2021-04-20T00:31:18.304Z'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Publications', null, {});
  }
};
