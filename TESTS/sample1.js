/* Write a program to find a unique character in a string.(non repeated characters)
Ex i/p = “hello” o/p = “heo” */ 

function string(string){

   const a = string.split('');
   var result = "";

for(var i = 0; i < a.length; i++)
{

if(a[i] === (a[i + 1])) {

    return;
}


else{


    result += a[i]; 

 return result;
}

}

}

console.log(string('hello'))