
 // in given array even  and odd numbers seperation 
 
 let arr = [3,6,9,10,16,15,13,1,200,18];
 
for (let i = 0; i < arr.length; i++) {
       if (arr[i]%2 == 0){
       
          console.log(arr[i]);
       }
     }
     console.log('ODD NUMBERS.................')
for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 != 0){
            console.log(arr[i]);

    
        }
      }


 const cars = ["bmw","tesla","volvo"];

 text = "";

 text += "TOTAL CARS BRANDS ARE:" + cars;

 console.log(text);
//Accessing Array Elements
 const car = ["Saab", "Volvo", "BMW"];
let x = car[0];    // x = "Saab"
console.log(x)

const cars1 = ["Saab", "Volvo", "BMW"];
cars1[0] = "Opel"; // saab is replaced ny opel
console.log(cars1)


//Arrays are Objects array is also one typr of objects
//Array: declaration
//In JavaScript, arrays use numbered indexes.  
const person = ["John", "Doe", 46];
//Arrays use numbers to access its "elements". In this example, person[0] returns John:
console.log(person[0])
//Object: declaration 
//In JavaScript, objects use named indexes.
const person1 = {firstName:"John", lastName:"Doe", age:46};
//Objects use names to access its "members". In this example, person.firstName returns John:
console.log(person1.firstName)

//Array Properties and Methods
//The real strength of JavaScript arrays are the built-in array properties and methods:
//cars.length   // Returns the number of elements
//cars.sort()   // Sorts the array

// 1) The length Property
//The length property of an array returns the length of an array (the number of array elements).

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);   // Returns 4
console.log(fruits[0]);
console.log(fruits[fruits.length - 1])
//Adding Array Elements
console.log(fruits.push("Lemon"));  // Adds a new element (Lemon) to fruits
console.log(fruits)
console.log(typeof fruits);
console.log(Array.isArray(fruits)) 
console.log(fruits instanceof Array) 



     