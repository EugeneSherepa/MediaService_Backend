const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/product.routes');
const receiptRouter = require('./routes/receipt.route');
const productInReceiptRouter = require('./routes/productInReceipt');

const PORT = process.env.PORT || 8080;

const createServer = () => {
  const app = express();
  app.use(cors());

  app.use(express.json());
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  app.use('/api', productRouter);
  app.use('/api', receiptRouter);
  app.use('/api', productInReceiptRouter);

  return app;
  };

  const server = createServer();

  server.listen(PORT, async () => {
  console.log(`Server started on port: ${PORT}`);
});
