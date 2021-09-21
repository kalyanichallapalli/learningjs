/* Write a program to calculate repetitions of a character in a string
 Ex- i/p - “hello” 
o/p  -  “h”- 1 
     “e”-1
    “l”-2
    “o”-1 */

/* let str = 'hello';
let count = 1;
let matchcount=1;
for(let i=0;i<=str.length-1;i++)
{
    
    for(j=i+1;j<=str.length-1;j++)
    {
       if(str[i]==str[j])
        {
                count=count+1;
                console.log(str[i],count);
                j++;
        }
        
    }
    console.log(str[i],matchcount);  
}

function countstring(String){

let count = 0;
let countplus = 0;
 for(let i=0; i <= (String.length-1); i++)
 {
    for(j=i+1; j<= (String.length-1); j++)
    {

        if (String[i] == String[j])
        {

            count = count + 1;
            console.log(String[i], count)

            j++
        }
    }
}
console.log(String[i], countplus);
}

console.log(countstring('hello')) */

function fun(str){
    str = str.toLowerCase();
    var myObject = {};
    for (let i = 0; i < str.length; i++) {
	let curr = str[i];
    	myObject[curr] = myObject[curr] ? myObject[curr] + 1 : myObject[curr] = 1;
    }
    for ( let i in myObject) {
console.log(`${i}  ${myObject[i]}`);
    }
}
  fun("hello");