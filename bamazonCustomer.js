var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // username
  user: "root",
  // password
  password: "1234@Amazon",
  database: "bamazon"
});

function listAll(){
  connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;
  
  var table = new Table({
      head: ['Item Id#', 'Product Name', 'Department','Price'],
  });

  for (var i = 0; i < res.length; i++) {
      table.push(
        [res[i].id, res[i].product_name, res[i].department_name, "$"+res[i].price]
      );
    }
  console.log(table.toString());
  buy();
}); 


var buy = function(){
//creates the questions that will be prompted to the user
  var productInfo = {
    properties: {
      itemID:{description: ('Please enter the ID # of the item you wish to purchase!')},
      Quantity:{description: ('How many items would you like to purchase?')}
     },
  }

  prompt.start();
  //gets the responses to the prompts above
  prompt.get(productInfo, function(err, res){

  //places these responses in the variable custPurchase
    var custPurchase = {
      itemID: res.itemID,
      Quantity: res.Quantity
    };
  //the variable established above is pushed to the productPurchased array defined at the top of the page
    productPurchased.push(custPurchase);
    

//connects to the mysql database and selects the item the user selected above based on the item id number entered
    connection.query('SELECT * FROM products WHERE id=?', productPurchased[0].itemID, function(err, res){
        if(err) console.log(err, 'That item ID doesn\'t exist');
        
//if the stock quantity available is less than the amount that the user wanted to purchase then the user will be alerted that the product is out of stock
        if(res[0].stock_quantity < productPurchased[0].Quantity){
          console.log('That product is out of stock!');
          connection.end();

//otherwise if the stock amount available is more than or equal to the amount being asked for then the purchase is continued and the user is alerted of what items are being purchased, how much one item is and what the total amount is
        } else if(res[0].stock_quantity >= productPurchased[0].Quantity){

          console.log('');
          console.log(productPurchased[0].Quantity + ' items purchased');
          console.log(res[0].product_name + ' $' + res[0].price);
          
          var saleTotal = res[0].price * productPurchased[0].Quantity;
          console.log('Total: $' + saleTotal);
          
          newQuantity = res[0].stock_quantity - productPurchased[0].Quantity;
          
          
// connects to the mysql database products and updates the stock quantity for the item puchased
          connection.query("UPDATE products SET stock_quantity = " + newQuantity +" WHERE id = " + productPurchased[0].itemID, function(err, res){
            if(err) throw err;

            console.log('');
            console.log('Your order has been processed.  Thank you for shopping with us!');
            console.log('');

            connection.end();
          })
        }
      })
    })
  }
}