const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const {Product} = require('./product.model');

const ProductInReceipt = sequelize.define('productInReceipt', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
  },
}, {
  tableName: 'product_in_receipt',
  timestamps: false,
});

ProductInReceipt.belongsTo(Product, {
  foreignKey: 'product_id',
});


module.exports = { ProductInReceipt };
