const Router = require('express');
const router = new Router();
const ReceiptController = require('../controllers/receipt.controller');

router.get('/receipt', ReceiptController.getReceipts);
router.post('/receipt', ReceiptController.createReceipt);
router.patch('/receipt', ReceiptController.updateLastReceiptTotal);
router.delete('/receipt/:id', ReceiptController.deleteReceipt);

module.exports = router;