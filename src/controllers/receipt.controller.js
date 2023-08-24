const { Receipt } = require('../models/receipt.model');

class ReceiptController {
  async createReceipt(req, res) {

    try {
      const newReceipt = await Receipt.create({
        date: null,
        total: 0,
      });

      res.json(newReceipt);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the receipt.' });
    }
  }

  async getReceipts(req, res) {
    try {
      const receipts = await Receipt.findAll({
        order: [['id', 'ASC']]
      });
      res.json(receipts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching receipts.' });
    }
  }

  async updateLastReceiptTotal(req, res) {
    const { receipt_id, total } = req.body;
    try {
      const receiptToUpdate = await Receipt.findByPk(receipt_id);

      if (receiptToUpdate) {
        await receiptToUpdate.update({ total });
        res.json({ message: 'Receipt total of the last receipt updated successfully.' });
      } else {
        res.status(404).json({ error: 'No receipts found.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while updating receipt total.' });
    }
  }

  async deleteReceipt(req, res) {
    const id = req.params.id;

    try {
      await Receipt.destroy({
        where: { id },
      });

      res.json({ message: 'Receipt and associated records deleted successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while deleting receipt and associated records.' });
    }
  }
}

module.exports = new ReceiptController();
