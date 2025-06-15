// Soal 15: Panjang Kata Terpanjang

function kataTerpanjang(kalimat) {
  return kalimat.split(" ").reduce((a,b) => b.length > a.length ? b : a);
}
console.log(kataTerpanjang("Saya belajar JavaScript dasar")); // JavaScript
