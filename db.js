const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test_task', 'postgres', '123789ttqq', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;