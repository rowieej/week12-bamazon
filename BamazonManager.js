var inquirer = require('inquirer');
var mysql = require ('mysql');
var keys = require('./key');
var connection = mysql.createConnection({
  host: "localhost",
  port:  3306,
  user: keys.user,
  password: keys.password,
  database: "bamazon"

});


// List a set of menu options: 1) View Products for Sale 2) View Low Inventory 3) Add to Inventory 4) Add New Product

inquirer.prompt([

  {
     type: "list",
     name: "action",
     message: "What would you like to do",
     choices: [ "1) View Products for Sale", 
                "2) View Low Inventory",
                "3) Add to Inventory",
                "4) Add New Product"]
  }


]).then(function(answers){
// If a manager selectis option 1 it should list all of the products available for sale: the item IDs, names, prices, and quantities.
if(answers.action == "1) View Products for Sale"){
    searchByArtist();
  }
// If a manager selects option 2 it should list all items for which the quantity available in stores is less than 5.
  else if(answers.actions
   == "2) View Low Inventory"){
    multipleTopHits();
  }
// If a manager selects option 3 it should provide the manager with the ability to "add more" of any item currently in the store.
  else if(answers.action == "3) Add to Inventory"){
    searchByTitle();
  }
// If a manager selects option 4 it should provide the manager with the ability to add a completely new product to the store.
  else if(answers.action == "4) Add New Product"){
    searchByRange();
  }
});







