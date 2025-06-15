// Soal 5: Balik Kata
// Balikkan sebuah kata.

function balikKata(str) {
  return str.split('').reverse().join('');
}
console.log(balikKata("hello")); // "olleh"
