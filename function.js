  //function squareroot(number) {

function squareroot(number){
   
    let x= Math.sqrt(number);
    let y = x * x;

    if (y == number){

        return x
    }
    else{
        return -1
    }
}

console.log(squareroot(4))
console.log(squareroot(3))

// print the next 10 numbers from the given number
function givennum(number){
   
   for(let i = 1; i <= 10;i++){
        console.log(number + i);
    }
     
}

givennum(30) 


