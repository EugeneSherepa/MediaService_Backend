const Router = require('express');
const router = new Router();
const ProdInReceiptController = require('../controllers/product_in_receipt.controller');

router.post('/prodreceipt', ProdInReceiptController.addProductToReceipt);
router.get('/prodreceipt', ProdInReceiptController.getProductInReceipt);
router.patch('/prodreceipt', ProdInReceiptController.updateProductQuantity);
router.delete('/prodreceipt/:id', ProdInReceiptController.deleteProduct);
router.post('/prodreceiptall', ProdInReceiptController.closeReceipt);

module.exports = router;
