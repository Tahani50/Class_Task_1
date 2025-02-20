function greet(name : string):
string {
return `Hi, ${name}!`;
}
console.log(greet("Tahani")); 


let message: string = "Hello, typeScript!";
let age: number = 25;
let isActive: boolean = true;

let data: any = 42;
let iput: unknown;
let user = "John";

let number: number[] = [1, 2, 3, 4,]; //arrays
let person: [string, number] = ["Tahani", 24]; //tuples

enum Role{admin, user, guest}; // enums
let myRole: Role = Role.admin;

//Function
function add(a: number, b:number): number{
    return a + b;
}
//Arrow Function
const multiply = (x: number, y: number): number => x *y;


//Structure
interface Car{
    brand: string;
    model: string;
    year: number;
}

const MyCar: Car ={
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
}
console.log(`${MyCar.brand} was made in ${MyCar.year}`);


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
  class Car2{
    brand: string;

    constructor(brand: string){
        this.brand = brand;
    }
     
    drive(){ //Obj class
        console.log(`My car brand is ${MyCar.brand}`);
    }
  }

  // generic
  function identity<T>(value: T): T {
    return value;
  }
  
  console.log(identity<string>("Hello")); // Output: "Hello"
  console.log(identity<number>(123)); // Output: 123