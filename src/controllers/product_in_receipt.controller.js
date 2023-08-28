const { ProductInReceipt } = require('../models/productInReceipt.model');
const { Receipt } = require('../models/receipt.model');
const { Product } = require('../models/product.model');

class ProductInReceiptController {
  async addProductToReceipt(req, res) {
    const { id, receipt_id, price } = req.body;

    try {
      const latestReceipt = await Receipt.findOne({
        order: [['id', 'DESC']],
      });

      if (latestReceipt) {
        const newProduct = await ProductInReceipt.create({
          receipt_id: receipt_id,
          product_id: id,
          quantity: 1,
          price,
        });
        
        res.json(newProduct);
      } else {
        res.status(404).json({ error: 'No receipts found.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while adding the product to the receipt.' });
    }
  }

  async updateProductQuantity(req, res) {
    const { newQuantity, product_id } = req.body;

    try {
      if (newQuantity === null || newQuantity === undefined) {
        throw new Error('Invalid newQuantity value');
      }
    
      const productInReceipt = await ProductInReceipt.findOne({
        where: { product_id },
      });
    
      const product = await Product.findOne({
        where: { id: product_id },
      });
    
      if (productInReceipt) {
        const newPrice = product.price * newQuantity;
        await productInReceipt.update({ quantity: newQuantity, price: newPrice });
    
        if (newQuantity === 0) {
          await productInReceipt.destroy();
        }
    
        res.json({ message: 'Product quantity updated successfully.' });
      } else {
        res.status(404).json({ error: 'Product not found in receipt.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while updating product quantity.' });
    }
  }

  async getProductInReceipt(req, res) {
    const lastReceipt = await Receipt.findOne({
      where: { date: null}
    })

    try {
      const productsInReceipt = await ProductInReceipt.findAll({
        where: {receipt_id: lastReceipt.id}
      });
      res.json(productsInReceipt);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching products in receipt.' });
    }
  }

  async deleteProduct(req, res) {
    const { id } = req.body;

    try {
      const deletedProduct = await ProductInReceipt.destroy({
        where: { id: parseInt(id) },
      });

      if (deletedProduct) {
        res.json({ message: 'Product deleted from receipt.' });
      } else {
        res.status(404).json({ error: 'Product not found in receipt.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while deleting product from receipt.' });
    }
  }

  async closeReceipt(req, res) {
    try {
      const { receipt_id, total } = req.body;

      const receiptToUpdate = await Receipt.findByPk(receipt_id);
  
      if (receiptToUpdate && receiptToUpdate.date === null) {
        const closeDate = new Date();

        await receiptToUpdate.update({ date: closeDate, total: total });
        
        res.json({ message: 'Receipt total of the last receipt updated successfully. All products in receipt cleared successfully.' });
      } else {
        res.status(404).json({ error: 'No receipts found or the latest receipt already has a date.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while clearing products in receipt.' });
    }
  }
}

module.exports = new ProductInReceiptController();
