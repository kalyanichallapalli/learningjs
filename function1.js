

//NESTED FUNCTIONS

function A() {
   console.log('here in A function') // this will execute becuse of A call 
   function B() {
    console.log('here in B function') // it wont execure because of no call for B
   }
    return " done";
  // B(); // if ypu call B here it will execute
}

//A();
let returnvale = A()
console.log(returnvale)
