// sort in asc
 let numbers = [2, 3, 44, 22, 5];
  numbers.sort((a, b) => a - b);
     console.log(numbers);
// sort in dec
    // let numbers = [2, 3, 44, 22, 5];
    numbers.sort((a, b) => b - a);
    console.log(numbers);

    //sort arry based on length of the string

    const  arr = ['apples', 'ball', 'cats', 'doggis', 'cell'];
    const asc = arr.sort((a, b) => a.length - b.length);
      console.log(asc);
