// add 1,2,3,4,---->10---1,0---->1 result
function addfunction(value){
    let sum = 0;
    while(value){
      
        sum += value % 10;

        value  = Math.floor(value  / 10);
        
    }
    
    if (sum < 10) {
        console.log(sum);
    } else {
        addfunction(sum)
    }
    
}
 
addfunction(1234);