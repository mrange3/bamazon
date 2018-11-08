DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DEC(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fender Stratocaster", "Guitar", 599.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gibson Les Paul", "Guitar", 899.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ibanez SR300E", "Bass", 349.99, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Music Man Stingray", "Bass", 1799.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fender Precision Bass", "Bass", 549.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gibson SG", "Guitar", 1499.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fender Telecaster", "Guitar", 499.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pearl Export", "Drums", 789.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ludvig Breakbeats", "Drums", 399.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mapex Saturn V", "Drums", 1249.99, 2);