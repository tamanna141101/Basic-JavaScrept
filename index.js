// ============= udget Calculator Start ============= //
function budgetCalculator(computer, watch, coffee) {
    if (typeof computer == 'number' && typeof watch == 'number' && typeof coffee == 'number') // check valid data type
    {
        var computer_pp = 1000 * computer; // Multiply the  Product price by Product Quantity
        var watch_pp = 260 * watch; // Multiply the  Product price by Product Quantity
        var coffee_pp = 50 * coffee; // Multiply the of  Product price by Product Quantity

        var productPrice = computer_pp + watch_pp + coffee_pp; // Total Bill


        console.log("Hello Sir/Maam Your Total Bill is " + productPrice + " Thank You");
    }
    else {
        console.log(" Your product Qantity is Invalid .. Please Try Again")
    }

}
// Take input Value
budgetCalculator(1, 1, 1) // quantity of product

// ============= Budget Calculator End  ============== //


// ============= Search Product Start ============== //

//Product Details in Array
var products = [
    {
        id: 1,
        title: "laptop",
        price: 567,
        description: "Laptop Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
    },
    {
        id: 2,
        title: "Mobile",
        price: 367,
        description: "Mobile Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
    },
    {
        id: 3,
        title: "Watch",
        price: 180,
        description: "Watch Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
    },
    {
        id: 4,
        title: "Coffee",
        price: 40,
        description: "Coffee Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
    },

];

// search product by name

function findProduct(productName) {
    var found;
    for (var i = 0; i < products.length; i++) {
        if (products[i].title.toLocaleLowerCase() === productName.toLocaleLowerCase()) {
            found = products[i];
            break;
        }
        else {
            found = "Not Found"
        }
    }
    return found;
}

// Take input value
console.log(findProduct("watch"))


// ============= Search Product End  ============== //


// ============= Hidden Millionaire Calculator Start ============== //

function checkLeapYear(year) {


    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))  //three conditions to find out the leap year
    {
        var deposit = 366 * 10; // Multiply the total day of 1 year by daily money
        console.log("The Year is leap year so your total Deposit money is " + deposit);
    } else {
        var deposit = 365 * 10; // Multiply the total day of 1 year by daily money
        console.log("The Year is not leap year so your total Deposit money is " + deposit);
    }
}

// Take input vlue
checkLeapYear(2004);

// ============= Hidden Millionaire Calculator End ============== //



