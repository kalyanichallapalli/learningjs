

let x = 5;         // assign the value 5 to x
let y = 2;         // assign the value 2 to y

let z = x + y;     // assign the value 7 to z (5 + 2)
console.log('ADD',z);

z = x - y;        // assign the value 3 to z (5 - 2)
console.log('SUB',z);

z = x * y;        // assign the value 15 to z (5 * 2)
console.log('MUL',z);

g = x / y;        // assign the value 2.5 to z (5 / 2)
z =  Math.floor(x / y);  
h =  Math.ceil(x / y);  
console.log('--------------------------------');
console.log('DIV',g);
console.log('DIV',z);
console.log('DIV',h);
console.log('--------------------------------');

z = x %= y;        // assign the value 1 to z (5 %= 2)
console.log('MOD',z);

let a = 7, b = 7  // assign the value 0 to z (7 %= 7)
    c = a %= b;
   console.log(c);

z = x % y;  
console.log('MOD',z); // assign the value 1 to z (5 / 2)


x++;
z = x;
console.log(z); // increment one time to 6 

x--;
z = x;
console.log(z); // decrement one time to 5 becuase x already incremented 

z = x + y - 3; //When many operations have the same precedence (like addition and subtraction), they are computed from left to right:
console.log(z); 

x+=y;
console.log(x); 











