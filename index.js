function greet(name) {
    return "Hi, ".concat(name, "!");
}
console.log(greet("Tahani"));
var message = "Hello, typeScript!";
var age = 25;
var isActive = true;
var data = 42;
var iput;
var user = "John";
var number = [1, 2, 3, 4,]; //arrays
var person = ["Tahani", 24]; //tuples
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["user"] = 1] = "user";
    Role[Role["guest"] = 2] = "guest";
})(Role || (Role = {}));
; // enums
var myRole = Role.admin;
//Function
function add(a, b) {
    return a + b;
}
//Arrow Function
var multiply = function (x, y) { return x * y; };
var MyCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
};
console.log("".concat(MyCar.brand, " was made in ").concat(MyCar.year));
// interface User {
//     name: string;
//     age: number;
//     isAdmin?: boolean; // Optional property
//   }
//const username: User = { name: "Fatima", age: 30 };
//Using Interfaces in Functions
//   function printUser(username: User) {
//     console.log(`${username.name} is ${username.age} years old`);
//   }
//Call the function to display output
//printUser(username);
//classes
var Car2 = /** @class */ (function () {
    function Car2(brand) {
        this.brand = brand;
    }
    Car2.prototype.drive = function () {
        console.log("My car brand is ".concat(MyCar.brand));
    };
    return Car2;
}());
// generic
function identity(value) {
    return value;
}
console.log(identity("Hello")); // Output: "Hello"
console.log(identity(123)); // Output: 123
