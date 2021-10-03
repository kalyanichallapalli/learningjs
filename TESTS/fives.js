/* let x = 15, y = 5
z = x %= y;        // assign the value 1 to z (5 %= 2)
console.log('MOD',z);
 */


//* output: 5, 10,15,20,25,.........50


let num = 50


for (let i = 0; i <= 50; i++) {
    if (i%5 == 0){

        console.log(i);
    }
    
} 

console.log('--------first------------------------')

function funfive(fives) {

    for (let i = 1; i <= fives; i++) {
        if (i%5 == 0){
    
            console.log(i);
        }
      
    } 
 
    
}
funfive(50)




