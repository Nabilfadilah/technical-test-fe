// Soal 8: Hitung Huruf Vokal

function hitungVokal(str) {
  return (str.match(/[aiueo]/gi) || []).length;
}
console.log(hitungVokal("halo dunia")); // 5
