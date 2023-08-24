const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Product = sequelize.define('product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
  },
}, {
  tableName: 'product',
  timestamps: false,
});

module.exports = {Product};
