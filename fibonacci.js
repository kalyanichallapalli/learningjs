function addfibonacci(num) {
  let a = 0, b = 1, c;
  for (let i = 1; i <= num; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}
}
addfibonacci(10);
