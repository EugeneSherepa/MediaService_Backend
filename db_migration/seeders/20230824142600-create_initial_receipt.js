'use strict';
const uniqid = require('uniqid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('receipt', [{
      id: uniqid(),
      date: null,
      total: 0,
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('receipt', null, {});
  }
};
