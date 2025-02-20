// Task 1: Implement a Utility Function
function capitalizeWords(str: string):
string {
    if(str == ""){
        return "The String is empty";
    }else{
        return str.toUpperCase();
    }
}

// Task 2: Number Validator Function
function isValidNumber(value: unknown):
boolean{
    if(typeof value === "number"){
        return true;
    }
    else{
        return false;
    }
}

// Task 3: Create a User System
interface User {
    id: number,
    name: string,
    email: string,
    isAdmin?: boolean, // Optional property
  }

  const username: User = {id: 3, name: "Tahani", email: "ex@gmail.com"};

  function createUser(name: User) {
    console.log(`User ${name.name} created successfully`);
  }
  
  createUser(username);


  // Task 4: Implement a Product Class
  class Product{
    name: string;
    price: number;
    category: string;

    constructor(name: string, price: number, category: string){
        this.name = name;
        this.price = price;
        this.category = category;
    }
     
    getDiscountedPrice(discount: number){ 
        return this.price - discount;
    }
  }


  // Task 5: Implement a Generic Function 
  function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
    return array.filter(predicate);
  }
  
  // Task 6: Fetch & Display Users
  async function fetchEmployees(apiUrl: string): Promise<User[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
}



