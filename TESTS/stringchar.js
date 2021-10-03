
function strcount(string) {
    let count = 0;
    const myArr = string.split(" ");
    const newArr = myArr.sort(); 
  

for (i = 0; i <= newArr.length; i++){

   if (newArr[i] == newArr[i +1]) {
 
    count = count + 1;

      
}  

}
console.log(count)

}
strcount('happy new year happy birthday happy happy friday')
