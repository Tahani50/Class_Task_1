// Task 1: Implement a Utility Function
function capitalizeWords(str) {
    if (str === "") {
        return 'This string is empty.';
    }
    else {
        return str.split(' ')
            .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(' ');
    }
}
console.log("Task 1: ---------------");
console.log(capitalizeWords(""));
console.log(capitalizeWords("capitalize words"));
// Task 2: Number Validator Function
function isValidNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
console.log("Task 2: ---------------");
console.log(isValidNumber(24));
console.log(isValidNumber("24"));
function createUser(user) {
    console.log("User ".concat(user.name, " created successfully."));
}
var username = { id: 3, name: "Tahani", email: "ex@gmail.com" };
console.log("Task 3: ---------------");
createUser(username);
// Task 4: Implement a Product Class
var Product = /** @class */ (function () {
    function Product(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    Product.prototype.getDiscountedPrice = function (discount) {
        return this.price - (this.price * discount) / 100;
    };
    return Product;
}());
var product = new Product("Lipsticks", 30, "Makeup");
console.log("Task 4: ---------------");
console.log(product.getDiscountedPrice(10));
// Task 5: Implement a Generic Function 
function filterArray(array, predicate) {
    return array.filter(predicate);
}
var oddNums = filterArray([1, 2, 3, 4, 5, 6], function (num) { return num % 2 === 1; });
console.log("Task 5: ---------------");
console.log(oddNums);
// Task 6: Fetch & Display Users
function fetchUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        return data.map(function (user) { return ({
            id: user.id,
            name: user.name,
            email: user.email,
        }); });
    });
}
fetchUsers().then(function (usersData) {
    console.log("Task 6: ---------------");
    console.log("Fetched Users:", usersData);
});
