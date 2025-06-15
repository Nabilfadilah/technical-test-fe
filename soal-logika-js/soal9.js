// Soal 9: Konversi Detik ke Jam:Menit:Detik

function konversiWaktu(detik) {
  const jam = Math.floor(detik / 3600);
  const menit = Math.floor((detik % 3600) / 60);
  const sisa = detik % 60;
  return `${jam}:${menit}:${sisa}`;
}
console.log(konversiWaktu(3665)); // 1:1:5
