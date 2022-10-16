
/*eslint-env browser*/

//Display Menu in Console
function displayMenu() {
    "use strict";
    window.console.log("Welcome to The Product Inventory Management Application\n\n");
    window.console.log("Command Menu");
    window.console.log("view - View all products");
    window.console.log("update - Update an existing product's inventory");
    window.console.log("exit - Exit the Program");
    window.console.log("");
}


//Display the Inventory
function display(inventory) {
    "use strict";
    inventory.sort();
    window.console.log("DISPLAYING THE INVENTORY");
    inventory.forEach(function (product) {
        window.console.log(product[0] + " " + product[1] + " (" + product[2] + ") $" + product[3] );
    });
}


//Update the Inventory
function update(inventory) {
    "use strict";
    var isProdFound = false;
    var skuNumber = window.prompt("Enter a SKU Number: ");
    var newQuantity = window.prompt("Enter the new quantity: ");

    if( isNaN(skuNumber) || isNaN(newQuantity)) {
        window.console.log("Invalid SKU Number or Quantity");
    }

    else{
        inventory.forEach(function (product) {
            if (product[0] == skuNumber){
                isProdFound = true;
                product[2] = newQuantity;
                window.console.log("Product " + product[0] + " was updated to a new quantity " + product[2]);
            }
        });

        if(isProdFound === false){
            window.console.log("Given product is not in the inventory!")
        }
    }
}



//Main Function
function main() {
    "use strict";
    var userChoice;
    var inventory = [   [ 4824, "Shirt", 10, 15.99],
                        [ 6343, "Jeans", 22, 39.99],
                        [ 3223, "Socks", 36, 9.99],
                        [ 2233, "Hat", 12, 14.99],
                        [ 9382, "Jacket", 5, 49.99]
                    ]
    displayMenu();
    while(true) {
        userChoice = window.prompt("Choose a command: ");
        if(userChoice === "view") {
            display(inventory);
        }
        else if(userChoice === "update") {
            update(inventory);
        }
        else if(userChoice === "exit") {
            break;
        }
        else{
            window.alert("Invalid Command!");
        }
    }
    window.alert("Program Terminated!");
}

main();

