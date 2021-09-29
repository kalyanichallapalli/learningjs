

// STRING DECLARATION AND ASSIGNMENT AND FINDING THE LENGTH OF THE STRING
let name = "KALYANI CHALLAPALLI";
console.log(name);
console.log(name.length);

newname = name.split(",") ;
console.log(newname);

//********************JavaScript String Methods***************************** */
//*Extracting String Parts
/* There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length) */

//The slice() Method**********//

//slice() extracts a part of a string and returns the extracted part in a new string.

let str1 = "Apple, Banana, Kiwi";
let newstr1 = str1.slice(7);     // Returns Banana
console.log(newstr1)

//The substring() Method*******//
let str2 = "Apple, Banana, Kiwi";
let newstr2 = str2.substring(7, 13);     // Returns Banana
console.log(newstr2)

//The substr() Method********* second perameter specifes length of the part after the first parameter 

let str = "Apple, Banana, Kiwi";
let newstr = str.substring(0, 5);     // Returns Banana
console.log(newstr)

//Replacing String Content
//The replace() method replaces a specified value with another value in a string:

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools"); // replace only first  string  with the name microsoft
console.log(newText)

//To replace all matches, use a regular expression with a /g flag (global match)://

let text1 = "Please visit Microsoft and Microsoft!";
let newText1 = text1.replace(/Microsoft/g, "W3Schools");
console.log(newText1)

//Converting to Upper and Lower Case    
let txt1 = "Hello World!";       // String
let txt2 = txt1.toUpperCase();  // text2 is text1 converted to upper
let tx1 = "HAPPY BIRTHDAY";       // String
let tx2 = tx1.toLowerCase();  // text2 is text1 converted to lower
console.log(tx2)


//The concat() Method: joins two or more strings:
let first = "JAVASCRIPT";
let second = "World";
let third = first.concat(" ", second);
console.log(third)

//String.trim()
//The trim() method removes whitespace from both sides of a string:

let stri1 = "       Hello World!        "

console.log(stri1.trim())

//The charAt() Method
//The charAt() method returns the character at a specified index (position) in a string:

let a = "HELLO WORLD";
b = a.charAt(0)           // Returns H
console.log(b)