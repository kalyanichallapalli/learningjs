//Array.forEach()
//The forEach() method calls a function (a callback function) once for each array element.

const numbers = [45, 4, 9, 16, 25];

text = ""   ;

numbers.forEach(myfunction)

//function myfunction(value, index, array) or 
function myfunction(value)
{
    text += value + " - ";
}
console.log(text)

//Array.map()
//Q:This example multiplies each array value by 2?
//The map() method does not change the original array.
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(function1);

//function myfunction(value, index, array) or
function function1(value) 
{
    return value * 2;
}

console.log(numbers2)


//Array.filter() and Array.every() both are same 

//he filter() method creates a new array with array elements that passes a test.
const number = [45, 4, 9, 16, 25];

const over18 = number.filter(functionfilt);

function functionfilt(value)
{
   return value > 18;
}

console.log(over18)

//Array.reduce()
//The reduce() method runs a function on each array element to produce (reduce it to) a single value.
const num = [45, 4, 9, 16, 25];
let sum = num.reduce(myreduceFunction)

function myreduceFunction(total, value)
{
     return total + value;  
        
}
  
console.log(sum)

//Array.some()
//The every() method check if all array values pass a test.

const number3= [45, 4, 9, 16, 25];

const over18a = number3.filter(functionfilt);

function functionfilt(value)
{
   return value > 18;
}

console.log(over18a)


/////Array.indexOf()///////////
//The indexOf() method searches an array for an element value and returns its position.

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple");///doubt
console.log(position)

//Array.lastIndexOf()
let position1 = fruits.lastIndexOf("Apple");// doubt
console.log(position1)

//Array.includes()
console.log(fruits.includes("kiwi")); //false

// /Array.find()

const numbers4 = [4, 9, 16, 25, 29];
let first = numbers4.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}


console.log(first)

//Array.findIndex()

const numbers5 = [4, 9, 16, 25, 29];
let firstindex = numbers5.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(firstindex)

//Array.from()
console.log(Array.from("ABCDEFG"));

//Array.Keys()
//The Array.keys() method returns an Array Iterator object with the keys of an array. ///doubt

const fruit = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruit.keys();

for (let x of keys) {
  text += x + "-";
}
console.log(keys)

