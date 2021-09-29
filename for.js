
//**************** FOR LOOP***************************//
// EVEN NUMBERS

for (let i = 0; i < 20; i++) {
    if (i%2 == 0){
        console.log(i);
    }
    
  }

  //ODD NUMBERS
   //* console.log('break..............................................')

  for (let i = 0; i < 20; i++) {
    if (i%2 != 0){
        console.log(i);
    }
  } 

//
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let i = 2;
let len = cars.length;
let text = "";
for (let i = 0;i < len; i++) {
  text += cars[i] + "  ";
}
console.log(text)

//**************** FOR IN ***************************//

const person = {fname:"John", lname:"Doe", age:25};

let texts = "";
for (let x in person) {
  texts += person[x] + ' ';
}
console.log(texts)
//**************** For In Over Arrays ***************************//

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x] + ' ';
}
console.log(txt)
//**************** Array.forEach() ***************************//
const number = [45, 4, 9, 16, 25];

let txt1 = "";
number.forEach(myFunction);

function myFunction(value, index, array) {
  txt1 += value + ' ';;
}
console.log(txt1)

//**************** The For Of Loop ***************************//
const car = ["BMW", "Volvo", "Mini"];

let text2 = "";
for (let x of car) {
  text2 += x + " ";
}
console.log(text2)

//**************** Looping over a String ***************************//

let language = "JavaScript";

let text3 = "";
for (let x of language) {
text3 += x + "  ";
}
console.log(text3)






