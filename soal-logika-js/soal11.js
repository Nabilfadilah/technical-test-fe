// Soal 11: Hapus Duplikat dalam Array

function unique(arr) {
  return [...new Set(arr)];
}
console.log(unique([1,1,2,3,2,4])); // [1,2,3,4]
