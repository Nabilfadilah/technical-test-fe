// Soal 20: Generate Deret Fibonacci

function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }
  return arr;
}
console.log(fibonacci(6)); // [0,1,1,2,3,5]
