//Sorting Arrays
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());        // Sorts the elements of fruits

//Reversing an Array
console.log(fruits.reverse());    

//Numeric Sort
//The Compare Function
//The purpose of the compare function is to define an alternative sort order.
//
//The compare function should return a negative, zero, or positive value, depending on the arguments:

//function(a, b){return a - b} -------> this is the compare function 

const points = [40, 100, 1, 5, 25, 10];

console.log(points.sort(function(a, b){return a - b}));//ASC
console.log(points[0])
console.log(points.length -1)
console.log(points.sort(function(a, b){return b - a}));//DSC
console.log(points[0])
console.log(points.length -1)

//Sorting an Array in Random Order

console.log(points.sort(function(a, b){return 0.5 - Math.random()}));


//The Fisher Yates Method As the above method is not accurate this Fisher yates method() is  used
//random array sort for acquarate result
for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = points[i]
    points[i] = points[j]
    points[j] = k
  }

  