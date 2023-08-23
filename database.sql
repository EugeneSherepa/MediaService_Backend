CREATE TABLE Product (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2)
);

CREATE SEQUENCE receipt_number_seq START 1;

CREATE TABLE Receipt (
  id SERIAL PRIMARY KEY,
  number INTEGER DEFAULT nextval('receipt_number_seq'),
  date DATE,
  total DECIMAL(10, 2) DEFAULT 0
);

CREATE TABLE Product_in_receipt (
  id SERIAL PRIMARY KEY,
  receipt_id INTEGER REFERENCES Receipt(id),
  product_id INTEGER REFERENCES Product(id),
  quantity INTEGER NOT NULL,
  price DECIMAL(10, 2)
);
