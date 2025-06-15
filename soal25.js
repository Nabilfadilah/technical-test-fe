// Soal 25: Konversi Currency
// Soal:
// Buat fungsi JS yang mengubah angka 10000 menjadi "Rp10.000".

function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(number);
}

console.log(formatRupiah(10000)); // Rp10.000
