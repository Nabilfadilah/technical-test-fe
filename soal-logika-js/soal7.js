// Soal 7: Jumlah Semua Angka dalam Array

function total(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}
console.log(total([1,2,3])); // 6
