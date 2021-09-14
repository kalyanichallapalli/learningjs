//let length = 16;                               // Number data type
//let lastName = "Johnson";                      // String data type
//let x = {firstName:"John", lastName:"Doe"};    // Object data type

let a = 16 + 4 + "Volvo";
console.log(a)

let x;           // Now x is undefined
x = 5;           // Now x is a Number assigned 5
x = "John";      // Now x is a String 
console.log(x); // last assigened a string so its displaying a string

    x = 5;
let y = 5;
let z = 6;
if (x == y);{
    console.log(true)     // Returns true
}
console.log(x)
console.log(z)

if (x == z){
    console.log(true)     // Returns false
} else{
        console.log(false)
    
}
console.log('checkPalindrome inputString');

function palindrome(str) {
    for( var i = str.length; i >= 0; i-- )
    {
        if( str[i] = str.charAt(str.length)-1)
        {
            return true;
          //  console.log('the word is palindrome.');
        }else{
            console.log('the word is not palindrome!');
        }
       
    }   

  }
  palindrome("ABCDCBA");