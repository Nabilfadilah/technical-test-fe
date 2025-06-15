// Soal 13: Hitung Karakter

function hitungKarakter(str) {
  const map = {};
  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }
  return map;
}
console.log(hitungKarakter("haalo")); 
// { h: 1, a: 1, l: 1, o: 1 }
