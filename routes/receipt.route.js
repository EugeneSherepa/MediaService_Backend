const Router = require('express');
const router = new Router();
const ReceiptController = require('../controller/receipt.controller');

router.get('/receipt', ReceiptController.getReceipts);
router.post('/receipt', ReceiptController.createReceipt);
router.patch('/receipt', ReceiptController.updateLastReceiptTotalAnddate);
router.delete('/receipt/:id', ReceiptController.deleteReceipt);

module.exports = router;