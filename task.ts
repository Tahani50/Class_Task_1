// Task 1: Implement a Utility Function
function capitalizeWords(str: string):
string {
  if (str === "") {
    return 'This string is empty.';
  } else{
    return str.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }
}
console.log("Task 1: ---------------");
console.log(capitalizeWords(""));
console.log(capitalizeWords("capitalize words"));


// Task 2: Number Validator Function
function isValidNumber(value: unknown):
boolean{
     return typeof value === 'number' && !isNaN(value);
}
console.log("Task 2: ---------------");
console.log(isValidNumber(24));
console.log(isValidNumber("24"));


// Task 3: Create a User System
interface User {
     id: number;
     name: string;
     email: string;
     isAdmin?: boolean; // Optional property
   }

   function createUser(user: User) {
     console.log(`User ${user.name} created successfully.`);
   }
  
   const username: User = {id: 3, name: "Tahani", email: "ex@gmail.com"};
   console.log("Task 3: ---------------");
   createUser(username);


   // Task 4: Implement a Product Class
   class Product{
     public name: string;
     private price: number;
     public category: string;

     constructor(name: string, price: number, category: string){
         this.name = name;
         this.price = price;
         this.category = category;
     }
     
     public getDiscountedPrice(discount: number) : number{ 
         return this.price - (this.price * discount) / 100;
     }
   }
   const product = new Product("Lipsticks", 30, "Makeup");
   console.log("Task 4: ---------------");
   console.log(product.getDiscountedPrice(10));


// Task 5: Implement a Generic Function 
function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
     return array.filter(predicate);
   }
   const oddNums = filterArray([1, 2, 3, 4, 5, 6], (num) => num % 2 === 1);
   console.log("Task 5: ---------------");
   console.log(oddNums);
  

   // Task 6: Fetch & Display Users
   async function fetchUsers(): Promise<User[]> {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data =>
        data.map((user: any) => ({
          id: user.id,
          name: user.name,
          email: user.email,
        }))
      );
  }
  
  fetchUsers().then(usersData => {
    console.log("Task 6: ---------------");
    console.log("Fetched Users:", usersData);
  });
  