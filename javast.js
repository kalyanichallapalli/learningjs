
//scope : means availabe of the variable at that time 
//there are twontypes of blocks 1) block scope and 2) globel scope
//Block Scope: the variables decleared exits only with in the block. if you access out the block its wont display

// below is the example 
//(paranthesis)
//{braces}
//NUM is a variable
//LET is a key word used for declaration 
//LET NUM declaration 
//LET NUM = 5 initialization (we are declarating a num variable with initialization value  5)
//-----------------------------------------------------------------------------------------------
{
    console.groupCollapsed('Block Scope')
    let num = 8;
    const num1 = 9;
    console.log(num + num1)
    
}
//------------------------------------------------------------------------------------------------
// below statement will not display because its declared out side the bock.
//console.log(num + num1)
//===================================================================================================
//Globel Scope : declaration variable is used throughout the program.

{ 
 console.groupCollapsed('Globel Scope')
    var num2 = 9
}

console.log(num2)
//----------------------------------------------------
//Data types
//premitive data type: ALLA DATA STORED IN STACK
//NUMBER,STRING,BOOLEN,NULL,UNDEFINED,SYMBOL

//non pramative or referance data type(HEAP MEMEORY)
//FUNCTIONS,OBJECTS
//=====================================================
// CONDITIONAL STATEMENTS
// IF,ELSE,ELSE IF,
 {
    console.groupCollapsed('CONDITIONAL STATEMENTS')
     var num = 6;
     var num2 = 10;
      var  num3 = num + num2;
        
}
     if (num3 > 15) {
     console.log(num3);
    } 
    else {
    console.log(num3)
 } 
// TERNARY OPERATOR
    console.log('TERNARY OPERATOR') 
let num5 = 4;
  (num5<5)?console.log('pass'):console.log('fail')
//SWITH CASE
//ternary operTOR: A ternary operator will take three operands 
// 1) condition followed by ?
// 2) expression to execute if its TRUE 
// 3) FOLLOWED by colon : expression to execute if its FALSE.
// EX: CONDITION ? EXPRESSION1 : EXPRESSION2
// IF CONDITION IS TRUE EXPRESSION 1 WILL EXECUTE , FALSE EXPRESSION 2 WILL EXECUTE.

//SWITH CASE

// LOOPS: while, do while, for loop
  let num4 = 1;
  while( num4 < 11)
  {
       console.log(num4);
    num4++;
    console.log('while OPERATOR'); 
}
let num11 = 1;
do{

    console.log(num11);
    num11++ ;
    console.log('do while OPERATOR');
    
 } 
 while( num11 < 11)

 //FOR Loop (intitilazation,condition,ind?dec)

 /* for(let num6 = 1;num6>10;num++){
    console.log(num6);
 }
  */
    
