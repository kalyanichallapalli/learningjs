function count_bits(x) {

	let binary = x.toString(2).split(""); // toString() it will convert to binary ,split("") coverts to array 
  let total=0;
  for(i=0;i<binary.length;i++) {
  	total += parseInt(binary[i]); // parseInt coverts to intiger vaue from the resultent binary
  }
  return total;
}
console.log(count_bits(7));



function count_bits(x){
    let count = 0;
   
   while(x > 0){
    
        if ( x % 2 == 1 ){
            
            count = count+1; 
        
        }
        
        x = Math.floor(x / 2);
    }
       return count;
  
}

console.log(count_bits(7))


 
   
    