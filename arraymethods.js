//JavaScript Array Methods

//Converting Arrays to Strings

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
newfruits = fruits.toString();
console.log(newfruits)
//The join() method also joins all array elements into a string.
console.log(fruits.join(" , "))

//Popping
//The pop() method removes the last element from an array:
let z = fruits.pop();
console.log(z)

//Pushing
//The push() method adds a new element to an array (at the end):
const fruit = ["Banana", "Orange", "Apple", "Mango"];

let zw = fruit.push("Papaya", "Kiwi");
console.log(zw)
console.log(fruit)

//Shifting Elements
//Shifting is equivalent to popping, working on the first element instead of the last.

//The shift() method removes the first array element and "shifts" all other elements to a lower index.

const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit1.shift());   // Removes "Banana" from fruits
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
console.log(fruit1.unshift("lemon"));
console.log(fruit1)

//Splicing an Array

//The splice() method can be used to add new items to an array:
const fruit2 = ["Banana", "Orange", "Apple", "Mango"];
//fruit2.splice(2, 0, "Lemon", "Kiwi"); //this will add but wont delete
fruit2.splice(2, 2, "Lemon", "Kiwi"); // here add and delete last two 
fruit2.splice(0, 1); 
console.log(fruit2)

//Merging (Concatenating) Arrays

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

// Concatenate (join) myGirls and myBoys
const myChildren = myGirls.concat(myBoys);  
 
console.log(myChildren)

//Example (Merging an Array with Values)
const arr1 = ["Emil", "Tobias", "Linus"];
const myChild = arr1.concat("Peter"); 
console.log(myChild)


//Slicing an Array
///The slice() method slices out a piece of an array into a new array.

//This example slices out a part of an array starting from array element 1 ("Orange"):

const allfruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = allfruits.slice(1);
console.log(citrus)





