// Soal 14: Jumlah Angka Ganjil Saja

function jumlahGanjil(arr) {
  return arr.filter(x => x % 2 === 1).reduce((a,b) => a + b, 0);
}
console.log(jumlahGanjil([1,2,3,4,5])); // 9
