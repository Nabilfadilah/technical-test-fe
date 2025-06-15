// Soal 18: Tukar Huruf Besar-Kecil

function tukarHuruf(str) {
  return str.split('').map(c =>
    c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
  ).join('');
}
console.log(tukarHuruf("HaLo")); // hAlO
