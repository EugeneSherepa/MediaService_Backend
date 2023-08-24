# Backend of MediaService_Frontend

- `npm i` for installing node_modules
- `npm run dev` for development
- default URL: http://localhost:8080

Api url from host: [](https://media-service-api.onrender.com)

For migrating data to your local DB use **npm run db-init-all**

### Endpoints:
```
/api/product - returns all products
{
  "id": 1,
  "name": "Пельмені \"Домашні\" АЙС",
  "price": "82.00"
}

/api/receipt - returns of receipts 
{
  "id": "8649j2allpbqln4",
  "number": 1,
  "date": null, // updates to the {yy/mm/dd/hh/mm/ss} when the receipt is closed 
  "total": "43.00"
}

/api/prodreceipt - returns all of products in receipt
{
  "id": 1,
  "quantity": 2,
  "price": "164.00", 
  "product_id": 1,
  "receipt_id": "8649j2allpbqln4"
}


returns {
  rows: [
    Product[]
  ]
}
