 
 // A function is a block of code which is invoked or call in the program 
// There are different type of functions 
// 1.Regular functions
// 2.Recursive 
// 3.Higher order 
// 4.Call back
// 5.Currying function
// 6.IIFE
// 7.Arrow  function .... introduced in ES6

 function add(a,b) // function declaration // a nd b are parameters 
 {
    console.log(a+b)               //what we right with in the braces is function defination
 }
 
 add(2,7);   // to usse this function we are calling the function here // values passing are the arguments dinamically
 
 const add1 = (a,b) =>{ a+b;
     console.log(a+b)
    
 }
 
 add1(2,4)
 const mul = (a,b) =>{ // this is how we will declare and defining the Arrow function
  console.log(a*b)
 }
 mul(5,7);
 
 //add ---> result  multiple  with other number  by calling a function in a function
 
  function sum(marks){
  let totalsum = 0;
     for( i=0; i < marks.length; i++){
         totalsum = totalsum + marks[i];
     } 
     return totalsum;
 }
 
 let marks = [100,84,54,67,78,99]
 
 function averagemarks(marks) {
 
   let total = sum(marks);
 
 
   console.log(total)
 
   let average = total / marks.length;
   console.log(average)
 }
 
 averagemarks(marks) 
 
 //function squareroot of a number 


function squareroot(number){

console.log('FIRST METHOD OF SQUARE ROOT OF GIVEN NUMBER ')
   
    let x= Math.sqrt(number);
    let y = x * x;

    if (y == number){

        return x
    }
    else{
        return -1
  
}
}
// squareroot 2nd method

function sqrtroot(number){
    console.log('SECOND METHOD OF SQUARE ROOT OF GIVEN NUMBER ')
   
    for(let i = 0; i<= number; i++)
    {
        if ( i * i == number){
        return i
    }
}
        return -1
       
}

console.log(squareroot(4))
console.log(squareroot(3))
console.log(sqrtroot(144))

// print the next 10 numbers from the given number
function givennum(number){
   
   for(let i = 1; i <= 10;i++){
        console.log(number + i);
    }
     
}

givennum(30) 


