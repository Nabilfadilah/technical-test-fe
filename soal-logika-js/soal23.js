// Soal 23: Gabungkan Dua Array Unik

function gabungUnik(a, b) {
  return [...new Set([...a, ...b])];
}
console.log(gabungUnik([1,2],[2,3])); // [1,2,3]
