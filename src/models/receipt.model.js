const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const {ProductInReceipt} = require('./productInReceipt.model');

const Receipt = sequelize.define('receipt', {
  number: {
    type: DataTypes.INTEGER,
    defaultValue: sequelize.literal('nextval(\'receipt_number_seq\')'),
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
  defaultScope: {
    order: [['id', 'ASC']],
  },
});

Receipt.hasMany(ProductInReceipt, {
  foreignKey: 'receipt_id',
});

module.exports = {Receipt};
