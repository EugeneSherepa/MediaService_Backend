const { Product } = require('../models/product.model');

class ProductController {
  async createProduct(req, res) {
    const { name, price } = req.body;
    try {
      const newProduct = await Product.create({ name, price });
      res.json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the product.' });
    }
  }

  async getProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching products.' });
    }
  }

  async deleteProduct(req, res) {
    const id = req.params.id;
    try {
      const deletedProduct = await Product.destroy({
        where: { id }
      });
      res.json(deletedProduct, { message: 'Product deleted successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while deleting the product.' });
    }
  }
}

module.exports = new ProductController();
