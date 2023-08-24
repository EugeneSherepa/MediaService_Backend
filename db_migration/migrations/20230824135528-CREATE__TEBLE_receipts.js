'use strict';

const TABLE_NAME = 'receipt';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      number: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      total: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0,
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable(TABLE_NAME);
  }
};
