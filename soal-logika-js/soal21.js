// Soal 21: Kalikan Semua Angka Array

function totalKali(arr) {
  return arr.reduce((a, b) => a * b, 1);
}
console.log(totalKali([2,3,4])); // 24
