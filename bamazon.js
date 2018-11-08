var mysql = require('mysql');
var inquirer = require('inquirer');

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bamazon_DB'
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    start();
});

// ===========Start Prompt=========================================
function start() {
    connection.query('SELECT * FROM products', function (err, results) {
        if (err) throw err;
        console.log(results);
        inquirer
            .prompt([
                {
                    name: 'itemID',
                    type: 'input',
                    message: 'What is the item ID of the instrument you would like to buy?'
                },
                {
                    name: 'quantity',
                    type: 'input',
                    message: 'How many would you like to buy?'
                }])
            .then(function (answer) {
                // console.log(answer.itemID);
                var index = parseInt(answer.itemID) - 1
                if (results[index]) {
                    console.log(results[index].product_name)
                    var quantity = parseInt(answer.quantity)
                    var stock = parseInt(results[index].stock_quantity)
                    if (stock>=quantity) {
// ==================Update Database==============================
                        connection.query(
                            'UPDATE products SET ? WHERE ?',
                            [
                              {
                                stock_quantity: (stock-quantity)
                              },
                              {
                                item_id: answer.itemID
                              }
                            ],
                            function(error) {
                              if (error) throw err;
                              var cost = results[index].price*quantity
                              console.log(`You want to purchase ${quantity} of the ${results[index].product_name}? That will be $${cost}.`)
                              console.log(`We had ${stock} and now we have ${stock-quantity}!`)

                            connection.query('SELECT * FROM products', function (err, results) {
                                if (err) throw err;
                                console.log(results[index]);
                            });

                            }
                          );
                    } else {
                        console.log("Not enough in stock!")
                    }

                } else {
                    console.log("That is not a valid ID number")
                }

            });
    });
}
