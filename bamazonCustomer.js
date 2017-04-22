var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // username
  user: "root",
  // password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
});

connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;
  console.log(res);
});
