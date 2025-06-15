// Soal 22: Cek Pangkat 2

function isPowerOfTwo(n) {
  return (n & (n - 1)) === 0 && n !== 0;
}
console.log(isPowerOfTwo(8)); // true
