//The forEach() method calls a function once for each element in an array,



//array.forEach(function(currentValue, index, arr), thisValue)
const names = ['kalyani', 'rasna', 'neelam', 'sasi'];
names.forEach((names)=> console.log(names.toUpperCase()))
console.log("for each")

//he map() method creates a new array with the results of calling a function for every array element.
//array.map(function(currentValue, index, arr), thisValue)

const newarr = names.map(i => i.toUpperCase());
console.log(newarr)
console.log("map method")

//The filter() method creates an array filled with all array elements that pass a test condition (provided by a function).

const newnames1 = names.filter((names => names.endsWith('i')))
console.log(newnames1)
console.log("filter method")

//The reduce() method executes a reducer function for each value of an array.

//const totalnames1 = names.reduce((prev, current) => ('${prev} --- ${current}'));
