
CREATE DATABASE bamazon;

use bamazon;

CREATE TABLE products (
	id INTEGER(12) AUTO_INCREMENT NOT NUll,
	item_id integer(15),
	product_name varchar(25) NOT NULL,
	department_name varchar(25) NOT NULL,
	price float (4),
	stock_quantity integer(150),
    PRIMARY KEY (id)
);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (201, 'socks', 'clothing', 15.00, 45);
	
insert into products (item_id, product_name, department_name, price, stock_quantity)
values (210, 'shoes', 'clothing', 15.00, 55);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (234, 'skirt', 'clothing', 44.00, 35);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (100, 'cat food', 'pet supplies', 15.00, 35);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (101, 'dog food', 'pet supplies', 18.00, 78);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (105, 'bird food', 'pet supplies', 12.00, 73);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (408, 'i-phone charger', 'electronics', 20.00, 73);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (408, 'extension cord', 'electronics', 13.00, 7);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (419, 'usb drive', 'electronics', 15.00, 7);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (700, 'mixing bowls', 'household items', 17.00, 18);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (703, 'tall glasses', 'household items', 14.00, 47);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (705, 'mugs', 'household items', 10.00, 47);

SELECT*FROM bamazon.products;
