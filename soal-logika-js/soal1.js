// Soal 1: Ganjil atau Genap
// Buat fungsi yang menerima angka dan mengembalikan apakah itu ganjil atau genap.

function cekGanjilGenap(angka) {
  return angka % 2 === 0 ? "Genap" : "Ganjil";
}
console.log(cekGanjilGenap(5)); // Ganjil
