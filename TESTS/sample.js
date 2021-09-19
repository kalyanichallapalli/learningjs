//Write a program to reverse each word in a sentence.
 // Ex- i/p - “hello world”  o/p- “olleh emoclew”

function reverseString(string){
const myArr = string.split(" ");

const array1 = myArr.slice(0, 1)
const array2 = myArr.slice(1, 5)

var result1 = "";
var result2 = "";

for (var i = 0; i < array1.length; i++) 
    {
        result1 += array1[i].split('').reverse().join(''); 
    }



 for (var j = 0; j < array2.length; j++) 
    {
      

        result2 += array2[j].split('').reverse().join(''); 
    }


 return (result1+ " " +result2);

}

console.log(reverseString('hello welcome')); 
