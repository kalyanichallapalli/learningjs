
/* JavaScript methods for searching strings:

String.indexOf()
String.lastIndexOf()
String.startsWith()
String.endsWith() */

const { CONNREFUSED } = require("dns");

//String.indexOf()
//The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:

let string = "kalyani challapalli reddy 'chenchu' ";
console.log(string.indexOf("chenchu"))  

let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate"))  


//String.lastIndexOf()
//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

let string1 = "kalyani challapalli reddy 'chenchu' ";
console.log(string1.lastIndexOf("chenchu"))  

let str1 = "Please locate where 'locate' occurs!";
console.log(str1.lastIndexOf("locate"))  

//Both indexOf(), and lastIndexOf() return -1 if the text is not found:

//String.match()
// The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.

let text = "The rain in SPAIN stays mainly in the plain"; 
console.log(text.match(/ain/g))    // Returns an array [ain,ain,ain]

//String.includes()
//The includes() method returns true if a string contains a specified value.

let string2 = "kalyani challapalli reddy chenchu"; 
console.log(string2.includes("nidhi"))  

let str2 = "Please locate where locate occurs!";
console.log(str2.includes("locate"))  

//String.startsWith()
//The startsWith() method returns true if a string begins with a specified value, otherwise false:

let x = "kalyani challapalli reddy chenchu"; 
console.log(x.startsWith("kalyani "))  

let y = "Please locate where locate occurs!";
console.log(y.startsWith("kalyani"))  

//String.endsWith()
//The endsWith() method returns true if a string ends with a specified value, otherwise false:
let x1 = "kalyani challapalli reddy chenchu"; 
console.log(x1.endsWith("chenchu"))  

let y1 = "Please locate where locate occurs!";
console.log(y1.endsWith("chenchu"))  

//Variable Substitutions
//Template literals allow variables in strings:
let firstName = "KALYANI";
let lastName = "CHALLAPALLI";

let texts = `Welcome ${firstName}, ${lastName}!`;

console.log(texts)


