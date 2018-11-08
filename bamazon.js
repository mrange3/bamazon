var mysql = require('mysql');
var inquirer = require('inquirer');

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Your password
    password: '',
    database: 'bamazon_DB'
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

// function which prompts the user for what action they should take
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
                console.log(answer.itemID);
                var index = parseInt(answer.itemID) - 1
                if (results[index]) {
                    console.log(results[index].product_name)
                    var quantity = parseInt(answer.quantity)
                    var stock = parseInt(results[index].stock_quantity)
                    if (stock>=quantity) {
                        console.log(`We had ${stock} and now we have ${stock-quantity}!`)
                    } else {
                        console.log("Not enough in stock!")
                    }

                } else {
                    console.log("That is not a valid index number")
                }
                start();
            });
    });
}
