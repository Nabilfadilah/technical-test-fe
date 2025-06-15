// Soal 6: Array Manipulation
// Buat function yang menerima array angka dan mengembalikan array baru dengan angka genap saja.

function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

// Contoh
console.log(getEvenNumbers([1,2,3,4,5])); // [2,4]
