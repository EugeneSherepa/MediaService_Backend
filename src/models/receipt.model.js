const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const {ProductInReceipt} = require('./productInReceipt.model');

const Receipt = sequelize.define('receipt', {
  id: {
    primaryKey: true,
    type: DataTypes.STRING
  },
  number: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
}, {
  tableName: 'receipt',
  timestamps: false,
});

Receipt.hasMany(ProductInReceipt, {
  foreignKey: 'receipt_id',
});

module.exports = {Receipt};
