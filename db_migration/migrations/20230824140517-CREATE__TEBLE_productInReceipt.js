'use strict';

const TABLE_NAME = 'product_in_receipt';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      receipt_id : {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'receipt',
          },
          key: 'id'
        },
      },
      product_id : {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'product',
          },
          key: 'id'
        },
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable(TABLE_NAME);
  }
};
